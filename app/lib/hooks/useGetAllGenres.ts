import { getAllGenres } from '@/app/api/getAllGenres/getAllGenres';
import { useState } from 'react';

export const useGetAllGenres = () => {
  const [error, setError] = useState<string>('');

  const gettingAllGenres = async () => {
    try {
      const response = await getAllGenres();

      return response;
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };
  return { gettingAllGenres, error };
};
