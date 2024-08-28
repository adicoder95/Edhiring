const RecentActivity = require('../models/RecentActivity');

const recordActivity = async (userId, activityType, description) => {
  try {
    const newActivity = new RecentActivity({
      user: userId,
      activityType,
      description
    });
    await newActivity.save();
  } catch (error) {
    console.error('Error recording activity:', error);
  }
};

module.exports = recordActivity;
