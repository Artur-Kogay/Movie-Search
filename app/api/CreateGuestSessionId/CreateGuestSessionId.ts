import { IGuestSession } from "@/app/lib/models/GuestSession";
import { BASE_API, TOKEN } from "../Base"

export const createGuestSessionId = async (): Promise<IGuestSession> => {

    const res = await fetch(`${BASE_API}/authentication/guest_session/new`, {
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