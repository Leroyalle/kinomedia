import axios from 'axios';

export const kinoInstance = axios.create({
  headers: {
    'X-API-KEY': '55V2QQ8-Y4A4NFK-NY4ZR38-SB4PXDN',
  },
  baseURL: process.env.NEXT_PUBLIC_KINO_API_URL,
});

export const categoriesKinoInstance = axios.create({
  headers: {
    'X-API-KEY': '55V2QQ8-Y4A4NFK-NY4ZR38-SB4PXDN',
  },
  baseURL: process.env.CATEGORIES_API_URL,
});

export const userInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_USER_API_URL,
});
