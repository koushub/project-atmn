// src/models/subscriber.model.js
const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Prevents the same email from subscribing twice
    trim: true,
    lowercase: true,
  },
  currentVerse: {
    type: String,
    default: '1.1', // Everyone starts at chapter 1, verse 1
  },
  isActive: {
    type: Boolean,
    default: true, // If they unsubscribe later, we flip this to false
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Subscriber', subscriberSchema);