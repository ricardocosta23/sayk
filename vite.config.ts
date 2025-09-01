import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Vercel requires the correct root and outDir settings
export default defineConfig({
  root: path.resolve(__dirname, "client"), // points to client folder
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"), // alias for src
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"), // Vercel expects this folder
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "client", "index.html"),
    },
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
