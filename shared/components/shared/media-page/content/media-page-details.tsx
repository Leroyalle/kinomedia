import React from 'react';
import { cn } from '@/shared/lib/utils';
import { countMovieLength } from '@/shared/lib';
import { Badge } from '../../media-item-info';

interface Props {
  ratingKp: number;
  year: number;
  genre: string;
  age?: number;
  country?: string;
  movieLength?: number | null;
  seriesLength?: number | null;
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
    <div className={'flex items-center gap-5'}>
      <Badge
        ratingKp={ratingKp}
        className={cn('px-3 py-1 bg-gray-800 rounded-sm text-lg', className)}
      />
      {genre && <span className="block px-3 py-1 bg-gray-800 rounded-sm text-lg">{genre}</span>}
      {year && <span className="text-lg">{year}</span>}
      {age && <span className="text-lg">{age + '+'}</span>}
      {country && <span className="text-lg">{country}</span>}
      {(movieLength || seriesLength) && (
        <span className="text-lg">
          {movieLength ? `${normalizeHours} ${normalizeMinutes}` : `${seriesLength} серий`}
        </span>
      )}
    </div>
  );
};
