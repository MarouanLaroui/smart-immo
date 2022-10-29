import { Types } from 'mongoose';

export default interface IToken {
  user: {
    email: string;
    userId: Types.ObjectId;
  };
}
