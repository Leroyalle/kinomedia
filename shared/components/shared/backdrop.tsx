import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
  imageUrl: string;
  className?: string;
}

export const Backdrop: React.FC<Props> = ({ imageUrl, className }) => {
  return (
    <div
      className={cn(className)}
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
        backgroundColor: imageUrl ? 'transparent' : 'black',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};
