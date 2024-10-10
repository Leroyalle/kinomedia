'use client';
import React from 'react';
import { useFetchMediaByParams } from '@/shared/hooks';
import { MediaItemsSkeleton } from './media-items-skeleton';
import { MediaGroupSlider } from './media-group-slider';

interface Props {
  title: string;
  params?: string;
  limit?: number;
  className?: string;
}

export const MediaGroupSliderWrapper: React.FC<Props> = ({
  title,
  params,
  limit = 10,
  className,
}) => {
  const { data, isLoading, isError } = useFetchMediaByParams(`${params}&limit=${limit}`);
  if (isLoading) {
    return (
      <section className={className}>
        <MediaItemsSkeleton limit={5} />
      </section>
    );
  }

  if (isError) {
    return <h1>Error</h1>;
  }
  if (!data) {
    return <h1>Not found</h1>;
  }
  return (
    <section className={className}>
      <MediaGroupSlider items={data} title={title} />
    </section>
  );
};
