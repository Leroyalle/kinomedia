import { MediaItem } from '@/@types/media-item';
import React from 'react';
import { MediaPageContent } from './media-page/media-page-content';
import { MediaPageBackdrop } from './media-page/media-page-backdrop';
import { cn } from '@/shared/lib/utils';
import { BackButton } from './back-button';

interface Props {
  item: MediaItem;
  className?: string;
}

export const MediaPageWrapper: React.FC<Props> = ({ item, className }) => {
  return (
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
  );
};
