import { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    // fetch movies
    const fetchMovie = async () => {
      const movieRequest = await axios.get(requests.fetchNetflixOriginals);
      const movieData = movieRequest.data.results;

      setMovie(movieData[Math.floor(Math.random() * movieData.length - 1)]);

      return movieRequest;
    };

    fetchMovie();
  }, []);

  // truncate text
  function truncText(str, n) {
    return str?.length > n ? `${str.substr(0, n - 1)}...` : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundColor: "rgba(34, 34, 34, 0.7)",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__btn">Play</button>
          <button className="banner__btn">My List</button>
        </div>
        <h2 className="banner__description">
          {truncText(movie?.overview, 151)}
        </h2>
      </div>

      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
