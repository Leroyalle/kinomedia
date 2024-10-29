import axios from 'axios';

export const kinoInstance = axios.create({
  headers: {
    'X-API-KEY': 'JB0803J-QP9412A-PA7X198-NMB4TZE',
  },
  baseURL: process.env.NEXT_PUBLIC_KINO_API_URL,
});

export const categoriesKinoInstance = axios.create({
  headers: {
    'X-API-KEY': 'JB0803J-QP9412A-PA7X198-NMB4TZE',
  },
  baseURL: process.env.CATEGORIES_API_URL,
});

export const userInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_USER_API_URL,
});
