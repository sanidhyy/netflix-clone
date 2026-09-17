declare module "movie-trailer" {
  function movieTrailer(
    title: string,
    options?: Record<string, unknown>,
  ): Promise<string | string[] | null>;

  export default movieTrailer;
}
