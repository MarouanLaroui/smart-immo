import User from './User';
import UserDTO from './UserDTO';

export default class UserDAO {
  static convertUserToDTO(user: User) {
    return new UserDTO(
      user.firstname,
      user.lastname,
      user.birthdate,
      user.email
    );
  }
}
