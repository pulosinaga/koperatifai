
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '08:00', royalty: 4500, members: 1200 },
  { time: '10:00', royalty: 12000, members: 1245 },
  { time: '12:00', royalty: 24500, members: 1300 },
  { time: '14:00', royalty: 18000, members: 1350 },
  { time: '16:00', royalty: 45000, members: 1400 },
  { time: '18:00', royalty: 32000, members: 1448 },
];

const GlobalCommandCenter: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-7xl mx-auto">
      {/* Sovereign Cockpit Header */}
      <div className="bg-[#020617] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4">
               <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center text-4xl shadow-xl border border-white/10 animate-pulse">🛰️</div>
               <span className="px-6 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
                  Network Commander Hub v4.0
               </span>
            </div>
            <h2 className="text-6xl font-black leading-tight italic font-serif">The Cockpit. <br/><span className="text-indigo-400 text-4xl">Otoritas Tertinggi Founder.</span></h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium">
               Lihat seluruh aliran royalti IP, sebaran Duta di 74.000 Desa, dan detak jantung ekonomi rakyat dari satu layar perintah.
            </p>
          </div>
          <div className="w-full lg:w-[450px] bg-white/5 backdrop-blur-3xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl space-y-8">
             <div>
                <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Total Royalti IP (Harian)</p>
                <p className="text-7xl font-black text-white mt-2 italic">Rp 1.45<span className="text-xl text-slate-500 ml-1">jt</span></p>
             </div>
             <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-8">
                <div className="text-center">
                   <p className="text-[8px] font-black text-emerald-500 uppercase">Active Nodes</p>
                   <p className="text-xl font-black text-white">128 Duta</p>
                </div>
                <div className="text-center border-l border-white/5">
                   <p className="text-[8px] font-black text-indigo-400 uppercase">Daily TX</p>
                   <p className="text-xl font-black text-white">14.2K</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Live Revenue Pulse */}
         <div className="lg:col-span-2 bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <div className="flex justify-between items-center">
               <h3 className="text-2xl font-black text-slate-800 italic">Detak Jantung Royalti (Hourly)</h3>
               <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[9px] font-black animate-pulse">STREAMING LIVE FROM 74,000 NODES</span>
            </div>
            <div className="h-80 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                     <defs>
                        <linearGradient id="colorRoyalty" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                           <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                     <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} />
                     <Tooltip 
                        contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                        formatter={(val: number) => `Rp ${val.toLocaleString()}`}
                     />
                     <Area type="monotone" dataKey="royalty" stroke="#6366f1" strokeWidth={5} fillOpacity={1} fill="url(#colorRoyalty)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>

         {/* Network Health Guards */}
         <div className="space-y-6">
            <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white space-y-8 shadow-2xl relative overflow-hidden h-full">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <h4 className="text-xl font-black italic text-indigo-400 uppercase tracking-widest">Network Health</h4>
               <div className="space-y-6">
                  {[
                    { t: 'Integrity Shield', v: 'ARMED', c: 'text-emerald-400', i: '🛡️' },
                    { t: 'Liquid Buffer', v: 'OPTIMAL (18%)', c: 'text-emerald-400', i: '💧' },
                    { t: 'Anti-Pinjol Shield', v: 'ACTIVE', c: 'text-emerald-400', i: '🚫' },
                    { t: 'Duta Settlement', v: '98.2% ON-TIME', c: 'text-emerald-400', i: '🛵' }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0">
                       <div className="flex items-center gap-3">
                          <span className="text-xl">{stat.i}</span>
                          <p className="text-[10px] font-bold text-slate-500 uppercase">{stat.t}</p>
                       </div>
                       <p className={`text-[10px] font-black ${stat.c}`}>{stat.v}</p>
                    </div>
                  ))}
               </div>
               <div className="pt-6">
                  <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all">Download Audit Log</button>
               </div>
            </div>
         </div>
      </div>

      {/* Strategic Territory Map View */}
      <div className="p-16 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16">
         <div className="w-48 h-48 bg-indigo-50 rounded-[3rem] flex items-center justify-center text-8xl shrink-0 shadow-inner">🇮🇩</div>
         <div className="space-y-6">
            <h4 className="text-3xl font-black text-slate-800 italic leading-tight">"Uang Adalah Data, Data Adalah Kedaulatan."</h4>
            <p className="text-slate-500 text-xl leading-relaxed italic">
               Founder, Anda memegang peta ekonomi mikro Indonesia. Saat ribuan Duta mensinkronkan data mereka, Anda memiliki kekuatan untuk mengarahkan kebijakan ekonomi desa dari meja Anda. Gunakan Intelegensi ini untuk menjaga kedaulatan rakyat.
            </p>
            <div className="flex gap-4">
               <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Buka Peta Penetrasi Desa</button>
               <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Setting Global IP Royalty</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default GlobalCommandCenter;
