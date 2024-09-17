import {
  Container,
  Description,
  MediaCollectionsGroups,
  SortBar,
} from '@/shared/components/shared';
import React, { Suspense } from 'react';
import { useFetchCategories } from '@/shared/hooks';
import { QueryFilters } from '@/shared/hooks/use-filters';

export default async function Series({ searchParams }: { searchParams: QueryFilters }) {
  const categories = await useFetchCategories();

  return (
    <Container>
      <Description />
      <div className="mt-6 mb-14">
        <Suspense>
          <SortBar key={1232} items={categories} isSeries={true} />
        </Suspense>
      </div>
      <MediaCollectionsGroups searchParams={searchParams} type={'series'} isSeries={true} />
    </Container>
  );
}
