import express from 'express';

import routes from './routes';

const server = express();

server.use(routes);

server.listen(3001, () => {
  console.log(`Server has been started!`);
});
