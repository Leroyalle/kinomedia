'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { UserAvatar } from '../../user';
import { X } from 'lucide-react';
import { Button, Skeleton } from '@/shared/components/ui';
import { useProfileStore } from '@/shared/store';
import { SelectFile } from '../../select-file';

interface Props {
  sessionId: number;
  imageUrl?: string | null;
  loading: boolean;
  className?: string;
}

export const EditBlockUiAvatar: React.FC<Props> = ({ sessionId, imageUrl, loading, className }) => {
  const resetAvatar = useProfileStore((state) => state.resetAvatar);

  const onClickDeleteAvatar = async () => {
    resetAvatar(sessionId);
  };

  if (loading) {
    return (
      <div className={'relative w-fit py-2 pl-0 overflow-hidden flex flex-col items-center mb-8'}>
        <Skeleton className="w-32 h-32 rounded-[50%]" />
        <Skeleton className="w-20 h-4 mt-3" />
      </div>
    );
  }
  return (
    <div
      className={cn(
        'relative w-fit py-2 pl-0 overflow-hidden flex flex-col items-center',
        className,
      )}>
      <X className="absolute right-0 top-0" onClick={() => onClickDeleteAvatar()} />
      <UserAvatar imageUrl={imageUrl} className="w-32 h-32" />
      <SelectFile title={'Изменить'} sessionId={sessionId} />
    </div>
  );
};
