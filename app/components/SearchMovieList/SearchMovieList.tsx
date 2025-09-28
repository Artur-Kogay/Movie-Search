import React, { FC } from 'react';
import { IMovie } from '@/app/lib/types/IMovie';

interface Props {
  movies: IMovie[];
}

const SearchMovieList: FC<Props> = ({ movies }) => {
  return (
    <section className="flex flex-col">
      {movies.map(({ title, id }) => (
        <div className="border rounded !p-4" key={id}>
          {title}
        </div>
      ))}
    </section>
  );
};

export default SearchMovieList;
