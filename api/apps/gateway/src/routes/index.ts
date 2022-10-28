import express from 'express';
import importRouter from './import/importRouter';
import authRouter from './user/authRouter';
import userRouter from './user/userRouter';

const generalRouterV1 = express.Router();

generalRouterV1.use('/users', userRouter);
generalRouterV1.use('/auth', authRouter);
generalRouterV1.use('/import', importRouter)

export default generalRouterV1;
