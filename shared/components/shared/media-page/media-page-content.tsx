import React from 'react';
import { Title } from '../title';
import { MediaItem } from '@/@types/media-item';
import { Actions, Description, Details } from './content';
import { cn } from '@/shared/lib/utils';

interface Props {
  item: MediaItem;
  liked: boolean;
  onClickAddFavorites: VoidFunction;
  className?: string;
}

export const MediaPageContent: React.FC<Props> = ({
  item,
  liked,
  onClickAddFavorites,
  className,
}) => {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <Details
        ratingKp={item.rating.kp}
        year={item.year}
        genre={item.genres[0].name}
        age={item.ageRating}
        country={item.countries[0]?.name}
        movieLength={item.movieLength}
        seriesLength={item.seriesLength}
      />
      <Title text={item.name} size="xl" className="max-w-[672px]" />
      <Description
        shortDescription={item.shortDescription || ''}
        description={item.description || ''}
        className="text-lg max-w-[672px]"
      />
      <Actions isSeries={item.isSeries} liked={liked} onClickAddFavorites={onClickAddFavorites} />
    </div>
  );
};
