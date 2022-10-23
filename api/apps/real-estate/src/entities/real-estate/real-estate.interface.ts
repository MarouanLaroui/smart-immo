import { Types } from 'mongoose';

export default interface IRealEstate {
  _id: Types.ObjectId;
  url: string;
  relativeId: string;
  title: string;
  description: string;
  city: string;
  postalCode: string;
  price: number;
  surfaceArea: number;
  roomsQuantity: number;
  //Optionnal fields
  condominiumCharges?: number;
  avgAnnualEnergyCharges?: number;
  energyPerformanceDiagnosticValue?: number;
  energyPerformanceDiagnosticGrade?: string;
  greenhouseGazEmissionDiagnosticValue?: number;
  greenhouseGazEmissionDiagnosticGrade?: string;
}
