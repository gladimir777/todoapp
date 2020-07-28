import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly name: string;
  readonly user_name: string;
  readonly password: string;
  readonly created_at: Date;
}
