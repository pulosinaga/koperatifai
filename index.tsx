
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

/**
 * KOPERATIFAI MOBILE OPTIMIZED ENTRY
 * Version: 1.2.1
 */

const container = document.getElementById('root');

if (container) {
  try {
    const root = createRoot(container);
    root.render(<App />);
    console.log("KoperatifAI: Render Success");
  } catch (error) {
    console.error("Critical Mount Error:", error);
    // Jika gagal, pastikan loader hilang agar user bisa melihat error konsol jika diperlukan
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';
  }
}
