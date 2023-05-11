import "./App.css";
import MoviesList from "./Components/Movies/MoviesList";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  async function fetchMoviesHandler() {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const data = await response.json();

    let i = 0;
    const transformedMovies = data.map((movieData) => {
      return {
        id: movieData.show.id,
        name: movieData.show.name,
        image:
          movieData.show.image == null ? 'https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg' : movieData.show.image.medium,
        averageRuntime:
          movieData.show.averageRuntime == null
            ? 58
            : movieData.show.averageRuntime,
        rating:
          movieData.show.rating.average == null
            ? 8.7
            : movieData.show.rating.average,
        language: movieData.show.language,
        summary: movieData.show.summary,
      };
    });
    setMovies(transformedMovies);
  }
  useEffect(() => {
    fetchMoviesHandler();
  }, []);
  return (
    <div className="App">
      <MoviesList movies={movies} />
    </div>
  );
}

export default App;
