import express from 'express';
import RealEstateRouter from './private/real-estate.router';

const generalRouterV1 = express.Router();

generalRouterV1.use('/real-estate', RealEstateRouter);

export default generalRouterV1;
