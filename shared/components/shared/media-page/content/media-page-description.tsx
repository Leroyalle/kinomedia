import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
  isItLong?: boolean;
  description: string;
  shortDescription?: string;
  className?: string;
}

export const MediaPageDescription: React.FC<Props> = ({
  isItLong,
  description,
  shortDescription,
  className,
}) => {
  if (isItLong) {
    return <p className={cn(className)}>{description}</p>;
  }
  return (
    <p className={cn(className)}>
      {shortDescription || (description && description?.substring(0, 140) + '...')}
    </p>
  );
};
