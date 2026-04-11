self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('bobo-cache-4').then(cache => {
      return cache.addAll([
        'index.html',
        'manifest.json',
        'down.html'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
