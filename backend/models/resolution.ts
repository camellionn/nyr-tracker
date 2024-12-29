import mongoose from "mongoose";

const ResolutionSchema = new mongoose.Schema({
    userId: { type: String, required: true},
    title: { type: String, required: true},
    description: { type: String },
    dueDate: { type: Date, required: true},
});

const Resolution = mongoose.model('Resolution', ResolutionSchema);

export default Resolution;