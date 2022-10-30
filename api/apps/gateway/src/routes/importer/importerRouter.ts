import express from 'express';
import getProxyMiddleware from '~~/src/middlewares/proxyMiddleware';

const importerRouter = express.Router();

if (!process.env.MS_IMPORT_UI) {
  throw Error(`Env var MS_IMPORT_UI is ${process.env.MS_IMPORT_UI}`);
}

const importerProxyMiddleWare = getProxyMiddleware(process.env.MS_IMPORT_UI);

importerRouter.use('/', importerProxyMiddleWare);

export default importerRouter;
