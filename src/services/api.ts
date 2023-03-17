import axios from 'axios';
import { Config } from '@config/conf'

const api = axios.create({
  baseURL: Config.BASE_URL,
});

export default api;
