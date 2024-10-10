import React from 'react';
import Link from 'next/link';
import { Button } from '../ui';

interface Props {
  onClickSignIn: VoidFunction;
  className?: string;
}

export const ProfileButton: React.FC<Props> = ({ onClickSignIn, className }) => {
  return (
    <Button onClick={onClickSignIn} className="text-md" variant={'link'}>
      Войти
    </Button>
  );
};
