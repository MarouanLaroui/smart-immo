import { NextFunction, Request, Response } from 'express';
import { transformAndValidate } from 'class-transformer-validator';

const validateBody = <T>(
  parameter: T,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  transformAndValidate(parameter as any, req.body)
    .then((transformedBody) => {
      req.body = transformedBody;
      next();
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

export default validateBody;
