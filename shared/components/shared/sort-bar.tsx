'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Categories } from './categories';
import { CategoriesDTO } from '@/@types/categories';

import { useFilters } from '@/shared/hooks';

interface Props {
  items: CategoriesDTO[];
  className?: string;
  isSeries: boolean;
}

export const SortBar: React.FC<Props> = ({ items, className }) => {
  const { genreName, onChangeCategory } = useFilters();

  return (
    <div className={cn(className)}>
      <Categories
        title="По жанрам"
        items={items}
        activeName={genreName}
        onChange={onChangeCategory}
      />
    </div>
  );
};
