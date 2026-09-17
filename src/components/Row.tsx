import { useEffect, useState } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import type { YouTubeProps } from "react-youtube";

import axios from "../axios";
import type { Movie, TmdbListResponse } from "../types/tmdb";

import "./Row.css";

type RowProps = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

const Row = ({ title, fetchUrl, isLargeRow = false }: RowProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerURL, setTrailerURL] = useState("");
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get<TmdbListResponse>(fetchUrl);
      setMovies(request.data.results);
    };

    void fetchData();
  }, [fetchUrl]);

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie: Movie) => {
    if (trailerURL) {
      setTrailerURL("");
      return;
    }

    movieTrailer(movie.name || movie.title || movie.original_title || "")
      .then((url) => {
        if (!url || Array.isArray(url)) {
          return;
        }

        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerURL(urlParams.get("v") ?? "");
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => {
          const imagePath = isLargeRow
            ? movie.poster_path
            : movie.backdrop_path;

          if (!imagePath) {
            return null;
          }

          return (
            <img
              className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
              src={`${baseUrl}${imagePath}`}
              alt={movie.name || movie.title || "Movie poster"}
              key={movie.id}
              onClick={() => handleClick(movie)}
            />
          );
        })}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
};

export default Row;
