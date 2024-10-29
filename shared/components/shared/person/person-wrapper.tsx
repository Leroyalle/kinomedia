import React from 'react';
import { cn } from '@/shared/lib/utils';
import { PersonDataDTO } from '@/@types/person';
import { PersonFacts, PersonHead } from './blocks';

interface Props {
  data: PersonDataDTO;
  className?: string;
}

export const PersonWrapper: React.FC<Props> = ({ data, className }) => {
  return (
    <section className={cn('', className)}>
      <h2 className="sr-only">{data.name}</h2>
      <PersonHead
        name={data.name}
        imageUrl={data.photo}
        enName={data.enName}
        birthDay={new Date(data.birthday).toLocaleDateString()}
      />
      <PersonFacts items={data.facts} className="mt-20" />
    </section>
  );
};
