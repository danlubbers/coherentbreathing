import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  server: {
    port: 1542,
  },
  build: {
    minify: true,
    manifest: true,
    rollupOptions: {
      input: {
        main: "index.html",
        robots: "/robots.txt",
      },
    },
  },
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
    }),
  ],
});
