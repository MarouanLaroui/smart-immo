export type RealEstateAdDTO = {
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
  energyPerformanceDiagnostic?: number;
  greenhouseGazEmissionDiagnostic?: number;
};
