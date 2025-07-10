/*const API_KEY = "e3132cb9fe3c155bc261308bc2fc35d2";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
*/

import axios from 'axios';
const API_KEY = "e3132cb9fe3c155bc261308bc2fc35d2";
const BASE_URL = "https://api.themoviedb.org/3";
export const getPopularMovies =()=>{
  return axios
  .get(`${BASE_URL}/movie/popular`,{
    params: {
      api_key: API_KEY,
    },
  })
   .then((response) => {
    return response.data.results;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    return [];
  });
 
};
export const searchMovies = (query) => {
   return axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query: query,
    },
  })
  .then((response)=>{
    return response.data.results;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    return [];
  });
};
