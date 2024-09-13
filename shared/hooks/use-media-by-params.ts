import React from 'react';
import { Api } from '../services/api-client';
import { MovieDTO } from '@/@types/mediaDTO';

interface ReturnProps {
  items: MovieDTO[];
  loading: boolean;
  error: boolean;
}

export const useMediaByParams = (params: string): ReturnProps => {
  const [items, setItems] = React.useState<MovieDTO[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await Api.movies.getAll(params);
        setItems(data.docs);
      } catch (error) {
        setError(true);
        console.log('Error [GET_MEDIA_DATA]', error);
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { items, loading, error };
};
