import axios from 'axios';

const API = axios.create({
  baseURL: 'https://us-central1-moneta-f39eb.cloudfunctions.net',
});

export default API;
