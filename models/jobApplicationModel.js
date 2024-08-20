const mongoose = require('mongoose');
const mailSender = require('../utils/mailSender'); 
// const EmployerProfile = require("../models/employerProfile");

const jobApplicationSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    appliedAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Pending', 'Accepted', 'Rejected'],
        default: 'Pending'
    },
    EmployerProfile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EmployerProfile', // Reference to EmployerProfile
    },
});

// jobApplicationSchema.methods.updateStatus = async function(status) {
//     this.status = status;
//     await this.save();

//     const candidate = await this.populate('candidate');
//     const job = await this.populate('job');

//     if (status === 'Accepted') {
//         const email = candidate.candidate.email;
//         const title = `Your application for ${job.job.title}`;
//         const body = `<p>Dear ${candidate.candidate.firstName} ${candidate.candidate.lastName},</p>
//                       <p>We are pleased to inform you that your application for the position of ${job.job.title} has been accepted.</p>
//                       <p>Best regards,</p>
//                       <p>${job.job.user}</p>`;
//         const trackingUrl = `https://yourdomain.com/track?email=${email}&job=${job.job._id}`;
//         await mailSender(email, title, body, trackingUrl);
//     }
//     if (status === 'Rejected') {
//         const email = candidate.candidate.email;
//         const title = `Your application for ${job.job.title}`;
//         const body = `<p>Dear ${candidate.candidate.firstName} ${candidate.candidate.lastName},</p>
//                       <p>We are pleased to inform you that your application for the position of ${job.job.title} has been Rejected.
//                       Unfortunately we'll not moving forward with you.</p>
//                       <p>Best regards,</p>
//                       <p>${job.job.user}</p>`;
//         const trackingUrl = `https://google.com/track?email=${email}&job=${job.job._id}`;
//         await mailSender(email, title, body, trackingUrl);
//     }
// }

jobApplicationSchema.methods.updateStatus = async function(status) {
    this.status = status;
    await this.save();

    const candidate = await this.populate('candidate');
    const job = await this.populate('job');
    const EmployerProfile = await this.populate('EmployerProfile');

    if (status === 'Accepted') {
        const email = candidate.candidate.email;
        const title = `Your application for ${job.job.title}`;
        const body = `<p>Dear ${candidate.candidate.firstName} ${candidate.candidate.lastName},</p>
                      <p>We are pleased to inform you that your application for the position of ${job.job.title} has been accepted.</p>
                      <p>Best regards,</p>
                      <p>${job.job.user.instituteName}</p>`;
        // const trackingUrl = `https://yourdomain.com/api/track?email=${email}&job=${job.job._id}`;
        const trackingUrl = `http://yourdomain.com/api/track-email?candidateId=${candidate.job._id}&jobId=${job.job._id}`;
        await mailSender(email, title, body, trackingUrl);
    }
    if (status === 'Rejected') {
        const email = candidate.candidate.email;
        const title = `Your application for ${job.job.title}`;
        const body = `<p>Dear ${candidate.candidate.firstName} ${candidate.candidate.lastName},</p>
                      <p>Thank you, for your interest in the ${job.job.title}. Unfortunately, we will be not moving further for your application.</p>
                      <p>Best regards,</p>
                      <p>${job.job.user.instituteName}</p>`;
        // const trackingUrl = `https://yourdomain.com/api/track?email=${email}&job=${job.job._id}`;
        const trackingUrl = `http://yourdomain.com/api/track-email?candidateId=${candidate.job._id}&jobId=${job.job._id}`;
        await mailSender(email, title, body, trackingUrl, job, candidate);
    }
}

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

module.exports = JobApplication;
