import { Types } from 'mongoose';
import IAuthenticable from './interfaces/IAuthenticable';
import CreateUserDTO from './dtos/CreateUserDTO';

export default interface IUser {
  _id: Types.ObjectId;
  firstname: string;
  lastname: string;
  birthdate: string;
  email: string;
  password: string;
}
