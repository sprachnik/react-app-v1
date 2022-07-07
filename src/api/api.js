import { OMDB_API_KEY, OMDB_URI, OMDB_POSTER_URI } from "../settings";

const getUri = (uri, key, params = {}) =>
  `${uri}?apikey=${key}${
    Object.entries(params).length === 0
      ? ""
      : `&${new URLSearchParams(params).toString()}`
  }`;

const dataUri = (params = {}) => getUri(OMDB_URI, OMDB_API_KEY, params);
const posterUri = (params = {}) =>
  getUri(OMDB_POSTER_URI, OMDB_API_KEY, params);

const fetchOMDB = async (params = { isPoster: false }) => {
  const response = await fetch(
    params.isPoster ? posterUri(params) : dataUri(params)
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

const api = { fetchOMDB };

export default api;
