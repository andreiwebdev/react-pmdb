import { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { fetchMovies } from "../../api/api";
import { MoviesContext } from "../../store/MoviesContext";

interface Movie {
  imdbID: string;
  Title: string;
  Year: number;
  Poster: string;
  imdbRating: number;
  Images: string[];
}

const MoviesList = () => {
  const [state, setState] = useContext(MoviesContext);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies()
      .then((data) => setState((state) => ({ ...state, movies: data })))
      .catch((error) => console.log(error));
    setFilteredMovies(state.movies);
  }, []);

  useEffect(() => {
    if (state.searchQuery === "") {
      setFilteredMovies(state.movies);
    } else {
      const newMovies = state.movies.filter((movie) =>
        movie.Title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
      setFilteredMovies(newMovies);
    }
  }, [state.searchQuery, state.movies]);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {filteredMovies.map((item) => (
        <MovieCard
          key={`${item.imdbID}${Math.random() * 10}`}
          imdbID={item.imdbID}
          title={item.Title}
          year={item.Year}
          poster={item.Poster}
          rating={item.imdbRating}
          images={item.Images}
        />
      ))}
    </div>
  );
};

export default MoviesList;
