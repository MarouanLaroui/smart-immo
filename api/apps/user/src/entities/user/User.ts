import { Types } from 'mongoose';
import IAuthenticable from './interfaces/IAuthenticable';
import CreateUserDTO from './dto/CreateUserDTO';

export default class User implements IAuthenticable {
  _id: Types.ObjectId;
  firstname: string;
  lastname: string;
  birthdate: string;
  email: string;
  password: string;
}
