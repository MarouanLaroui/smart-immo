import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export default class CreateRealEstateDTO {
  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsNotEmpty()
  relativeId: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  postalCode: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  roomsQuantity: number;

  @IsNumber()
  @IsNotEmpty()
  surfaceArea: number;

  //Optionnal fields
  @IsOptional()
  @IsNumber()
  condominiumCharges?: number;

  @IsOptional()
  @IsNumber()
  avgAnnualEnergyCharges?: number;

  @IsOptional()
  @IsString()
  energyPerformanceDiagnosticGrade?: string;

  @IsOptional()
  @IsNumber()
  energyPerformanceDiagnosticValue?: number;

  @IsOptional()
  @IsNumber()
  greenhouseGazEmissionDiagnosticValue?: number;

  @IsOptional()
  @IsString()
  greenhouseGazEmissionDiagnosticGrade?: string;

  constructor(
    url: string,
    relativeId: string,
    title: string,
    description: string,
    city: string,
    postalCode: string,
    price: number,
    surfaceArea: number,
    roomsQuantity: number,
    //Optionnal fields
    condominiumCharges?: number,
    avgAnnualEnergyCharges?: number,
    energyPerformanceDiagnosticValue?: number,
    energyPerformanceDiagnosticGrade?: string,
    greenhouseGazEmissionDiagnosticValue?: number,
    greenhouseGazEmissionDiagnosticGrade?: string
  ) {
    this.url = url;
    this.relativeId = relativeId;
    this.title = title;
    this.description = description;
    this.city = city;
    this.postalCode = postalCode;
    this.price = price;
    this.surfaceArea = surfaceArea;
    this.roomsQuantity = roomsQuantity;
    this.condominiumCharges = condominiumCharges;
    this.avgAnnualEnergyCharges = avgAnnualEnergyCharges;
    this.energyPerformanceDiagnosticValue = energyPerformanceDiagnosticValue;
    this.energyPerformanceDiagnosticGrade = energyPerformanceDiagnosticGrade;
    this.greenhouseGazEmissionDiagnosticValue =
      greenhouseGazEmissionDiagnosticValue;
    this.greenhouseGazEmissionDiagnosticGrade =
      greenhouseGazEmissionDiagnosticGrade;
  }
}
