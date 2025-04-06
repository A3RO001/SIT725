const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String
});

module.exports = mongoose.model('Card', cardSchema);
