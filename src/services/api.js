import axios from 'axios';

const api = axios.create({
  baseURL: 'https://music-api-005.herokuapp.com/v1/',
});

export default api;
