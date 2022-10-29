import UserDTO from './dtos/CreateUserDTO';
import bcrypt from 'bcrypt';
import User from './database/UserModel';
import IUser from './IUser';
import { Types } from 'mongoose';

export default class UserService {
  static getUsers() {
    return User.find({});
  }

  static async getOneUserByEmail(email: string): Promise<IUser | null> {
    return User.findOne({ email: email });
  }

  static async getOneUser(userId: Types.ObjectId): Promise<IUser | null> {
    return User.findById(userId);
  }

  static async createNewUser(userToCreate: UserDTO): Promise<IUser | null> {
    userToCreate.password = await bcrypt.hash(userToCreate.password, 10);
    return User.create(userToCreate);
  }

  static async deleteUser(userId: Types.ObjectId): Promise<IUser | null> {
    return User.findByIdAndDelete(userId);
  }
}
