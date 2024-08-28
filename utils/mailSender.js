const nodemailer = require('nodemailer');
const EmailTracking = require('../models/trackingEventModel');

const mailSender = async (email, title, body, trackingUrl, jobId, candidateId) => {
    try {
        const trackingPixel = `<img src="${trackingUrl}" alt="" width="1" height="1" style="display: none;">`;
        const emailBody = `${body}${trackingPixel}`;


        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        });


        let info = await transporter.sendMail({
            from: `"EdHiring" <${process.env.MAIL_USER}>`,
            to: email,
            subject: title,
            html: emailBody,
        });

        console.log("Message sent: %s", info.messageId);
        return info;
    } catch (error) {
        console.error("Error sending email in mailSender: ", error.message);
    }
}

module.exports = mailSender;
