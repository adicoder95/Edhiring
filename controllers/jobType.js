const JobType = require('../models/jobType');
const User = require('../models/User');

// Create job type
exports.createJobType = async (req, res, next) => {
    console.log('Create JobType Endpoint Hit');
    try {
        const jobType = await JobType.create({
            jobTypeName: req.body.jobTypeName,
            user: req.user.id
        });
        res.status(201).json({
            success: true,
            jobType
        });
    } catch (error) {
        next(error);
    }
};

// Get all job types


exports.allJobsType = async (req, res, next) => {
    try {
        // Extract the search keyword from the request body and split it into words
        const keywords = req.body.keyword ? req.body.keyword.split(' ') : [];
        
        // Create a regular expression that matches any of the words
        const regex = keywords.length ? new RegExp(keywords.join('|'), 'i') : null;

        // Create the search query
        const query = regex ? { jobTypeName: { $regex: regex } } : {};

        // Find job types that match the keyword
        const jobTypes = await JobType.find(query);

        res.status(200).json({
            success: true,
            jobTypes
        });
    } catch (error) {
        next(error);
    }
};



// Update job type by id
exports.updateJobType = async (req, res, next) => {
    try {
        const jobType = await JobType.findByIdAndUpdate(req.params.type_id, req.body, { new: true });
        res.status(200).json({
            success: true,
            jobType
        });
    } catch (error) {
        next(error);
    }
};

// Delete job type by id
exports.deleteJobType = async (req, res, next) => {
    try {
        await JobType.findByIdAndDelete(req.params.type_id);
        res.status(200).json({
            success: true,
            message: 'Job type deleted'
        });
    } catch (error) {
        next(error);
    }
};
