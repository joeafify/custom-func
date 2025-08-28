import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "CustomFunc",
      fileName: (format) => `custom-func.${format}.js`,
    },
    rollupOptions: {
      external: [],
    },
  },
});
