import { IMovieResponse } from "../../lib/types/IMovie"
import { BASE_API, TOKEN } from "../Base"

export const getAllMovies = async (page: number = 1): Promise<IMovieResponse> => {

    const res = await fetch(`${BASE_API}/trending/movie/week?page=${page}`, {
        headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        next: { revalidate: 60 }
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