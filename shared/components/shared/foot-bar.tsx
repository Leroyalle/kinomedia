import React from 'react';
import { cn } from '@/shared/lib/utils';
import { navigationData } from '@/shared/constants';
import { Navigation } from './navigation';

interface Props {
  className?: string;
}

export const FootBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      <Navigation items={navigationData.foot} childStyles={'nav-linear'} />
      <Navigation items={navigationData.options} childStyles={'nav-linear'} />
    </div>
  );
};
