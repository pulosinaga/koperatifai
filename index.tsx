
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

/**
 * Bootstrapper KoperatifAI
 * Memastikan elemen root tersedia dan merender aplikasi React.
 */

// Bypass Service Worker jika bermasalah
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
}

const startApp = () => {
  const container = document.getElementById('root');
  if (!container) {
    throw new Error("Elemen #root tidak ditemukan di DOM.");
  }

  try {
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("KoperatifAI: Kernel dimuat.");
  } catch (err) {
    console.error("Gagal merender aplikasi:", err);
    throw err;
  }
};

// Jalankan aplikasi
startApp();
