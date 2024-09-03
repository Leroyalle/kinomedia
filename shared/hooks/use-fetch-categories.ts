import { CategoriesDTO } from '@/@types/categories';
import { Api } from '../services/api-client';

export async function useFetchCategories(): Promise<CategoriesDTO[]> {
  try {
    const items = await Api.categories.getAll();
    return items;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}
