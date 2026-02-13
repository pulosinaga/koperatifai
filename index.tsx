
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
    
    // Beri waktu bagi React untuk render awal
    requestAnimationFrame(() => {
      setTimeout(removeLoader, 300);
    });
    
    console.log("KoperatifAI Sovereign Node: Online & Authenticated");
  } catch (err) {
    console.error("Fatal Render Error:", err);
    const statusEl = document.getElementById('loader-status');
    if (statusEl) statusEl.innerText = "Render Error. Restarting...";
    setTimeout(() => location.reload(), 2000);
  }
}
