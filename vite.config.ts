import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    root: "src",
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    reporters: ["verbose"],
    coverage: {
      reportsDirectory: "../coverage",
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["**/*.ts", "**/*.tsx"],
      exclude: ["main.tsx", "vite-env.d.ts"],
    },
  },
});
