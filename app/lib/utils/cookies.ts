import Cookies from 'js-cookie';

export const saveCookie = (key: string, value: string) => {
    Cookies.set(key, value, { expires: 1, path: '/' });
}

export const getCookie = (key: string): string | null => {
    return Cookies.get(key) || null;
}

