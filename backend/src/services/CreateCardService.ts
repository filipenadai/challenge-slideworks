import api from '../config/api';

import { apiKey, apiToken, trelloBoard } from '../config/constants';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
}

export default class CreateCardService {
  public async execute({ name, email }: Request): Promise<void> {
    const existBoard = await api.get(`/1/boards/${trelloBoard}`, {
      params: {
        key: apiKey,
        token: apiToken,
      },
    });

    if (existBoard.status !== 200) {
      throw new AppError('Board not exists!');
    }

    const listsInBoard = await api.get(`/1/boards/${trelloBoard}/lists`, {
      params: {
        key: apiKey,
        token: apiToken,
      },
    });

    let idOfCard;

    if (listsInBoard.data.length > 0) {
      idOfCard = listsInBoard.data[0].id;
    }

    if (listsInBoard.data.length === 0) {
      const newList = await api.post(
        '/1/lists',
        {},
        {
          params: {
            key: apiKey,
            idBoard: existBoard.data.id,
            token: apiToken,
            name: 'Candidatos',
          },
        },
      );

      if (newList.status !== 200) {
        throw new AppError('Error on create a list!');
      }

      idOfCard = newList.data.id;
    }

    try {
      await api.post(
        '/1/cards',
        {},
        {
          params: {
            key: apiKey,
            idList: idOfCard,
            token: apiToken,
            name,
            desc: `E-mail: ${email}`,
          },
        },
      );
    } catch (err) {
      throw new AppError('Error on create a card!');
    }
  }
}
