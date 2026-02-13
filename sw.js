
// KoperatifAI - JIT Compiler Service Worker v4.5
importScripts('https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.10/babel.min.js');

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (e) => {
    const url = new URL(e.request.url);
    if (url.origin === location.origin && (url.pathname.endsWith('.ts') || url.pathname.endsWith('.tsx'))) {
        e.respondWith(
            fetch(e.request.url)
                .then(res => res.text())
                .then(text => {
                    const code = Babel.transform(text, {
                        presets: ['react', 'typescript'],
                        plugins: [['transform-react-jsx', { runtime: 'automatic' }]]
                    }).code;
                    return new Response(code, {
                        headers: { 'Content-Type': 'application/javascript; charset=utf-8' }
                    });
                })
                .catch(err => {
                    return new Response(`console.error('Babel Error: ${err.message}');`, {
                        headers: { 'Content-Type': 'application/javascript' }
                    });
                })
        );
    }
});
