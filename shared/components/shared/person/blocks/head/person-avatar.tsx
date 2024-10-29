import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
  imageUrl: string;
  name: string;
  className?: string;
}

export const PersonAvatar: React.FC<Props> = ({ imageUrl, name, className }) => {
  return (
    <img
      className={cn('w-full h-full object-cover', className)}
      src={imageUrl}
      alt={name}
      width={100}
      height={100}
    />
  );
};
