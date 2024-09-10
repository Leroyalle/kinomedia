import React from 'react';
import { cn } from '@/shared/lib/utils';
import { ContactsItem } from './contacts-item';
import { TContacts } from '@/shared/constants/contacts';

interface Props {
  items: TContacts;
  className?: string;
}

export const ContactsBlock: React.FC<Props> = ({ items, className }) => {
  return (
    <div className={cn('flex gap-8 flex-wrap', className)}>
      {items.map((item, i) => (
        <ContactsItem key={i} icon={item.icon} text={item.text} href={item.href} />
      ))}
    </div>
  );
};
