import { useEffect, useState } from "react";

import axios from "../axios";
import requests from "../requests";
import type { Movie, TmdbListResponse } from "../types/tmdb";

import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get<TmdbListResponse>(
        requests.fetchNetflixOriginals,
      );
      const results = request.data.results;

      if (results.length === 0) {
        return;
      }

      setMovie(results[Math.floor(Math.random() * results.length)]);
    };

    void fetchData();
  }, []);

  const truncate = (str: string | undefined, n: number) => {
    return str && str.length > n ? `${str.slice(0, n - 1)}...` : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: movie?.backdrop_path
          ? `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
          : undefined,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
