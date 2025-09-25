import { IMovieResponse } from "../../lib/types/IMovie"
import { BASE_API, TOKEN } from "../Base"

export const searchMovie = async (nameMovie: string, pageNumber: number): Promise<IMovieResponse> => {

    const res = await fetch(`${BASE_API}/search/movie?query=${nameMovie}&page=${pageNumber}`, {
        headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
    }
    );
    if (!res.ok) {
        const text = await res.text()
        let message = text;

        try {
            const json = JSON.parse(text)
            if (json.status_message) {
                message = json.status_message
            }

        } catch { }

        throw new Error(`${res.status} | ${message}`)
    }

    const data = await res.json()

    return data;
}