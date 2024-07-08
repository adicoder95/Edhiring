const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
// const emailTemplate = require("../mail/templates/emailVerificationTemplate");

const OTPSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	otp: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
	},
});


// function to send emails
async function sendVerificationEmail(email, otp) {
	try {
		const mailResponse = await mailSender(// mailSender is a function in util->mailSender.js
			email,
			"Verification Email",
			// emailTemplate(otp)
			otp
		);
		// console.log("Email sent successfully: ", mailResponse.response);
		console.log("Email sent successfully: ", mailResponse);
	} catch (error) {
		console.log("Error occurred while sending email: ", error);
		throw error;
	}
}

// Define a post-save hook to send email after the document has been saved in db
OTPSchema.pre("save", async function (next) {
	await sendVerificationEmail(this.email, this.otp);
	next();
});

const OTP = mongoose.model("OTP", OTPSchema);

module.exports = OTP;