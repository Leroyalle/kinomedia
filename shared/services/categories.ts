import { CategoriesDTO } from '@/@types/categories';
import { ApiRouter } from './constants';
import { categoriesAxiosInstance } from './instance';

export const getAll = async () => {
  return (await categoriesAxiosInstance.get<CategoriesDTO[]>(ApiRouter.CATEGORIES)).data;
};
