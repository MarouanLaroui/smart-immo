import UserModel from './database/UserModel';
import UserDTO from './dtos/CreateUserDTO';
import bcrypt from 'bcrypt';
import User from './database/UserModel';
import IUser from './IUser';
import { Types } from 'mongoose';

export default class UserService {
  static getUsers() {
    return UserModel.find({});
  }

  static async getOneUserByEmail(email: string): Promise<IUser | null> {
    return User.findOne({ email: email });
  }

  static async getOneUser(id: Types.ObjectId): Promise<IUser | null> {
    return User.findById(id);
  }

  static async createNewUser(userToCreate: UserDTO) {
    userToCreate.password = await bcrypt.hash(userToCreate.password, 10);
    return UserModel.create(userToCreate);
  }

  static async deleteUser(userId: string) {
    return UserModel.findByIdAndDelete(userId);
  }
}
