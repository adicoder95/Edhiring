const express = require('express');
const router = express.Router();
const EmailTracking = require('../models/trackingEventModel');

router.get('/track-email', async (req, res) => {
    const { candidateId, jobId } = req.query;

    try {
        const tracking = new EmailTracking({
            candidate: candidateId,
            job: jobId,
            emailOpened: true,
            openedAt: new Date(),
        });

        await tracking.save();

        // Return a 1x1 pixel transparent GIF
        const pixel = Buffer.from(
            '47494638396101000100910000000000ffffff21f90401000001002c00000000010001000002024401003b',
            'hex'
        );

        res.writeHead(200, {
            'Content-Type': 'image/gif',
            'Content-Length': pixel.length
        });
        res.end(pixel);
    } catch (error) {
        console.error("Error tracking email open: ", error.message);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
