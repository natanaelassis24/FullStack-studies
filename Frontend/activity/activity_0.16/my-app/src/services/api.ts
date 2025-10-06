// src/api.ts
import axios from 'axios';

const API_BASE_URL = 'https://crudcrud.com/api/f7e5f6ff57444c2c8c7278abbb90b61b/livros';

export const api = axios.create({
  baseURL: API_BASE_URL,
});
