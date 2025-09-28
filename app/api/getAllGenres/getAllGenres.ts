import { IGenresResponse } from '@/app/lib/types/IGenres';
import { BASE_API, TOKEN } from '../Base';

export const getAllGenres = async (): Promise<IGenresResponse> => {
  const res = await fetch(`${BASE_API}/genre/movie/list`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  if (!res.ok) {
    const text = await res.text();
    let message = text;

    try {
      const json = JSON.parse(text);
      if (json.status_message) {
        message = json.status_message;
      }
    } catch {}

    throw new Error(`${res.status} | ${message}`);
  }

  const data = await res.json();

  return data;
};
