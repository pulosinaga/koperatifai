// KoperatifAI - In-Browser JIT Compiler Service Worker
importScripts('https://unpkg.com/@babel/standalone@7.23.10/babel.min.js');

self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((names) => {
            for (let name of names) caches.delete(name);
        }).then(() => {
            return self.clients.claim();
        })
    );
});

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    if (event.data && event.data.type === 'CLAIM') {
        self.clients.claim();
    }
});

self.addEventListener('fetch', (e) => {
    const url = new URL(e.request.url);

    // Mencegat (Intercept) hanya untuk file TypeScript dan React lokal
    if (url.origin === location.origin && (url.pathname.endsWith('.ts') || url.pathname.endsWith('.tsx'))) {
        e.respondWith(
            fetch(e.request, { cache: 'no-store' }) // Paksa ambil terbaru dari server
                .then(response => {
                    if (!response.ok) throw new Error("File tidak ditemukan di server: " + url.pathname);
                    return response.text();
                })
                .then(text => {
                    try {
                        // Terjemahkan TypeScript & JSX ke JavaScript murni menggunakan Babel
                        const compiled = Babel.transform(text, {
                            presets: ['react', 'typescript'],
                            filename: url.pathname
                        }).code;

                        // Kembalikan sebagai JavaScript dengan MIME Type yang benar
                        return new Response(compiled, {
                            headers: {
                                'Content-Type': 'application/javascript; charset=utf-8',
                                'Cache-Control': 'no-cache, no-store, must-revalidate',
                                'Access-Control-Allow-Origin': '*'
                            }
                        });
                    } catch (err) {
                        console.error("Babel Compile Error di " + url.pathname, err);
                        const errStr = err.message.replace(/`/g, '\\`').replace(/\n/g, '\\n');
                        const errorScript = `console.error("Compile Error:", \`${errStr}\`); throw new Error(\`Gagal Menerjemahkan ${url.pathname}\`);`;
                        return new Response(errorScript, {
                            headers: { 'Content-Type': 'application/javascript; charset=utf-8' }
                        });
                    }
                })
                .catch(err => {
                    const errStr = err.message.replace(/`/g, '\\`');
                    const errorScript = `console.error("Fetch Error:", \`${errStr}\`); throw new Error(\`Gagal Mengunduh ${url.pathname}\`);`;
                    return new Response(errorScript, {
                        headers: { 'Content-Type': 'application/javascript; charset=utf-8' }
                    });
                })
        );
    }
});
