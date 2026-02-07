
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

/**
 * Kernel KoperatifAI
 */

const init = () => {
  const container = document.getElementById('root');
  if (!container) return;

  try {
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("KoperatifAI: Aktif.");
  } catch (err) {
    console.error("Render error:", err);
  }
};

// Pastikan DOM siap
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
