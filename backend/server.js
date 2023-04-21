import express from 'express';
import dotenv from 'dotenv';
import { chats } from './data/data.js';

const app = express();
dotenv.config();

// respond with 'Wahoo' when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('Wahoo 🖐');
});

// GET - respond with JSON dummy data of chats
app.get('/api/chat', (req, res) => {
  res.send(chats);
});

// GET - respond with user chat data for ID
app.get('/api/chat/:id', (req, res) => {
  // console.log(req.params.id);
  const privateChat = chats.find((chat) => chat._id === req.params.id);
  res.send(privateChat);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running successfully on ${PORT}`));
