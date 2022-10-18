import express from 'express';
import userRouter from './user/user';

const generalRouterV1 = express.Router();

generalRouterV1.use('/users', userRouter);

export default generalRouterV1;
