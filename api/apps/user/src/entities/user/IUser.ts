import { Types } from 'mongoose';

export default interface IUser {
  _id: Types.ObjectId;
  lastname: string;
  firstname: string;
  birthdate: string;
  email: string;
  password: string;
}
