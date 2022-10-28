import express from 'express';
import getProxyMiddleware from '~~/src/middlewares/proxyMiddleware';

const importRouter = express.Router();

if (!process.env.MS_IMPORT_URI) {
  throw Error(`Env var MS_IMPORT_URI is ${process.env.MS_IMPORT_URI}`);
}

const importProxyMiddleWare = getProxyMiddleware(process.env.MS_IMPORT_URI);

importRouter.use('/', importProxyMiddleWare);

export default importRouter;
