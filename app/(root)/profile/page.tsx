import { Container } from '@/shared/components/shared';
import { authOptions } from '@/shared/constants/auth-options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }
  return <Container></Container>;
}
