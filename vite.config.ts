import { configDefaults, defineConfig } from "vitest/config";
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
    coverage: {
      provider: "v8",
      all: false,
    },
    // 👋 add the line below to add jsdom to vite
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setup.ts",
    include: ["./src/tests/**"],
    exclude: [...configDefaults.exclude, "./src/main"],
    reporters: "verbose",
  },
});
