import { Container } from '@/shared/components/shared';
import { ProfileBlocksWrapper } from '@/shared/components/shared/profile';
import { authOptions } from '@/shared/constants/auth-options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }
  return (
    <Container>
      <ProfileBlocksWrapper
        id={Number(session.user.id)}
        email={session.user.email}
        fullName={session.user.name}
        image={session.user.image}
      />
    </Container>
  );
}
