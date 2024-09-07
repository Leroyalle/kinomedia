'use client';
import React from 'react';
import { useCategoryStore } from '../store/category';
import { CategoriesDTO } from '@/@types/categories';

interface ReturnProps {
  items: CategoriesDTO[];
  activeId: number;
  name: string;
  setActiveId: (activeId: number) => void;
  setName: (name: string) => void;
  reset: () => void;
}

export const useSortBar = (): ReturnProps => {
  const categoryStore = useCategoryStore((state) => state);

  return categoryStore;
};
