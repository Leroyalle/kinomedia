import React from 'react';
import { cn } from '@/shared/lib/utils';
import { countMovieLength } from '@/shared/lib';
import { Badge } from '../../media-item-info';

interface Props {
  ratingKp: number;
  year: number;
  genre: string;
  age: number;
  country: string;
  movieLength: number | null;
  seriesLength: number | null;
  className?: string;
}

export const MediaPageDetails: React.FC<Props> = ({
  ratingKp,
  year,
  genre,
  age,
  country,
  movieLength,
  seriesLength,
  className,
}) => {
  const { hours, minutes } = movieLength ? countMovieLength(movieLength) : {};
  const normalizeHours = hours ? hours + ' ч' : '';
  const normalizeMinutes = minutes ? minutes + ' мин' : '';
  return (
    <div className={cn('flex items-center gap-5', className)}>
      <Badge ratingKp={ratingKp} className="px-3 py-1 bg-gray-800 rounded-sm  text-lg" />
      <span className="block px-3 py-1 bg-gray-800 rounded-sm text-lg">{genre}</span>
      <span className="text-lg">{year}</span>
      <span className="text-lg">{age && age + '+'}</span>
      <span className="text-lg">{country}</span>
      <span className="text-lg">
        {movieLength ? `${normalizeHours} ${normalizeMinutes}` : `${seriesLength} серий`}
      </span>
    </div>
  );
};
