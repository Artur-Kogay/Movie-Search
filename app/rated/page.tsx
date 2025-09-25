import {cookies} from 'next/headers';
import MovieList from '../components/MovieList/MovieList'
import PaginationComponent from '../components/PaginationComponent/PaginationComponent'
import { SearchParams } from 'next/dist/server/request/search-params'
import { getRatedMovies } from '../api/Movies/getRatedMovies'

interface Props {
    searchParams: Promise<SearchParams>
}

const RatedPage = async ({ searchParams }: Props) => {

    const currentPage = Number((await searchParams).page) || 1;

    const coockieStore = await cookies();
    const guestSessionId = coockieStore.get("guestId")?.value;

    if(!guestSessionId) throw new Error('No guest session')

    const moviesData = await getRatedMovies(guestSessionId, currentPage)

    return (
        <>
            <MovieList moviesData={moviesData.results} />
            <PaginationComponent path={'/rated'} currentPage={currentPage} total={500} />
        </>
    )
}

export default RatedPage