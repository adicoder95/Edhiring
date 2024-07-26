const express = require('express');
const router = express.Router();
const { getRecentActivities, toggleStarActivity } = require('../controllers/activityController');
const { isAuthenticated } = require('../middlewares/auth');

router.get('/activities', isAuthenticated, getRecentActivities);
router.put('/activities/:id/star', isAuthenticated, toggleStarActivity);

module.exports = router;
