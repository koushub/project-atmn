require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db'); 

const subscribeRoutes = require('./src/routes/subscribe.routes');

// NEW: Import the cron job
const startDailyEmailJob = require('./src/jobs/dailyEmail.job');

const app = express();

// Connect to MongoDB
connectDB();

// NEW: Start the 6 AM background engine
startDailyEmailJob();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
}));
// Routes
app.use('/api/subscribe', subscribeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});