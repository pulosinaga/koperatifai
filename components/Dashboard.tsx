
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, AreaChart, Area } from 'recharts';
import { AppView, UserRole } from '../types';

interface DashboardProps {
  setView: (view: AppView) => void;
  role: UserRole;
}

const data = [
  { name: 'Jan', value: 4000, members: 800 },
  { name: 'Feb', value: 3000, members: 850 },
  { name: 'Mar', value: 2000, members: 920 },
  { name: 'Apr', value: 2780, members: 1040 },
  { name: 'Mei', value: 1890, members: 1120 },
  { name: 'Jun', value: 2390, members: 1248 },
];

const COLORS = ['#4f46e5', '#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe', '#e0e7ff'];

const Dashboard: React.FC<DashboardProps> = ({ setView, role }) => {
  
  // RENDER MEMBER DASHBOARD
  if (role === UserRole.MEMBER) {
    return (
      <div className="space-y-6 animate-in fade-in duration-500">
        <header>
          <h2 className="text-2xl font-bold text-slate-800">Ringkasan Pemilik</h2>
          <p className="text-slate-500 mt-1">Selamat datang kembali, Budi. Aset Anda sedang bertumbuh.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Tabungan Sukarela</p>
            <h3 className="text-2xl font-black mt-1 text-indigo-600">Rp 15.400.000</h3>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Investasi Modal</p>
            <h3 className="text-2xl font-black mt-1 text-slate-800">Rp 4.200.000</h3>
          </div>
          <div className="bg-rose-50 p-6 rounded-3xl border border-rose-100">
            <p className="text-xs text-rose-500 font-bold uppercase tracking-wider">Sisa Pinjaman</p>
            <h3 className="text-2xl font-black mt-1 text-rose-600">Rp 8.750.000</h3>
          </div>
          <div className="bg-emerald-600 p-6 rounded-3xl text-white shadow-xl">
             <p className="text-xs text-emerald-200 font-bold uppercase tracking-wider">Estimasi SHU</p>
             <h3 className="text-2xl font-black mt-1">Rp 2.450.000</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-800 text-sm uppercase mb-6">Aktivitas Terakhir</h4>
              <div className="space-y-4">
                 {[
                   { t: 'Belanja Marketplace', d: 'Beras Organik', a: '- Rp 75.000', c: 'text-rose-600' },
                   { t: 'Nabung Sukarela', d: 'VA Transfer', a: '+ Rp 500.000', c: 'text-emerald-600' },
                   { t: 'SHU Reward', d: 'Referral Bonus', a: '+ Rp 50.000', c: 'text-indigo-600' },
                 ].map((item, i) => (
                   <div key={i} className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0">
                      <div><p className="text-sm font-bold">{item.t}</p><p className="text-[10px] text-slate-400">{item.d}</p></div>
                      <p className={`font-black ${item.c}`}>{item.a}</p>
                   </div>
                 ))}
              </div>
           </div>
           <div className="bg-slate-900 p-8 rounded-3xl text-white flex flex-col justify-center text-center space-y-4">
              <div className="text-5xl">🎓</div>
              <h4 className="text-xl font-bold italic">"Selesaikan 1 Modul Lagi!"</h4>
              <p className="text-xs text-slate-400">Naikkan limit pinjaman Anda sebesar Rp 1 Juta dengan menyelesaikan modul 'Manajemen Hutang'.</p>
              <button onClick={() => setView(AppView.SMART_EDUCATION)} className="px-6 py-2 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase">Mulai Belajar</button>
           </div>
        </div>
      </div>
    );
  }

  // RENDER FOUNDER DASHBOARD
  if (role === UserRole.FOUNDER) {
    return (
      <div className="space-y-8 animate-in fade-in duration-500">
        <header className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 italic">Founder Command Center</h2>
            <p className="text-slate-500">Memantau visi dan nilai entitas secara global.</p>
          </div>
          <div className="flex gap-4">
             <div className="p-4 bg-indigo-600 text-white rounded-2xl shadow-xl shadow-indigo-100 text-center min-w-[150px]">
                <p className="text-[8px] font-black uppercase tracking-widest opacity-60">Estimated Valuation</p>
                <p className="text-xl font-black">$1.05M</p>
             </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Total Network Strength</p>
              <h3 className="text-3xl font-black text-slate-800 italic">1,248 <span className="text-sm font-medium text-slate-400">Owners</span></h3>
           </div>
           <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Regional Expansion</p>
              <h3 className="text-3xl font-black text-slate-800 italic">12 <span className="text-sm font-medium text-slate-400">Wilayah</span></h3>
           </div>
           <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase mb-1">IP Protection Status</p>
              <h3 className="text-3xl font-black text-emerald-600 italic">SECURE</h3>
           </div>
        </div>

        {/* Chairman Shortcut for Founders */}
        <div className="bg-gradient-to-r from-indigo-900 to-slate-900 p-8 rounded-[3.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
           <div className="flex gap-6 items-center">
              <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-3xl">👔</div>
              <div>
                 <h4 className="text-xl font-black italic">Akses Eksekutif (Ketua Pengurus)</h4>
                 <p className="text-xs text-indigo-300">Anda sedang merangkap sebagai pengelola likuiditas harian.</p>
              </div>
           </div>
           <div className="flex gap-4">
              <button onClick={() => setView(AppView.ACCOUNTING)} className="px-6 py-3 bg-white text-indigo-900 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl">Buka Brankas Digital</button>
              <button onClick={() => setView(AppView.AI_CREDIT_COMMITTEE)} className="px-6 py-3 bg-indigo-500 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl">Approve Pinjaman</button>
           </div>
        </div>

        <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm h-80">
           <h4 className="font-bold text-slate-800 text-sm uppercase mb-6">Growth Velocity (Members)</h4>
           <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                 <XAxis dataKey="name" hide />
                 <YAxis hide />
                 <Tooltip />
                 <Area type="monotone" dataKey="members" stroke="#6366f1" fill="#6366f1" fillOpacity={0.1} strokeWidth={4} />
              </AreaChart>
           </ResponsiveContainer>
        </div>
      </div>
    );
  }

  // DEFAULT DASHBOARD (For Board, Auditor, Staff, Leader)
  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 italic">Management Dashboard</h2>
          <div className="flex items-center gap-3 mt-1">
            <p className="text-slate-500">Monitoring operasional harian.</p>
            <span className="flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-full border border-emerald-100 uppercase tracking-tighter">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              Real-time Ledger Sync
            </span>
          </div>
        </div>
        <div className="bg-white px-4 py-2 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="text-right border-r border-slate-100 pr-4">
            <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Saldo Bank CU</p>
            <p className="text-sm font-black text-slate-800">Rp 12.4M</p>
          </div>
          <div className="text-right">
            <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Likuiditas</p>
            <p className="text-sm font-black text-emerald-600">18.2%</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="group bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:border-indigo-200 transition-all cursor-default">
          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Total Simpanan</p>
          <h3 className="text-2xl font-black mt-1 text-slate-900 group-hover:text-indigo-600 transition-colors">Rp 19.600M</h3>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Pinjaman Beredar</p>
          <h3 className="text-2xl font-black mt-1 text-slate-900">Rp 8.750M</h3>
        </div>
        <div className="bg-rose-50/50 p-6 rounded-3xl shadow-sm border border-rose-100/50">
          <p className="text-xs text-rose-500 font-bold uppercase tracking-wider">NPL (Kredit Macet)</p>
          <h3 className="text-2xl font-black mt-1 text-rose-600">0.05%</h3>
        </div>
        <div className="bg-indigo-600 p-6 rounded-3xl shadow-xl border border-indigo-700 text-white">
          <p className="text-xs text-indigo-200 font-bold uppercase tracking-wider">Member Support</p>
          <h3 className="text-xl font-black mt-1 leading-tight">12 Pending Verifications</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-slate-100 h-80 flex flex-col">
            <h4 className="font-bold text-slate-800 text-sm uppercase mb-6">Yield & Performance</h4>
            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 600, fill: '#94a3b8'}} />
                  <YAxis hide />
                  <Tooltip />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={32}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
        </div>

        <div className="bg-indigo-950 p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
              <h4 className="font-black italic text-indigo-400 uppercase tracking-widest text-xs mb-6">System Health</h4>
              <div className="space-y-6">
                 {[
                   { t: 'ODS Compliance', v: 'SYNCED', c: 'text-emerald-400' },
                   { t: 'AI Sentry Status', v: 'ARMED', c: 'text-emerald-400' },
                   { t: 'Fraud Alerts', v: 'ZERO', c: 'text-white' }
                 ].map((stat, i) => (
                   <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                      <p className="text-xs text-slate-400 font-bold uppercase">{stat.t}</p>
                      <p className={`text-xs font-black ${stat.c}`}>{stat.v}</p>
                   </div>
                 ))}
              </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
