'use client';
import React from 'react';
import { MainBanner } from './main-banner';
import { useMediaByParams } from '@/shared/hooks';

interface Props {
  className?: string;
}

export const MainBannerWrapper: React.FC<Props> = ({ className }) => {
  const { items, loading } = useMediaByParams(
    `&rating.kp=8-10&year=2024&limit=20&notNullFields=backdrop.url`,
  );
  return <MainBanner items={items} loading={loading} className="max-h-[1100px]" />;
};
