import asyncHandler from 'express-async-handler';
import { User } from '../models/userModel.js';
import generateToken from '../config/generateToken.js';

/**
 * @description - Register new user (Signup)
 * @route - POST /api/user/signup
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

/**
 * @description - Auth the user (Login)
 * @route - POST /api/users/login
 * @access - Public
 */
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // 1. Check if user already exists in our database or not
  const user = await User.findOne({ email });

  // 2. If user exists and entered password matches the user's password with our database
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password.');
  }
});

/**
 * @description - Get or Search all users
 * @route - GET /api/user?search=
 * @access - Public
 */
export const allUsers = asyncHandler(async (req, res) => {
  // If there is any query, search the user with their name or email
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: 'i' } },
          { email: { $regex: req.query.search, $options: 'i' } },
        ],
      }
    : {};

  // Find all other users except the current user
  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});
