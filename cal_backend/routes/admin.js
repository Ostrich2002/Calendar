
// routes/adminRoutes.js

const express = require('express');
const Admin = require('../models/Admin');
const router = express.Router();

// Route to create a new admin document
router.post('/admin', (req, res) => {
  const {
    Label,
    StartDate,
    EndDate,
    Description,
    AllDay,
    Repeat,
    BackgroundColor,
    Status,
    VideoConferencingLink
  } = req.body;

  const newAdmin = new Admin({
    Label,
    StartDate,
    EndDate,
    Description,
    AllDay,
    Repeat,
    BackgroundColor,
    Status,
    VideoConferencingLink
  });

  newAdmin.save((err, savedAdmin) => {
    if (err) {
      console.error('Error saving admin:', err);
      return res.status(500).json({ error: 'Failed to save admin' });
    }

    console.log('Admin saved:', savedAdmin);
    return res.status(201).json(savedAdmin);
  });
});

router.get('/admin/events', (req, res) => {
  Admin.find({}, (err, events) => {
    if (err) {
      console.error('Error fetching events:', err);
      return res.status(500).json({ error: 'Failed to fetch events' });
    }

    console.log('Events fetched:', events);
    return res.status(200).json(events);
  });
});

module.exports = router;
