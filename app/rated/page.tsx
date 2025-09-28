import { cookies } from 'next/headers';
import MovieList from '../components/MovieList/MovieList';
import { getRatedMovies } from '../api/Movies/getRatedMovies';
import { getAllGenres } from '../api/getAllGenres/getAllGenres';

const RatedPage = async () => {
  const coockieStore = await cookies();
  const guestSessionId = coockieStore.get('guestId')?.value;

  if (!guestSessionId) throw new Error('No guest session');

  const moviesData = await getRatedMovies(guestSessionId);

  const genres = await getAllGenres();
  const genresData = genres.genres || [];

  return (
    <>
      <MovieList moviesData={moviesData.results} genresData={genresData} />
    </>
  );
};

export default RatedPage;
