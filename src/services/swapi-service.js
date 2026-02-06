import { BASE_URL } from '../global/constants.js';

export const fetchStarWarsCharacterList = async (search = '') => {
  const res = await fetch(`${BASE_URL}/people/?search=${encodeURIComponent(search)}`);

  if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);

  const data = await res.json();
  return data.results;
};
