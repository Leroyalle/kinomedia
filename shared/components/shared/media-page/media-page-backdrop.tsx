import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
  imageUrl: string;
  className?: string;
}

export const MediaPageBackdrop: React.FC<Props> = ({ imageUrl, className }) => {
  return (
    <div
      className={cn(className)}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'top 30% right',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};
