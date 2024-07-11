const JobType = require('../models/jobType');

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
        const jobTypes = await JobType.find().populate('user', 'firstName lastName');
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
