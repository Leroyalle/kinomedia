import React from 'react';
import { cn } from '@/shared/lib/utils';
import { MyMedia } from '@/@types/my';
import { MediaItem } from '../../media-item';

interface Props {
  pages: MyMedia[][];
  className?: string;
}

export const MyMediaCollection: React.FC<Props> = ({ pages, className }) => {
  return (
    <div className={cn('flex flex-col justify-center gap-4', className)}>
      <div className="flex items-center flex-wrap gap-10">
        {pages.map((page) =>
          page.map((item) => (
            <MediaItem
              key={item.id + item.userId}
              id={item.mediaId}
              name={item.name}
              previewUrl={item.previewUrl}
              year={item.year}
              movieLength={item.movieLength}
              seriesLength={item.seriesLength}
              ratingKp={item.ratingKp}
            />
          )),
        )}
      </div>
    </div>
  );
};
