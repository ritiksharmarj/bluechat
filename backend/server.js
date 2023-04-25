import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/database.js';
import userRoutes from './routes/userRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

const app = express();
dotenv.config();
connectDB(); // MongoDB connection

// Enable CORS for all routes
app.use(cors());

// To accept JSON data
app.use(express.json());

// respond with 'Wahoo' when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('Wahoo 🖐');
});

// Auth (Signup, Login)
app.use('/api/user', userRoutes);

//////////////////////////////
// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started 🖐`));
