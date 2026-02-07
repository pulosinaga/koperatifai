
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

/**
 * KOPERATIFAI ENTRY POINT
 * Diproses oleh Babel Standalone di browser.
 */

console.log("KoperatifAI: Inisialisasi DOM dimulai...");

const rootEl = document.getElementById('root');
if (rootEl) {
  try {
    const root = ReactDOM.createRoot(rootEl);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("KoperatifAI: React Root berhasil dirender.");
  } catch (err) {
    console.error("KOPERATIFAI_BOOTSTRAP_ERROR:", err);
  }
} else {
  console.error("KoperatifAI: Elemen #root tidak ditemukan di DOM.");
}
