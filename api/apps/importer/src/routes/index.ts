import express, { Request, Response } from 'express';
import importRealEstateFromBienIci from '../importers/bienici.importer';
import currateUrlMiddleware from '../middlewares/currate-url-middleware';

const generalRouterV1 = express.Router();

generalRouterV1.use(currateUrlMiddleware);

generalRouterV1.post('/', (req: Request, res: Response) => {
  const url = req.body.url;
  const splitUrl = url.split('.');
  switch (splitUrl[1]) {
    case 'bienici':
      importRealEstateFromBienIci(req, res);
      break;
  }
});

export default generalRouterV1;
