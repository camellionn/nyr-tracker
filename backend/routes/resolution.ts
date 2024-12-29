import express from 'express';

const Resolution = require('../models/resolution');
const router = express.Router();

router.post('/add', async (req, res) => {
  const { userId, title, description, dueDate } = req.body;
  const newResolution = new Resolution({ userId, title, description, dueDate });
  try {
    await newResolution.save();
    res.status(201).json(newResolution);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add resolution ' });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const resolutions = await Resolution.find({ userId: req.params.userId });
    res.json(resolutions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch resolutions' });
  }
});

module.exports = router;
