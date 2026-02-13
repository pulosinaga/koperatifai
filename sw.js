
// KoperatifAI - JIT Compiler Service Worker v5.0
importScripts('https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.10/babel.min.js');

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    
    // Hanya transpile file .ts dan .tsx lokal
    if (url.origin === location.origin && (url.pathname.endsWith('.ts') || url.pathname.endsWith('.tsx'))) {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    if (!response.ok) throw new Error('File not found');
                    return response.text();
                })
                .then(text => {
                    const transformed = Babel.transform(text, {
                        presets: ['react', 'typescript'],
                        plugins: [['transform-react-jsx', { runtime: 'automatic' }]],
                        filename: url.pathname
                    }).code;
                    
                    return new Response(transformed, {
                        headers: { 'Content-Type': 'application/javascript; charset=utf-8' }
                    });
                })
                .catch(err => {
                    console.error('Babel Transpile Error:', url.pathname, err);
                    return new Response(`console.error("Babel failed for ${url.pathname}: ${err.message}");`, {
                        headers: { 'Content-Type': 'application/javascript' }
                    });
                })
        );
    }
});
