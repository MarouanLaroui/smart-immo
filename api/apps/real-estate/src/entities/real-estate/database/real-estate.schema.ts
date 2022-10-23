import { Schema, SchemaType } from 'mongoose';
import IUser from '../real-estate.interface';

const realEstateSchema = new Schema<IUser>({
  url: { type: String, required: true },
  relativeId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  price: { type: Number, required: true },
  surfaceArea: { type: Number, required: true },
  roomsQuantity: { type: Number, required: true },
  //Optionnal fields
  condominiumCharges: { type: Number, required: false },
  avgAnnualEnergyCharges: { type: Number, required: false },
  energyPerformanceDiagnosticValue: { type: Number, required: false },
  energyPerformanceDiagnosticGrade: { type: String, required: false },
  greenhouseGazEmissionDiagnosticValue: { type: Number, required: false },
  greenhouseGazEmissionDiagnosticGrade: { type: String, required: false },
});

export default realEstateSchema;
