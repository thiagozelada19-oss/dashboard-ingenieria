// Service Worker - Dashboard Ing. Mecatrónica UNCUYO
// Subí este número cada vez que quieras forzar que los usuarios reciban
// la versión nueva del sitio (invalida la caché vieja automáticamente).
const CACHE_VERSION = 'v5';
const CACHE = 'ing-mct-' + CACHE_VERSION;

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './data.js',
  './firebase-config.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/localforage/1.10.0/localforage.min.js',
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore-compat.js',
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

  // Fuentes de Google, y librerías/SDKs de CDN: cache-first (casi nunca cambian)
  if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com') || url.includes('cdnjs.cloudflare.com') || url.includes('www.gstatic.com/firebasejs')) {
    e.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(e.request).then(hit =>
          hit || fetch(e.request).then(res => { cache.put(e.request, res.clone()); return res; })
        ).catch(() => new Response('', { status: 503 }))
      )
    );
    return;
  }

  // Resto de llamadas a Google (Firebase Auth + Firestore en tiempo real):
  // las dejamos viajar directo a la red, sin que el Service Worker las
  // intercepte ni las cachee, para no interferir con la sincronización en vivo.
  if (url.includes('googleapis.com') || url.includes('accounts.google.com')) return;

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
