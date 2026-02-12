import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const mountApp = () => {
  const container = document.getElementById('root');
  if (container) {
    try {
      const root = createRoot(container);
      root.render(<App />);
      
      // Sembunyikan loader setelah React siap
      setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
          loader.classList.add('fade-out');
          setTimeout(() => loader.remove(), 500);
        }
        console.log("KoperatifAI Sovereign Node: Online");
      }, 300);
      
    } catch (err) {
      console.error("Mount Failure:", err);
      const status = document.getElementById('loader-status');
      if (status) {
        status.innerText = "Critical Error: System Rebooting...";
        status.className = "text-rose-500 font-black uppercase text-xs animate-bounce";
      }
    }
  }
};

// Eksekusi mount
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}