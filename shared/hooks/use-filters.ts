'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import qs from 'qs';

interface ReturnProps {
  genreName: string;
  onChangeCategory: (genreName: string) => void;
}

export interface QueryFilters {
  genre?: string;
}

// TODO: отрефакторить код

export const useFilters = (): ReturnProps => {
  const isMounted = React.useRef(false);
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;
  const router = useRouter();
  const [genreName, setGenreName] = React.useState(
    searchParams.has('genre') ? String(searchParams.get('genre')) : '',
  );

  React.useEffect(() => {
    if (isMounted.current) {
      const params = {
        genre: genreName,
      };
      const query = qs.stringify(params, {
        arrayFormat: 'comma',
      });
      // TODO: убрать push из истории
      router.push(`?${query}`, { scroll: false });
    }
    isMounted.current = true;
  }, [genreName]);

  return React.useMemo(() => ({ genreName, onChangeCategory: setGenreName }), [genreName]);
};
