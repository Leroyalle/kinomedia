import axios from 'axios';

export const kinoInstance = axios.create({
  headers: {
    'X-API-KEY': 'PM6CVS6-R6R4BJR-JZA6A0Z-JKSPJY8',
  },
  baseURL: process.env.NEXT_PUBLIC_KINO_API_URL,
});

export const categoriesKinoInstance = axios.create({
  headers: {
    'X-API-KEY': 'PM6CVS6-R6R4BJR-JZA6A0Z-JKSPJY8',
  },
  baseURL: process.env.CATEGORIES_API_URL,
});

export const userInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_USER_API_URL,
});
