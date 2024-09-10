import React from 'react';
import { cn } from '@/shared/lib/utils';
import { MediaItem } from '@/@types/media-item';
import { Backdrop, Content, Creators, InfoBlock, SimilarMovies } from './media-page';
import { BackButton } from './back-button';
import { Title } from './title';

interface Props {
  item: MediaItem;
  className?: string;
}

export const MediaPageWrapper: React.FC<Props> = ({ item, className }) => {
  return (
    <div>
      <section
        className={cn(`relative flex justify-between items-top h-full backdrop-shadow`, className)}>
        <div className="pb-[45%] block" />
        <Backdrop imageUrl={item.backdrop?.url} className="absolute w-full h-full inset-0 -z-10" />
        <BackButton className="absolute top-4 left-0" />
        <div className="absolute w-full h-full flex items-center top-0 left-0">
          <Content item={item} className="" />
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
