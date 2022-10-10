import { Types } from 'mongoose';
import IAuthenticable from './interfaces/IAuthenticable';
import UserDTO from './UserDTO';

export default class User implements IAuthenticable {
  _id: Types.ObjectId;
  firstname: string;
  lastname: string;
  birthdate: string;
  email: string;
  password: string;

  toDTO(): UserDTO {
    return new UserDTO(
      this.firstname,
      this.lastname,
      this.birthdate,
      this.email
    );
  }
}
