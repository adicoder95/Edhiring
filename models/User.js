const mongoose = require("mongoose");

let User;
try {
    User = mongoose.model("User");
} catch {
    User = mongoose.model("User", new mongoose.Schema({
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
        contact:{
            type: Number,
            required: true,
        },
        accountType: {
            type: String,
            enum: ["Candidate", "Employer", "Admin"],
            required: true,
        },
        additionalDetails: {
            type: mongoose.Schema.Types.ObjectId,
            refPath: 'accountType', 
        },
    }));

    User.schema.pre('save', async function(next) {
        try {
            if (this.accountType === 'Candidate') {
                this.additionalDetails = await mongoose.model('Profile').findOne({ email: this.email });
            } else if (this.accountType === 'Employer' || this.accountType === 'Admin') {
                this.additionalDetails = await mongoose.model('EmployerProfile').findOne({ email: this.email });
            }
            next();
        } catch (error) {
            next(error);
        }
    });
}

module.exports = User;
