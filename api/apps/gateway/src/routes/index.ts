import express from 'express';
import importerRouter from './importer/importerRouter';
import authRouter from './user/authRouter';
import userRouter from './user/userRouter';

const generalRouterV1 = express.Router();

generalRouterV1.use('/users', userRouter);
generalRouterV1.use('/auth', authRouter);
generalRouterV1.use('/import', importerRouter);

export default generalRouterV1;
