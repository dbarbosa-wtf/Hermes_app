import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.rafaelmarquespaixao.com:3000/',
});

export default api;
