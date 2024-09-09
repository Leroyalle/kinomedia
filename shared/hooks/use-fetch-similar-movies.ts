import React from 'react';
import { Api } from '../services/api-client';
import { MovieDTO } from '@/@types/mediaDTO';

interface ReturnProps {
  items: MovieDTO[];
  loading: boolean;
}
export const useFetchSimilarMovies = (id: number): ReturnProps => {
  const [items, setItems] = React.useState<MovieDTO[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchSimilarMovies = async () => {
      try {
        setLoading(true);
        const data = await Api.movies.getAll(`&similarMovies.id=${id}&limit=10`);
        console.log(data);
        setItems(data.docs);
      } catch (error) {
        console.log('Error [SIMILAR_GET]', error);
        return error;
      } finally {
        setLoading(false);
      }
    };
    fetchSimilarMovies();
  }, []);
  return {
    items,
    loading,
  };
};
