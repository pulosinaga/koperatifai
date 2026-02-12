import React from 'react';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AppView, UserRole } from '../types.ts';
import { useAppContext } from '../contexts/AppContext.tsx';

const chartData = [
  { name: 'Sen', val: 4000 },
  { name: 'Sel', val: 3000 },
  { name: 'Rab', val: 5000 },
  { name: 'Kam', val: 4500 },
  { name: 'Jum', val: 6500 },
  { name: 'Sab', val: 7800 },
  { name: 'Min', val: 8200 },
];

const Dashboard: React.FC = () => {
  const { navigate, user } = useAppContext();
  const role = user?.role || UserRole.MEMBER;
  const firstName = user?.name.split(' ')[0] || 'Anggota';

  // Stats Logic based on Role
  const stats = role === UserRole.MEMBER ? [
    { label: 'Saldo Sukarela', val: `Rp ${user?.balances.voluntary.toLocaleString('id-ID')}`, icon: '💰', color: 'text-indigo-600', view: AppView.DIGITAL_PASSBOOK },
    { label: 'Sisa Pinjaman', val: 'Rp 4.250.000', icon: '💸', color: 'text-rose-500', view: AppView.LOAN_HISTORY },
    { label: 'Reputasi AI', val: `${user?.reputationScore}`, icon: '🛡️', color: 'text-emerald-600', view: AppView.MEMBERSHIP_PROFILE },
    { label: 'Estimasi SHU', val: 'Rp 245.500', icon: '✨', color: 'text-amber-600', view: AppView.SHU_DISTRIBUTION },
  ] : [
    { label: 'Total Aset Kelola', val: 'Rp 19.6 M', icon: '🌐', color: 'text-indigo-600', view: AppView.GLOBAL_COMMAND_CENTER },
    { label: 'Jumlah Duta', val: '128 Pimpinan', icon: '🛵', color: 'text-amber-600', view: AppView.REVENUE_CENTER },
    { label: 'Inflow Hari Ini', val: 'Rp 12.4 Jt', icon: '📥', color: 'text-emerald-600', view: AppView.TRANSACTIONS },
    { label: 'Status Sistem', val: '99.9% Uptime', icon: '🛰️', color: 'text-rose-600', view: AppView.SYSTEM_HEALTH },
  ];

  return (
    <div className="space-y-8 pb-10">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="space-y-1">
          <h2 className="text-3xl font-black text-slate-800 italic tracking-tight">
            {role === UserRole.FOUNDER ? 'Cockpit Founder.' : role === UserRole.LEADER ? 'Dashboard Duta.' : 'Selamat Pagi.'}
          </h2>
          <p className="text-slate-500 font-medium">Halo, {firstName}. Siap membangun kedaulatan hari ini?</p>
        </div>
        <div className="px-4 py-2 bg-slate-900 text-white rounded-2xl shadow-xl flex items-center gap-3 border border-white/10 shrink-0">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
          <span className="text-[10px] font-black uppercase tracking-widest">AI Sentinel: Monitoring Active</span>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((s, i) => (
          <div 
            key={i} 
            onClick={() => navigate(s.view as AppView)}
            className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-2xl group-hover:scale-125 transition-transform duration-500">{s.icon}</span>
              <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">➔</div>
            </div>
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{s.label}</p>
            <h3 className={`text-xl md:text-2xl font-black mt-1 ${s.color} italic tracking-tighter`}>{s.val}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Section */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[3.5rem] shadow-sm border border-slate-100 space-y-8 overflow-hidden">
           <div className="flex justify-between items-center px-2">
              <div>
                <h4 className="font-black text-slate-800 text-sm uppercase tracking-widest italic">Pertumbuhan Kesejahteraan</h4>
                <p className="text-[10px] text-slate-400 font-bold">Periode: 7 Hari Terakhir</p>
              </div>
              <button onClick={() => navigate(AppView.TRANSACTIONS)} className="text-[10px] font-black text-indigo-600 underline uppercase tracking-widest">Detail Laporan</button>
           </div>
           <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold', fill: '#94a3b8'}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', fontWeight: 'bold' }}
                  />
                  <Area type="monotone" dataKey="val" stroke="#6366f1" strokeWidth={5} fillOpacity={1} fill="url(#colorVal)" />
                </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        {/* Quick Actions Adaptive */}
        <div className="space-y-6">
           <div className="bg-slate-900 p-8 rounded-[3.5rem] text-white space-y-6 relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <h4 className="text-xl font-black italic text-indigo-400 tracking-tighter">Aksi Cepat</h4>
              <div className="space-y-2.5 relative z-10">
                 {[
                   { l: 'Tarik Tunai', i: '🏧', v: AppView.CASH_WITHDRAWAL },
                   { l: 'Bayar Tagihan', i: '🛡️', v: AppView.BILL_PAYMENTS },
                   { l: 'Pasar Rakyat', i: '🛒', v: AppView.MEMBER_MARKETPLACE },
                   { l: 'Chat Mentor AI', i: '🤖', v: AppView.AI_ADVISOR }
                 ].map((act, i) => (
                   <button 
                    key={i}
                    onClick={() => navigate(act.v)}
                    className="w-full py-4 bg-white/5 hover:bg-indigo-600 transition-all rounded-2xl flex items-center justify-between px-6 group border border-white/5 shadow-inner"
                   >
                      <span className="text-[10px] font-black uppercase tracking-widest">{act.l}</span>
                      <span className="group-hover:translate-x-1 transition-transform">{act.i}</span>
                   </button>
                 ))}
              </div>
           </div>

           <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-[3.5rem] flex flex-col items-center text-center space-y-4 shadow-inner">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl border border-indigo-100 animate-bounce">🎓</div>
              <p className="text-[9px] font-black text-indigo-600 uppercase tracking-[0.2em]">Literasi Finansial</p>
              <h5 className="text-sm font-bold text-slate-800 leading-tight">Ubah Utang Menjadi Aset Produktif</h5>
              <button onClick={() => navigate(AppView.SMART_EDUCATION)} className="text-[10px] font-black text-indigo-600 underline uppercase tracking-widest">Pelajari Caranya</button>
           </div>
        </div>
      </div>

      {/* Role Specific Highlight Section */}
      {role === UserRole.MEMBER && (
        <div className="p-8 bg-white border border-slate-100 rounded-[3.5rem] flex flex-col md:flex-row items-center gap-8 group">
           <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center text-4xl shrink-0 group-hover:rotate-12 transition-transform">🌱</div>
           <div className="flex-1 text-center md:text-left space-y-1">
              <h4 className="text-xl font-black text-slate-800 italic">Target Celengan Anda</h4>
              <p className="text-slate-500 text-sm">Sedikit demi sedikit, menjadi bukit kedaulatan.</p>
           </div>
           <div className="w-full md:w-64">
              <div className="flex justify-between text-[10px] font-black uppercase mb-2">
                 <span className="text-slate-400">Pencapaian: Rp 12.4M</span>
                 <span className="text-emerald-600">82%</span>
              </div>
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                 <div className="h-full bg-emerald-500 animate-pulse" style={{ width: '82%' }}></div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;