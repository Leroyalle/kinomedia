import axios from 'axios';

export const axiosInstance = axios.create({
  headers: {
    'X-API-KEY': 'M9FR37W-1FS4WZZ-KNXBQVP-CYJ943S',
  },
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
});

export const categoriesAxiosInstance = axios.create({
  headers: {
    'X-API-KEY': 'M9FR37W-1FS4WZZ-KNXBQVP-CYJ943S',
  },
  baseURL: process.env.CATEGORIES_API_URL,
});
