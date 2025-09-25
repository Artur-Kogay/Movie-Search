import { saveCookie } from '../utils/cookies';
import { createGuestSessionId } from "@/app/api/CreateGuestSessionId/CreateGuestSessionId";
import { useState } from "react"

export const useCreateGuestSessionId = () => {
    const [guestSessionId, setRequestSessionId] = useState<string>('')
    const [guestError, setGuestError] = useState<string>('')

    const createGuestSession = async () => {
        try {
            const response = await createGuestSessionId();

            if (response) {
                setRequestSessionId(response.guest_session_id)
                saveCookie('guestId', response.guest_session_id)
            }
        } catch (error) {
            if (error instanceof Error) {
                setGuestError(error.message)
            }
        }
    }

    return { createGuestSession, guestSessionId, guestError }
}