import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/components/ui';
import { Forward, Heart } from 'lucide-react';
import { ShareLink } from '../../share-link';
import { shareLinkData } from '@/shared/constants';
import { useClickAway } from 'react-use';

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
  const [linkIsOpened, setLinkIsOpened] = React.useState(false);
  const ref = React.useRef(null);
  useClickAway(ref, () => {
    setLinkIsOpened(false);
  });

  return (
    <div ref={ref} className={cn('w-fit flex items-center gap-4', className)}>
      <Button variant={'secondary'} className="py-6 px-8 text-lg">
        Смотреть {isSeries ? 'сериал' : 'фильм'}
      </Button>
      <Button variant="ghost" className="py-6 px-8 text-lg">
        Трейлер
      </Button>
      <Button onClick={onClickAddFavorites} variant="ghost" className="py-6 px-4">
        <Heart className={cn(liked && ' fill-white')} />
      </Button>
      <Button variant="ghost" className="py-6 px-4" onClick={() => setLinkIsOpened(!linkIsOpened)}>
        <Forward />
      </Button>
      <div
        className={cn(
          'absolute left-64 bottom-12 w-[250px] transition-all opacity-0 invisible',
          linkIsOpened && 'opacity-1 visible',
        )}>
        <ShareLink items={shareLinkData} />
      </div>
    </div>
  );
};
