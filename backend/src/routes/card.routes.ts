import express from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import CardController from '../controllers/CardController';

const CardRouter = express.Router();

const cardController = new CardController();

CardRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    },
  }),
  cardController.create,
);

export default CardRouter;
