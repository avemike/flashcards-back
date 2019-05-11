const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const flashcardsRoutes = require('./routes/flashcardsRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');

// db name is fiszki
mongoose.connect('mongodb://localhost/fiszki')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(cors());
app.use(express.json());
app.use('/api/flashcards', flashcardsRoutes)
app.use('/api/categories', categoriesRoutes)
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
