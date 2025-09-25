import MovieList from '../components/MovieList/MovieList'
import { getAllMovies } from '../api'
import PaginationComponent from '../components/PaginationComponent/PaginationComponent'
import { SearchParams } from 'next/dist/server/request/search-params'

interface Props {
    searchParams: Promise<SearchParams>
}

const SearchPage = async ({ searchParams }: Props) => {

    const currentPage = Number((await searchParams).page) || 1;
    const moviesData = await getAllMovies(currentPage)

    return (
        <>
            <MovieList moviesData={moviesData.results} />
            <PaginationComponent path='/search' currentPage={currentPage} total={500} />
        </>
    )
}

export default SearchPage