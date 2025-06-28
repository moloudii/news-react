import { defineConfig } from "vite";

// https://vitejs.dev/config
import path from "node:path";

export default defineConfig({
  root: path.resolve(__dirname, "src/renderer/main_window"),
  build: {
    outDir: path.resolve(__dirname, ".vite/build/renderer/main_window"),
    emptyOutDir: false, // جلوگیری از پاک شدن فایل‌های دستی و کدهای موجود
    rollupOptions: {
      external: ["electron"],
    },
    minify: false,
  },
});
