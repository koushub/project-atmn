const transporter = require('../config/mailer');
const { generateWelcomeEmail } = require('../templates/welcomeEmail');

const sendWelcomeEmail = async (userEmail, verseData) => {
  const mailOptions = {
    from: `"Project Atmn" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: `✨ Welcome to Project Atmn! Ashtavakra Gita ${verseData.reference}`,
    html: generateWelcomeEmail(userEmail, verseData),
  };

  return await transporter.sendMail(mailOptions);
};

module.exports = { sendWelcomeEmail };