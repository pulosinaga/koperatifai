
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// Simple Types (Merged from types.ts)
const AppView = {
  DASHBOARD: 'DASHBOARD',
  LOAN_SIMULATOR: 'LOAN_SIMULATOR',
  MEMBERSHIP: 'MEMBERSHIP'
};

const UserRole = {
  MEMBER: 'MEMBER',
  FOUNDER: 'FOUNDER'
};

// --- Dashboard Component ---
const Dashboard = ({ setView }) => (
  <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 animate-in fade-in">
    <h2 className="text-2xl font-bold text-slate-800">Selamat Malam, Budi</h2>
    <p className="text-slate-500 mt-2">Kedaulatan ekonomi Anda dalam genggaman AI.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div className="p-6 bg-indigo-50 rounded-2xl">
        <p className="text-xs font-bold text-indigo-600 uppercase">Tabungan</p>
        <p className="text-2xl font-black text-indigo-900">Rp 15.400.000</p>
      </div>
      <div className="p-6 bg-emerald-50 rounded-2xl">
        <p className="text-xs font-bold text-emerald-600 uppercase">Estimasi SHU</p>
        <p className="text-2xl font-black text-emerald-900">Rp 2.450.000</p>
      </div>
      <button 
        onClick={() => setView(AppView.LOAN_SIMULATOR)}
        className="p-6 bg-indigo-600 rounded-2xl text-white font-bold hover:bg-indigo-700 transition-all"
      >
        Mulai Simulasi Kredit →
      </button>
    </div>
  </div>
);

// --- Main App Component ---
const App = () => {
  const [view, setView] = useState(AppView.DASHBOARD);

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-12">
      <nav className="max-w-5xl mx-auto mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-black text-indigo-600 italic">KoperatifAI</h1>
        <div className="flex gap-4">
          <button onClick={() => setView(AppView.DASHBOARD)} className="text-xs font-bold uppercase text-slate-500">Home</button>
          <button className="px-4 py-2 bg-rose-50 text-rose-600 rounded-xl text-[10px] font-bold uppercase">Logout</button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto">
        {view === AppView.DASHBOARD ? (
          <Dashboard setView={setView} />
        ) : (
          <div className="p-12 bg-white rounded-3xl text-center">
            <h2 className="text-xl font-bold">Fitur Sedang Dimuat...</h2>
            <button onClick={() => setView(AppView.DASHBOARD)} className="mt-4 text-indigo-600 font-bold">Kembali</button>
          </div>
        )}
      </main>
    </div>
  );
};

// --- Bootloader ---
console.log("KoperatifAI: Kernel Aktif.");
const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<App />);
}
