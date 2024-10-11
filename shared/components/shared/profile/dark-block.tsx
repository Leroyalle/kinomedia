import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from '../title';

interface Props {
  title?: string;
  endAdornment: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const DarkBlock: React.FC<Props> = ({ title, endAdornment, children, className }) => {
  return (
    <article className={cn('flex flex-col p-6 bg-[hsla(0,0%,100%,.1)]', className)}>
      {title && (
        <header className="flex items-center justify-between">
          <Title text={title} size="lg" />
          {endAdornment}
        </header>
      )}

      <div>{children}</div>
    </article>
  );
};
