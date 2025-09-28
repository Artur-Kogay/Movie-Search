import { addRating } from '@/app/api/AddRating/AddRating';
import { useState } from 'react';

export const useAddRating = () => {
  const [error, setError] = useState<string>('');

  const addMovieRating = async (movieId: number, rating: number) => {
    try {
      const response = await addRating(movieId, rating);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return { addMovieRating, error };
};
