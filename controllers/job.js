const user = require('../models/User')
const Job = require('../models/job');
const JobType = require('../models/jobType');
const Application = require('../models/jobApplicationModel');

//create job
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

        // Update job to include application reference
        // job.applications.push(Application._id);
        await job.save();

        res.status(201).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}


//single job
exports.singleJob = async (req, res, next) => {
    try {
        const job = await Job.findById(req.params.id);
        res.status(200).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}


//update job by id.
exports.updateJob = async (req, res, next) => {
    try {
        const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
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

        const application = await Application.findById(applicationId);
        if (!application) {
            return res.status(404).json({ success: false, message: 'Job application not found' });
        }

        await application.updateStatus(status);

        res.status(200).json({ success: true, message: 'Job application status updated and notification sent' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error updating job application status' });
    }
};