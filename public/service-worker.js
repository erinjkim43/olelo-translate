// This service worker replaces the old CRA service worker.
// It immediately unregisters itself and clears all caches.
self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function () {
  caches.keys().then(function (names) {
    return Promise.all(
      names.map(function (name) {
        return caches.delete(name);
      })
    );
  }).then(function () {
    return self.clients.matchAll({ type: "window" });
  }).then(function (clients) {
    clients.forEach(function (client) {
      client.navigate(client.url);
    });
    return self.registration.unregister();
  });
});
