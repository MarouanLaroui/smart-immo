import UserModel from './database/UserModel';
import UserDTO from './dtos/CreateUserDTO';
import bcrypt from 'bcrypt';
import User from './database/UserModel';
import IUser from './IUser';

export default class UserService {
  static getUsers() {
    return UserModel.find({});
  }

  static async getOneUser(email: string): Promise<IUser | null> {
    return User.findOne({ email: email });
  }

  static async createNewUser(userToCreate: UserDTO) {
    userToCreate.password = await bcrypt.hash(userToCreate.password, 10);
    return UserModel.create(userToCreate);
  }
}
