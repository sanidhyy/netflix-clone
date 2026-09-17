export type Movie = {
  id: number;
  media_type?: "movie" | "tv";
  title?: string;
  name?: string;
  original_title?: string;
  original_name?: string;
  overview?: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
};

export type TmdbListResponse = {
  results: Movie[];
};

export type TmdbVideo = {
  key: string;
  site: string;
  type: string;
};

export type TmdbVideosResponse = {
  results: TmdbVideo[];
};
