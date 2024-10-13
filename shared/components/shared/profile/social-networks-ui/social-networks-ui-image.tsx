import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
  className?: string;
}

export const SocialNetworksUiImage: React.FC<Props> = ({ className }) => {
  return (
    <img
      className={cn('absolute right-0 top-0', className)}
      src="https://tvoe.live/img/social-media.svg"
      alt="Social networks"
      width={600}
      height={250}
    />
  );
};
