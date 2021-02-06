import express from 'express';

import CardController from '../controllers/CardController';

const CardRouter = express.Router();

const cardController = new CardController();

CardRouter.post('/', cardController.create);

export default CardRouter;
