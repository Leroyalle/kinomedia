import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from '../../../title';

interface Props {
  name: string;
  enName: string;
  birthDay: string;
  className?: string;
}

export const PersonInfo: React.FC<Props> = ({ name, enName, birthDay, className }) => {
  return (
    <div className={cn('', className)}>
      <Title text={name} size="2xl" />
      <Title text={enName} size="sm" />
      <p>
        Дата рождения: <span>{birthDay}</span>
      </p>
    </div>
  );
};
