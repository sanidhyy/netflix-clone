import type { Config, Context } from "@netlify/functions";

const TMDB_API_BASE = "https://api.themoviedb.org/3";
const ALLOWED_PREFIXES = ["/trending", "/discover", "/movie", "/tv"] as const;

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

  const tmdbUrl = `${TMDB_API_BASE}${tmdbPath}?${search}`;

  try {
    let tmdbResponse: Response | undefined;
    let lastError: unknown;

    for (let attempt = 0; attempt < 3; attempt += 1) {
      try {
        tmdbResponse = await fetch(tmdbUrl);
        lastError = undefined;
        break;
      } catch (error) {
        lastError = error;
      }
    }

    if (!tmdbResponse) {
      throw lastError;
    }

    const body = await tmdbResponse.text();

    return new Response(body, {
      status: tmdbResponse.status,
      headers: {
        "content-type":
          tmdbResponse.headers.get("content-type") ?? "application/json",
      },
    });
  } catch {
    return json(502, { error: "Failed to reach TMDB" });
  }
};

export const config: Config = {
  path: "/api/tmdb/*",
};
