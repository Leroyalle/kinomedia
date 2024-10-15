import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from '../title';

interface Props {
  title: string;
  endAdornment: React.ReactNode;
  className?: string;
}

export const TitleAndId: React.FC<Props> = ({ title, endAdornment, className }) => {
  return (
    // TODO: вынести в общие компоненты и переименовать
    <header className={cn('flex items-center justify-between', className)}>
      <Title text={title} size="md" />
      {endAdornment}
    </header>
  );
};
