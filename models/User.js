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
            enum: ["Candidate", "Employee", "Admin"],
            // required: true,
        },
        additionalDetails: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Profile",
        },
    }));
}

module.exports = User;