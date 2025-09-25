export interface IGuestSession {
    success: boolean,
    guest_session_id: string,
    expires_at: string
}

export interface IGetRequestToken {
    success: boolean,
    expires_at: string,
    request_token: string
}