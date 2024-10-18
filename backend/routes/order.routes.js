const express = require('express');
const Order = require('../models/order.model');
const router = express.Router();

// Get all orders
router.get('/', async (req, res) => {
  const orders = await Order.find().populate('userId productId');
  res.json(orders);
});

// Place a new order
router.post('/', async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.status(201).json({ message: 'Order placed' });
});

module.exports = router;
