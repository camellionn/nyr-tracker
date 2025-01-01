import mongoose from 'mongoose';

const ResolutionSchema = new mongoose.Schema({
  userId: { type: String, required: false },
  title: { type: String, required: true },
  description: { type: String, required: false },
  dueDate: { type: Date, required: true },
});

const Resolution = mongoose.model('Resolution', ResolutionSchema);

export default Resolution;
