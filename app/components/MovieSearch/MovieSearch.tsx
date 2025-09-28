'use client';

import { useState, useMemo, useEffect } from 'react';
import { Input, Alert, Pagination } from 'antd';
import { debounce } from 'lodash';
import SearchMovieList from '../SearchMovieList/SearchMovieList';
import { searchMovie } from '@/app/api/Movies/searchMovie';
import { IMovie } from '@/app/lib/types/IMovie';
import { useLoading } from '@/app/lib/hooks/useLoading';
import Spinner from '../ui/Spinner/Spinner';

const MovieSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { isLoading, startLoading, stopLoading } = useLoading();

  const debouncedSearch = useMemo(
    () => debounce((value: string) => handleSearch(value, 1), 500),
    [],
  );

  useEffect(() => {
    return () => debouncedSearch.cancel();
  }, [debouncedSearch]);

  const handleSearch = async (value: string, pageNumber: number) => {
    if (!value.trim()) {
      setMovies([]);
      setTotalPages(1);
      return;
    }

    startLoading();
    setError('');
    try {
      const data = await searchMovie(value, pageNumber);
      setMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    } finally {
      stopLoading();
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    handleSearch(inputValue, newPage);
  };

  return (
    <div>
      <Input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          debouncedSearch(e.target.value);
          setPage(1);
        }}
        placeholder="Type to search"
      />
      {movies.length > 0 && (
        <div className="flex justify-center mt-5">
          <Pagination
            current={page}
            total={totalPages}
            pageSize={20}
            onChange={handlePageChange}
            showSizeChanger={false}
          />
        </div>
      )}

      {isLoading && <Spinner />}

      {error && (
        <Alert
          message="Search error"
          description={error}
          type="error"
          closable
          className="!fixed !top-0 !right-0 z-[9999]"
        />
      )}

      {movies.length > 0 && <SearchMovieList movies={movies} />}

      {!isLoading && inputValue && movies.length === 0 && (
        <div className="text-center text-gray-500 mt-5">Не найдено</div>
      )}
    </div>
  );
};

export default MovieSearch;
