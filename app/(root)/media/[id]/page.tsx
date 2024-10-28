import { prisma } from '@/prisma/prisma-client';
import { Container, MediaPlayer } from '@/shared/components/shared';
import { MediaPageWrapper } from '@/shared/components/shared';
import { useMediaItem } from '@/shared/hooks';
import { getUserSession } from '@/shared/lib/get-user-session';

export default async function MediaPage({ params: { id } }: { params: { id: number } }) {
  const data = await useMediaItem(id);

  return (
    <Container>
      {/* <MediaPlayer id={data.id} /> */}
      <MediaPageWrapper item={data} />
    </Container>
  );
}
