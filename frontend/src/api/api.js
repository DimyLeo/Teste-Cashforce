import axios from 'axios';

export const api = axios.create({ baseURL: 'https://back-cashforce-test.up.railway.app' });