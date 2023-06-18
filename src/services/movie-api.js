const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '9bb5ab2e288d2a75e3a9828e96791982';

function setUrlParams(url, arr) {
  for (let [name, value] of arr) {
    url.searchParams.set(name, value);
  }
}

async function fetchFromTMDB(additionalURL, urlParams = []) {
  const url = new URL(BASE_URL + additionalURL);

  urlParams.push(['api_key', KEY]);
  setUrlParams(url, urlParams);

  const response = await fetch(url);

  if (response.ok) {
    return response.json();
  }

  return Promise.reject(response.json());
}

export async function fetchTrendingMovies() {
  try {
    return await fetchFromTMDB('trending/movie/day');
  } catch (error) {
    return Promise.reject(await error);
  }
}

export async function fetchMoviesQuery(query, page = 1) {
  const queryParam = [
    ['query', query],
    ['page', page],
  ];

  try {
    return await fetchFromTMDB('search/movie', queryParam);
  } catch (error) {
    return Promise.reject(await error);
  }
}

export async function fetchMovieById(id) {
  try {
    return await fetchFromTMDB(`movie/${id}`);
  } catch (error) {
    return Promise.reject(await error);
  }
}

export async function fetchCreditsById(id) {
  try {
    return await fetchFromTMDB(`movie/${id}/credits`);
  } catch (error) {
    return Promise.reject(await error);
  }
}

export async function fetchReviewsById(id) {
  try {
    return await fetchFromTMDB(`movie/${id}/reviews`);
  } catch (error) {
    return Promise.reject(await error);
  }
}
