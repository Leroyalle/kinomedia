import React from 'react';
import { TitleAndId as Head, UserId } from '../user';
import { DeleteUserButton, EditBlockUiAvatar, EditBlockUiInputs } from './edit-block-ui';

interface Props {
  id: number;
  fullName: string;
  email: string;
  imageUrl?: string | null;
  loading: boolean;
  className?: string;
}

export const EditBlock: React.FC<Props> = ({
  id,
  fullName,
  email,
  imageUrl,
  loading,
  className,
}) => {
  return (
    <section className={className}>
      <Head title={'Личные данные'} endAdornment={<UserId id={id} />} className="mb-4" />
      <EditBlockUiAvatar className="mb-4" sessionId={id} imageUrl={imageUrl} loading={loading} />
      <EditBlockUiInputs fullName={fullName} email={email} loading={loading} />
      <hr className="bg-white w-full my-10" />
      <DeleteUserButton />
    </section>
  );
};
