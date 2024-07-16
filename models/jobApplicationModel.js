const mongoose = require('mongoose');
const sendMail = require('../utils/mailSender'); 

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
    }
});

jobApplicationSchema.methods.updateStatus = async function(status) {
    this.status = status;
    await this.save();

    const candidate = await mongoose.model('User').findById(this.candidate);
    const job = await mongoose.model('Job').findById(this.job);

    let emailText;

    if (status === 'Accepted') {
        emailText = `Dear ${candidate.firstName},<br><br>Your application for the job '${job.title}' has been accepted. Congratulations!<br><br>Best regards,<br>Your Company`;
        await sendMail(candidate.email, 'Job Application Accepted', emailText);
    } else if (status === 'Rejected') {
        emailText = `Dear ${candidate.firstName},<br><br>We regret to inform you that your application for the job '${job.title}' has been rejected.<br><br>Best regards,<br>Your Company`;
        await sendMail(candidate.email, 'Job Application Rejected', emailText);
    }
};

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

module.exports = JobApplication;
