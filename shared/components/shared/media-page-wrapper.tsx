'use client';
import React from 'react';
import toast from 'react-hot-toast';
import { cn } from '@/shared/lib/utils';
import { MediaItem } from '@/@types/media-item';
import { Content, Creators, InfoBlock, SimilarMovies } from './media-page';
import { BackButton } from './back-button';
import { Title } from './title';
import { Backdrop } from './backdrop';
import { useCheckIfMediaLiked, useFetchMyMedia } from '@/shared/hooks';

interface Props {
  item: MediaItem;
  className?: string;
}

export const MediaPageWrapper: React.FC<Props> = ({ item, className }) => {
  const { checkedData, saveMutate, deleteMutate } = useFetchMyMedia();
  const { liked, setLiked } = useCheckIfMediaLiked(checkedData, item);

  const onClickAddFavorites = () => {
    try {
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
        setLiked(true);
        toast.success('Сохранено!', { icon: '✅' });
      } else {
        deleteMutate(item.id);
        setLiked(false);
        toast.success('Удалено!', { icon: '🚮' });
      }
    } catch (error) {
      console.log(error);
      toast.error('Не удалось удалить!', { icon: '❌' });
    }
  };

  return (
    <div>
      <section
        className={cn(`relative flex justify-between items-top h-full backdrop-shadow`, className)}>
        <div className="pb-[45%] block" />
        <Backdrop imageUrl={item.backdrop?.url} className="absolute w-full h-full inset-0 -z-10" />
        <BackButton className="absolute top-4 left-0 pl-0 text-white text-md" />
        <div className="absolute w-full h-full flex items-center top-0 left-0">
          <Content item={item} liked={liked} onClickAddFavorites={() => onClickAddFavorites()} />
        </div>
      </section>
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
