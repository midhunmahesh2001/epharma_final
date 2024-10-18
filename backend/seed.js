require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');
const User = require('./models/user.model'); // Import user model
const Product = require('./models/product.model'); // Import product model
const Order = require('./models/order.model'); // Import order model

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB for seeding'))
  .catch(err => console.error('Connection error:', err));

const sampleUsers = [
  { name: 'John Doe', email: 'jonyy@example.com', password: 'password123' },
  { name: 'Jane Doe', email: 'jayyy@example.com', password: 'password456' },
];

const sampleProducts = [
  { name: 'Aspirin', price: 100, description: 'Pain reliever' },
  { name: 'Ibuprofen', price: 200, description: 'Anti-inflammatory' },
];

async function insertUsers() {
  await User.insertMany(sampleUsers);
  console.log('Users inserted');
}

async function insertProducts() {
  await Product.insertMany(sampleProducts);
  console.log('Products inserted');
}

async function insertOrders() {
  const users = await User.find(); // Fetch users from the database
  const products = await Product.find(); // Fetch products from the database

  const orders = users.map((user, index) => ({
    userId: user._id,
    productId: products[index % products.length]._id, // Cycle through products
    quantity: 1,
  }));

  await Order.insertMany(orders);
  console.log('Orders inserted');
}

async function seedDatabase() {
  try {
    await insertUsers();
    await insertProducts();
    await insertOrders();
  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase();
