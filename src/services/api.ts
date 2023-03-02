import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://api.webgazapp.com/api/',
  baseURL: 'http://192.168.15.5:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
