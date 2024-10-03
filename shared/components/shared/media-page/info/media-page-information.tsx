import React from 'react';
import { cn } from '@/shared/lib/utils';
import Link from 'next/link';
import { countMovieLength } from '@/shared/lib';

interface Props {
  countries: Array<{
    name: string;
  }>;
  genres: Array<{
    name: string;
  }>;
  alternativeName: string | null;
  premiere: Date | null;
  movieLength: number | null;
  seriesLength: number | null;
  ratingKp: number;
  className?: string;
}

export const MediaPageInformation: React.FC<Props> = ({
  countries,
  genres,
  alternativeName,
  premiere,
  movieLength,
  seriesLength,
  ratingKp,
  className,
}) => {
  const { hours, minutes } = movieLength ? countMovieLength(movieLength) : { hours: 0, minutes: 0 };
  const normalizeHours = hours ? hours + ' ч' : '';
  const normalizeMinutes = minutes ? minutes + ' мин' : '';
  return (
    <div className={cn('grid grid-cols-2 gap-x-4 gap-y-4 max-w-[600px]', className)}>
      {countries && (
        <div className="flex flex-col">
          <p className="text-white/50 text-[22px] font-medium">Страны</p>
          <div>
            {countries.map(({ name }, i) => (
              <Link href={'/'} className="text-[20px] transition hover:text-[#bc88ff]" key={i}>
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
      {genres && (
        <div className="flex flex-col">
          <p className="text-white/50 text-[22px] font-medium">Жанры</p>
          <div>
            {genres.map(({ name }, i) => (
              <Link href={'/'} className="text-[20px] transition hover:text-[#bc88ff]" key={i}>
                {name.charAt(0).toUpperCase() + name.slice(1) + ' '}
              </Link>
            ))}
          </div>
        </div>
      )}
      {alternativeName && (
        <div className="flex flex-col">
          <p className="text-white/50 text-[22px] font-medium">Оригинальное название</p>
          <span className="text-[20px]">{alternativeName}</span>
        </div>
      )}
      {premiere && (
        <div className="flex flex-col">
          <p className="text-white/50 text-[22px]">Мировая премьера</p>
          <span className="text-[20px]">{new Date(premiere).toLocaleDateString()}</span>
        </div>
      )}
      {(movieLength || seriesLength) && (
        <div className="flex flex-col">
          <p className="text-white/50 text-[22px] font-medium">Длительность</p>
          <span className="text-[20px]">
            {movieLength ? `${normalizeHours} ${normalizeMinutes}` : `${seriesLength} серий`}
          </span>
        </div>
      )}
      {ratingKp && (
        <div className="flex flex-col">
          <p className="text-white/50 text-[22px] font-medium">Рейтинг</p>
          <span className="text-[20px]">{ratingKp.toString().substring(0, 3)}</span>
        </div>
      )}
    </div>
  );
};
