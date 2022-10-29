import { Request, Response } from 'express';
import UserService from '../entities/user/User.service';
import CreateUserDTO from '../entities/user/dtos/CreateUserDTO';
import IAuthenticatedRequest from '../utils/IAuthenticatedRequest';

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

const deleteMyAccount = async (req: IAuthenticatedRequest, res: Response) => {
  const userId = req.body.user.userId;
  const deletedUser = await UserService.deleteUser(userId);
  if (!deletedUser) {
    return res.status(500).send('Deletion failed');
  }
  res.status(200).send('User deleted successfully');
};

export {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteMyAccount,
};
