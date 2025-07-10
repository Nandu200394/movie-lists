
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../css/MovieDetails.css";

const API_KEY = "e3132cb9fe3c155bc261308bc2fc35d2";
const BASE_URL = "https://api.themoviedb.org/3";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/movie/${id}`, {
          params: {
            api_key: API_KEY,
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.error(err);
        setError("Could not load movie details.");
      }
    };

    fetchMovie();
  }, [id]);

  if (error) return <div className="error">{error}</div>;
  if (!movie) return <div className="loading">Loading...</div>;

  return (
    <div className="movie-details">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="details">
        <h2>{movie.title}</h2>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Rating:</strong> {movie.vote_average}</p>
        <p><strong>Overview:</strong> {movie.overview}</p>
        <p><strong>Genres:</strong> {movie.genres.map((g) => g.name).join(", ")}</p>
        <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
      </div>
    </div>
  );
}

export default MovieDetails;
