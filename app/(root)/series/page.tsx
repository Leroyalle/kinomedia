import { Categories, Container, MediaCollectionsGroups, SortBar } from '@/shared/components/shared';
import React from 'react';
import { useFetchCategories } from '@/shared/hooks';

export default async function Series() {
  const categories = await useFetchCategories();

  return (
    <Container>
      <div className="mt-6 mb-14">
        <SortBar key={1232} items={categories} isSeries={true} />
      </div>
      <MediaCollectionsGroups type={'series'} isSeries={true} />
    </Container>
  );
}
