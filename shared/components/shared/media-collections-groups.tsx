'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { MediaGroup } from './media-group';
import { useMedia } from '@/shared/hooks';

interface Props {
  className?: string;
}

export const MediaCollectionsGroups: React.FC<Props> = ({ className }) => {
  const { items, loading } = useMedia();

  return (
    <div className={cn(className)}>
      <MediaGroup items={items?.docs} loading={loading} />
    </div>
  );
};
