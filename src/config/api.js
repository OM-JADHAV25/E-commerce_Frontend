
import axios from 'axios';
const DEPLOYED='https://e-commerceserver-production-7e9d.up.railway.app'
const LOCALHOST='http://localhost:5454'

export const API_BASE_URL = DEPLOYED

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
