import { Container, PersonWrapper } from '@/shared/components';
import { useFetchPerson } from '@/shared/hooks/use-fetch-person';

export default async function PersonPage({ params: { id } }: { params: { id: number } }) {
  const data = await useFetchPerson(id);
  return (
    <Container className="px-36 py-12">
      <PersonWrapper data={data} />
    </Container>
  );
}
