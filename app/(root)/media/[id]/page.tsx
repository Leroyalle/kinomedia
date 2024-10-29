import { prisma } from '@/prisma/prisma-client';
import { Container } from '@/shared/components/shared';
import { MediaPageWrapper } from '@/shared/components/shared';
import { useMediaItem } from '@/shared/hooks';
import { getUserSession } from '@/shared/lib/get-user-session';

export default async function MediaPage({ params: { id } }: { params: { id: number } }) {
  const session = await getUserSession();
  const data = await useMediaItem(id);

  const user = session
    ? await prisma.user.findFirst({
        where: {
          id: Number(session?.id),
        },
        include: {
          completedSubscription: {
            where: {
              activeStatus: 'ACTIVE',
            },
          },
        },
      })
    : null;

  return (
    <Container>
      <MediaPageWrapper
        auth={Boolean(user)}
        subscription={Boolean(user?.completedSubscription.length)}
        item={data}
      />
    </Container>
  );
}
