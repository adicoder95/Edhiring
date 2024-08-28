
const express = require('express');
const router = express.Router();
const { sendMessage, getMessages, getSentMessages } = require('../controllers/message');
const { protect } = require('../middlewares/auth');

// Send a message to candidate
router.post('/message/send', protect, sendMessage);

// Get received messages 
router.get('/message/received',protect, getMessages);


module.exports = router;
