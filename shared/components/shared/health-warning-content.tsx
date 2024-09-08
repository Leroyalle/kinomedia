import React from 'react';
import { cn } from '@/shared/lib/utils';
import { CircleAlert } from 'lucide-react';

interface Props {
  className?: string;
}

export const HealthWarningContent: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-center gap-x-3 text-[#4b4b4b] bg-transparent', className)}>
      <CircleAlert size={48} />
      <p className="text-[20px]">
        Контент может содержать сцены курения и употребления спиртных напитков. Курение и чрезмерное
        употребление алкоголя вредит вашему здоровью.
      </p>
    </div>
  );
};
