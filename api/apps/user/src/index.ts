import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
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
 * On demande une connection avec MongoDB
 */
dotenv.config();

if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('successfully connected to DB'))
    .catch((err) => console.log(err));
}

/**
 * On dit à Express que l'on souhaite autoriser tous les noms de domaines
 * à faire des requêtes sur notre API.
 */
//app.use(cors());

/**
 * Homepage (uniquement necessaire pour
 * cette demo)
 */

// app.get('/', (req, res) => {
//   res.send('test');
// });
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
app.listen(3001, () => console.log('SmartImmo user microservice is running'));
