import express from 'express';

const server = express();

server.listen(3001, () => {
  console.log(`Server has been started!`);
});
