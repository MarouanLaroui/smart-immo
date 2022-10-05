import cors from 'cors';
import express from 'express';
import kafkaTest from './kafka/kafkaProducer';
import consumeKafka from './kafka/kafkaConsumer';

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

/**
 * Toutes les routes CRUD pour les animaux seronts préfixées par `/pets`
 */
//app.use("/pets", PetsController);

/**
 * Homepage (uniquement necessaire pour cette demo)
 */
app.get('/', (req, res) => res.send('🏠'));

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

consumeKafka().then(() => {
    kafkaTest();
});
