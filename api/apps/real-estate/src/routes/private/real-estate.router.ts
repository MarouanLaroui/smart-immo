import express from 'express';
import {
  createRealEstate,
  getAllRealEstate,
} from '~~/src/controllers/real-estate.controller';

const realEstateRouter = express.Router();

realEstateRouter.post('/', createRealEstate);
realEstateRouter.get('/', getAllRealEstate);

export default realEstateRouter;
