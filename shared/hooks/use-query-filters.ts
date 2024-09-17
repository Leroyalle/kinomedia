'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import qs from 'qs';
import { useCategoryStore } from '../store';
// const name = useCategoryStore((state) => state.name);

export const useQueryFilters = (name: string) => {
  const router = useRouter();
  const isMounted = React.useRef(false);
  console.log(name, 'параметры');
  React.useEffect(() => {
    console.log(name, 'query');
    const params = {
      genreName: name,
    };
    const query = qs.stringify(params, {
      arrayFormat: 'comma',
    });
    console.log(query);
    router.push(`?${query}`, { scroll: false });
  }, [name, router]);
};
