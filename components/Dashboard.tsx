
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AppView, UserRole } from '../types.ts';

interface DashboardProps {
  setView: (view: AppView) => void;
  role: UserRole;
}

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'Mei', value: 6000 },
  { name: 'Jun', value: 7200 },
];

const Dashboard: React.FC<DashboardProps> = ({ setView, role }) => {
  const isMember = role === UserRole.MEMBER;
  const isFounder = role === UserRole.FOUNDER;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">
            {isFounder ? 'Founder Cockpit' : 'Dashboard Anggota'}
          </h2>
          <p className="text-slate-500 mt-1 font-medium">Selamat malam kembali, Budi. Aset Anda sedang dikelola secara otonom.</p>
        </div>
        <div className="flex gap-3">
          <div className="px-4 py-2 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-200 flex items-center gap-2">
             <span className="text-lg">📊</span>
             <span className="text-[10px] font-black uppercase tracking-widest">Real-time Stats</span>
          </div>
        </div>
      </header>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: isFounder ? 'Total Aset Kelola' : 'Tabungan Sukarela', val: isFounder ? 'Rp 19.600M' : 'Rp 15.400.000', icon: '💰', color: 'text-indigo-600', bg: 'bg-white' },
          { label: isFounder ? 'Anggota Aktif' : 'Investasi Modal', val: isFounder ? '1,248' : 'Rp 4.200.000', icon: '👥', color: 'text-slate-800', bg: 'bg-white' },
          { label: isFounder ? 'NPL (Kredit Macet)' : 'Sisa Pinjaman', val: isFounder ? '0.05%' : 'Rp 8.750.000', icon: '📉', color: 'text-rose-600', bg: 'bg-rose-50 border-rose-100' },
          { label: isFounder ? 'Daily Inflow' : 'Estimasi SHU', val: isFounder ? 'Rp 4.2M' : 'Rp 2.450.000', icon: '✨', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-100' },
        ].map((stat, i) => (
          <div key={i} className={`${stat.bg} p-6 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group cursor-default`}>
            <div className="flex justify-between items-start mb-4">
              <span className="text-2xl group-hover:scale-110 transition-transform">{stat.icon}</span>
              <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
            </div>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{stat.label}</p>
            <h3 className={`text-2xl font-black mt-1 ${stat.color} tracking-tighter`}>{stat.val}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Section */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[3.5rem] shadow-sm border border-slate-100 space-y-6">
           <div className="flex justify-between items-center">
              <h4 className="font-black text-slate-800 text-sm uppercase tracking-widest italic">Pertumbuhan Ekosistem (H1 2026)</h4>
              <div className="flex gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
              </div>
           </div>
           <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 700, fill: '#94a3b8'}} />
                  <Tooltip contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                  <Area type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={4} fillOpacity={1} fill="url(#colorVal)" />
                </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        {/* Action Sidebar */}
        <div className="space-y-6">
           <div className="bg-slate-900 p-8 rounded-[3rem] text-white space-y-6 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <h4 className="text-xl font-black italic text-indigo-400">Quick Access</h4>
              <div className="space-y-3 relative z-10">
                 <button 
                  onClick={() => setView(AppView.LOAN_SIMULATOR)}
                  className="w-full py-4 bg-white/10 hover:bg-indigo-600 transition-all rounded-2xl flex items-center justify-between px-6 group"
                 >
                    <span className="text-xs font-bold uppercase tracking-widest">Pinjaman Baru</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                 </button>
                 <button 
                  onClick={() => setView(AppView.MEMBER_MARKETPLACE)}
                  className="w-full py-4 bg-white/10 hover:bg-emerald-600 transition-all rounded-2xl flex items-center justify-between px-6 group"
                 >
                    <span className="text-xs font-bold uppercase tracking-widest">Beli Sembako</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                 </button>
                 <button 
                  onClick={() => setView(AppView.AI_ADVISOR)}
                  className="w-full py-4 bg-white/10 hover:bg-amber-600 transition-all rounded-2xl flex items-center justify-between px-6 group"
                 >
                    <span className="text-xs font-bold uppercase tracking-widest">Tanya AI (Advice)</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                 </button>
              </div>
           </div>

           <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-[3rem] flex flex-col items-center text-center space-y-4">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl">🎓</div>
              <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Tugas Belajar Hari Ini</p>
              <h5 className="text-sm font-bold text-slate-800">Manajemen Kas Keluarga v2.0</h5>
              <button onClick={() => setView(AppView.SMART_EDUCATION)} className="text-[10px] font-black text-indigo-600 underline uppercase">Mulai Belajar</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
