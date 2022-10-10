import { Schema, SchemaType } from 'mongoose';
import IUser from '../User';

const userSchema = new Schema<IUser>({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  birthdate: { type: String, required: true },
});

export default userSchema;
