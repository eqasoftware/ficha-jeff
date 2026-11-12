const CACHE_NAME = 'ficha-jeff-v3';
const APP_SHELL = [
  './',
  './index.html',
  './styles.css',
  './tracker.css',
  './app.js',
  './exercises.js',
  './session-core.js',
  './manifest.json',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;

  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          const copy = response.clone();
          return caches.open(CACHE_NAME)
            .then(cache => cache.put('./index.html', copy))
            .then(() => response);
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  const networkResponse = fetch(request).then(response => {
    if (!response || response.status !== 200 || response.type === 'opaque') {
      return response;
    }

    const copy = response.clone();
    return caches.open(CACHE_NAME)
      .then(cache => cache.put(request, copy))
      .then(() => response);
  });

  event.waitUntil(networkResponse.catch(() => undefined));
  event.respondWith(
    caches.match(request).then(cached => cached || networkResponse)
  );
});
