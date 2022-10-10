import { model } from 'mongoose';
import IUser from '../User';
import userSchema from './UserSchema';

const User = model<IUser>('User', userSchema);
export default User;
