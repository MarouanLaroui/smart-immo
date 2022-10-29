import { Types } from 'mongoose';

export default interface IUser {
  _id: Types.ObjectId;
  firstname: string;
  lastname: string;
  birthdate: string;
  email: string;
  password: string;
}
