import express from 'express';
import generalRouterV1 from './routes';
import dotenv from 'dotenv';
import { createProxyMiddleware } from 'http-proxy-middleware';

/**
 * On créé une nouvelle "application" express
 */
const app = express();

/**
 * On dit à Express que l'on souhaite parser le body des requêtes en JSON
 *
 * @example app.post('/', (req) => req.body.prop)
 */
app.use(express.json());

/**
 * On demande une connection avec MongoDB
 */
const result = dotenv.config();
console.log(process.env.MS_USER_URI);

// const userProxyMiddleWare = createProxyMiddleware({
//   target: process.env.MS_USER_URI
//     ? process.env.MS_USER_URI
//     : 'http://localhost:3001',
//   changeOrigin: true,
// });
//app.use('/api/v1/users', userProxyMiddleWare);

/**
 * On dit à Express que l'on souhaite autoriser tous les noms de domaines
 * à faire des requêtes sur notre API.
 */
//app.use(cors());
app.use('/api/v1/', generalRouterV1);

/**
 * Pour toutes les autres routes non définies, on retourne une erreur
 */
//app.all("*", UnknownRoutesHandler);

/**
 * Gestion des erreurs
 * /!\ Cela doit être le dernier `app.use`
 */
//app.use(ExceptionsHandler);

/**
 * On demande à Express d'ecouter les requêtes sur le port défini dans la config
 */
app.listen(3000, () => console.log('Server is running'));
