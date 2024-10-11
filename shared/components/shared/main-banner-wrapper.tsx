'use client';
import React from 'react';
import { MainBanner } from './main-banner';
import { useFetchMediaByParams } from '@/shared/hooks';
import { MainBannerSkeleton } from './main-banner-skeleton';

export const MainBannerWrapper: React.FC = () => {
  const { data, isLoading, isError } = useFetchMediaByParams(
    `&rating.kp=7-10&year=2024&limit=20&notNullFields=backdrop.url&genres.name=!аниме&genres.name=!мультфильм`,
  );

  if (isLoading) {
    return <MainBannerSkeleton />;
  }

  if (isError) {
    return <h1>Error fetching</h1>;
  }

  if (!data || data.length === 0) {
    return <h1>Not found</h1>;
  }

  return <MainBanner items={data} className="max-h-[1100px]" />;
};
