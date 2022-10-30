import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import generalRouterV1 from './routes';

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
 * On dit à Express que l'on souhaite autoriser tous les noms de domaines
 * à faire des requêtes sur notre API.
 */
//app.use(cors());
app.use('/api/v1/import', generalRouterV1);

/**
 * Pour toutes les autres routes non définies, on retourne une erreur
 */
//app.all("*", UnknownRoutesHandler); // TODO: handle unknown routes

/**
 * Gestion des erreurs
 * /!\ Cela doit être le dernier `app.use`
 */
//app.use(ExceptionsHandler);

app.listen(3003, () => console.log('SmartImmo import microservice is running'));
