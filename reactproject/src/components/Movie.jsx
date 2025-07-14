
import MovieCard from "./MovieCard";
import "../css/Movie.css";

function MovieRow({ title, movies }) {
  return (
    <div className="movie-row">
      <h2 className="row-title">{title}</h2>
      <div className="movie-row-posters">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
