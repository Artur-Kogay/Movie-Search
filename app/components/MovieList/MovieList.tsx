'use client';

import { IMovie } from "@/app/lib/types/IMovie";
import CardMovie from "../CardMovie/CardMovie";
import Container from "../Container/Container";
import { FC, useContext, useEffect } from "react";
import { MoviesContext } from "@/app/context/Movies/MoviesContext";

interface Props {
  moviesData: IMovie[];
}

const MovieList: FC<Props> = ({ moviesData }) => {
  const context = useContext(MoviesContext);

  useEffect(() => {
    if(!context) return
    context.setMovies(moviesData);
  }, [context, moviesData]);

  return (
    <Container>
      <section className="grid grid-cols-[1fr_1fr] gap-[36px] !mt-[36px] max-md:grid-cols-[1fr]">
        {context?.movies.length > 0 ? (
          context?.movies.map(({ id, title, overview, poster_path, release_date, vote_average }) => (
            <CardMovie
              key={id}
              title={title}
              overview={overview}
              poster_path={poster_path}
              release_date={release_date}
              vote_average={vote_average}
            />
          ))
        ) : (
          <h2>No data</h2>
        )
        }
      </section>
    </Container>
  );
};

export default MovieList;
