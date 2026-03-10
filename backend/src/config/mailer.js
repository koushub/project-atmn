// src/config/mailer.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  // THIS IS THE MAGIC FIX FOR RENDER:
  tls: {
    rejectUnauthorized: false
  }
});

module.exports = transporter;