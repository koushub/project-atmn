// src/services/email.service.js — replace entire file
const resend = require('../config/mailer');
const { generateWelcomeEmail } = require('../templates/welcomeEmail');

const sendWelcomeEmail = async (userEmail, verseData) => {
  return await resend.emails.send({
    from: 'Project Atmn <ashtavakra-geeta@project-atmn.in>',
    to: userEmail,
    subject: `✨ Welcome to Project Atmn! Ashtavakra Gita ${verseData.reference}`,
    html: generateWelcomeEmail(userEmail, verseData),
  });
};

module.exports = { sendWelcomeEmail };