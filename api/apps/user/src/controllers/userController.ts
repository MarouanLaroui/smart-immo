import { Request, Response } from 'express';

const getAllUsers = (req: Request, res: Response) => {
  res.send('Get all workouts');
};

const getOneUser = (req: Request, res: Response) => {
  res.send('Get an existing workout');
};

const createNewUser = (req: Request, res: Response) => {
  res.send('Create a new workout');
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
