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

const religiousHolidays = [
  { name: 'Isra Mi\'raj', date: '07 Feb', faith: 'Islam', icon: '🌙' },
  { name: 'Tahun Baru Imlek', date: '29 Jan', faith: 'Konghucu', icon: '🏮' },
  { name: 'Hari Raya Nyepi', date: '29 Mar', faith: 'Hindu', icon: '🕉️' },
  { name: 'Wafat Yesus Kristus', date: '03 Apr', faith: 'Kristen', icon: '⛪' },
  { name: 'Hari Raya Idul Fitri', date: '31 Mar', faith: 'Islam', icon: '🕌' },
];

const Dashboard: React.FC = () => {
  const { navigate, user } = useAppContext();
  const role = user?.role || UserRole.MEMBER;
  const firstName = user?.name.split(' ')[0] || 'Anggota';

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours >= 4 && hours < 11) return "Selamat Pagi";
    if (hours >= 11 && hours < 15) return "Selamat Siang";
    if (hours >= 15 && hours < 18.5) return "Selamat Sore";
    return "Selamat Malam";
  };

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
          <h2 className="text-4xl font-black text-slate-800 italic tracking-tight leading-none">
            {role === UserRole.FOUNDER ? `Cockpit Founder • ${getGreeting()}` : `${getGreeting()}.`}
          </h2>
          <p className="text-slate-500 font-bold text-lg">Halo, Bapak {firstName}. Kedaulatan dalam kendali Anda.</p>
        </div>
        <div className="flex gap-2">
           <button onClick={() => navigate(AppView.NOTIFICATION_CENTER)} className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-xl relative">
              🔔
              <div className="absolute top-2 right-2 w-3 h-3 bg-rose-500 rounded-full border-2 border-white animate-pulse"></div>
           </button>
           <div className="px-5 py-3 bg-slate-900 text-white rounded-2xl shadow-xl flex items-center gap-3 border border-white/10 shrink-0">
             <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
             <span className="text-[11px] font-black uppercase tracking-widest">Sentinel System: ACTIVE</span>
           </div>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Stats Column */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((s, i) => (
            <div 
              key={i} 
              onClick={() => navigate(s.view as AppView)}
              className="bg-white p-8 rounded-[3.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl group-hover:scale-125 transition-transform duration-500">{s.icon}</span>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">➔</div>
              </div>
              <p className="text-[12px] text-slate-400 font-black uppercase tracking-widest">{s.label}</p>
              <h3 className={`text-3xl font-black mt-2 ${s.color} italic tracking-tighter`}>{s.val}</h3>
            </div>
          ))}
        </div>

        {/* Religious Calendar (Penyempurnaan Bapak's Request) */}
        <div className="bg-[#020617] p-10 rounded-[4rem] text-white space-y-8 shadow-2xl relative overflow-hidden border-b-8 border-indigo-600">
           <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
           <div className="flex justify-between items-center">
              <h4 className="font-black text-xs uppercase tracking-[0.2em] text-indigo-400">Kalender Suci</h4>
              <span className="text-xl">🕌</span>
           </div>
           <div className="space-y-5">
              {religiousHolidays.map((h, i) => (
                 <div key={i} className="flex justify-between items-start border-b border-white/5 pb-3">
                    <div className="flex gap-4">
                       <span className="text-xl">{h.icon}</span>
                       <div>
                          <p className="text-xs font-black text-emerald-400">{h.date}</p>
                          <p className="text-sm font-bold text-slate-100">{h.name}</p>
                       </div>
                    </div>
                    <span className="text-[8px] px-2 py-1 bg-white/5 rounded-md uppercase font-black text-slate-400">{h.faith}</span>
                 </div>
              ))}
           </div>
           <div className="pt-4 text-center">
              <p className="text-[10px] text-indigo-200 italic font-medium">"Setiap hari raya adalah momen berbagi kemakmuran kolektif."</p>
           </div>
        </div>

      </div>

      {/* Action Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-10 rounded-[4rem] shadow-sm border border-slate-100 space-y-10 overflow-hidden">
           <div className="flex justify-between items-center px-4">
              <div>
                <h4 className="font-black text-slate-800 text-lg uppercase tracking-widest italic leading-none">Pertumbuhan Kesejahteraan</h4>
                <p className="text-[11px] text-slate-400 font-bold mt-2">Sinkronisasi Ledger: {new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}</p>
              </div>
              <div className="text-right">
                 <p className="text-[10px] font-black text-emerald-600 uppercase">Yield Status</p>
                 <p className="text-xl font-black text-slate-800">OPTIMAL</p>
              </div>
           </div>
           <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold', fill: '#94a3b8'}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '32px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.1)', fontWeight: 'bold' }}
                  />
                  <Area type="monotone" dataKey="val" stroke="#6366f1" strokeWidth={6} fillOpacity={1} fill="url(#colorVal)" />
                </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-indigo-600 p-10 rounded-[4rem] text-white space-y-8 relative overflow-hidden shadow-2xl border-b-8 border-indigo-900">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-24 -mt-24"></div>
              <h4 className="text-2xl font-black italic text-white tracking-tighter">Otoritas Digital</h4>
              <div className="space-y-3 relative z-10">
                 {[
                   { l: 'Tarik Tunai', i: '🏧', v: AppView.CASH_WITHDRAWAL },
                   { l: 'Kamera Sakti (QR)', i: '🤳', v: AppView.MEMBER_QRIS },
                   { l: 'Buku Tabungan', i: '📖', v: AppView.DIGITAL_PASSBOOK },
                   { l: 'Sharing Hub', i: '📤', v: AppView.DEPLOYMENT_HUB }
                 ].map((act, i) => (
                   <button 
                    key={i}
                    onClick={() => navigate(act.v)}
                    className="w-full py-5 bg-white/10 hover:bg-white text-white hover:text-indigo-600 transition-all rounded-3xl flex items-center justify-between px-8 group border border-white/5 shadow-inner"
                   >
                      <span className="text-[11px] font-black uppercase tracking-widest">{act.l}</span>
                      <span className="text-2xl group-hover:translate-x-2 transition-transform">{act.i}</span>
                   </button>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;