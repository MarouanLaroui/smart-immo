import express from 'express';
import userRouter from './private/userRouter';
import authRouter from './public/authRouter';

const generalRouterV1 = express.Router();

generalRouterV1.use('/users', userRouter);
generalRouterV1.use('/auth', authRouter);

export default generalRouterV1;
