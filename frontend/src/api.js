import axios from 'axios';

const API = axios.create({
  baseURL: 'https://scaling-space-doodle-q746x7v6j59vcw6q-5000.app.github.dev/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default API;