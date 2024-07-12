
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const messageSchema = new mongoose.Schema({
    sender: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);
