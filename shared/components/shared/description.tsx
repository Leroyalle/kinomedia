'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from './title';

interface Props {
  className?: string;
}

export const Description: React.FC<Props> = ({ className }) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className={cn('flex flex-col gap-2 max-w-[900px] my-8', className)}>
      <Title
        text="Добро пожаловать на Kinomedia - онлайн кинотеатр с более чем 960 тысячами фильмов!"
        className="text-[28px] font-semibold"
      />
      {!visible ? (
        <p className="max-w-[900px] text-[20px]">
          У нас вы можете легко и быстро найти интересующий вас фильм благодаря...
        </p>
      ) : (
        <p className="max-w-[900px] text-[20px]">
          У нас вы можете легко и быстро найти интересующий вас фильм благодаря нашему удобному
          поиску. Мы предлагаем широкий выбор кинокартин различных жанров и направлений - от
          классики до новинок, от драм до боевиков. На Kinomedia вы сможете насладиться просмотром
          любимых фильмов в высоком качестве в любое время и в любом месте. Регистрируйтесь на нашем
          сайте и начните погружаться в увлекательный мир кино!
        </p>
      )}
      <button
        className="self-start text-white/50 font-medium transition hover:text-white"
        onClick={() => setVisible(!visible)}>
        {visible ? 'Свернуть' : 'Равернуть'}
      </button>
    </div>
  );
};
