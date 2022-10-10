import User from './mongo/UserModel';

export default class UserService {
  static async getUsers() {
    return await User.find();
  }

  static async createNewUser() {
    //return await User.;
  }
}
