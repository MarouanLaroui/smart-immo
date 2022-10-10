import UserModel from './database/UserModel';
import User from './database/UserModel';
import UserDTO from './dto/CreateUserDTO';

export default class UserService {
  static getUsers() {
    return UserModel.find({});
  }

  static createNewUser(userToCreate: UserDTO) {
    return UserModel.create(userToCreate);
  }
}
