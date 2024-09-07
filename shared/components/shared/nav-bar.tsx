'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { usePathname } from 'next/navigation';
import { NavItem } from './nav-item';

interface Props {
  className?: string;
}

export const NavBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-center flex-wrap gap-6', className)}>
      <NavItem text={'Главная'} href={'/'} />
      <NavItem text={'Фильмы'} href={'/films'} />
      <NavItem text={'Сериалы'} href={'/series'} />
      <NavItem text={'Мультфильмы'} href={'/cartoons'} />
    </div>
  );
};
