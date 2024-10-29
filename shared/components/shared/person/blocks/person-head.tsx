import React from 'react';
import { cn } from '@/shared/lib/utils';
import { PersonAvatar } from './head/person-avatar';
import { PersonInfo } from './head/person-info';

interface Props {
  name: string;
  imageUrl: string;
  enName: string;
  birthDay: string;
  className?: string;
}

export const PersonHead: React.FC<Props> = ({ name, imageUrl, enName, birthDay, className }) => {
  return (
    <header className={cn('flex items-center gap-x-10', className)}>
      <div className="w-36 h-36 rounded-[50%] overflow-hidden">
        <PersonAvatar imageUrl={imageUrl} name={name} />
      </div>
      <PersonInfo name={name} enName={enName} birthDay={birthDay} />
    </header>
  );
};
