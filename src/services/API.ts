import axios from 'axios';

const API = axios.create({
  // baseURL: 'http://moneta.sofia3dd.net',
  baseURL: '/api',
});

export default API;
