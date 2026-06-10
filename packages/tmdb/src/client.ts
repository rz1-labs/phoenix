import type { TmdbErrorResponse } from "./types";
import { log } from "@phoenix/logger";

const DEFAULT_BASE_URL = "https://api.themoviedb.org/3";

export interface TmdbClientOptions {
  apiKey: string;
  baseUrl?: string;
  fetchFn?: typeof fetch;
}

export interface TmdbClient {
  get<TResponse>(
    path: string,
    queryParams?: Record<string, string | number | boolean | undefined>,
  ): Promise<TResponse>;
}

export class TmdbRequestError extends Error {
  public readonly status: number;
  public readonly details?: TmdbErrorResponse;

  constructor(status: number, message: string, details?: TmdbErrorResponse) {
    super(message);
    this.name = "TmdbRequestError";
    this.status = status;
    this.details = details;
  }
}

export function createTmdbClient(options: TmdbClientOptions): TmdbClient {
  const fetchFn = options.fetchFn ?? fetch;
  const baseUrl = (options.baseUrl ?? DEFAULT_BASE_URL).replace(/\/$/, "");

  log.info("Options passed to TMDB client", options);

  return {
    async get<TResponse>(
      path: string,
      queryParams: Record<string, string | number | boolean | undefined> = {},
    ): Promise<TResponse> {
      const requestUrl = new URL(`${baseUrl}/${path.replace(/^\//, "")}`);

      log.info("Making TMDB API request", {
        method: "GET",
        url: requestUrl.toString(),
        queryParams,
      });

      for (const key in queryParams) {
        if (!Object.prototype.hasOwnProperty.call(queryParams, key)) {
          continue;
        }

        const value = queryParams[key];

        if (value === undefined) {
          continue;
        }

        requestUrl.searchParams.set(key, String(value));
      }

      const response = await fetchFn(requestUrl.toString(), {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${options.apiKey}`,
        },
      });

      if (!response.ok) {
        let errorPayload: TmdbErrorResponse | undefined;

        try {
          errorPayload = (await response.json()) as TmdbErrorResponse;
        } catch {
          errorPayload = undefined;
        }

        throw new TmdbRequestError(
          response.status,
          errorPayload?.status_message || "TMDB request failed",
          errorPayload,
        );
      }

      const responseData = (await response.json()) as TResponse;

      log.info("TMDB API response", {
        method: "GET",
        url: requestUrl.toString(),
        status: response.status,
        data: responseData,
      });

      return responseData;
    },
  };
}
