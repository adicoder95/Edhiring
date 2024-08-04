const mongoose = require('mongoose');

const emailTrackingSchema = new mongoose.Schema({
    candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true,
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        // required: true,
    },
    emailOpened: {
        type: Boolean,
        default: false,
    },
    openedAt: {
        type: Date,
    },
});

const EmailTracking = mongoose.model('EmailTracking', emailTrackingSchema);

module.exports = EmailTracking;
