import React from 'react';
import Link from 'next/link';
import { Button } from '../ui';

interface Props {
  className?: string;
}

export const ProfileButton: React.FC<Props> = ({ className }) => {
  return (
    <Link href="/profile">
      <Button className="text-xl">Войти</Button>
    </Link>
  );
};
