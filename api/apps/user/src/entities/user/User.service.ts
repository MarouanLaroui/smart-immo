import User from './mongo/UserModel';

export default class UserService {
  async getUsers() {
    return await User.find();
  }
}
