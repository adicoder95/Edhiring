const user = require('../models/User')
const Job = require('../models/job');
const JobType = require('../models/jobType');
const Application = require('../models/jobApplicationModel');
const recordActivity = require('../services/activityService');

//create job
let jobCount = 0; // Initialize outside the function

exports.createJob = async (req, res, next) => {
    try {

        const job = await Job.create({
            title: req.body.title,
            description: req.body.description,
            salary: req.body.salary,
            location: req.body.location,
            jobType: req.body.jobType,
            user: req.user.id
        });

        jobCount++; // Increment the job count
        console.log(`Total jobs created: ${jobCount}`);

        // Update job to include application reference
        // job.applications.push(Application._id);
        await job.save();

        await recordActivity(req.user.id, 'JobCreated', `Successfully created job: ${job}`); //recent activity

        res.status(201).json({
            success: true,
            job
        });
    } catch (error) {
        next(error);
    }
};


// Fetch job details and increment views
exports.singleJob = async (req, res, next) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({
                success: false,
                message: 'Job not found'
            });
        }

        // Increment views
        job.views += 1;
        await job.save();

        res.status(200).json({
            success: true,
            job
        });
    } catch (error) {
        next(error);
    }
};


//update job by id.
exports.updateJob = async (req, res, next) => {
    try {
        const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });

        await recordActivity(req.user.id, 'JobUpdated', `Successfully Updated job: ${job}`); //recent activity

        res.status(200).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}



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


exports.getJobApplications = async (req, res) => {
  try {
    const { jobId } = req.body; // assuming job ID is available in req.body
    const employeeId = req.user.id; // assuming user ID is available in req.user

    // Debug logging
    console.log(`jobId: ${jobId}, employeeId: ${employeeId}`);

    // Verify that the job exists and is created by the logged-in employee
    const job = await Job.findOne({ _id: jobId, user: employeeId });
    if (!job) {
      return res.status(404).json({
        success: false,
        message: 'Job not found or not authorized',
      });
    }

    // Fetch applications for the specific job
    const applications = await Application.find({ job: jobId });

    res.status(200).json({
      success: true,
      applications,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error fetching job applications',
    });
  }
};

exports.updateApplicationStatus = async (req, res, next) => {
    try {
        const { applicationId, status } = req.body;
        const employer = await user.findById(req.user.id); 

        const application = await Application.findById(applicationId);
        if (!application) {
            return res.status(404).json({ success: false, message: 'Application not found' });
        }

        await application.updateStatus(status, employer.email, employer.emailPassword);
        await recordActivity(req.user.id, 'updatedApplicationStatus', `Successfully updated status for application: ${applicationId}`); //recent activity

        res.json({ success: true, message: 'Job application status updated and notification sent' });
    } catch (error) {
        console.error('Error updating application status: ', error.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

//deleting job
exports.deleteJob = async (req, res, next) => {
    try {
        const jobId = req.params.id;
        const userId = req.user.id;

        // Find the job by ID
        const job = await Job.findById(jobId);

        if (!job) {
            return res.status(404).json({
                success: false,
                message: 'Job not found'
            });
        }

        // Check if the job belongs to the user
        if (job.user.toString() !== userId) {
            return res.status(401).json({
                success: false,
                message: 'You are not authorized to delete this job'
            });
        }

        // Delete the job
        await Job.findByIdAndDelete(jobId);

        // Record activity
        await recordActivity(userId, 'JobDeleted', `Successfully deleted job: ${job.title}`);

        jobCount--;
        res.status(200).json({
            success: true,
            message: 'Job deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};