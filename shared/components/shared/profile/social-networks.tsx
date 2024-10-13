import React from 'react';
import { cn } from '@/shared/lib/utils';
import { ContactsBlock } from '../contacts-block';
import { contacts } from '@/shared/constants';
import { Head, Image } from './social-networks-ui';

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
      <Head />
      <ContactsBlock items={contacts} />
      <Image />
    </section>
  );
};
