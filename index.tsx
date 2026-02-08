
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

/**
 * KOPERATIFAI PRODUCTION ENTRY v2.0
 * Optimized for Instant Mobile Boot
 */

const container = document.getElementById('root');

if (container) {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("KoperatifAI System: Online");
  } catch (err) {
    console.error("Critical System Failure:", err);
    // Jika gagal total, sembunyikan loader agar tidak berputar terus
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';
  }
}
