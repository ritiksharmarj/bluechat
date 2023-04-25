import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// MongoDB Atlas connection string
const uri = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

const connectDB = async () => {
  try {
    const client = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('DB Connection Successful 🖐');
  } catch (error) {
    throw error;
  }
};

export default connectDB;
