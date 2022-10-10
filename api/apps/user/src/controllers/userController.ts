import { validate } from 'class-validator';
import { Request, Response } from 'express';
import User from '../entities/user/User';
import UserService from '../entities/user/User.service';
import CreateUserDTO from '../entities/user/dto/CreateUserDTO';

const getAllUsers = async (req: Request, res: Response) => {
  res.send(await UserService.getUsers());
};

const getOneUser = (req: Request, res: Response) => {
  res.send('Get an existing workout');
};

const createNewUser = async (req: Request, res: Response) => {
  const userToCreate = new CreateUserDTO(
    req.body.firstname,
    req.body.lastname,
    req.body.birthdate,
    req.body.email,
    req.body.password
  );

  const errors = await validate(userToCreate);

  if (errors && errors.length > 0) {
    res.send(errors);
  } else {
    const result = await UserService.createNewUser(userToCreate);
    res.send(result);
  }
};

const updateOneUser = (req: Request, res: Response) => {
  res.send('Update an existing workout');
};

const deleteOneUser = (req: Request, res: Response) => {
  res.send('Delete an existing workout');
};

export { getAllUsers, getOneUser, createNewUser, updateOneUser, deleteOneUser };
