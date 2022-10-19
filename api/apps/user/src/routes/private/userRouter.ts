import express from 'express';
import { createNewUser, getAllUsers } from '~~/src/controllers/userController';
import authenticationMiddleware from '~~/src/middlewares/authenticationMiddleware';

const userRouter = express.Router();

userRouter.post('/', createNewUser);

userRouter.use(authenticationMiddleware);
userRouter.get('/', getAllUsers);

export default userRouter;
