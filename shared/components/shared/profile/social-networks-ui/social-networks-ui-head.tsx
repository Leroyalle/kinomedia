import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from '../../title';

interface Props {
  className?: string;
}

export const SocialNetworksUiHead: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex flex-col gap-y-1', className)}>
      <Title text={'Подписывайтесь на наши соцсети'} size="sm" />
      <p>Узнавай о новинках первым</p>
    </div>
  );
};
