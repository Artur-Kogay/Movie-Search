import { useMemo } from 'react';
import { IGenres } from '../types/IGenres';

export const useGenresMap = (genres: IGenres[]) => {
  return useMemo(() => {
    const map = new Map<number, string>();
    genres.forEach((g) => map.set(g.id, g.name));
    return map;
  }, [genres]);
};
