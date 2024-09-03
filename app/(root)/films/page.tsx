import { Categories, Container, MediaCollectionsGroups } from '@/shared/components/shared';
import React from 'react';
import { useFetchCategories } from '@/shared/hooks';

export default async function Films() {
  // TODO: сделать отдельно обязательные параметры для сериалов и фильмов, и прикручивать их к универсальному запросу
  const categories = await useFetchCategories();

  return (
    <Container>
      <div className="mt-6 mb-14">
        <Categories title={'Выбор жанра'} items={categories} />
      </div>
      <MediaCollectionsGroups />
    </Container>
  );
}
