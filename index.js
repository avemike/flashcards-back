const mongoose = require('mongoose');
const mCategory = require('./models/mCategory');
const mFlashcard = require('./models/mFlashcard');
const express = require('express');
const app = express();

// db name is fiszki
mongoose.connect('mongodb://localhost/fiszki')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
