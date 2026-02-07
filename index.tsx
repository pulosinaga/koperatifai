
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.log("KoperatifAI: Memulai inisialisasi kernel...");

const container = document.getElementById('root');

if (container) {
  try {
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("KoperatifAI: Render berhasil.");
  } catch (err) {
    console.error("KoperatifAI: Gagal merender App:", err);
    throw err; // Lempar agar ditangkap oleh window.onerror di index.html
  }
} else {
  console.error("KoperatifAI: Elemen #root tidak ditemukan.");
}
