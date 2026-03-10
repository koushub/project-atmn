// src/controllers/subscribe.controller.js
const Subscriber = require('../models/subscriber.model');
const { sendWelcomeEmail } = require('../services/email.service');
const { getVerse } = require('../services/verse.service');

// 1. The Subscription Logic
// subscribe.controller.js
const handleSubscription = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  try {
    let existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      if (!existingSubscriber.isActive) {
        existingSubscriber.isActive = true;
        await existingSubscriber.save();
      } else {
        return res.status(400).json({ error: "You are already subscribed!" });
      }
    } else {
      const newSubscriber = new Subscriber({ email, currentVerse: '1.1' });
      await newSubscriber.save();
    }

    // ✅ Respond immediately — don't await the email
    res.status(200).json({ message: "Subscription successful!" });

    // Send email in background (fire and forget)
    const firstVerse = getVerse("1.1");
    sendWelcomeEmail(email, firstVerse).catch(err =>
      console.error("Welcome email failed:", err)
    );

  } catch (error) {
    console.error("Subscription error:", error);
    return res.status(500).json({ error: "Failed to process subscription." });
  }
};

// NEW: Unsubscribe Function
const unsubscribe = async (req, res) => {
  const { email } = req.query; // Get email from the URL (?email=user@gmail.com)

  if (!email) {
    return res.status(400).send("Email parameter is missing.");
  }

  try {
    const subscriber = await Subscriber.findOne({ email });
    
    if (subscriber) {
      subscriber.isActive = false; // Deactivate the user
      await subscriber.save();
      console.log(`User unsubscribed: ${email}`);
    }

    // Return a simple, clean HTML page confirming the action
    return res.status(200).send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Unsubscribed</title>
        <style>
          body { font-family: 'Georgia', serif; background-color: #fdfbf7; color: #1f2937; text-align: center; padding-top: 50px; }
          .container { max-width: 500px; margin: 0 auto; background: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid #ffedd5; }
          h2 { color: #ea580c; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Unsubscribed Successfully</h2>
          <p>You will no longer receive daily verses at <strong>${email}</strong>.</p>
          <p style="font-size: 14px; color: #6b7280; margin-top: 20px;">We wish you well on your journey.</p>
        </div>
      </body>
      </html>
    `);

  } catch (error) {
    console.error("Unsubscribe error:", error);
    return res.status(500).send("An error occurred. Please try again later.");
  }
};

// Make sure to export BOTH functions now
module.exports = { handleSubscription, unsubscribe };