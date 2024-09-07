import { useMediaItem } from '@/shared/hooks';

export default async function MediaPage({ params: { id } }: { params: { id: number } }) {
  const data = await useMediaItem(id);
  console.log(data);
  return <h1>{data.name}</h1>;
}
