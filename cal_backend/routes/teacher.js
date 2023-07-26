const express = require('express');

const Teacher = require('../models/Teacher');

const router = express.Router();

// Route to create a new teacher document
router.post('/teacher', (req, res) => {
  const Label = req.body.Label;
  const StartDate = req.body.StartDate;
  const EndDate = req.body.EndDate;
  const Description = req.body.Dascription;
  const AllDay = req.body.AllDay;
  const Repeat = req.body.Repeat;
  const BackgroundColor = req.body.BackgroundColor;
  const Status = req.body.Status;
  const VideoConferencingLink = req.body.VideoConferencingLink;

  const newTeacher = new Teacher({
    Label: 'diwali',
  });

  newTeacher.save((err, savedTeacher) => {
    if (err) {
      console.error('Error saving teacher:', err);
      return res.status(500).json({ error: 'Failed to save teacher' });
    }

    console.log('Teacher saved:', savedTeacher);
    return res.status(201).json(savedTeacher);
  });
});

module.exports = router;
