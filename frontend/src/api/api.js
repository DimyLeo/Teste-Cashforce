// require('dotenv').config();
import axios from 'axios';

const APP_API_HOST = process.env.APP_API_HOST || 'http://localhost:3000';

// export const api = axios.create({ baseURL: 'back-cashforce-test.up.railway.app' });
export const api = axios.create({ baseURL: APP_API_HOST });