const mongoose = require('mongoose');
const flashcardsRoutes = require('./routes/flashcardsRoutes');
const express = require('express');
const app = express();

// db name is fiszki
mongoose.connect('mongodb://localhost/fiszki')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/flashcards', flashcardsRoutes)
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
