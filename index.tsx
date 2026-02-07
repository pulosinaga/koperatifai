
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

/**
 * KOPERATIFAI ENTRY POINT
 * Diproses oleh Babel Standalone di browser.
 */

const rootEl = document.getElementById('root');
if (rootEl) {
  try {
    const root = ReactDOM.createRoot(rootEl);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (err) {
    console.error("BOOTSTRAP_ERROR:", err);
  }
}
