
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("KoperatifAI: Kernel Berhasil Dimuat.");
} else {
  console.error("Gagal menemukan elemen #root.");
}
