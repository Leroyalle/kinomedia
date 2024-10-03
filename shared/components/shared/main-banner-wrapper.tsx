'use client';
import React from 'react';
import { MainBanner } from './main-banner';
import { useMediaByParams } from '@/shared/hooks';
import { MainBannerSkeleton } from './main-banner-skeleton';

interface Props {
  className?: string;
}

export const MainBannerWrapper: React.FC<Props> = ({ className }) => {
  const { data, isLoading, isError } = useMediaByParams(
    `&rating.kp=8-10&year=2024&limit=20&notNullFields=backdrop.url`,
  );

  if (isLoading) {
    return <MainBannerSkeleton />;
  }

  if (isError) {
    return <h1>Error fetching</h1>;
  }

  if (!data) {
    return <h1>Not found</h1>;
  }

  return <MainBanner items={data} className="max-h-[1100px]" />;
};
