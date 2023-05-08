import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { fetchMovies } from "../../api/api";

interface Movie {
  imdbID: string;
  Title: string;
  Year: number;
  Poster: string;
  imdbRating: number;
  Images: string[];
}

const MoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies()
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {movies?.map((item) => (
        <MovieCard
          key={item.imdbID}
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
