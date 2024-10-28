import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/components/ui';
import { Forward, Heart } from 'lucide-react';

interface Props {
  isSeries: boolean;
  liked: boolean;
  onClickAddFavorites: VoidFunction;
  className?: string;
}

export const MediaPageActions: React.FC<Props> = ({
  isSeries,
  liked,
  onClickAddFavorites,
  className,
}) => {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <Button variant={'secondary'} className="py-6 px-8 text-lg">
        Смотреть {isSeries ? 'сериал' : 'фильм'}
      </Button>
      <Button variant="ghost" className="py-6 px-8 text-lg">
        Трейлер
      </Button>
      <Button onClick={onClickAddFavorites} variant="ghost" className="py-6 px-4">
        <Heart className={cn(liked && ' fill-white')} />
      </Button>
      <Button variant="ghost" className="py-6 px-4">
        <Forward />
      </Button>
    </div>
  );
};
