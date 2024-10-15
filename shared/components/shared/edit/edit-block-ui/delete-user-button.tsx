'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/components/ui';
import { Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { deleteUser } from '@/app/actions';
import { signOut } from 'next-auth/react';

interface Props {
  className?: string;
}

export const DeleteUserButton: React.FC<Props> = ({ className }) => {
  const onClickDelete = async () => {
    try {
      if (window.confirm('Удалить аккаунт?')) {
        await signOut({
          callbackUrl: '/',
        });
        await deleteUser();

        toast.success('Аккаунт успешно удален', {
          icon: '✅',
        });
      }
    } catch (error) {
      toast.error('Не удалось удалить аккаунт', {
        icon: '❌',
      });
    }
  };
  return (
    <Button
      variant={'ghost'}
      className={cn('flex items-center gap-x-2', className)}
      onClick={() => onClickDelete()}>
      <Trash2 />
      Удалить аккаунт
    </Button>
  );
};
