import axios from 'axios';

const api = axios.create({
    baseURL: 'https://primesolutions.com.br/fatec/'
  });
   
  export default api;