import axios from 'axios';

export const axiosInstance = axios.create({
  headers: {
    'X-API-KEY': 'F5AVN2F-J2F4PNY-QW7PNNT-W5AYC4Q',
  },
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
});

export const categoriesAxiosInstance = axios.create({
  headers: {
    'X-API-KEY': 'F5AVN2F-J2F4PNY-QW7PNNT-W5AYC4Q',
  },
  baseURL: process.env.CATEGORIES_API_URL,
});
