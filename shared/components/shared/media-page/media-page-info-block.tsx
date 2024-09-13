'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { MediaPageDescription } from './content/media-page-description';
import { MediaItem } from '@/@types/media-item';
import { Actors, Info, Titles } from './info';
import { filterPersonsData } from '@/shared/lib';
import { HealthWarningContent } from '../health-warning-content';

interface Props {
  item: MediaItem;
  className?: string;
}

export const MediaPageInfoBlock: React.FC<Props> = ({ item, className }) => {
  const [value, setValue] = React.useState<1 | 2 | 3>(1);
  filterPersonsData(item.persons);

  const onChangeInfo = (value: 1 | 2 | 3) => {
    setValue(value);
  };
  return (
    <section className={cn('flex flex-col gap-3', className)}>
      <Titles value={value} onClick={onChangeInfo} />
      {value === 1 && (
        <>
          <MediaPageDescription
            isItLong={true}
            description={item.description || ''}
            className={'text-[20px]'}
          />
          {item.ageRating >= 18 && <HealthWarningContent />}
        </>
      )}
      {value === 2 && <Actors data={filterPersonsData(item.persons)} />}
      {value === 3 && (
        <Info
          countries={item.countries}
          genres={item.genres}
          alternativeName={item.alternativeName}
          premiere={item.premiere.world}
          movieLength={item.movieLength}
          seriesLength={item.seriesLength}
          ratingKp={item.rating.kp}
        />
      )}
    </section>
  );
};
