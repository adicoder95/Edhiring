const mongoose = require('mongoose');

const trackingEventSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    openedAt: {
        type: Date,
        default: Date.now
    }
});

const TrackingEvent = mongoose.model('TrackingEvent', trackingEventSchema);

module.exports = TrackingEvent;
