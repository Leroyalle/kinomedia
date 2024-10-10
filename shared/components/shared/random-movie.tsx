'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';
import { Title } from './title';
import { useFetchRandomMovie } from '@/shared/hooks';
import { Badge } from './media-item-info';
import { Button } from '../ui';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import { RandomMovieSkeleton } from './random-movie-skeleton';

interface Props {
  params?: string;
  className?: string;
}

export const RandomMovie: React.FC<Props> = ({ params, className }) => {
  const { data, isLoading, isError, isFetching, onNextMovie } = useFetchRandomMovie(
    `&rating.kp=7-10&age-16&notNullFields=description${params}`,
  );
  if (isLoading) {
    return <RandomMovieSkeleton />;
  }
  if (isError) {
    return <h1>Error</h1>;
  }
  if (!data) {
    return <h1>Not found</h1>;
  }
  return (
    <section>
      <Title text={'Случайный фильм с рейтингом 7+'} size={'lg'} className="mb-4" />
      <article
        className={cn(
          'flex flex-col relative h-[500px] w-full overflow-hidden backdrop-shadow before:z-10 after:z-10',
          className,
        )}>
        <img
          src={data?.backdrop.url}
          alt={data.name}
          className="absolute w-full h-full object-cover rounded-xl"
        />
        <div className="flex flex-col gap-6 z-30 p-8 h-full">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <Badge
                ratingKp={data.rating.kp}
                className={cn('px-3 py-1 bg-gray-800 rounded-sm font-semibold text-xl', className)}
              />
              <Title text={data.name ?? data.enName} size="xl" />
            </div>
            <Button variant="ghost" className="py-6 px-4">
              <Heart />
            </Button>
          </div>
          <p className="text-2xl max-w-[400px]">
            {data.shortDescription || data.description.length > 120
              ? data.description.substring(0, 120) + '...'
              : data.description}
          </p>
          <div className="flex flex-col gap-4 mt-auto max-w-[370px]">
            <Link href={`/media/${data.id}`}>
              <Button variant={'secondary'} className="w-full text-lg">
                Смотреть
              </Button>
            </Link>
            <Button
              onClick={onNextMovie}
              variant={'ghost'}
              className="w-full text-lg"
              loading={isFetching}>
              Следующий фильм
            </Button>
          </div>
        </div>
      </article>
    </section>
  );
};
