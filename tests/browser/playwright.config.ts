import { defineConfig } from "@playwright/test";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH
  || (existsSync("/repl/tools/bin/chromium") ? "/repl/tools/bin/chromium" : undefined);

export default defineConfig({
  testDir: ".",
  testMatch: "city-journal-gallery.spec.ts",
  fullyParallel: true,
  timeout: 30_000,
  expect: { timeout: 5_000 },
  retries: 0,
  workers: 2,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:4174",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    reducedMotion: "reduce",
  },
  projects: [
    ...(["chromium", "firefox", "webkit"] as const).flatMap((browserName) => {
      // A Chromium executable must never leak into the other engines.
      const launchOptions = browserName === "chromium" && executablePath
        ? { executablePath }
        : {};
      return [
        {
          name: `${browserName}-desktop`,
          use: { browserName, launchOptions, viewport: { width: 1280, height: 800 } },
        },
        {
          name: `${browserName}-mobile`,
          use: {
            browserName,
            launchOptions,
            viewport: { width: 375, height: 812 },
            hasTouch: true,
            // Firefox cannot emulate isMobile; it still runs every assertion
            // at the same narrow viewport, with touch enabled.
            ...(browserName !== "firefox" ? { isMobile: true } : {}),
          },
        },
      ];
    }),
  ],
  webServer: {
    cwd: fileURLToPath(new URL("../../", import.meta.url)),
    command: "node node_modules/vite/bin/vite.js --config tests/browser/vite.config.ts",
    url: "http://127.0.0.1:4174",
    reuseExistingServer: false,
    timeout: 30_000,
  },
});