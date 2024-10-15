import axios from 'axios';

export const axiosInstance = axios.create({
  headers: {
    'X-API-KEY': 'PM6CVS6-R6R4BJR-JZA6A0Z-JKSPJY8',
  },
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
});

export const categoriesAxiosInstance = axios.create({
  headers: {
    'X-API-KEY': 'PM6CVS6-R6R4BJR-JZA6A0Z-JKSPJY8',
  },
  baseURL: process.env.CATEGORIES_API_URL,
});
