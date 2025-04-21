import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Change this to your backend base URL
});

export default instance;
