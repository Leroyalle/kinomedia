'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { MediaGroup } from './media-group';
import { useMedia } from '@/shared/hooks';

interface Props {
  type: 'movie' | 'series' | 'cartoon';
  isSeries: boolean;
  className?: string;
}

export const MediaCollectionsGroups: React.FC<Props> = ({ type, isSeries, className }) => {
  const { items, loading } = useMedia(isSeries);

  return (
    <div className={cn(className)}>
      <MediaGroup items={items.docs} loading={loading} />
    </div>
  );
};
