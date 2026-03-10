// src/config/mailer.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com', // Explicitly declare the host
  port: 465,              // Use secure port
  secure: true,           // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  // Add this block to prevent handshake failures on cloud hosts
  tls: {
    rejectUnauthorized: false
  }
});

module.exports = transporter;