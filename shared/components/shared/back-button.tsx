'use client';
import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '@/shared/lib/utils';

interface Props {
  className?: string;
}

export const BackButton: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className={cn('flex items-center z-20 transition hover:opacity-85', className)}>
      <ChevronLeft size={18} />
      <span>Назад</span>
    </button>
  );
};
