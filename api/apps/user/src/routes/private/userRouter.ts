import express from 'express';
import { createNewUser, getAllUsers } from '~~/src/controllers/userController';
import authenticationMiddleware from '~~/src/middlewares/authenticationMiddleware';

const userRouter = express.Router();

userRouter.post('/', (req, res) => createNewUser(req, res));

userRouter.use(authenticationMiddleware);
userRouter.get('/', (req, res) => getAllUsers(req, res));

export default userRouter;
