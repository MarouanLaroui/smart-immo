import express from 'express';
import getProxyMiddleware from '~~/src/middlewares/proxyMiddleware';

const userRouter = express.Router();

if (!process.env.MS_USER_URI) {
  throw Error(`Env var MS_USER_URI is ${process.env.MS_USER_URI}`);
}

const userProxyMiddleWare = getProxyMiddleware(process.env.MS_USER_URI);

userRouter.use('/', userProxyMiddleWare);

export default userRouter;
