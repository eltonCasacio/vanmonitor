import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://api.webgazapp.com/api/',
  baseURL: 'http://192.168.15.6:8000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
