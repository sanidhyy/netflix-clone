import netlify from "@netlify/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  if (env.TMDB_API_KEY) {
    process.env.TMDB_API_KEY = env.TMDB_API_KEY;
  }

  return {
    plugins: [
      react(),
      netlify({
        edgeFunctions: { enabled: false },
      }),
    ],
  };
});
