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
        'block px-3 py-1',
        pathname === `${href}` && 'text-lg bg-white rounded-3xl text-black',
        className,
      )}>
      <span className={`text-lg transition-all block`}>{text}</span>
    </Link>
  );
};
