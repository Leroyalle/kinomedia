import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from './title';

interface Props {
  className?: string;
}
// TODO: сделать
export const MoodFilters: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn('', className)}>
      <Title text={'Когда хочется...'} />
    </section>
  );
};
