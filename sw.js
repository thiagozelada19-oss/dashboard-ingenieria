// Service Worker - Dashboard Ing. Mecatrónica UNCUYO
// Subí este número cada vez que quieras forzar que los usuarios reciban
// la versión nueva del sitio (invalida la caché vieja automáticamente).
const CACHE_VERSION = 'v2';
const CACHE = 'ing-mct-' + CACHE_VERSION;

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(PRECACHE_ASSETS))
      .catch(() => {}) // si algún asset falla, no bloqueamos la instalación
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Permite que la página fuerce la activación inmediata del SW nuevo
// (usado por el flujo de "hay una versión nueva, tocá para actualizar")
self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = e.request.url;
  if (url.includes('api.anthropic.com')) return;

  // Fuentes de Google: cache-first (casi nunca cambian)
  if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
    e.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(e.request).then(hit =>
          hit || fetch(e.request).then(res => { cache.put(e.request, res.clone()); return res; })
        ).catch(() => new Response('', { status: 503 }))
      )
    );
    return;
  }

  // Resto (mismo origen): stale-while-revalidate
  e.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(e.request).then(hit => {
        const network = fetch(e.request).then(res => {
          if (res.ok) cache.put(e.request, res.clone());
          return res;
        }).catch(() => hit || new Response('Sin conexión', { status: 503 }));
        return hit || network;
      })
    )
  );
});
