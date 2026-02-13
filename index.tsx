
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const container = document.getElementById('root');

function removeLoader() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.remove();
      document.body.style.overflow = 'auto';
    }, 500);
  }
}

if (container) {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    // Gunakan requestIdleCallback jika tersedia, atau setTimeout sebagai fallback
    const cleaner = window.requestIdleCallback || window.setTimeout;
    cleaner(() => {
      setTimeout(removeLoader, 200);
    });
    
    console.log("KoperatifAI Sovereign Node: Active");
  } catch (err) {
    console.error("Critical Component Failure:", err);
    document.body.innerHTML = `
      <div style="background:#020617; color:#f43f5e; height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:sans-serif; text-align:center; padding:20px;">
        <h1 style="font-weight:900; font-style:italic;">SYSTEM BREACH</h1>
        <p style="color:#94a3b8;">Komponen inti gagal dimuat. Sedang memulihkan otoritas...</p>
        <button onclick="location.reload()" style="margin-top:20px; padding:10px 20px; background:#6366f1; color:white; border:none; border-radius:10px; font-weight:bold;">REFRESH KEDAULATAN</button>
      </div>
    `;
  }
}
