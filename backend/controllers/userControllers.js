import asyncHandler from 'express-async-handler';
import { User } from '../models/userModel.js';
import generateToken from '../config/generateToken.js';

/**
 * @description - Register new user
 * @route - POST /api/user
 * @access - Public
 */
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, avatar } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please enter all the fields!');
  }

  // 1. Check if user already exists in our database or not
  const userExists = await User.findOne({ email });

  // 2. If the user's email already exists in our database throw new error
  if (userExists) {
    res.status(400);
    throw new Error('User already exists.');
  }

  // 3. Otherwise create new user
  const newUser = await User.create({
    name,
    email,
    password,
    avatar,
  });

  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      avatar: newUser.avatar,
      token: generateToken(newUser._id),
    });
  } else {
    res.status(400);
    throw new Error('Failed to create the user.');
  }
});
