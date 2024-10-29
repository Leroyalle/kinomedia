import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Fact } from '@/@types/person';
import { Title } from '../../title';

interface Props {
  items: Fact[];
  className?: string;
}

export const PersonFacts: React.FC<Props> = ({ items, className }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className={cn('', className)}>
      <Title text="Факты" size="lg" />
      <ul>
        {items.map((item, i) => (
          <li
            key={i}
            dangerouslySetInnerHTML={{
              __html: item.value
                .replace(/href="\/name\//g, 'href="/person/')
                .replace(/class="[^"]*"/g, ''),
            }}
            className="text-lg text-white/70 border-t-2 last:border-b-2 border-white/10 py-4 fact-item"
          />
        ))}
      </ul>
    </section>
  );
};
