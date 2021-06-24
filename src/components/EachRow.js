import { useState, useEffect } from "react";
import "./EachRow.css";
import axios from "../axios";

const EachRow = ({ title, fetchURL, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchMovies = async () => {
      const movieRequest = await axios.get(fetchURL);
      setMovies(movieRequest.data.results);

      return movieRequest;
    };

    fetchMovies();
  }, [fetchURL]);

  console.log(movies);

  return (
    <article className="row">
      <p>{title}</p>

      <div className="poster__wrapper">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                src={`${baseURL}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                className={`movie__poster ${isLargeRow && "large"}`}
              />
            )
        )}
      </div>
    </article>
  );
};

export default EachRow;
