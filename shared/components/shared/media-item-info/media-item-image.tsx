import React from 'react';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';
interface Props {
  previewUrl: string;
  name: string;
  className?: string;
}

export const MediaItemImage: React.FC<Props> = ({ previewUrl, name, className }) => {
  return (
    <img
      src={previewUrl}
      width={250}
      height={450}
      alt={name}
      className={cn('w-full aspect-[2/3] rounded-3xl object-cover', className)}
    />
  );
};
