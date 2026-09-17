import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import type { YouTubeProps } from "react-youtube";

import axios from "../axios";
import type { Movie, TmdbListResponse, TmdbVideosResponse } from "../types/tmdb";

import "./Row.css";

type RowProps = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

const getMediaType = (movie: Movie) => {
  if (movie.media_type === "tv" || movie.media_type === "movie") {
    return movie.media_type;
  }

  return movie.title ? "movie" : "tv";
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

  const handleClick = async (movie: Movie) => {
    if (trailerURL) {
      setTrailerURL("");
      return;
    }

    try {
      const mediaType = getMediaType(movie);
      const request = await axios.get<TmdbVideosResponse>(
        `/${mediaType}/${movie.id}/videos?language=en-US`,
      );
      const youtubeVideos = request.data.results.filter(
        (video) => video.site === "YouTube",
      );
      const trailer =
        youtubeVideos.find((video) => video.type === "Trailer") ??
        youtubeVideos[0];

      if (trailer) {
        setTrailerURL(trailer.key);
      }
    } catch (error: unknown) {
      console.log(error);
    }
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
              onClick={() => {
                void handleClick(movie);
              }}
            />
          );
        })}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
};

export default Row;
