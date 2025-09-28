'use client';

import { IMovie } from '@/app/lib/types/IMovie';
import CardMovie from '../CardMovie/CardMovie';
import Container from '../Container/Container';
import { FC, useContext, useEffect } from 'react';
import { MoviesContext } from '@/app/context/Movies/MoviesContext';
import { GenresContext } from '@/app/context/Genres/GenresContext';
import { useGenresMap } from '@/app/lib/hooks/useGenresMap';
import { IGenres } from '@/app/lib/types/IGenres';
import Spinner from '../ui/Spinner/Spinner';

interface Props {
  moviesData: IMovie[];
  genresData: IGenres[];
}

const MovieList: FC<Props> = ({ moviesData, genresData }) => {
  const contextMovies = useContext(MoviesContext);
  const contextGenres = useContext(GenresContext);
  const genresContext = useContext(GenresContext);
  const genresMap = useGenresMap(contextGenres.genres);

  useEffect(() => {
    if (genresContext && contextGenres.genres.length === 0 && genresData.length > 0) {
      contextGenres.setGenres(genresData);
    }
  }, []);

  useEffect(() => {
    if (!contextMovies) return;
    contextMovies.setMovies(moviesData);
  }, [contextMovies, moviesData]);

  if (!contextGenres || contextGenres.genres.length === 0) return <Spinner />;

  return (
    <Container>
      <section className="grid grid-cols-[1fr_1fr] gap-[36px] !mt-[36px] max-md:grid-cols-[1fr]">
        {contextMovies?.movies.length > 0 ? (
          contextMovies?.movies.map(
            ({ id, title, overview, poster_path, release_date, genre_ids }) => (
              <CardMovie
                key={id}
                title={title}
                overview={overview}
                poster_path={poster_path}
                release_date={release_date}
                id={id}
                genres={genre_ids.map((genreId) => genresMap.get(genreId) || 'react')}
              />
            ),
          )
        ) : (
          <h2>No data</h2>
        )}
      </section>
    </Container>
  );
};

export default MovieList;
