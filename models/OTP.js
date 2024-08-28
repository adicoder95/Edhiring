const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const smsSender = require("../utils/smsSender.js"); 

const OTPSchema = new mongoose.Schema({
	email: {
		type: String,
	},
	contact: {
		type: String,
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
			otp
		);
		// console.log("Email sent successfully: ", mailResponse.response);
		console.log("Email sent successfully: ", mailResponse);
	} catch (error) {
		console.log("Error occurred while sending email: ", error);
		throw error;
	}
}

// Function to send OTP via contact number (SMS)
async function sendVerificationSMS(contact, otp) {
	try {
	  // Assuming smsSender is a function in utils that sends an SMS
	  const smsResponse = await smsSender(
		contact,
		`Your OTP is ${otp}`
	  );
	  console.log("SMS sent successfully: ", smsResponse);
	} catch (error) {
	  console.log("Error occurred while sending SMS: ", error);
	  throw error;
	}
  }

  OTPSchema.pre("save", async function (next) {
	if (this.email) {
	  await sendVerificationEmail(this.email, this.otp);
	}
	if (this.contact) {
	  await sendVerificationSMS(this.contact, this.otp);
	}
	next();
  });
  
  const OTP = mongoose.model("OTP", OTPSchema);
  
  module.exports = OTP;