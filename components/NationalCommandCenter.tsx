
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { region: 'Jabar', members: 4500, growth: 24 },
  { region: 'Jatim', members: 3200, growth: 18 },
  { region: 'Sumut', members: 1800, growth: 42 },
  { region: 'Sulsel', members: 950, growth: 12 },
];

const NationalCommandCenter: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-7xl mx-auto">
      <div className="bg-[#020617] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Provincial Marshal Strategic Command
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif">Peta Kekuatan <br/><span className="text-indigo-400 text-4xl">Wilayah Anda.</span></h2>
            <p className="text-slate-400 text-xl font-medium leading-relaxed">
               Bapak Marshal, pantau pergerakan ekonomi di setiap kabupaten dan desa di bawah komando Anda.
            </p>
          </div>
          <div className="w-full lg:w-[450px] bg-white/5 backdrop-blur-3xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl space-y-8">
             <div>
                <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Total Anggota Regional</p>
                <p className="text-6xl font-black text-white mt-2 italic">10.4K</p>
             </div>
             <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-8">
                <div className="text-center">
                   <p className="text-[8px] font-black text-emerald-500 uppercase">Duta Desa Aktif</p>
                   <p className="text-xl font-black text-white">45 Tokoh</p>
                </div>
                <div className="text-center border-l border-white/5">
                   <p className="text-[8px] font-black text-indigo-400 uppercase">Jasa Marshal</p>
                   <p className="text-xl font-black text-white">Rp 12.5Jt</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic uppercase">Pertumbuhan Rakyat (Regional)</h3>
            <div className="h-80 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                     <defs>
                        <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                           <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                     <XAxis dataKey="region" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 'bold'}} />
                     <Tooltip contentStyle={{ borderRadius: '24px', border: 'none' }} />
                     <Area type="monotone" dataKey="members" stroke="#6366f1" strokeWidth={5} fillOpacity={1} fill="url(#colorMembers)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>

         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col justify-center space-y-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[100px]"></div>
            <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest relative z-10">Integrity Health Monitor</h3>
            <div className="space-y-6 relative z-10">
               {[
                 { r: 'Cianjur', s: 'OPTIMAL', i: '98%', c: 'text-emerald-400' },
                 { r: 'Bandung Barat', s: 'STABLE', i: '94%', c: 'text-emerald-400' },
                 { r: 'Sukabumi', s: 'CAUTION', i: '82%', c: 'text-amber-400' },
               ].map((item, i) => (
                 <div key={i} className="flex justify-between items-center p-5 bg-white/5 rounded-2xl border border-white/5">
                    <div>
                       <p className="text-white font-bold">{item.r}</p>
                       <p className="text-[10px] text-slate-500 uppercase">{item.s}</p>
                    </div>
                    <p className={`text-2xl font-black ${item.c}`}>{item.i}</p>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default NationalCommandCenter;
