import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Clapperboard } from 'lucide-react';

interface Props {
  className?: string;
}

export const Copyright: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex flex-wrap gap-3 items-center', className)}>
      <Clapperboard size={30} />
      <div className="flex flex-col">
        <span className="text-white/70">2024, ООО "Kinomedia"</span>
        <span className="text-white/70">Все права защищены.</span>
      </div>
    </div>
  );
};
