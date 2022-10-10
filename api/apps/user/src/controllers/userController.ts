import { validate } from 'class-validator';
import { Request, Response } from 'express';
import User from '../entities/user/User';
import UserService from '../entities/user/User.service';

const getAllUsers = async (req: Request, res: Response) => {
  return UserService.getUsers();
};

const getOneUser = (req: Request, res: Response) => {
  res.send('Get an existing workout');
};

const createNewUser = async (req: Request, res: Response) => {
  const user = new User();
  user.firstname = req.body.firstname;
  user.lastname = req.body.lastname;
  user.email = req.body.email;
  user.birthdate = req.body.birthdate;

  const errors = await validate(user);
  if (errors && errors.length > 0) {
  }
};

const updateOneUser = (req: Request, res: Response) => {
  res.send('Update an existing workout');
};

const deleteOneUser = (req: Request, res: Response) => {
  res.send('Delete an existing workout');
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
