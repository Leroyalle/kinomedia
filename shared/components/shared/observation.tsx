import React from 'react';
import { cn } from '@/shared/lib/utils';
import { CircleAlert } from 'lucide-react';

interface Props {
  text: string;
  variant?: 'small' | 'big';
  className?: string;
}

export const Observation: React.FC<Props> = ({ text, variant = 'small', className }) => {
  return (
    <div className={cn('flex items-center gap-x-3 text-[#4b4b4b] bg-transparent', className)}>
      <CircleAlert size={variant === 'big' ? 48 : 20} />
      <p className={variant === 'big' ? 'text-[20px]' : 'text-[16px]'}>{text}</p>
    </div>
  );
};
