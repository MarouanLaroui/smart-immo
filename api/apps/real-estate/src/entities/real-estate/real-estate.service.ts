import UserModel from './database/real-estate.model';
import UserDTO from './dtos/create-real-estate.dto';
import bcrypt from 'bcrypt';
import User from './database/real-estate.model';
import IUser from './real-estate.interface';

export default class RealEstateService {
  static getRealEstates() {
    return UserModel.find({});
  }

  static async getOneRealEstate(email: string): Promise<IUser | null> {
    return User.findOne({ email: email });
  }

  static async createNewRealEstate(userToCreate: UserDTO) {
    return UserModel.create(userToCreate);
  }
}
