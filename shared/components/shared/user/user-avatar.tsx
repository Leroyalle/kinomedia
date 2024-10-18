import React from 'react';
import { cn } from '@/shared/lib/utils';
import { UserRound } from 'lucide-react';

interface Props {
  imageUrl?: string | null;
  className?: string;
}

export const UserAvatar: React.FC<Props> = ({ imageUrl, className }) => {
  return (
    <div
      className={cn(
        'rounded-[50%] bg-[hsla(0,0%,100%,.1)] overflow-hidden grid place-items-center',
        className,
      )}>
      {imageUrl ? (
        <img src={imageUrl} className="w-full object-cover h-full" />
      ) : (
        <UserRound size={50} />
      )}
    </div>
  );
};
