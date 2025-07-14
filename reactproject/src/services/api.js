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

/*import axios from 'axios';
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
};*/
// services/api.js
// services/api.js
import axios from "axios";

const API_KEY = "e3132cb9fe3c155bc261308bc2fc35d2";
const BASE_URL = "https://api.themoviedb.org/3";

const fetchFromTMDB = (endpoint, extraParams = {}) => {
  return axios
    .get(`${BASE_URL}${endpoint}`, {
      params: { api_key: API_KEY, ...extraParams },
    })
    .then((res) => res.data.results)
    .catch((err) => {
      console.error("API error:", err);
      return [];
    });
};

export const getTopRatedMovies = () => fetchFromTMDB("/movie/top_rated");
export const getPopularMovies = () => fetchFromTMDB("/movie/popular");
export const getActionIndianMovies = () =>
  fetchFromTMDB("/discover/movie", { with_genres: 28, region: "IN" });
export const getLatestMovies = () =>
  fetchFromTMDB("/discover/movie", { sort_by: "release_date.desc" });
export const getCrimeTv =  () => 
  fetchFromTMDB("/discover/tv",{with_genres:80}); 
export const searchMovies = (query) =>
  fetchFromTMDB("/search/movie", { query });

         
