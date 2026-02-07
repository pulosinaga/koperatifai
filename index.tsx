
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// Global Error Catch for debugging blank screen
window.onerror = function(message, source, lineno, colno, error) {
  console.error("FATAL APP ERROR:", message, "at", source, ":", lineno);
  const errDisplay = document.getElementById('error-display');
  const errContent = document.getElementById('error-content');
  if (errDisplay && errContent) {
    errDisplay.style.display = 'block';
    errContent.innerHTML = `<strong>Runtime Error:</strong> ${message}<br><small>${source}:${lineno}</small>`;
  }
  return false;
};

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('SW Registered'))
      .catch(err => console.log('SW Registration Bypass', err));
  });
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Critical: #root element not found");
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("App rendered successfully");
  } catch (err) {
    console.error("Render Error:", err);
    const errDisplay = document.getElementById('error-display');
    const errContent = document.getElementById('error-content');
    if (errDisplay && errContent) {
      errDisplay.style.display = 'block';
      errContent.innerText = "Gagal merender aplikasi: " + err.message;
    }
  }
}
