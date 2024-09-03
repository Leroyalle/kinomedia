import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Search } from 'lucide-react';
import { Input } from '../ui';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-center', className)}>
      <div className="flex items-center relative">
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-500" />
        <Input
          className="text-black text-lg font-bold rounded-2xl outline-none w-full min-w-96 bg-gray-100 pl-11"
          placeholder="Найти фильм..."
          type="text"
        />
      </div>
    </div>
  );
};
