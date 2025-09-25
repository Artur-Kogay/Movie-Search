import { IAddRating } from "@/app/lib/types/IAddRating";
import { BASE_API, TOKEN } from "../Base"
import { getCookie } from '@/app/lib/utils/cookies';

export const addRating = async (movieId: string): Promise<IAddRating> => {

    const guestSessionId = getCookie('guestId')

    const res = await fetch(`${BASE_API}/movie/${movieId}/rating?guest_session_id=${guestSessionId}`, {
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