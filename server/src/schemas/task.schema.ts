import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  name: String,
  state: Boolean,
  description: String,
  created_at: { type: Date, default: Date.now },
});
