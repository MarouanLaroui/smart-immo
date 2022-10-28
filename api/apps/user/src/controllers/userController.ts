import { validate } from 'class-validator';
import { Request, Response } from 'express';
import User from '../entities/user/IUser';
import UserService from '../entities/user/User.service';
import CreateUserDTO from '../entities/user/dtos/CreateUserDTO';

const getAllUsers = async (req: Request, res: Response) => {
  res.send(await UserService.getUsers());
};

const getOneUser = (req: Request, res: Response) => {
  res.send('Get an existing workout');
};

const createNewUser = async (
  req: Request<any, any, CreateUserDTO>,
  res: Response
) => {
  const result = await UserService.createNewUser(req.body);
  if (!result) {
    return res.send(400).send('User creation failed');
  }
  return res.status(200).send(result);
};

const updateOneUser = (req: Request, res: Response) => {
  res.send('Update an existing workout');
};

const deleteOneUser = (req: Request, res: Response) => {
  res.send('Delete an existing workout');
};

export { getAllUsers, getOneUser, createNewUser, updateOneUser, deleteOneUser };
