import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/preload/index.ts"),
      name: "preload",
      fileName: () => "index.js",
      formats: ["cjs"],
    },
    outDir: path.resolve(__dirname, ".vite/build/preload"),
    emptyOutDir: false,
    rollupOptions: {
      external: ["electron"],
    },
    minify: false,
  },
});
