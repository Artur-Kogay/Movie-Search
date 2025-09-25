'use client'
import { FC, ReactNode, useState } from "react"
import { MoviesContext } from "./MoviesContext"
import { IMovie } from "@/app/lib/types/IMovie"

interface Props {
    children: ReactNode
}

const MoviesProvider: FC<Props> = ({children}) => {
    const [movies, setMovies] = useState<IMovie[]>([])

  return (
    <MoviesContext.Provider value={{movies, setMovies}}  >
        {children}
    </MoviesContext.Provider>
  )
}

export default MoviesProvider