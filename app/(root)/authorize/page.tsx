import { AuthWrapper } from '@/shared/components/shared/auth-wrapper';
import { getUserSession } from '@/shared/lib/get-user-session';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function AuthPage() {
  const session = await getUserSession();
  if (session) {
    redirect('/not-auth');
  }

  return <AuthWrapper />;
}
