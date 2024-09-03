'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { CategoriesDTO } from '@/@types/categories';
import { Button } from '../ui';
import { useCategoryState } from '@/store';
import { Title } from './title';
import { useMediaStore } from '@/store/media';

interface Props {
  title: string;
  items: CategoriesDTO[];
  className?: string;
}

export const Categories: React.FC<Props> = ({ title, items, className }) => {
  const [activeId, setActiveId, setName] = useCategoryState((state) => [
    state.activeId,
    state.setActiveId,
    state.setName,
  ]);
  const fetchMedia = useMediaStore((state) => state.fetchMedia);

  const onChangeCategory = (id: number, name: string) => {
    setActiveId(id);
    setName(name);
    if (name === 'Все категории') {
      fetchMedia('');
    } else {
      fetchMedia(`&genres.name=${name}`);
    }
  };

  return (
    <div className={cn('flex flex-col', className)}>
      <Title text={title} size="lg" />
      <div className="flex items-center overflow-x-auto scrollbar gap-4 py-3">
        <Button
          onClick={() => onChangeCategory(0, 'Все категории')}
          className={cn(
            'flex items-center transition-all duration-300 ease-in-out bg-gray-800 p-6 rounded-xl',
            'hover:opacity-80 text-lg',
            activeId === 0 &&
              'bg-[linear-gradient(90deg,#48078f,#004fd6)] opacity-100 transition-all',
          )}
          variant={'secondary'}>
          Все жанры
        </Button>
        {items?.map((item, i) => (
          <Button
            key={i}
            onClick={() => onChangeCategory(i + 1, item.name)}
            className={cn(
              'flex items-center transition-all duration-300 ease-in-out bg-gray-800 p-6 rounded-xl',
              'hover:opacity-80 text-lg',
              activeId === i + 1 &&
                'bg-[linear-gradient(90deg,#48078f,#004fd6)] opacity-100 transition-all',
            )}
            variant={'secondary'}>
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
