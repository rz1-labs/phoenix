import express, { type Router } from "express";

import {
  createTmdbClient,
  searchMovies,
  TmdbRequestError,
} from "@phoenix/tmdb";
import { config } from "../config/env";

const router: Router = express.Router();

router.get("/search", async (req, res) => {
  const query = String(req.query.query || "").trim();
  const page = req.query.page ? Number(req.query.page) : undefined;
  const includeAdult =
    req.query.includeAdult === "true" || req.query.includeAdult === "1";
  const language = req.query.language ? String(req.query.language) : undefined;

  if (!query) {
    return res.status(400).json({
      error: "Missing required query parameter: query",
    });
  }

  if (page !== undefined && (!Number.isInteger(page) || page < 1)) {
    return res.status(400).json({
      error: "Invalid page value. Page must be a positive integer.",
    });
  }

  const tmdb = createTmdbClient({
    apiKey: config.tmdbApiKey,
    baseUrl: config.tmdbBaseUrl,
  });

  try {
    const result = await searchMovies(tmdb, {
      query,
      page,
      includeAdult,
      language,
    });

    return res.json(result);
  } catch (error: unknown) {
    if (error instanceof TmdbRequestError) {
      return res.status(error.status).json({
        error: error.message,
        details: error.details,
      });
    }

    return res.status(500).json({
      error: "Failed to search TMDB movies",
    });
  }
});

export default router;
