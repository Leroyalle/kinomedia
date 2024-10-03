import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from './title';
import { MediaItem } from './media-item';
import { MovieDTO } from '@/@types/mediaDTO';

interface Props {
  items: MovieDTO[];
  title?: string;
  limit?: number;
  className?: string;
}

export const MediaGroup: React.FC<Props> = ({ items, title, limit = 10, className }) => {
  return (
    <div className={cn('flex flex-col justify-center gap-4', className)}>
      {title && <Title size="lg" text={title} />}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 justify-center">
        {items.map((item) => (
          <MediaItem
            key={item.id}
            id={item.id}
            name={item.name}
            previewUrl={item?.poster?.previewUrl}
            year={item.year}
            movieLength={item.movieLength}
            seriesLength={item.seriesLength}
            isSeries={item.isSeries}
            ratingKp={item.rating.kp}
          />
        ))}
      </div>
    </div>
  );
};
