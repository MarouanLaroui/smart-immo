import express from 'express';
import currateUrlMiddleware from '../middleware/currateUrlMiddleware';
import bieniciRouter from '../bienici/bienici.router';

const generalRouterV1 = express.Router();

generalRouterV1.use(currateUrlMiddleware);
generalRouterV1.use('/bienici', bieniciRouter);

export default generalRouterV1;
