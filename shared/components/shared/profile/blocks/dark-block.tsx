import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from '../../title';
import Link from 'next/link';

interface Props {
  title?: string;
  href: string;
  action: string;
  icon: React.ReactNode;
  className?: string;
}

export const DarkBlock: React.FC<Props> = ({ title, href, action, icon, className }) => {
  return (
    <Link
      href={href}
      className={cn(
        'flex flex-col p-6 bg-[hsla(0,0%,100%,.1)] transition-all hover:bg-[hsla(0,0%,100%,.2)]',
        className,
      )}>
      {title && (
        <header className="flex items-center justify-between">
          <Title text={title} size="lg" className="text-white" />
        </header>
      )}

      <div className="flex items-end justify-between mt-auto">
        <span className="transition-all">{action}</span>
        <div>{icon}</div>
      </div>
    </Link>
  );
};
