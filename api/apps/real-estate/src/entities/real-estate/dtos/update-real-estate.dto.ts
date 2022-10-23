import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export default class UpdateRealEstateDTO {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  url: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  relativeId: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  postalCode: string;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  roomsQuantity: number;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  surfaceArea: number;

  //Optionnal fields
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  condominiumCharges?: number;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  avgAnnualEnergyCharges?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  energyPerformanceDiagnosticGrade?: string;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  energyPerformanceDiagnosticValue?: number;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  greenhouseGazEmissionDiagnosticValue?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
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
