
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, AreaChart, Area } from 'recharts';

// --- TYPES & CONSTANTS ---
enum AppView {
  DASHBOARD = 'DASHBOARD',
  TRANSACTIONS = 'TRANSACTIONS',
  REVENUE_CENTER = 'REVENUE_CENTER',
  LOAN_SIMULATOR = 'LOAN_SIMULATOR',
  AI_ADVISOR = 'AI_ADVISOR',
  MEMBERSHIP = 'MEMBERSHIP'
}

enum UserRole {
  FOUNDER = 'FOUNDER',
  BOARD = 'BOARD',
  MEMBER = 'MEMBER',
}

const chartData = [
  { name: 'Peb', value: 4000 },
  { name: 'Mar', value: 3000 },
  { name: 'Apr', value: 2000 },
  { name: 'Mei', value: 2780 },
  { name: 'Jun', value: 1890 },
  { name: 'Jul', value: 2390 },
];

// --- COMPONENTS ---

const Dashboard = ({ setView }) => (
  <div className="space-y-8 animate-in fade-in duration-700">
    <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
      <div>
        <h2 className="text-3xl font-black text-slate-800 italic">Selamat Malam, Budi</h2>
        <p className="text-slate-500 mt-1">Kedaulatan ekonomi Anda dalam genggaman AI.</p>
      </div>
      <div className="px-4 py-2 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-2">
         <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
         <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Sovereign Node Stable</p>
      </div>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white shadow-xl shadow-indigo-100 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
          <p className="text-[10px] font-black uppercase opacity-60">Tabungan Kolektif</p>
          <p className="text-3xl font-black mt-2">Rp 19.600.000</p>
       </div>
       <div className="p-8 bg-emerald-500 rounded-[2.5rem] text-white shadow-xl shadow-emerald-100 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
          <p className="text-[10px] font-black uppercase opacity-60">Estimasi Laba (SHU)</p>
          <p className="text-3xl font-black mt-2">Rp 4.250.000</p>
       </div>
       <button 
         onClick={() => setView(AppView.REVENUE_CENTER)}
         className="p-8 bg-slate-900 rounded-[2.5rem] text-white font-black uppercase tracking-widest text-xs hover:bg-black transition-all flex flex-col items-center justify-center gap-2 group"
       >
          <span className="text-2xl group-hover:translate-x-2 transition-transform">Cek Mesin Cuan →</span>
          <span className="text-[9px] opacity-40">Cara Menghasilkan Uang</span>
       </button>
    </div>

    <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm">
        <h3 className="text-xl font-black text-slate-800 italic mb-6">Pertumbuhan Aset Anggota</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold', fill: '#94a3b8'}} />
              <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '16px', border: 'none'}} />
              <Bar dataKey="value" fill="#6366f1" radius={[10, 10, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
    </div>
  </div>
);

const RevenueCenter = () => (
  <div className="space-y-8 animate-in fade-in duration-700">
    <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
      <h3 className="text-2xl font-black text-slate-800 italic">Mesin Pendapatan Online</h3>
      <p className="text-slate-500">Sumber uang yang dihasilkan koperasi dari sistem online Anda:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-indigo-50 rounded-3xl border border-indigo-100">
          <h4 className="font-bold text-indigo-900">1. Micro-Fees Marketplace</h4>
          <p className="text-xs text-indigo-700 mt-2">Biaya admin Rp 1.000 per transaksi di pasar anggota. Jika 10.000 anggota belanja sekali sebulan, Anda menghasilkan <b>Rp 10 Juta</b> pendapatan pasif.</p>
        </div>
        <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
          <h4 className="font-bold text-emerald-900">2. PPOB Margins</h4>
          <p className="text-xs text-emerald-700 mt-2">Keuntungan dari setiap bayar listrik, pulsa, dan BPJS. Margin Rp 500 - Rp 2.000 per tagihan yang masuk ke kas koperasi.</p>
        </div>
        <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100">
          <h4 className="font-bold text-amber-900">3. Jasa Pinjaman Mikro</h4>
          <p className="text-xs text-amber-700 mt-2">Bunga adil 0.9% - 1.5% yang dikelola AI. Tanpa biaya admin perbankan yang mahal, selisih bunga menjadi laba bersih.</p>
        </div>
        <div className="p-6 bg-rose-50 rounded-3xl border border-rose-100">
          <h4 className="font-bold text-rose-900">4. Royalti Lisensi AI</h4>
          <p className="text-xs text-rose-700 mt-2">Setiap wilayah/duta yang menggunakan sistem Anda membayar biaya sewa infrastruktur Cloud per bulan.</p>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  const [view, setView] = useState<AppView>(AppView.DASHBOARD);
  const [role] = useState<UserRole>(UserRole.MEMBER);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row overflow-hidden font-sans selection:bg-indigo-100">
      {/* Navigation Mobile Only */}
      <nav className="lg:hidden p-4 bg-white border-b border-slate-200 flex justify-between items-center">
        <h1 className="text-lg font-black text-indigo-600 italic">KoperatifAI</h1>
        <button onClick={() => setView(AppView.DASHBOARD)} className="text-xs font-bold bg-slate-100 px-4 py-2 rounded-xl">Menu</button>
      </nav>

      {/* Sidebar Desktop */}
      <aside className="w-72 bg-white border-r border-slate-200 flex flex-col h-full hidden lg:flex">
        <div className="p-8">
          <h1 className="text-2xl font-black text-slate-800 italic tracking-tight">KoperatifAI</h1>
          <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mt-1">Sovereign Financial Hub</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
           <button onClick={() => setView(AppView.DASHBOARD)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all ${view === AppView.DASHBOARD ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}>📊 Dashboard</button>
           <button onClick={() => setView(AppView.REVENUE_CENTER)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all ${view === AppView.REVENUE_CENTER ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}>💰 Revenue Center</button>
        </nav>
        <div className="p-8 border-t border-slate-100">
           <button onClick={() => location.reload()} className="w-full py-4 bg-rose-50 text-rose-600 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-all">Reboot Core</button>
        </div>
      </aside>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6 md:p-12 custom-scrollbar">
          <div className="max-w-6xl mx-auto">
            {view === AppView.DASHBOARD && <Dashboard setView={setView} />}
            {view === AppView.REVENUE_CENTER && <RevenueCenter />}
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
}
