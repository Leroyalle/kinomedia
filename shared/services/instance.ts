import axios from 'axios';

export const kinoInstance = axios.create({
  headers: {
    'X-API-KEY': 'YQP86JV-2VQMG9F-GGMKNMV-6SFVYAN',
  },
  baseURL: process.env.NEXT_PUBLIC_KINO_API_URL,
});

export const categoriesKinoInstance = axios.create({
  headers: {
    'X-API-KEY': 'YQP86JV-2VQMG9F-GGMKNMV-6SFVYAN',
  },
  baseURL: process.env.CATEGORIES_API_URL,
});

export const userInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_USER_API_URL,
});
