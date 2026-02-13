
import React, { useState } from 'react';

const PolicyEnforcement: React.FC = () => {
  const [policies] = useState([
    { id: 1, title: 'Batas Bunga Pinjaman', value: '1.2%', unit: 'Per Bulan', status: 'HARD-LOCKED', icon: '💸' },
    { id: 2, title: 'Rasio Cadangan Likuiditas', value: '15%', unit: 'Aset Total', status: 'ENFORCED', icon: '💧' },
    { id: 3, title: 'Iuran DASKOP Wajib', value: 'Rp 5.000', unit: 'Per Bulan', status: 'SYSTEM_SYNC', icon: '🛡️' },
    { id: 4, title: 'Plafon Penarikan Duta', value: 'Rp 3 Juta', unit: 'Per Hari', status: 'AUDITED', icon: '🛵' }
  ]);

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <div className="text-center space-y-4">
         <h2 className="text-4xl font-black text-slate-800 italic uppercase tracking-tight">Kunci Kebijakan (Enforcement)</h2>
         <p className="text-slate-500 text-lg">"Founder mengunci AD/ART ke dalam kode. Pengurus mematuhi secara otomatis."</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {policies.map((p) => (
           <div key={p.id} className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600 opacity-20"></div>
              <div className="flex justify-between items-start mb-8">
                 <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform">
                    {p.icon}
                 </div>
                 <div className="text-right">
                    <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-1">{p.status}</p>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                 </div>
              </div>
              <h4 className="text-xl font-black text-slate-800 mb-2">{p.title}</h4>
              <div className="flex items-baseline gap-2">
                 <p className="text-4xl font-black text-indigo-900 italic tracking-tighter">{p.value}</p>
                 <p className="text-xs font-bold text-slate-400 uppercase">{p.unit}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-50 flex gap-2">
                 <button className="flex-1 py-3 bg-slate-100 text-slate-500 rounded-xl text-[9px] font-black uppercase cursor-not-allowed">Hanya via e-RAT</button>
                 <button className="px-4 py-3 bg-indigo-50 text-indigo-600 rounded-xl text-[9px] font-black uppercase">Detail Aturan</button>
              </div>
           </div>
        ))}
      </div>

      {/* Strategic Callout */}
      <div className="p-16 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">⚓</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight text-indigo-400">"The Code is The Constitution."</h4>
            <p className="text-stone-400 text-xl leading-relaxed max-w-4xl">
               Founder, inilah jaminan kedaulatan abadi Bapak. Saat aturan **DASKOP** dan **Asuransi Mandiri** dikunci di level sistem, tidak ada pergantian pengurus yang bisa mengutak-atik hak rakyat. Bapak membangun institusi yang **Self-Governing**.
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Update Master Policies</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default PolicyEnforcement;
