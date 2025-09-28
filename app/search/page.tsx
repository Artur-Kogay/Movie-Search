import MovieList from '../components/MovieList/MovieList';
import { getAllMovies } from '../api';
import PaginationComponent from '../components/PaginationComponent/PaginationComponent';
import { SearchParams } from 'next/dist/server/request/search-params';
import { getAllGenres } from '../api/getAllGenres/getAllGenres';

interface Props {
  searchParams: Promise<SearchParams>;
}

const SearchPage = async ({ searchParams }: Props) => {
  const currentPage = Number((await searchParams).page) || 1;
  const moviesData = await getAllMovies(currentPage);
  const genres = await getAllGenres();
  const genresData = genres.genres || [];

  return (
    <>
      <MovieList moviesData={moviesData.results} genresData={genresData} />
      <PaginationComponent path="/search" currentPage={currentPage} total={500} />
    </>
  );
};

export default SearchPage;
