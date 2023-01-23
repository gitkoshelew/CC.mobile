import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:7007/api',
  withCredentials: true,
});
