import React from 'react';
import { Header } from './header';
import { getUserSession } from '@/shared/lib/get-user-session';

export const HeaderWrapper: React.FC = async () => {
  const session = await getUserSession();

  return <Header session={Boolean(session)} />;
};
