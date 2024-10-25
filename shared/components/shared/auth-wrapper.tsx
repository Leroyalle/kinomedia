'use client';
import React from 'react';
import { AuthModal } from './modals';
import { useRouter } from 'next/navigation';

interface Props {
  className?: string;
}

export const AuthWrapper: React.FC<Props> = ({ className }) => {
  const [isOpened, setIsOpened] = React.useState(true);
  const router = useRouter();

  return <AuthModal open={isOpened} onClose={() => router.back()} />;
};
