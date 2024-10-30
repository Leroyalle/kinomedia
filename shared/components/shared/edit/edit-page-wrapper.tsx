'use client';
import React from 'react';
import { useProfileStore } from '@/shared/store';
import { BackButton } from '../back-button';
import { EditBlock } from './edit-block';

interface Props {
  className?: string;
}

export const EditPageWrapper: React.FC<Props> = ({ className }) => {
  React.useEffect(() => {
    getUserData();
  }, []);

  const [user, loading, getUserData] = useProfileStore((state) => [
    state.user,
    state.loading,
    state.getUserData,
  ]);

  return (
    <div className={className}>
      <BackButton className="pl-0 text-md mb-8 text-white" />
      <EditBlock
        id={Number(user.id)}
        fullName={user.fullName!}
        email={user.email!}
        imageUrl={user.image}
        loading={loading}
      />
    </div>
  );
};
