'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  text: string;
  href: string;
  onClick?: () => void;
  active?: boolean;
  childStyles?: string;
  className?: string;
}

export const NavItem: React.FC<Props> = ({
  text,
  href,
  onClick,
  active = false,
  childStyles,
  className,
}) => {
  const pathname = usePathname();
  return (
    <Link onClick={onClick} href={href} className={cn('block relative ', className)}>
      <span
        className={cn(
          `text-[16px] block w-full z-50`,
          active && pathname === href && 'active-page',
          childStyles,
        )}>
        {text}
      </span>
    </Link>
  );
};
