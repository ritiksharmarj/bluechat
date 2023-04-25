import jwt from 'jsonwebtoken'; // Helps us in authorization

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: '30d',
  });
};

export default generateToken;
