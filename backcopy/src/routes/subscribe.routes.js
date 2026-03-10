// src/routes/subscribe.routes.js
const express = require('express');
const { handleSubscription, unsubscribe } = require('../controllers/subscribe.controller');

const router = express.Router();

// Existing POST route for subscribing
router.post('/', handleSubscription);

// NEW GET route for unsubscribing
router.get('/unsubscribe', unsubscribe);

module.exports = router;