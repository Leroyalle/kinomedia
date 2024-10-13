import { Container } from '@/shared/components/shared';
import { ProfileBlocksWrapper, SignOutButton, SocialNetworks } from '@/shared/components/shared';
import { authOptions } from '@/shared/constants/auth-options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }
  return (
    <Container className="px-20 py-16">
      <ProfileBlocksWrapper
        id={Number(session.user.id)}
        email={session.user.email}
        fullName={session.user.name}
        image={session.user.image}
      />
      <SocialNetworks className="mt-4" />
      <SignOutButton className="mt-4" />
    </Container>
  );
}
