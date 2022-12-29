import axios from 'axios';

const PROTOCOL = process.env.APP_API_PROTOCOL || 'http';
const HOST = process.env.APP_API_HOST || 'localhost:3000';

// export const api = axios.create({ baseURL: 'back-cashforce-test.up.railway.app' });
export const api = axios.create({ 
  baseURL: `${PROTOCOL}://${HOST}`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});