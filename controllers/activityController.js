const RecentActivity = require('../models/RecentActivity');

const getRecentActivities = async (req, res) => {
  try {
    const activities = await RecentActivity.find({ user: req.user.id }).sort({ timestamp: -1 });
    // console.log("user: "+user);
    console.log("recent activity: "+activities);

    res.status(200).json({ success: true, activities });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


const toggleStarActivity = async (req, res) => {
  try {
    const activity = await RecentActivity.findById(req.params.id);
    if (!activity || activity.user.toString() !== req.user.id) {
      return res.status(404).json({ success: false, message: 'Activity not found' });
    }
    activity.isStarred = !activity.isStarred;
    await activity.save();
    res.status(200).json({ success: true, message: 'Activity updated', activity });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


const getStarredActivities = async (req, res) => {
  try {
    const starredActivities = await RecentActivity.find({ user: req.user.id, isStarred: true });

    if (!starredActivities.length) {
      return res.status(404).json({ success: false, message: 'No starred activities found' });
    }

    res.status(200).json({ success: true, starredActivities });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getRecentActivities, toggleStarActivity, getStarredActivities };
