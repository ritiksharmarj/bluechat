import express from 'express';
const app = express();

// respond with 'Wahoo' when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('Wahoo 🖐');
});

app.listen(3000, console.log('Server running successfully.'));
