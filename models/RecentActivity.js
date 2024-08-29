const mongoose = require('mongoose');

const recentActivitySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    // required: true
  },
  activityType: {
    type: String,
    enum: ['AppliedforJobApplication', 'Profile','JobCreated', 'JobUpdated', 'JobDeleted', 'updatedApplicationStatus','Resume'],
    // required: true
  },
  description: {
    type: String,
    // required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  isStarred: {
    type: Boolean,
    default: false
  }
});

const RecentActivity = mongoose.model('RecentActivity', recentActivitySchema);
module.exports = RecentActivity;