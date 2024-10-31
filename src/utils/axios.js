import axios from 'axios';

export const host = 'http://127.0.0.1:8000';

const api = axios.create({
  baseURL: host + '/api', 
  headers: {
    'Content-Type': 'application/json',
    }
});


export default api;
