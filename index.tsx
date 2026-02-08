
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

/**
 * KOPERATIFAI PRODUCTION ENTRY POINT
 */

const rootEl = document.getElementById('root');

if (rootEl) {
  try {
    const root = ReactDOM.createRoot(rootEl);
    // Menghapus StrictMode sementara untuk memastikan stabilitas di mobile browser
    root.render(<App />);
    console.log("KoperatifAI System: Online and Ready.");
  } catch (err) {
    console.error("Critical Boot Error:", err);
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';
  }
}
