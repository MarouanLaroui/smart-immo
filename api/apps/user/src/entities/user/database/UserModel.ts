import { model } from 'mongoose';
import IUser from '../User';
import userSchema from './UserSchema';

const UserModel = model<IUser>('User', userSchema);
export default UserModel;
