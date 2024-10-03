// 'use client';
// import React from 'react';
// import { cn } from '@/shared/lib/utils';
// import { MediaGroup } from './media-group';
// import { useMedia } from '@/shared/hooks';
// import { QueryFilters } from '@/shared/hooks/use-filters';

// interface Props {
//   searchParams: QueryFilters;
//   type: 'movie' | 'series' | 'cartoon';
//   isSeries: boolean;
//   className?: string;
// }

// export const MediaCollectionsGroups: React.FC<Props> = ({
//   searchParams,
//   type,
//   isSeries,
//   className,
// }) => {
//   const { items, loading } = useMedia(searchParams, isSeries, 20);

//   return (
//     <div className={cn(className)}>
//       <MediaGroup items={items.docs} loading={loading} />
//     </div>
//   );
// };
