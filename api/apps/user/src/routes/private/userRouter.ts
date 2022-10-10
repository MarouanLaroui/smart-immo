import express from 'express';
import { createNewUser, getAllUsers } from '~~/src/controllers/userController';

const userRouter = express.Router();

userRouter.get('/', (req, res) => getAllUsers(req, res));
userRouter.post('/', (req, res) => createNewUser(req, res));

export default userRouter;
