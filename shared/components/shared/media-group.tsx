import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from './title';
import { MediaItem } from './media-item';
import { MovieDTO } from '@/@types/mediaDTO';
import { MediaItemsSkeleton } from './media-items-skeleton';

interface Props {
  items?: MovieDTO[];
  loading: boolean;
  className?: string;
}

export const MediaGroup: React.FC<Props> = ({ items, loading, className }) => {
  if (!items || loading) {
    return <MediaItemsSkeleton limit={20} />;
  }

  return (
    <div className={cn('flex flex-col justify-center gap-2', className)}>
      {/* <Title size="lg" text={title} /> */}
      <div className="flex items-center gap-10 flex-wrap w-fit justify-center">
        {items?.map((item) => (
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
