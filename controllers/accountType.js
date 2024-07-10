const AccountType = require('../models/accountType');
const ErrorResponse = require('../utils/errorResponse.js');

//create job category
exports.createAccountType = async (req, res, next) => {
    try {
        const jobT = await AccountType.create({
            AccountTypeName: req.body.AccountTypeName,
            user: req.user.id
        });
        res.status(201).json({
            success: true,
            jobT
        })
    } catch (error) {
        next(error);
    }
}


//all jobs category
exports.allJobsType = async (req, res, next) => {
    try {
        const jobT = await AccountType.find();
        res.status(200).json({
            success: true,
            jobT
        })
    } catch (error) {
        next(error);
    }
}

//update job type
exports.updateAccountType = async (req, res, next) => {
    try {
        const jobT = await AccountType.findByIdAndUpdate(req.params.type_id, req.body, { new: true });
        res.status(200).json({
            success: true,
            jobT
        })
    } catch (error) {
        next(error);
    }
}


//delete job type
exports.deleteAccountType = async (req, res, next) => {
    try {
        const jobT = await AccountType.findByIdAndRemove(req.params.type_id);
        res.status(200).json({
            success: true,
            message: "Job type deleted"
        })
    } catch (error) {
        next(new ErrorResponse("server error", 500));
    }
}
