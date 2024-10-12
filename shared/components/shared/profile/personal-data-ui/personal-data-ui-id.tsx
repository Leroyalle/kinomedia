import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Copy } from 'lucide-react';

interface Props {
  id: number;
  className?: string;
}

export const PersonalDataUiId: React.FC<Props> = ({ id, className }) => {
  return (
    <div className={cn('flex items-center gap-x-3 text-gray-400', className)}>
      <span>ID: {id}</span>
      <Copy size={20} />
    </div>
  );
};
