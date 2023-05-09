import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../Components/Common/Container";
import Slider from "react-slick";

interface Movie {
  imdbID: string;
  Title: string;
  Year: number;
  Poster: string;
  imdbRating: number;
  Images: string[];
  Actors: string;
  Awards: string;
  Director: string;
  Genre: string;
  Plot: string;
  Rated: string;
  Runtime: string;
}

const MoviePage = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const { imdbID } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get<Movie[]>("../json/movies.json");
      const data = response.data.find((movie) => movie.imdbID == imdbID);
      console.log(data);

      setMovie(data || null);
    };
    getMovie();
  }, []);

  if (!movie) return <div>Loading...</div>;

  const settings = {
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 400,
  };

  return (
    <>
      <Container extraClasses="bg-[#2d3436] rounded-lg p-3 mb-4">
        <Slider {...settings}>
          {movie.Images.map((url, key) => (
            <div key={key}>
              <div
                className="w-full h-40 sm:h-80 md:h-96"
                style={{
                  backgroundImage: `url(${url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                }}
              ></div>
            </div>
          ))}
        </Slider>
        <div className="flex items-center justify-between mt-2">
          <div className="flex">
            <div className="mr-3">{movie.Title}</div>
            <div className="mr-3">{movie.Year}</div>
            <div className="mr-3">{movie.Rated}</div>
            <div className="mr-3">{movie.Runtime}</div>
          </div>
          <div className="flex items-center">
            {movie.imdbRating}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-300 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </Container>
      <Container extraClasses="bg-[#2d3436] rounded-lg p-3 mb-4">
        <p>{movie.Plot}</p>
        <p>Awards: {movie.Awards}</p>
        <p>Actors: {movie.Actors}</p>
        <p>Genre: {movie.Genre}</p>
        <p>Director: {movie.Director}</p>
      </Container>
    </>
  );
};

export default MoviePage;
