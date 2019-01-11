import axios from 'axios';

const API = axios.create({
  baseURL: 'http://moneta.sofia3dd.net/api',
  // baseURL: '/api',
});

export default API;
