'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { NavItem } from './nav-item';
interface Props {
  items: {
    text: string;
    href: string;
  }[];
  active?: boolean;
  className?: string;
  childStyles?: string;
}

export const Navigation: React.FC<Props> = ({ items, className, active, childStyles }) => {
  return (
    <div className={cn('flex items-center flex-wrap gap-6', className)}>
      {items?.map((item, i) => (
        <NavItem
          key={i}
          text={item.text}
          href={item.href}
          childStyles={childStyles}
          active={active}
        />
      ))}
    </div>
  );
};
