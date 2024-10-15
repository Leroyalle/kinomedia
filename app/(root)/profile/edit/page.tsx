import { prisma } from '@/prisma/prisma-client';
import { BackButton, Container, EditBlock } from '@/shared/components/shared';
import { authOptions } from '@/shared/constants/auth-options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function EditProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/not-auth');
  }

  const user = await prisma.user.findFirst({
    where: {
      id: Number(session.user.id),
    },
  });

  if (!user) {
    return redirect('/not-auth');
  }

  return (
    <Container className="px-20 py-16">
      <BackButton className="pl-0" />
      <EditBlock
        id={Number(user.id)}
        fullName={user.fullName || ''}
        email={user.email}
        imageUrl={user.image}
      />
    </Container>
  );
}
