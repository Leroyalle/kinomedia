'use client';
import React from 'react';
import { useProfileStore } from '@/shared/store';
import { BackButton } from '../back-button';
import { EditBlock } from './edit-block';

interface Props {
  sessionId: number;
  className?: string;
}

export const EditPageWrapper: React.FC<Props> = ({ sessionId, className }) => {
  React.useEffect(() => {
    getUserData(sessionId);
  }, []);

  const [id, fullName, email, image, loading, getUserData] = useProfileStore((state) => [
    state.id,
    state.fullName,
    state.email,
    state.image,
    state.loading,
    state.getUserData,
  ]);

  return (
    <div className={className}>
      <BackButton className="pl-0 text-md mb-8 text-white" />
      {/* FIXME: пофиксить опциональный емейл, проверка уже есть в авторизации */}
      <EditBlock
        // FIXME: get id or sessionId??
        id={Number(id)}
        fullName={fullName || ''}
        email={email || ''}
        imageUrl={image}
        loading={loading}
      />
    </div>
  );
};
