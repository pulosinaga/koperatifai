
// Service Worker Deactivated for Debugging
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((names) => {
      for (let name of names) caches.delete(name);
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Selalu ambil dari jaringan (Network Only)
  return; 
});
