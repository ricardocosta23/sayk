import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, "client"), // Vite root is client/
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"), // maps @ to client/src
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  build: {
    outDir: "../dist", // output to project-root/dist
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "client/index.html"), // entry point
    },
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"], // prevent accidental dotfile access
    },
  },
});
