/* eslint-disable */
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Request, Response } from 'express';
import Resolution from '../backend/models/resolution';

dotenv.config();

const app = express();

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);

    process.exit(1);
  }
})();

// Create a new resolution
app.post('/api/resolutions', async (req: Request, res: Response) => {
  const { userId, title, description, dueDate } = req.body;
  try {
    const newResolution = new Resolution({
      userId,
      title,
      description,
      dueDate,
    });
    await newResolution.save();
    res.status(201).json(newResolution);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to create resolution' });
  }
});

// Get all resolutions
app.get('/api/resolutions', async (req: Request, res: Response) => {
  try {
    const resolutions = await Resolution.find();
    res.json(resolutions);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to fetch resolutions' });
  }
});

// Get a single resolution by _id
app.get('/api/resolutions/:id', async (req: Request, res: Response) => {
  const { id } = req.params; // Extract _id from URL
  try {
    const resolution = await Resolution.findById(id);
    res.json(resolution);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to fetch resolution' });
  }
});

// Update a resolution by _id
app.put('/api/resolutions/:id', async (req: Request, res: Response) => {
  const { id } = req.params; // Extract _id from URL
  const { title, description, dueDate } = req.body;
  try {
    const updatedResolution = await Resolution.findByIdAndUpdate(
      id,
      { title, description, dueDate },
      { new: true }
    );
    res.json(updatedResolution);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
});

// Delete a resolution by _id
app.delete('/api/resolutions/:id', async (req: Request, res: Response) => {
  const { id } = req.params; // Extract _id from URL
  try {
    const deletedResolution = await Resolution.findByIdAndDelete(id);
    res.status(204).end(); // No content to return
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/', (req: Request, res: Response) => {
  res.send('API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
