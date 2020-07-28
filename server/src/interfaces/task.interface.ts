import { Document } from 'mongoose';

export interface ITask extends Document {
  readonly name: string;
  readonly state: string;
  readonly description: string;
  // readonly user_id: any;
  readonly created_at: Date;
}
