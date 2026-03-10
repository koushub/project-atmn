// src/config/db.js
const mongoose = require('mongoose');
const dns = require('dns'); // 1. Import the built-in Node.js DNS module

// 2. Force Node.js to use Google's public DNS servers
dns.setServers(['8.8.8.8', '8.8.4.4']);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;