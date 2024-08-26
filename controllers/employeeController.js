
exports.getCandidatesByJobId = async (req, res) => {
    try {
        // Extract job ID from request body
        const jobId = req.body.jobId;

        // Log the job ID for debugging
        console.log('Fetching candidates for Job ID:', jobId);

        // Find all job applications for the specified job ID and populate candidate details
        const jobApplications = await JobApplication.find({ job: jobId }).populate('candidate');

        // Log the job applications found for debugging
        console.log('Job Applications found:', jobApplications);

        // Check if any applications exist
        if (!jobApplications || jobApplications.length === 0) {
            return res.status(404).json({ success: false, message: 'No candidates found for this job' });
        }

        // Prepare the response object with the required candidate information
        const response = {
            success: true,
            candidates: jobApplications.map(application => {
                const candidate = application.candidate; // This is the populated candidate object

                // Log candidate details for debugging
                console.log('Candidate:', candidate);

                // Defensive checks to ensure candidate and PersonalDetails exist
                if (candidate && candidate.PersonalDetails) {
                    return {
                        _id: candidate._id._id, // Candidate ID
                        Full_Name: candidate.PersonalDetails.Full_Name || 'N/A', // Full Name
                        Job_Role: candidate.PersonalDetails.Job_Role || 'N/A', // Job Role
                        Profile_Pic: candidate.PersonalDetails.Profile_Pic || 'N/A', // Profile Picture
                    };
                } else {
                    // If candidate is not found or PersonalDetails is missing
                    return {
                        _id: application.candidate, // Candidate ID (may be just the ID if not populated)
                        Full_Name: 'N/A',
                        Job_Role: 'N/A',
                        Profile_Pic: 'N/A',
                    };
                }
            }),
        };

        // Log the response for debugging
        console.log('Response:', response);

        // Respond with the candidates' selected profile information
        res.status(200).json(response);

    } catch (error) {
        console.error('Error fetching candidates:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
