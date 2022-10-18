import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/private/userRouter';
import authRouter from './routes/public/authRouter';
import dotenv from 'dotenv';
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

// app.get('/test', (req, res) => {
//   console.log('INSIDE ///');
//   res.send('USER MS');
// });

/**
 * On dit à Express que l'on souhaite autoriser tous les noms de domaines
 * à faire des requêtes sur notre API.
 */
//app.use(cors());

/**
 * Toutes les routes CRUD pour les animaux seronts préfixées par `/pets`
 */
//app.use("/pets", PetsController);

/**
 * Homepage (uniquement necessaire pour
 * cette demo)
 */

// app.get('/', (req, res) => {
//   res.send('test');
// });
app.use('/api/v1/users', userRouter);

// app.use('/api/v1/auth', authRouter);

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
app.listen(3001, () => console.log('Server is running'));
