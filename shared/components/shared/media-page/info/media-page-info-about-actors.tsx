import React from 'react';
import { cn } from '@/shared/lib/utils';
import { PersonData } from '@/@types/person';
import Link from 'next/link';

interface Props {
  data: {
    [key: string]: PersonData[];
  };
  className?: string;
}

export const MediaPageInfoAboutActors: React.FC<Props> = ({ data, className }) => {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {Object.entries(data).map(([prof, persons]) => (
        <div className="flex flex-col" key={prof}>
          <p className="text-white/50 text-[22px]">
            {prof.charAt(0).toUpperCase() + prof.slice(1)}
          </p>
          <div className="flex gap-x-4 gap-y-1 flex-wrap">
            {persons.map((person) => (
              <Link
                href={`/person/${person.id}`}
                className="text-[20px] transition hover:text-[#bc88ff]"
                key={person.id}>
                {person.name || person.enName}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
