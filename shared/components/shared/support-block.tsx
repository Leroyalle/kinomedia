import React from 'react';
import { cn } from '@/shared/lib/utils';
import { SupportButton } from './support-button';
import { ContactsBlock } from './contacts-block';
import { contacts } from '@/shared/constants/contacts';

interface Props {
  className?: string;
}

export const SupportBlock: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex justify-between items-center', className)}>
      <SupportButton />
      <ContactsBlock items={contacts} />
    </div>
  );
};
