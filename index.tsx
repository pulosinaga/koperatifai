
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// Global Error Catch for debugging blank screen
window.onerror = function(message, source, lineno, colno, error) {
  console.error("FATAL APP ERROR:", message, "at", source, ":", lineno);
  return false;
};

// Service Worker Registration with update logic
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => {
        console.log('SW Registered!');
        // Check for updates
        reg.onupdatefound = () => {
          const installingWorker = reg.installing;
          if (installingWorker) {
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('New content is available; please refresh.');
              }
            };
          }
        };
      })
      .catch(err => console.log('SW Registration Failed', err));
  });
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
