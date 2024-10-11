import axios from 'axios';

export const axiosInstance = axios.create({
  headers: {
    'X-API-KEY': '2Y4C180-B4D4WGR-KAEF8D6-MDQJK5C',
  },
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
});

export const categoriesAxiosInstance = axios.create({
  headers: {
    'X-API-KEY': '2Y4C180-B4D4WGR-KAEF8D6-MDQJK5C',
  },
  baseURL: process.env.CATEGORIES_API_URL,
});
