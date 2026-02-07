
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

console.log("KoperatifAI: Kernel .js dimuat.");

const container = document.getElementById('root');

if (container) {
  try {
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (err) {
    console.error("KoperatifAI: Render Error:", err);
    throw err;
  }
}
