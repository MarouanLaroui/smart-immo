import express from 'express';
import { login } from '~~/src/controllers/authController';

const authRouter = express.Router();

authRouter.post('/', login);

export default authRouter;
