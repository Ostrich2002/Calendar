const express = require('express');

const Student = require('../models/Student');

const router = express.Router();

// Route to create a new student document
router.post('/student', (req, res) => {
  const Label = req.body.Label;
  const StartDate = req.body.StartDate;
  const EndDate = req.body.EndDate;
  const Description = req.body.Dascription;
  const AllDay = req.body.AllDay;
  const Repeat = req.body.Repeat;
  const BackgroundColor = req.body.BackgroundColor;
  const Status = req.body.Status;
  const VideoConferencingLink = req.body.VideoConferencingLink;

  const newStudent = new Student({
    Label: 'diwali',
  });

  newStudent.save((err, savedStudent) => {
    if (err) {
      console.error('Error saving student:', err);
      return res.status(500).json({ error: 'Failed to save student' });
    }

    console.log('Student saved:', savedStudent);
    return res.status(201).json(savedStudent);
  });
});

module.exports = router;
