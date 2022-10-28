import express from 'express';
import { createNewUser, getAllUsers } from '~~/src/controllers/userController';
import CreateUserDTO from '~~/src/entities/user/dtos/CreateUserDTO';
import authenticationMiddleware from '~~/src/middlewares/authenticationMiddleware';
import validateBody from '~~/src/middlewares/validateBodyMiddleware';

const userRouter = express.Router();

userRouter.post('/', validateBody<CreateUserDTO>, createNewUser);

userRouter.use(authenticationMiddleware);
userRouter.get('/', getAllUsers);

export default userRouter;
