
const mongoose = require('mongoose');
const jobType = require('./jobType');
const { ObjectId } = mongoose.Schema;


const jobSchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true,
        required: [true, 'Title is required'],
        maxlength: 70,
    },

    description: {
        type: String,
        trim: true,
        required: [true, 'Description is required'],
    },
    salary: {
        type: Number,
        trim: true,
        required: [true, 'Salary is required'],
    },
    location: {
        type: String,
    },
    available: {
        type: Boolean,
        default: true
    },
    jobType: {
        type: String,
        ref: "JobType",
        required: true
    },
    user: {
        type: ObjectId,
        ref: "User",
    },
    employer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
    },
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    starredBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" 
    }]
}, { timestamps: true })

module.exports = mongoose.model("Job", jobSchema);