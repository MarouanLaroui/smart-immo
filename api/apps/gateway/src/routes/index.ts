import express from 'express';
import authRouter from './user/authRouter';
import userRouter from './user/userRouter';

const generalRouterV1 = express.Router();

generalRouterV1.use('/users', userRouter);
generalRouterV1.use('/auth', authRouter);

export default generalRouterV1;
