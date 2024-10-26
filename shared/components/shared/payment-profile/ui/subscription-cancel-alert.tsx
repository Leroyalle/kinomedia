import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/shared/components/ui';

interface Props {
  onClickConfirm: (confirm: Boolean) => void;
  isOpen: boolean;
}

export const SubscriptionCancelAlert: React.FC<Props> = ({ isOpen, onClickConfirm }) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="bg-black">
        <AlertDialogHeader>
          <AlertDialogTitle>Точно отменить подписку?</AlertDialogTitle>
          <AlertDialogDescription>
            Это действие нельзя отменить. Оно отменит подписку без возможности восстановления.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => onClickConfirm(false)}>Отмена</AlertDialogCancel>
          <AlertDialogAction onClick={() => onClickConfirm(true)}>Продолжить</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
