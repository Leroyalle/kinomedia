import { Container, MediaPlayer } from '@/shared/components/shared';
import { MediaPageWrapper } from '@/shared/components/shared';
import { useMediaItem } from '@/shared/hooks';

export default async function MediaPage({ params: { id } }: { params: { id: number } }) {
  const data = await useMediaItem(id);
  return (
    <Container>
      <MediaPlayer id={data.id} />
      <MediaPageWrapper item={data} />
    </Container>
  );
}
