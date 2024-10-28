import axios from 'axios';

export const kinoInstance = axios.create({
  headers: {
    'X-API-KEY': '2Y4C180-B4D4WGR-KAEF8D6-MDQJK5C',
  },
  baseURL: process.env.NEXT_PUBLIC_KINO_API_URL,
});

export const categoriesKinoInstance = axios.create({
  headers: {
    'X-API-KEY': '2Y4C180-B4D4WGR-KAEF8D6-MDQJK5C',
  },
  baseURL: process.env.CATEGORIES_API_URL,
});

export const userInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_USER_API_URL,
});
