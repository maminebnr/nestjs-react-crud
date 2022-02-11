import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    lastName: { type: String },
    firstName: { type: String },
    username: { type: String },
  },
  { timestamps: true },
);

export interface User extends mongoose.Document {
  _id: string;
  username: string;
  email: string;
  lastName: string;
  firstName: string;
}
