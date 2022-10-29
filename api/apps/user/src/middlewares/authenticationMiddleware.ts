import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import IToken from '../entities/user/interfaces/IToken';
import UserService from '../entities/user/User.service';

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
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET!) as IToken;
    const user = UserService.getOneUser(decodedToken.user.userId);
    req.body.user = user;
  } catch (err) {
    return res.status(400).send('Invalid token');
  }

  return next();
};

export default authenticationMiddleware;
