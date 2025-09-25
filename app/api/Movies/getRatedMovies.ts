import { IMovieResponse } from "../../lib/types/IMovie";
import { BASE_API, TOKEN } from "../Base";

export const getRatedMovies = async (guestSessionId: string, page: number = 1): Promise<IMovieResponse> => {

    console.log(guestSessionId);


    const res = await fetch(
        `${BASE_API}/guest_session/guest_session_id${guestSessionId}/rated/movies?api_key=${'9a0c2af035aa221cd55a811ee24e419a'}&&page=${page}`,
        {
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            }
        }
    );

    if (!res.ok) {
        const text = await res.text();
        let message = text;
        try {
            const json = JSON.parse(text);
            if (json.status_message) message = json.status_message;
        } catch { }
        throw new Error(`${res.status} | ${message}`);
    }

    return await res.json();
};
