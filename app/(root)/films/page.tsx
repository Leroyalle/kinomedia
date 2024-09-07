import { Categories, Container, MediaCollectionsGroups, SortBar } from '@/shared/components/shared';
import React from 'react';
import { useFetchCategories } from '@/shared/hooks';

export default async function Films() {
  const categories = await useFetchCategories();

  return (
    <Container>
      <div className="mt-6 mb-14">
        <SortBar key={321} items={categories} isSeries={false} />
      </div>
      <MediaCollectionsGroups type={'movie'} isSeries={false} />
    </Container>
  );
}
