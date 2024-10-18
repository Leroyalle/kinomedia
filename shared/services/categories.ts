import { CategoriesDTO } from '@/@types/categories';
import { ApiRouter } from './constants';
import { categoriesKinoInstance } from './instance';

export const getAll = async () => {
  return (await categoriesKinoInstance.get<CategoriesDTO[]>(ApiRouter.CATEGORIES)).data;
};
