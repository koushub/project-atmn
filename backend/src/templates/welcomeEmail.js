// src/templates/welcomeEmail.js
const generateWelcomeEmail = (email, verseData) => {

  const baseUrl = process.env.BACKEND_URL || 'http://localhost:5000';

  // Format the Sanskrit text so the \n characters become HTML line breaks
  const formattedSanskrit = verseData.sanskrit.replace(/\n/g, '<br>');

  return `
    <div style="background-color: #fff7ed; padding: 40px 20px; font-family: Arial, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px 30px; border-radius: 12px; border: 1px solid #ffedd5; box-shadow: 0 10px 25px rgba(234, 88, 12, 0.1);">
        
        <div style="text-align: center; margin-bottom: 30px;">
          <div style="background-color: #ea580c; color: #ffffff; width: 40px; height: 40px; border-radius: 50%; line-height: 40px; font-size: 20px; font-family: Georgia, serif; margin: 0 auto 15px;">ॐ</div>
          <h2 style="font-family: Georgia, serif; font-size: 22px; color: #1f2937; margin: 0;">Daily Wisdom: Ashtavakra Gita ${verseData.reference}</h2>
          <p style="color: #6b7280; font-size: 14px; margin-top: 5px;">A moment of stillness for your day.</p>
        </div>

        <div style="text-align: center; margin-bottom: 30px;">
          <span style="display: inline-block; background-color: #ffedd5; color: #c2410c; padding: 4px 12px; border-radius: 20px; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px;">Sanskrit</span>
          <p style="font-family: Georgia, serif; font-size: 24px; color: #1f2937; line-height: 1.8; margin: 0;">
            ${formattedSanskrit}
          </p>
        </div>

        <div style="text-align: center; margin: 30px 0;">
          <div style="height: 3px; width: 40px; background-color: #fed7aa; margin: 0 auto; border-radius: 2px;"></div>
        </div>

        <div style="background-color: #fff7ed; padding: 25px; border-radius: 12px; border: 1px solid #ffedd5; margin-bottom: 25px;">
          <h4 style="margin: 0 0 10px 0; font-size: 11px; color: #ea580c; text-transform: uppercase; letter-spacing: 1px;">Hindi Translation</h4>
          <p style="font-family: Georgia, serif; font-size: 16px; color: #1f2937; line-height: 1.6; margin: 0;">
            ${verseData.hindi}
          </p>
        </div>

        <div style="padding: 0 10px;">
          <h4 style="margin: 0 0 10px 0; font-size: 11px; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px;">English Translation</h4>
          <p style="font-family: Georgia, serif; font-size: 16px; color: #4b5563; line-height: 1.6; font-style: italic; margin: 0;">
            "${verseData.english}"
          </p>
        </div>

      </div>
      
      <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 12px;">
        <p>Sent with devotion by Project Atmn.</p>
        <p>Subscribed as: ${email}</p>
      </div>
    </div>

    <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 12px;">
        <p>Sent with devotion by Project Atmn.</p>
        <p>Subscribed as: ${email}</p>
        
        <a href="${baseUrl}/api/subscribe/unsubscribe?email=${encodeURIComponent(email)}" 
           style="color: #ea580c; text-decoration: underline; margin-top: 10px; display: inline-block;">
           Unsubscribe safely
        </a>
      </div>
    </div>
  `;
};

module.exports = { generateWelcomeEmail };