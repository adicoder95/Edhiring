
const Message = require('../models/room');
const User = require('../models/User');

// Send a message
exports.sendMessage = async (req, res, next) => {
    try {
        const message = await Message.create({
            sender: req.user.id,
            receiver: req.body.receiver,
            content: req.body.content
        });
        res.status(201).json({
            success: true,
            message
        });
    } catch (error) {
        next(error);
    }
};

exports.getMessages = async (req, res, next) => {
    try {
        const messages = await Message.find({ receiver: req.user.id }).sort({ timestamp: -1 });
        res.status(200).json({
            success: true,
            messages
        });
    } catch (error) {
        next(error);
    }
};

