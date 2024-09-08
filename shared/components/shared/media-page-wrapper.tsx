import { MediaItem } from '@/@types/media-item';
import React from 'react';
import { MediaPageContent } from './media-page/media-page-content';
import { MediaPageBackdrop } from './media-page/media-page-backdrop';
import { cn } from '@/shared/lib/utils';
import { BackButton } from './back-button';
import { MediaPageInfoBlock } from './media-page/media-page-info-block';
import { MediaPageCreators } from './media-page/media-page-creators';
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
        <MediaPageBackdrop
          imageUrl={item.backdrop?.url}
          className="absolute w-full h-full inset-0 -z-10"
        />
        <BackButton className="absolute top-4 left-0" />
        <div className="absolute w-full h-full flex items-center top-0 left-0">
          <MediaPageContent item={item} className="" />
        </div>
      </section>
      <MediaPageInfoBlock item={item} />
      <div className="flex flex-col gap-2 mt-10">
        <Title text="Актеры и создатели" size={'md'} />
        <div>
          <MediaPageCreators persons={item.persons} />
        </div>
      </div>
      <div className="pb-[50%]" />
    </div>
  );
};
