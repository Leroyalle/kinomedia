import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
  description: string;
  shortDescription: string;
  className?: string;
}

export const MediaPageDescription: React.FC<Props> = ({
  description,
  shortDescription,
  className,
}) => {
  return (
    <p className={cn(className)}>
      {shortDescription || (description && description?.substring(0, 140) + '...')}
    </p>
  );
};
