import { Container, Description, FilmsCollectionsGroup, SortBar } from '@/shared/components/shared';
import React, { Suspense } from 'react';
import { useFetchCategories } from '@/shared/hooks';
import { QueryFilters } from '@/shared/hooks/use-filters';

export default async function Films({ searchParams }: { searchParams: QueryFilters }) {
  const categories = await useFetchCategories();

  return (
    <Container>
      <Description />
      <div className="mt-6 mb-14">
        <Suspense>
          <SortBar items={categories} isSeries={false} />
        </Suspense>
      </div>
      <FilmsCollectionsGroup searchParams={searchParams} />
    </Container>
  );
}
