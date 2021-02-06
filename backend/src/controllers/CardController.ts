import { Request, Response } from 'express';

import CreateCardService from '../services/CreateCardService';

export default class CardController {
  public async create(request: Request, response: Response): Promise<Response> {
    const createCard = new CreateCardService();

    await createCard.execute({ name: 'a' });

    return response.json({ ok: true });
  }
}
