import React from 'react';
import { cn } from '@/shared/lib/utils';
import { countMovieLength } from '@/shared/lib';

interface Props {
  name: string;
  year: number;
  movieLength: number;
  seriesLength: number | null;
  className?: string;
}

export const MediaItemInfo: React.FC<Props> = ({
  name,
  year,
  movieLength,
  seriesLength,
  className,
}) => {
  const { hours, minutes } = countMovieLength(movieLength);
  const normalizeHours = hours ? hours + ' ч' : '';
  const normalizeMinutes = minutes ? minutes + ' мин' : '';
  return (
    <>
      <p className={cn(className)}>{name}</p>
      <p className={cn(className)}>
        {year}{' '}
        {movieLength || seriesLength
          ? movieLength
            ? `${normalizeHours} ${normalizeMinutes}`
            : `${seriesLength} серий`
          : ''}
      </p>
    </>
  );
};
