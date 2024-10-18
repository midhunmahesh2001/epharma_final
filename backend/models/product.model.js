const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  stock: Number, // Available quantity
});

module.exports = mongoose.model('Product', productSchema);
