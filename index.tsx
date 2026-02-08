
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

/**
 * KOPERATIFAI ENTRY POINT
 * Dioptimasi untuk stabilitas eksekusi di browser mobile.
 */

console.log("KoperatifAI: Menginisialisasi sistem kedaulatan...");

const rootEl = document.getElementById('root');

if (rootEl) {
  try {
    const root = ReactDOM.createRoot(rootEl);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("KoperatifAI: Render utama berhasil.");
  } catch (err) {
    console.error("CRITICAL_BOOT_ERROR:", err);
    // Jika gagal render, hapus loader secara manual agar user tidak bingung
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';
  }
} else {
  console.error("KoperatifAI: Container #root tidak ditemukan.");
}
