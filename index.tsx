
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const startApp = () => {
  const container = document.getElementById('root');
  if (container) {
    try {
      const root = createRoot(container);
      root.render(<App />);
      console.log("KoperatifAI Core: Active");
    } catch (err) {
      console.error("Mount Failure:", err);
      // Failsafe: sampaikan pesan ke loader
      const status = document.getElementById('loader-status');
      if (status) status.innerText = "System Rebooting...";
    }
  }
};

// Pastikan DOM siap
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
