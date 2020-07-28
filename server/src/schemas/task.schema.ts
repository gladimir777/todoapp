import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  name: String,
  state: String,
  description: String,
  // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  created_at: { type: Date, default: Date.now },
});
