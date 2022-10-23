import { Model, model } from 'mongoose';
import IRealEstate from '../real-estate.interface';
import realEstateSchema from './real-estate.schema';

const User: Model<IRealEstate> = model<IRealEstate>(
  'RealEstate',
  realEstateSchema
);
export default User;
