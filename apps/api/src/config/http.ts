/**
 * Shared HTTP configuration for outbound requests (primarily TMDB client).
 */
export const httpConfig = {
  /** Request timeout in milliseconds */
  timeout: 10000,

  /** Number of retry attempts for failed requests */
  retryAttempts: 3,

  /** Delay between retries in milliseconds */
  retryDelay: 1000,

  /** User-Agent string for outbound requests */
  userAgent: "phoenix-api/1.0.0",
};
