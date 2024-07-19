const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const TrackingEvent = require('../models/trackingEventModel'); 

// Endpoint to track email opens
router.get('/track', async (req, res) => {
    const { email, job } = req.query;
    
    // Log the tracking event to the database
    const trackingEvent = new TrackingEvent({ email, job });
    await trackingEvent.save();

    console.log(`Email opened by: ${email} for job: ${job}`);
    
    // Respond with a 1x1 pixel image
    const pixel = Buffer.from(
        "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgcBAp/Sff8AAAAASUVORK5CYII=",
        "base64"
    );
    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': pixel.length
    });
    res.end(pixel);
});

module.exports = router;
