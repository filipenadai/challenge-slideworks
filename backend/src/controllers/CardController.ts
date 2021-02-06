import { Request, Response } from 'express';

import CreateCardService from '../services/CreateCardService';

export default class CardController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createCard = new CreateCardService();

    await createCard.execute({
      name,
      email,
    });

    return response.json({ success: true });
  }
}
