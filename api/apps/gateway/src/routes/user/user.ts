import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const userRouter = express.Router();

if (!process.env.MS_USER_URI) {
  throw Error(`Env var MS_USER_URI is ${process.env.MS_USER_URI}`);
}

const userProxyMiddleWare = createProxyMiddleware({
  target: process.env.MS_USER_URI,
  changeOrigin: true,
});

userRouter.use('/', userProxyMiddleWare);

export default userRouter;
