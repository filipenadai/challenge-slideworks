import express from 'express';

import cardRouter from './card.routes';

const router = express.Router();

router.use('/card', cardRouter);

export default router;
