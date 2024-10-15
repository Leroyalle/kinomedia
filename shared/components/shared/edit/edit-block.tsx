import React from 'react';
import { cn } from '@/shared/lib/utils';
import { TitleAndId as Head, UserId } from '../user';
import { EditBlockUiAvatar, EditBlockUiInputs } from './edit-block-ui';

interface Props {
  id: number;
  fullName: string;
  email: string;
  imageUrl?: string;
  className?: string;
}

export const EditBlock: React.FC<Props> = ({ id, fullName, email, imageUrl, className }) => {
  return (
    <section className={cn('', className)}>
      <Head title={'Личные данные'} endAdornment={<UserId id={id} />} className="mb-4" />
      <EditBlockUiAvatar className="mb-4" imageUrl={imageUrl} />
      <EditBlockUiInputs fullName={fullName} email={email} />
    </section>
  );
};
