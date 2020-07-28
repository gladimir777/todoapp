import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  user_name: String,
  password: String,
  taks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  created_at: { type: Date, default: Date.now },
});
