'use client';

import { IGenres } from '@/app/lib/types/IGenres';
import { FC, ReactNode, useState } from 'react';
import { GenresContext } from './GenresContext';

interface Props {
  children: ReactNode;
}

const GenresProvider: FC<Props> = ({ children }) => {
  const [genres, setGenres] = useState<IGenres[]>([]);

  return <GenresContext.Provider value={{ genres, setGenres }}>{children}</GenresContext.Provider>;
};

export default GenresProvider;
