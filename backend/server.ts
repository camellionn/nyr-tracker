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
    // eslint-disable-next-line no-undef
    await mongoose.connect(process.env.MONGO_URI!);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
})();

app.post('/api/resolutions', async (req: Request, res: Response) => {
  const { userId, title, description, dueDate } = req.body;
  try {
    const reso = new Resolution({ userId, title, description, dueDate });
    await reso.save();
    res.status(201).json(reso);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to create resolution ' });
  }
});

// Get all resolution
app.get('/api/resolutions', async (req: Request, res: Response) => {
  try {
    const reso = await Resolution.find();
    res.json(reso);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.messsage });
  }
});

//Update a resolution
app.put('/api/resolutions', async (req: Request, res: Response) => {
  const { userId, title, description, dueDate } = req.body;
  try {
    const reso = await Resolution.findByIdAndUpdate(
      userId,
      { title, description, dueDate },
      { new: true }
    );
    res.json(reso);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/resolutions', async (req: Request, res: Response) => {
  const { userId } = req.body;
  try {
    const reso = await Resolution.findByIdAndDelete(userId);
    res.status(204).end(reso);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
