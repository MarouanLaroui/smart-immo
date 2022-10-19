import express from 'express';
import { createProxyMiddleware, fixRequestBody } from 'http-proxy-middleware';
import getProxyMiddleware from '~~/src/middlewares/proxyMiddleware';

const authRouter = express.Router();

if (!process.env.MS_USER_URI) {
  throw Error(`Env var MS_USER_URI is ${process.env.MS_USER_URI}`);
}

const authProxyMiddleWare = getProxyMiddleware(process.env.MS_USER_URI);

authRouter.use('/', authProxyMiddleWare);

export default authRouter;
