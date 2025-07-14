

import { useEffect, useState } from "react";
import MovieRow from "../components/Movie";
import {
  getTopRatedMovies,
  getPopularMovies,
  getActionIndianMovies,
  getLatestMovies,
  searchMovies,
  getCrimeTv,
} from "../services/api";

function Home() {
  const [top10, setTop10] = useState([]);
  const [nextWatch, setNextWatch] = useState([]);
  const [watchLater, setWatchLater] = useState([]);
  const [actionIndia, setActionIndia] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [crimeshows, setCrimeShows] = useState([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topRated = await getTopRatedMovies();
        const popular = await getPopularMovies();
        const action = await getActionIndianMovies();
        const latest = await getLatestMovies();
        const crime =await getCrimeTv();

        setTop10(topRated.slice(0, 10));
        setNextWatch(popular.slice(0, 10));
        setActionIndia(action.slice(0, 10));
        setWatchLater(latest.slice(0, 10));
        setCrimeShows(crime.slice(0, 10));
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    try {
      const results = await searchMovies(query);
      setSearchResults(results);
    } catch (err) {
      console.error("Search failed:", err);
    }
  };

  return (
    <div className="home" style={{ backgroundColor: "#111", padding: "20px" , color:"goldenrod"}}>
    
      <form onSubmit={handleSearch} className="search-form" style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
          style={{ padding: "10px", width: "300px", borderRadius: "6px", border: "none" }}
        />
        <button
          type="submit"
          style={{ marginLeft: "10px", padding: "10px 20px", borderRadius: "6px", cursor: "pointer" }}
        >
          Search
        </button>
      </form>
      {searchResults.length > 0 && (
        <MovieRow title={`Search Results for "${query}"`} movies={searchResults} />
      )}

      <MovieRow title="Top 10 Movies Today" movies={top10} />
      <MovieRow title="Your Next Watch" movies={nextWatch} />
      <MovieRow title="Watch It Again" movies={watchLater} />
      <MovieRow title="Indian Action & Adventure" movies={actionIndia} />
      <MovieRow title="Crime Tv Shows" movies={crimeshows} />
    </div>
  );
}

export default Home;

