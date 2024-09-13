import axios from 'axios';

export const axiosInstance = axios.create({
  headers: {
    'X-API-KEY': 'SMF2M17-D074329-QBAG7RZ-MBRR9QB',
  },
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
});

export const categoriesAxiosInstance = axios.create({
  headers: {
    'X-API-KEY': 'SMF2M17-D074329-QBAG7RZ-MBRR9QB',
  },
  baseURL: process.env.CATEGORIES_API_URL,
});
