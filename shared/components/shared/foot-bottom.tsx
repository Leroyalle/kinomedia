import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Copyright } from './copyright';
import { Logo } from './logo';
import { SupportIcon } from './support-icon';

interface Props {
  className?: string;
}

export const FootBottom: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      <Copyright />
      <Logo w={145} h={50} className="brightness-50" />
      <SupportIcon />
    </div>
  );
};
