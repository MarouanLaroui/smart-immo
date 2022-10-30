import { validate } from 'class-validator';
import { Request, Response } from 'express';
import CreateRealEstateDTO from '../entities/real-estate/dtos/create-real-estate.dto';
import RealEstateService from '../entities/real-estate/real-estate.service';

const getAllRealEstate = async (req: Request, res: Response) => {
  res.send(await RealEstateService.getRealEstates());
};

const getOneRealEstate = (req: Request, res: Response) => {
  res.send('Get an existing workout');
};

const createRealEstateFromImport = async (
  realEstateToSave: CreateRealEstateDTO
) => {
  const realEstateToCreate = new CreateRealEstateDTO(
    realEstateToSave.url,
    realEstateToSave.relativeId,
    realEstateToSave.title,
    realEstateToSave.description,
    realEstateToSave.city,
    realEstateToSave.postalCode,
    realEstateToSave.price,
    realEstateToSave.surfaceArea,
    realEstateToSave.roomsQuantity,
    realEstateToSave.condominiumCharges,
    realEstateToSave.avgAnnualEnergyCharges,
    realEstateToSave.energyPerformanceDiagnosticValue,
    realEstateToSave.energyPerformanceDiagnosticGrade,
    realEstateToSave.greenhouseGazEmissionDiagnosticValue,
    realEstateToSave.greenhouseGazEmissionDiagnosticGrade
  );

  const errors = await validate(realEstateToCreate);

  if (!errors) {
    const result = await RealEstateService.createNewRealEstate(
      realEstateToCreate
    );
    console.log('success');
    return 'success';
  }
};

const createRealEstate = async (req: Request, res: Response) => {
  const realEstateToCreate = new CreateRealEstateDTO(
    req.body.url,
    req.body.relativeId,
    req.body.title,
    req.body.description,
    req.body.city,
    req.body.postalCode,
    req.body.price,
    req.body.surfaceArea,
    req.body.roomsQuantity,
    req.body.condominiumCharges,
    req.body.avgAnnualEnergyCharges,
    req.body.energyPerformanceDiagnosticValue,
    req.body.energyPerformanceDiagnosticGrade,
    req.body.greenhouseGazEmissionDiagnosticValue,
    req.body.greenhouseGazEmissionDiagnosticGrade
  );

  const errors = await validate(realEstateToCreate);

  if (errors && errors.length > 0) {
    return res.status(400).send(errors);
  } else {
    const result = await RealEstateService.createNewRealEstate(
      realEstateToCreate
    );
    return res.status(201).send(result);
  }
};

const updateOneRealEstate = (req: Request, res: Response) => {
  return res.send('Update an existing real estate');
};

const deleteOneRealEstate = (req: Request, res: Response) => {
  return res.send('Delete an existing real estate');
};

export {
  getAllRealEstate,
  getOneRealEstate,
  createRealEstate,
  createRealEstateFromImport,
  updateOneRealEstate,
  deleteOneRealEstate,
};
