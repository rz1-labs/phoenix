export { createTmdbClient, TmdbRequestError } from "./client";
export type { TmdbClient, TmdbClientOptions } from "./client";

export { searchMovies } from "./endpoints/search";
export type {
  SearchMoviesParams,
  SearchMoviesResponse,
} from "./endpoints/search";

export type { TmdbErrorResponse, TmdbMovie, TmdbPagedResponse } from "./types";
