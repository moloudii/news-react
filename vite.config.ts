import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// این فایل فقط برای توسعه مستقل renderer است. برای build اصلی Electron از vite.renderer.config.ts استفاده کنید.
export default defineConfig({
  root: path.resolve(__dirname, "src/renderer/main_window"),
  publicDir: path.resolve(__dirname, "public"),
  build: {
    outDir: path.resolve(__dirname, ".vite/build/renderer/main_window"),
    emptyOutDir: false,
  },
  plugins: [react()],
});
