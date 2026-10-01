import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

export default defineConfig({
  root: fileURLToPath(new URL("./", import.meta.url)),
  publicDir: fileURLToPath(new URL("../../client/public", import.meta.url)),
  // Do not invalidate the running app's optimized dependencies while testing.
  cacheDir: fileURLToPath(new URL("../../node_modules/.vite-city-journal-browser", import.meta.url)),
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 4174,
    strictPort: true,
    fs: { allow: [fileURLToPath(new URL("../../", import.meta.url))] },
  },
});