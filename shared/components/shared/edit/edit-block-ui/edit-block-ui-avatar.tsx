import React from 'react';
import { cn } from '@/shared/lib/utils';
import { UserAvatar } from '../../user';
import { X } from 'lucide-react';
import { Button } from '@/shared/components/ui';

interface Props {
  imageUrl?: string | null;
  className?: string;
}

export const EditBlockUiAvatar: React.FC<Props> = ({ imageUrl, className }) => {
  return (
    <div className={cn('relative w-fit py-2 pl-0', className)}>
      <X className="absolute right-0 top-0" />
      <UserAvatar imageUrl={imageUrl} className="w-32 h-32" />
      <Button variant="link" className="text-[hsla(0,0%,100%,.3)] text-center">
        Изменить
      </Button>
    </div>
  );
};
