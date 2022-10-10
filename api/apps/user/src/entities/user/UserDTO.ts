import { Types } from 'mongoose';

export default class UserDTO {
  firstname: string;
  lastname: string;
  birthdate: string;
  email: string;

  constructor(
    firstname: string,
    lastname: string,
    birthdate: string,
    email: string
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthdate = birthdate;
    this.email = email;
  }
}
