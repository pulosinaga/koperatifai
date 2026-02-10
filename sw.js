// KoperatifAI - In-Browser JIT Compiler Service Worker
importScripts('https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.10/babel.min.js');

self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
    const url = new URL(e.request.url);

    // Mencegat (Intercept) hanya untuk file TypeScript dan React lokal
    if (url.origin === location.origin && (url.pathname.endsWith('.ts') || url.pathname.endsWith('.tsx'))) {
        e.respondWith(
            fetch(e.request.url, { cache: 'no-store' }) // Paksa ambil terbaru dari server
                .then(response => {
                    if (!response.ok) throw new Error("404 File Tidak Ditemukan: " + url.pathname);
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
                            status: 200,
                            headers: {
                                'Content-Type': 'application/javascript; charset=utf-8',
                                'Cache-Control': 'no-cache, no-store, must-revalidate',
                                'Access-Control-Allow-Origin': '*'
                            }
                        });
                    } catch (err) {
                        console.error("Babel Compile Error di " + url.pathname, err);
                        // Inject script yang akan menampilkan error spesifik ke layar merah HTML
                        const errStr = err.message.replace(/`/g, '\\`').replace(/\n/g, '\\n');
                        const errorScript = `
                            const display = document.getElementById('error-display');
                            const details = document.getElementById('error-details');
                            if(display && details) {
                                display.style.display = 'flex';
                                details.innerText = "Syntax Error di file ${url.pathname}:\\n" + \`${errStr}\`;
                            }
                        `;
                        return new Response(errorScript, {
                            status: 200,
                            headers: { 'Content-Type': 'application/javascript; charset=utf-8' }
                        });
                    }
                })
                .catch(err => {
                    console.error("Fetch Error di " + url.pathname, err);
                    const errStr = err.message.replace(/`/g, '\\`');
                    const errorScript = `
                        const display = document.getElementById('error-display');
                        const details = document.getElementById('error-details');
                        if(display && details) {
                            display.style.display = 'flex';
                            details.innerText = "Gagal memuat file ${url.pathname}:\\n" + \`${errStr}\`;
                        }
                    `;
                    return new Response(errorScript, {
                        status: 200,
                        headers: { 'Content-Type': 'application/javascript; charset=utf-8' }
                    });
                })
        );
    }
});