'use client';
import React from 'react';
import { Button } from '../../ui';
import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';
import { cn } from '@/shared/lib/utils';

interface Props {
  className?: string;
}

export const SignOutButton: React.FC<Props> = ({ className }) => {
  return (
    <Button className={cn('flex gap-x-2', className)} variant="ghost" onClick={() => signOut()}>
      <LogOut /> <span>Выйти из профиля</span>
    </Button>
  );
};
