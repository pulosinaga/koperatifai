
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

/**
 * KOPERATIFAI KERNEL v4.1
 * Memastikan stabilitas operasional di lingkungan shared hosting.
 */

const Dashboard = ({ role, setView }) => (
  <div className="space-y-8 animate-in fade-in duration-700">
    <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
      <div>
        <h2 className="text-3xl font-black text-slate-800 italic">Selamat Malam, Budi</h2>
        <p className="text-slate-500 mt-1">Kedaulatan ekonomi Anda dalam genggaman AI.</p>
      </div>
      <div className="px-4 py-2 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-2">
         <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
         <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">System Online & Secure</p>
      </div>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white shadow-xl shadow-indigo-100 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
          <p className="text-[10px] font-black uppercase opacity-60">Tabungan Sukarela</p>
          <p className="text-3xl font-black mt-2">Rp 15.400.000</p>
       </div>
       <div className="p-8 bg-emerald-500 rounded-[2.5rem] text-white shadow-xl shadow-emerald-100 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
          <p className="text-[10px] font-black uppercase opacity-60">Estimasi SHU</p>
          <p className="text-3xl font-black mt-2">Rp 2.450.000</p>
       </div>
       <button 
         onClick={() => alert('Membuka Simulator Pinjaman...')}
         className="p-8 bg-slate-900 rounded-[2.5rem] text-white font-black uppercase tracking-widest text-xs hover:bg-black transition-all flex flex-col items-center justify-center gap-2 group"
       >
          <span className="text-2xl group-hover:translate-x-2 transition-transform">Simulasi Kredit →</span>
          <span className="text-[9px] opacity-40">Bunga Adil 0.9%</span>
       </button>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
       {[
         { id: 'TX', label: 'History', icon: '📜' },
         { id: 'MARKET', label: 'Pasar', icon: '🛒' },
         { id: 'MEMBERSHIP', label: 'Profil', icon: '👤' },
         { id: 'GOLD', label: 'Emas', icon: '📀' },
       ].map(item => (
         <button key={item.id} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center gap-3 hover:shadow-xl hover:border-indigo-100 transition-all">
            <span className="text-4xl">{item.icon}</span>
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{item.label}</span>
         </button>
       ))}
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
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row overflow-hidden font-sans selection:bg-indigo-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-indigo-600 italic tracking-tighter">KoperatifAI</h1>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Sovereign Financial Hub</p>
          </div>
          <div className="flex items-center gap-6">
             <div className="text-right hidden sm:block">
                <p className="text-[10px] font-black text-indigo-600 uppercase">ANGGOTA PIONIR</p>
                <p className="text-xs font-bold text-slate-800">Budi Utama</p>
             </div>
             <button onClick={() => location.reload()} className="p-3 bg-rose-50 text-rose-600 rounded-2xl border border-rose-100 font-black text-[10px] hover:bg-rose-600 hover:text-white transition-all active:scale-95">REBOOT</button>
          </div>
        </nav>

        <main className="flex-1 overflow-y-auto p-6 md:p-12">
          <div className="max-w-6xl mx-auto">
            <Dashboard role="MEMBER" />
          </div>
        </main>
      </div>
    </div>
  );
};

// Start Render
const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<App />);
  console.log("KoperatifAI: Kernel v4.1 Berhasil Dimuat.");
}
