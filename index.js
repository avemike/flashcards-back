const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const flashcardsRoutes = require('./routes/flashcardsRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');
const users = require('./routes/users');
const auth = require('./routes/auth');

if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  //w terminalu: export fiszki_jwtPrivateKey=fiszki_jwtPrivateKey
  process.exit(1);
}

// db name is fiszki
mongoose.connect('mongodb://localhost/fiszki')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(cors());
app.use(express.json());
app.use('/api/flashcards', flashcardsRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/register', users);
app.use('/api/login', auth);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
