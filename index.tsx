
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// --- Types & Constants ---
const AppView = {
  DASHBOARD: 'DASHBOARD',
  LOAN_SIMULATOR: 'LOAN_SIMULATOR',
  AI_ADVISOR: 'AI_ADVISOR'
};

// --- Components ---

const Dashboard = ({ setView }) => (
  <div className="space-y-8 animate-in fade-in duration-700">
    <header className="flex justify-between items-end">
      <div>
        <h2 className="text-3xl font-black text-slate-800 italic">Selamat Malam, Budi</h2>
        <p className="text-slate-500 mt-1">Kedaulatan ekonomi Anda dalam genggaman AI.</p>
      </div>
      <div className="px-4 py-2 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-2">
         <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
         <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">SHU Optimizer Active</p>
      </div>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white shadow-xl shadow-indigo-100">
          <p className="text-[10px] font-black uppercase opacity-60">Tabungan Sukarela</p>
          <p className="text-3xl font-black mt-2">Rp 15.400.000</p>
       </div>
       <div className="p-8 bg-emerald-500 rounded-[2.5rem] text-white shadow-xl shadow-emerald-100">
          <p className="text-[10px] font-black uppercase opacity-60">Estimasi SHU</p>
          <p className="text-3xl font-black mt-2">Rp 2.450.000</p>
       </div>
       <button 
         onClick={() => setView(AppView.LOAN_SIMULATOR)}
         className="p-8 bg-slate-900 rounded-[2.5rem] text-white font-black uppercase tracking-widest text-xs hover:bg-black transition-all flex flex-col items-center justify-center gap-2 group"
       >
          <span className="text-2xl group-hover:translate-x-2 transition-transform">Simulasi Kredit →</span>
          <span className="text-[9px] opacity-40">Bunga Adil 0.9%</span>
       </button>
    </div>

    <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm">
        <h3 className="text-xl font-black text-slate-800 italic mb-6">Aktivitas Terakhir</h3>
        <div className="space-y-4">
           {[
             { t: 'Nabung Sukarela', a: '+ Rp 500.000', d: '05 Pebruari 2026', c: 'text-emerald-600' },
             { t: 'Beli Pulsa', a: '- Rp 52.000', d: '04 Pebruari 2026', c: 'text-rose-600' },
           ].map((log, i) => (
             <div key={i} className="flex justify-between items-center py-4 border-b border-slate-50 last:border-0">
                <div>
                   <p className="font-bold text-slate-800">{log.t}</p>
                   <p className="text-[10px] text-slate-400 uppercase font-black">{log.d}</p>
                </div>
                <p className={`font-black ${log.c}`}>{log.a}</p>
             </div>
           ))}
        </div>
    </div>
  </div>
);

const App = () => {
  const [view, setView] = useState(AppView.DASHBOARD);

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans selection:bg-indigo-100">
      <div className="max-w-6xl mx-auto h-full">
        <nav className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-2xl font-black text-indigo-600 italic tracking-tighter">KoperatifAI</h1>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Sovereign Financial Hub</p>
          </div>
          <button onClick={() => location.reload()} className="p-3 bg-rose-50 text-rose-600 rounded-2xl border border-rose-100 font-black text-[10px] hover:bg-rose-600 hover:text-white transition-all">REBOOT</button>
        </nav>

        <main>
          {view === AppView.DASHBOARD ? (
            <Dashboard setView={setView} />
          ) : (
            <div className="bg-white p-20 rounded-[4rem] text-center border border-slate-100">
               <h2 className="text-2xl font-black text-slate-800 italic">Halaman Sedang Diaktifkan</h2>
               <p className="text-slate-500 mt-4">Protokol keamanan sedang memverifikasi akses Anda.</p>
               <button onClick={() => setView(AppView.DASHBOARD)} className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded-2xl font-bold">Kembali ke Dashboard</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

// --- Mount ---
const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}
