import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Movie {
  imdbID: string;
  Title: string;
  Year: number;
  Poster: string;
  imdbRating: number;
  Images: string[];
}

const MoviePage = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const { imdbID } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get<Movie[]>("../json/movies.json");
      const data = response.data.find((movie) => movie.imdbID == imdbID);
      setMovie(data || null);
    };
    getMovie();
  }, []);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.Title}</h1>
      <p>{movie.Year}</p>
      <img src={movie.Images[0]} alt={movie.Title} />
    </div>
  );
};

export default MoviePage;
