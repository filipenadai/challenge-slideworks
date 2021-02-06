import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.trello.com',
});

export default api;
