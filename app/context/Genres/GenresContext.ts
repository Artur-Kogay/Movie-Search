import { IGenres } from '@/app/lib/types/IGenres';
import { createContext, SetStateAction } from 'react';

interface IGenresContext {
  genres: IGenres[];
  setGenres: React.Dispatch<SetStateAction<IGenres[]>>;
}

export const GenresContext = createContext<IGenresContext>({
  genres: [],
  setGenres: () => {},
});
