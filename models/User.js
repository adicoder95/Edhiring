const mongoose = require("mongoose");

let User;
try {
    User = mongoose.model("user");
} catch {
    User = mongoose.model("user", new mongoose.Schema({
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        accountType: {
            type: String,
            enum: ["Candidate", "Employer", "Admin"],
            // required: true,
        },
        additionalDetails: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Profile",
        },
    }));

    User.schema.pre('save', async function(next) {
        if (this.accountType === 'Candidate') {
            this.additionalDetails = await mongoose.model('Profile').findOne({ email: this.email }); 
        } else if (this.accountType === 'Employer') {
            this.additionalDetails = await mongoose.model('EmployerProfile').findOne({ email: this.email }); 
        }
        else if (this.accountType === 'Admin') {
            this.additionalDetails = await mongoose.model('EmployerProfile').findOne({ email: this.email }); 
        }
        next();
    });
}

module.exports = User;
