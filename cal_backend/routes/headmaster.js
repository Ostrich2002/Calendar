const express = require('express');

const Headmaster = require('../models/Headmaster');

const router = express.Router();

// Route to create a new headmaster document
router.post('/headmaster', (req, res) => {
  const Label = req.body.Label;
  const StartDate = req.body.StartDate;
  const EndDate = req.body.EndDate;
  const Description = req.body.Dascription;
  const AllDay = req.body.AllDay;
  const Repeat = req.body.Repeat;
  const BackgroundColor = req.body.BackgroundColor;
  const Status = req.body.Status;
  const VideoConferencingLink = req.body.VideoConferencingLink;

  const newHeadmaster = new Headmaster({
    Label: 'diwali',
  });

  newHeadmaster.save((err, savedHeadmaster) => {
    if (err) {
      console.error('Error saving headmaster:', err);
      return res.status(500).json({ error: 'Failed to save headmaster' });
    }

    console.log('Headmaster saved:', savedHeadmaster);
    return res.status(201).json(savedHeadmaster);
  });
});

module.exports = router;
