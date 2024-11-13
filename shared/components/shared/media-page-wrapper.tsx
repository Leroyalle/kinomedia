'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { MediaItem } from '@/@types/media-item';
import { Content, Creators, InfoBlock, SimilarMovies } from './media-page';
import { BackButton } from './back-button';
import { Title } from './title';
import { Backdrop } from './backdrop';
import { useCheckIfMediaLiked, useFetchMyMedia } from '@/shared/hooks';
import { useRouter } from 'next/navigation';
import { MediaPlayer } from './media-player';

interface Props {
  auth: boolean;
  subscription: boolean;
  item: MediaItem;
  className?: string;
}

export const MediaPageWrapper: React.FC<Props> = ({ auth, subscription, item, className }) => {
  const router = useRouter();
  const [isOpened, setIsOpened] = React.useState(false);
  const {
    checkedData,
    isLoading,
    saveMutate,
    deleteMutate,
    liked,
    setLiked,
    isSavingPending,
    isDeletingPending,
  } = useFetchMyMedia(auth);
  useCheckIfMediaLiked(checkedData, item, setLiked);

  const onClickAddFavorites = () => {
    if (auth) {
      if (!liked) {
        saveMutate({
          mediaId: item.id,
          name: item.name,
          previewUrl: item.poster.previewUrl,
          year: item.year,
          movieLength: item.movieLength,
          seriesLength: item.seriesLength,
          ratingKp: item.rating.kp,
        });
      } else {
        deleteMutate(item.id);
      }
    } else {
      router.push('/authorize');
    }
  };

  const onClickWatchMedia = () => {
    if (!auth) {
      router.push('/authorize');
      return;
    }
    if (!subscription) {
      router.push('/payment');
      return;
    }
    setIsOpened(true);
  };

  return (
    <div>
      <section
        className={cn(`relative flex justify-between items-top h-full backdrop-shadow`, className)}>
        <div className="pb-[45%] block" />
        <Backdrop imageUrl={item.backdrop?.url} className="absolute w-full h-full inset-0 -z-10" />
        <BackButton className="absolute top-4 left-0 pl-0 text-white text-md" />
        <div className="absolute w-full h-full flex items-center top-0 left-0">
          <Content
            item={item}
            liked={liked}
            onClickAddFavorites={() => onClickAddFavorites()}
            onClickWatchMedia={() => onClickWatchMedia()}
            lovesLoading={isSavingPending || isDeletingPending || isLoading}
          />
        </div>
      </section>
      {/* {isOpened && <MediaPlayer mediaId={item.id} onClose={() => setIsOpened(false)} />} */}
      <InfoBlock item={item} />
      <div className="flex flex-col gap-2 mt-10">
        <Title text="Актеры и создатели" size={'lg'} />
        <div>
          <Creators persons={item.persons} />
        </div>
      </div>
      <SimilarMovies id={item.id} />
    </div>
  );
};
