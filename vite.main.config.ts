import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main/index.ts"),
      name: "main",
      fileName: () => "index.js",
      formats: ["cjs"],
    },
    outDir: path.resolve(__dirname, ".vite/build/main"),
    emptyOutDir: false,
    rollupOptions: {
      external: ["electron"],
    },
    minify: false,
  },
});
