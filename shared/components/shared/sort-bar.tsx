'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Categories } from './categories';
import { CategoriesDTO } from '@/@types/categories';
import { useCategoryStore } from '@/shared/store';

interface Props {
  items: CategoriesDTO[];
  className?: string;
  isSeries: boolean;
}

export const SortBar: React.FC<Props> = ({ items, isSeries, className }) => {
  const [activeId, setActiveId, setName] = useCategoryStore((state) => [
    state.activeId,
    state.setActiveId,
    state.setName,
  ]);
  const onChangeCategory = (id: number, name: string) => {
    setActiveId(id);
    setName(name);
  };

  return (
    <div className={cn(className)}>
      <Categories title="По жанрам" items={items} activeId={activeId} onChange={onChangeCategory} />
    </div>
  );
};
