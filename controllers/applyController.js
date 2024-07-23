const JobApplication = require('../models/jobApplicationModel');
const Job = require('../models/job');

let applicationCount = 0; // Initialize outside the function

exports.applyForJob = async (req, res, next) => {
    try {
        const { jobId } = req.body;
        const candidateId = req.user.id; // Assuming user ID is available in authentication middleware

        // Checking if candidate has already applied to this job
        const existingApplication = await JobApplication.findOne({ job: jobId, candidate: candidateId });
        if (existingApplication) {
            return res.status(400).json({ success: false, error: 'You have already applied to this job.' });
        }

        // Create new job application
        const newApplication = await JobApplication.create({
            job: jobId,
            candidate: candidateId
        });

        applicationCount++; // Increment the application count
        console.log(`Total applications: ${applicationCount}`);

        res.status(201).json({ success: true, data: newApplication });
    } catch (error) {
        next(error);
    }
};

exports.getAppliedJobs = async (req, res, next) => {
    try {
        const candidateId = req.user.id; // Assuming user ID is available in authentication middleware

        // Fetch job applications for the logged-in user
        const applications = await JobApplication.find({ candidate: candidateId }).populate('job');

        res.status(200).json({ success: true, data: applications });
    } catch (error) {
        next(error);
    }
};

exports.showJobs = async (req, res, next) => {
    try {
        const { keyword, location, jobType, title, salary } = req.body;

        // Create an empty query object
        let query = {};

        // If keyword is provided, create a regex to match any of the words in jobType or title
        if (keyword) {
            const keywords = keyword.split(' ');
            const regex = new RegExp(keywords.join('|'), 'i');
            query.$or = [
                { jobType: { $regex: regex } },
                { title: { $regex: regex } }
            ];
        }

        // Add location filter 
        if (location) {
            query.location = location;
        }

        // Add jobType filter 
        if (jobType) {
            query.jobType = jobType;
        }

        // Add title filter 
        if (title) {
            query.title = title;
        }
        //Add perticular salary filter
        if (salary) {
            query.salary = salary;
        }


        // Find jobs that match the query
        const jobs = await Job.find(query);

        res.status(200).json({
            success: true,
            jobs
        });
    } catch (error) {
        next(error);
    }
};