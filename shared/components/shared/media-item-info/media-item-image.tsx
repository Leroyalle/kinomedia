import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
  previewUrl: string;
  name: string;
  className?: string;
}

export const MediaItemImage: React.FC<Props> = ({ previewUrl, name, className }) => {
  return (
    <img
      src={previewUrl}
      alt={name}
      className={cn('w-full aspect-[2/3] rounded-3xl object-cover', className)}
    />
  );
};
