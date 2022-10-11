import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const authenticationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token || typeof token !== 'string') {
    return res.status(401).send('No token found');
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET!);
  } catch (err) {
    return res.status(400).send('Invalid token');
  }

  return next();
};

export default authenticationMiddleware;
