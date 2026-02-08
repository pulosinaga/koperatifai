
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

/**
 * KOPERATIFAI PRODUCTION ENTRY POINT
 * Optimized for mobile browser stability.
 */

const mountApp = () => {
  const rootEl = document.getElementById('root');
  if (rootEl) {
    try {
      const root = ReactDOM.createRoot(rootEl);
      root.render(<App />);
      console.log("KoperatifAI: System Engine Online.");
    } catch (err) {
      console.error("KoperatifAI: Critical Mount Failure", err);
      // Force hide loader to show error if any
      const loader = document.getElementById('loader');
      if (loader) loader.style.display = 'none';
    }
  }
};

// Start execution
mountApp();
