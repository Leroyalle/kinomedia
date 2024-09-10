import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from '../ui';

interface Props {
  className?: string;
}

export const SupportButton: React.FC<Props> = ({ className }) => {
  return (
    <Button variant={'ghost'} className={cn('text-base p-5', className)}>
      Написать в поддержку
    </Button>
  );
};
