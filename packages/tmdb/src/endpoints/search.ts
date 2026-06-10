import type { TmdbClient } from "../client";
import type { TmdbMovie, TmdbPagedResponse } from "../types";

export interface SearchMoviesParams {
  query: string;
  page?: number;
  includeAdult?: boolean;
  language?: string;
}

export type SearchMoviesResponse = TmdbPagedResponse<TmdbMovie>;

/**
 * Search TMDB movies by free-text query.
 */
export async function searchMovies(
  client: TmdbClient,
  params: SearchMoviesParams,
): Promise<SearchMoviesResponse> {
  const query = params.query.trim();

  if (!query) {
    throw new Error("Search query is required.");
  }

  return client.get<SearchMoviesResponse>("search/movie", {
    query,
    include_adult: params.includeAdult ?? false,
    language: params.language ?? "en-US",
    page: params.page ?? 1,
  });
}
