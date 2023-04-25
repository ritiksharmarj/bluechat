import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/database.js';
import userRoutes from './routes/userRoutes.js';

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

app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started 🖐`));
