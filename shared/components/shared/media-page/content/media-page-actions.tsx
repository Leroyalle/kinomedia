import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/components/ui';
import { Bookmark, Forward, Heart } from 'lucide-react';

interface Props {
  isSeries: boolean;
  className?: string;
}

export const MediaPageActions: React.FC<Props> = ({ isSeries, className }) => {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <Button variant={'secondary'} className="py-6 px-8 text-lg">
        Смотреть {isSeries ? 'сериал' : 'фильм'}
      </Button>
      <Button variant="ghost" className="py-6 px-8 text-lg">
        Трейлер
      </Button>
      <Button variant="ghost" className="py-6 px-4">
        <Bookmark />
      </Button>
      <Button variant="ghost" className="py-6 px-4">
        <Heart />
      </Button>
      <Button variant="ghost" className="py-6 px-4">
        <Forward />
      </Button>
    </div>
  );
};
