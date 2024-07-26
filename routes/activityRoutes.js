const express = require('express');
const router = express.Router();
const { getRecentActivities, toggleStarActivity, getStarredActivities } = require('../controllers/activityController');
const { isAuthenticated } = require('../middlewares/auth');

router.get('/activities', isAuthenticated, getRecentActivities);
router.put('/activities/:id/star', isAuthenticated, toggleStarActivity);
router.get('/activities/starred', isAuthenticated, getStarredActivities);

module.exports = router;
