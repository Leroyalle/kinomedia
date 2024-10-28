import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Badge, Image, Info } from './media-item-info';
import Link from 'next/link';

interface Props {
  id: number;
  name: string;
  previewUrl: string;
  year: number;
  movieLength: number | null;
  seriesLength: number | null;
  ratingKp: number;
  className?: string;
}

export const MediaItem: React.FC<Props> = ({
  id,
  name,
  previewUrl,
  year,
  movieLength,
  seriesLength,
  ratingKp,
  className,
}) => {
  return (
    <Link href={`/media/${id}`} className="transition ease-in-out duration-500 hover:scale-105">
      <div className={cn('max-w-[250px] flex flex-col', className)}>
        <div className="relative flex flex-col ">
          <div className="absolute top-5 left-5 grid place-items-center">
            <Badge
              ratingKp={ratingKp}
              className="px-3 py-1 bg-[linear-gradient(90deg,#48078f,#004fd6)] rounded-sm font-bold text-sm"
            />
          </div>
          <Image previewUrl={previewUrl} name={name} />
        </div>
        <div className="flex items-start flex-col mt-1">
          <Info
            name={name}
            year={year}
            movieLength={movieLength}
            seriesLength={seriesLength}
            className="text-lg"
          />
        </div>
      </div>
    </Link>
  );
};
