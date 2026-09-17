import type { Config, Context } from "@netlify/functions";

const TMDB_API_BASE = "https://api.themoviedb.org/3";
const ALLOWED_PREFIXES = ["/trending", "/discover", "/movie"] as const;

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });

export default async (req: Request, _context: Context) => {
  if (req.method !== "GET") {
    return json(405, { error: "Method not allowed" });
  }

  const apiKey = process.env.TMDB_API_KEY;

  if (!apiKey) {
    return json(500, { error: "TMDB API key is not configured" });
  }

  const url = new URL(req.url);
  const tmdbPath = url.pathname.replace(/^\/api\/tmdb/, "") || "/";
  const isAllowed = ALLOWED_PREFIXES.some(
    (prefix) => tmdbPath === prefix || tmdbPath.startsWith(`${prefix}/`),
  );

  if (!isAllowed) {
    return json(403, { error: "Forbidden path" });
  }

  const search = new URLSearchParams(url.search);
  search.delete("api_key");
  search.delete("access_token");
  search.set("api_key", apiKey);

  const tmdbResponse = await fetch(`${TMDB_API_BASE}${tmdbPath}?${search}`);
  const body = await tmdbResponse.text();

  return new Response(body, {
    status: tmdbResponse.status,
    headers: {
      "content-type":
        tmdbResponse.headers.get("content-type") ?? "application/json",
    },
  });
};

export const config: Config = {
  path: "/api/tmdb/*",
};
