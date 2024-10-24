import { prisma } from '@/prisma/prisma-client';
import { Container } from '@/shared/components/shared';
import { ProfileBlocksWrapper, SignOutButton, SocialNetworks } from '@/shared/components/shared';
import { authOptions } from '@/shared/constants/auth-options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  // FIXME: получить данные и закинуть в стор эффектом || layoutEffect
  // FIXME: если обновить данные на странице edit, а после вернуться назад на страницу profile, данные останутся прежними, пока не перезагружена страница (сделать клиентом)
  if (!session?.user.id) {
    redirect('/not-auth');
  }

  const user = await prisma.user.findFirst({
    where: {
      id: Number(session.user.id),
    },
    select: {
      id: true,
      fullName: true,
      email: true,
      image: true,
    },
  });

  if (!user) {
    return redirect('/not-auth');
  }
  return (
    <Container className="px-20 py-16">
      <ProfileBlocksWrapper
        userId={Number(user.id)}
        email={user.email}
        fullName={user.fullName}
        image={user.image}
      />
      <SocialNetworks className="mt-4" />
      <SignOutButton className="mt-4" />
    </Container>
  );
}
