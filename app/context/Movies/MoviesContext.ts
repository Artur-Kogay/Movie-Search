import { IMovie } from "@/app/lib/types/IMovie";
import { createContext, SetStateAction } from "react";

type IMoviesContext = {
    movies: IMovie[],
    setMovies: React.Dispatch<SetStateAction<IMovie[]>>
}

export const MoviesContext = createContext<IMoviesContext>({
    movies: [],
    setMovies: () => { }
}
)

