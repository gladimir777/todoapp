import { Document } from 'mongoose';

export interface ITask extends Document {
  readonly name: string;
  readonly state: Boolean;
  readonly description: string;
  readonly created_at: Date;
}
