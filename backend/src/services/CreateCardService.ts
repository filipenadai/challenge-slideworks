import api from '../config/api';

import { apiKey, apiToken, trelloBoard } from '../config/constants';

interface Request {
  name: string;
}

export default class CreateCardService {
  public async execute({ name }: Request): Promise<void> {
    const idListTrelloBoard = await api.get(`/1/boards/${trelloBoard}/lists`, {
      params: {
        key: apiKey,
        token: apiToken,
      },
    });

    const { id } = idListTrelloBoard.data[0];

    api
      .post(
        '/1/cards',
        {},
        {
          params: {
            key: apiKey,
            idList: id,
            token: apiToken,
          },
        },
      )
      .then(txt => console.log(txt))
      .catch(err => console.log(err));
  }
}
