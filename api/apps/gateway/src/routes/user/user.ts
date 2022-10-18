import express from 'express';
//import { createProxyMiddleware } from 'http-proxy-middleware';
const { createProxyMiddleware } = require('http-proxy-middleware');

const userRouter = express.Router();

const userProxyMiddleWare = createProxyMiddleware({
  target: process.env.MS_USER_URI
    ? process.env.MS_USER_URI
    : 'http://localhost:3001',
  changeOrigin: true,
});

userRouter.use('/', userProxyMiddleWare);

export default userRouter;
