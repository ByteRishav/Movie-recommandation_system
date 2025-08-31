const API_KEY = "9fc547745948ac26dd7be9efe165d690";
const BASE_URL = "https://api.themoviedb.org/3";


export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  // query : it is parameter that will get the movie you are searching for.  const response = await fetch(
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`)
    

  const data = await response.json();
  return data.results;
};