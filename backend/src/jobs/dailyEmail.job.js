// src/jobs/dailyEmail.job.js
const cron = require('node-cron');
const Subscriber = require('../models/subscriber.model');
const { sendWelcomeEmail } = require('../services/email.service');
const { getVerse, getNextVerseKey } = require('../services/verse.service');

// '0 6 * * *' means "At minute 0 past hour 6 (6:00 AM) every day"
// Note: This runs on your server's timezone. You can specify a timezone if needed.
const startDailyEmailJob = () => {
  cron.schedule('0 6 * * *', async () => {
    console.log('⏰ Running daily 6 AM email job...');

    try {
      // 1. Find all users who are currently active
      const activeSubscribers = await Subscriber.find({ isActive: true });

      if (activeSubscribers.length === 0) {
        console.log('No active subscribers found.');
        return;
      }

      // 2. Loop through each subscriber and send their specific next verse
      for (let subscriber of activeSubscribers) {
        
        // Calculate the verse they should get TODAY
        // (If they just signed up yesterday, their currentVerse is '1.1'. 
        // We want to send them '1.2' today).
        const nextVerseKey = getNextVerseKey(subscriber.currentVerse);

        if (!nextVerseKey) {
          console.log(`User ${subscriber.email} has finished the book!`);
          // Optional: Send a "Congratulations on finishing" email here, then set isActive: false
          subscriber.isActive = false;
          await subscriber.save();
          continue; 
        }

        // Fetch the actual verse data (Sanskrit, Hindi, English)
        const verseData = getVerse(nextVerseKey);

        if (verseData) {
          // Send the email (Note: You might want to rename sendWelcomeEmail to sendDailyEmail later, but it works the same!)
          await sendWelcomeEmail(subscriber.email, verseData);
          
          // Update the database so tomorrow they get the next one
          subscriber.currentVerse = nextVerseKey;
          await subscriber.save();

          console.log(`Sent verse ${nextVerseKey} to ${subscriber.email}`);
        }
      }

      console.log('✅ Daily email job completed.');

    } catch (error) {
      console.error('❌ Error running daily email job:', error);
    }
  }, {
    scheduled: true,
    timezone: "Asia/Kolkata" // explicitly set to Indian Standard Time!
  });
};

module.exports = startDailyEmailJob;