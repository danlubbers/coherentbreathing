self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("my-cache").then(function (cache) {
      return cache.addAll([
        "/",
        "index.html",
        "base.css",
        "style.scss",
        "script.js",
        "assets/icon-144x144.png",
        "assets/icon-192x192.png",
        "assets/icon-512x512.png",
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});