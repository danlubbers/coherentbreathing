import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        main: "index.html",
        robots: "/robots.txt",
        // Add more input files as needed
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
      manifest: {
        name: "Coherent Breathing",
        short_name: "Coherent Breathing",
        description:
          "Coherent Breathing also known as resonant breathing is a type of breathing that involves taking five to six breaths per minute soothing the nervous system into a parasympathetic state for relaxation",
        id: "/",
        start_url: "/",
        display: "standalone",
        theme_color: "#222",
        background_color: "#222",
        icons: [
          {
            src: "/assets/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/assets/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/assets/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        screenshots: [
          {
            src: "/assets/apple_splash_640.png",
            type: "image/png",
            sizes: "640x1136",
            form_factor: "narrow",
          },
          {
            src: "/assets/apple_splash_1136-wide.png",
            type: "image/png",
            sizes: "1136x640",
            form_factor: "wide",
          },
        ],
      },
    }),
  ],
});
