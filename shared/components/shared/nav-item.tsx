'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  text: string;
  href: string;
  onClick?: () => void;
  className?: string;
}

export const NavItem: React.FC<Props> = ({ text, href, onClick, className }) => {
  const pathname = usePathname();
  return (
    <Link
      onClick={onClick}
      href={href}
      className={cn(
        'block relative ',
        pathname === href &&
          'after:absolute after:w-full after:h-2 after:bg-gradient-to-b after:from-transparent after:via-purple-500 after:to-white after:opacity-1 after:transition-opacity after:duration-300 after:-bottom-3 after:left-0 after:right-0 after:scale-x-100 after:scale-y-100',
        className,
      )}>
      <span
        className={cn(
          `text-[16px] transition-all block text-white/60 hover:text-white`,
          pathname === href && 'text-white',
        )}>
        {text}
      </span>
    </Link>
  );
};
