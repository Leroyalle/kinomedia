import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from '../title';
import { Skeleton } from '../../ui';

interface Props {
  title: string;
  endAdornment: React.ReactNode;
  loading?: Boolean;
  className?: string;
}

export const TitleAndId: React.FC<Props> = ({ title, endAdornment, loading, className }) => {
  return (
    <header className={cn('flex items-center justify-between', className)}>
      <Title text={title} size="md" />
      {loading ? <Skeleton className="w-20 h-4 mt-3" /> : endAdornment}
    </header>
  );
};
