import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import sass from "sass";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        implementation: "sass",
      },
    },
  },
  plugins: [react()],
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setup.ts",
  },
});
