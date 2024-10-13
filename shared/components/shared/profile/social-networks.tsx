import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from '../title';
import { ContactsBlock } from '../contacts-block';
import { contacts } from '@/shared/constants';

interface Props {
  className?: string;
}

export const SocialNetworks: React.FC<Props> = ({ className }) => {
  return (
    <section
      className={cn(
        'relative h-60 w-full flex flex-col justify-between py-10 px-10 bg-[#0d0d10] border-2 border-gray-900 rounded-3xl overflow-hidden',
        className,
      )}>
      <div className="flex flex-col gap-y-1">
        <Title text={'Подписывайтесь на наши соцсети'} size="sm" />
        <p>Узнавай о новинках первым</p>
      </div>
      <ContactsBlock items={contacts} />

      <img
        width={600}
        height={250}
        className="absolute right-0 top-0"
        src="https://tvoe.live/img/social-media.svg"
        alt="Social networks"
      />
    </section>
  );
};
