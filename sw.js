// KoperatifAI - JIT Compiler Service Worker v4.1
importScripts('https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.10/babel.min.js');

self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.map(k => caches.delete(k)));
        }).then(() => {
            return self.clients.claim();
        })
    );
});

self.addEventListener('fetch', (e) => {
    const url = new URL(e.request.url);

    // Mencegat file .ts dan .tsx untuk di-transpile di sisi client
    if (url.origin === location.origin && (url.pathname.endsWith('.ts') || url.pathname.endsWith('.tsx'))) {
        e.respondWith(
            fetch(e.request.url, { cache: 'no-store' })
                .then(response => {
                    if (!response.ok) throw new Error("File 404: " + url.pathname);
                    return response.text();
                })
                .then(text => {
                    try {
                        const compiled = Babel.transform(text, {
                            presets: ['react', 'typescript'],
                            filename: url.pathname,
                            plugins: [
                                // Memastikan JSX ditransformasi sesuai React 18
                                ['transform-react-jsx', { runtime: 'automatic' }]
                            ]
                        }).code;

                        return new Response(compiled, {
                            status: 200,
                            headers: {
                                'Content-Type': 'application/javascript; charset=utf-8',
                                'Cache-Control': 'no-cache'
                            }
                        });
                    } catch (err) {
                        console.error("Babel Error [" + url.pathname + "]:", err);
                        return new Response(`console.error('Babel Transpile Error: ${err.message}');`, {
                            status: 200,
                            headers: { 'Content-Type': 'application/javascript' }
                        });
                    }
                })
        );
    }
});