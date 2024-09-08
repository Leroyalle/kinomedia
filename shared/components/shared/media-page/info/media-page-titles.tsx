import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from '../../title';

interface Props {
  value: 1 | 2 | 3;
  onClick: (value: 1 | 2 | 3) => void;
  className?: string;
}

export const MediaPageTitles: React.FC<Props> = ({ value, onClick, className }) => {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <button onClick={() => onClick(1)}>
        <Title
          text={'Описание'}
          className={`font-bold hover:text-white transition ${
            value === 1 ? 'text-white text-[28px]' : 'text-white/50'
          }`}
        />
      </button>
      <button onClick={() => onClick(2)}>
        <Title
          text={'Съемочная группа'}
          className={`font-bold hover:text-white transition ${
            value === 2 ? 'text-white text-[28px]' : 'text-white/50 text-[22px]'
          }`}
        />
      </button>
      <button onClick={() => onClick(3)}>
        <Title
          text={'Информация'}
          className={`font-bold hover:text-white transition ${
            value === 3 ? 'text-white text-[28px]' : 'text-white/50 text-[22px]'
          }`}
        />
      </button>
    </div>
  );
};
