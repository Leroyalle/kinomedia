import axios from 'axios';

export const axiosInstance = axios.create({
  headers: {
    'X-API-KEY': 'YQP86JV-2VQMG9F-GGMKNMV-6SFVYAN',
  },
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
});

export const categoriesAxiosInstance = axios.create({
  headers: {
    'X-API-KEY': 'YQP86JV-2VQMG9F-GGMKNMV-6SFVYAN',
  },
  baseURL: process.env.CATEGORIES_API_URL,
});
