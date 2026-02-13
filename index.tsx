
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const container = document.getElementById('root');

function hideLoader() {
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
    root.render(<App />);
    
    // Gunakan requestAnimationFrame untuk memastikan DOM ter-update
    requestAnimationFrame(() => {
      setTimeout(hideLoader, 300);
    });
    
    console.log("KoperatifAI Sovereign Node: Active & Synchronized");
  } catch (err) {
    console.error("Mount Error:", err);
    location.reload();
  }
}
