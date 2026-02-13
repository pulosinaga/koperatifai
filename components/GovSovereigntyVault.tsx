
import React from 'react';

const GovSovereigntyVault: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <div className="bg-[#1e293b] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
               <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-4xl shadow-xl">🇮🇩</div>
               <div>
                  <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                    Regulatory Audit Portal
                  </span>
                  <h2 className="text-4xl font-black leading-tight italic mt-1">Brankas Transparansi Negara.</h2>
               </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
               Selamat datang, Pengawas Negara. Anda memantau kepatuhan operasional KoperatifAI terhadap UU No. 25/1992 secara real-time.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {[
           { t: 'Pajak Terhimpun', v: 'Rp 8.9M', d: 'PPh 4(2) & PPh 23', i: '⚖️' },
           { t: 'Dana Cadangan', v: 'Rp 4.2M', d: 'Secure & Immuttable', i: '🛡️' },
           { t: 'Rasio Likuiditas', v: '18.4%', d: 'Di Atas Standar Minim', i: '📊' },
         ].map((stat, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm text-center space-y-4">
               <div className="text-5xl mb-4">{stat.i}</div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.t}</p>
               <h4 className="text-3xl font-black text-slate-800 italic">{stat.v}</h4>
               <p className="text-xs text-indigo-600 font-bold">{stat.d}</p>
            </div>
         ))}
      </div>

      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16">
         <div className="w-32 h-32 bg-indigo-50 rounded-full flex items-center justify-center text-7xl shrink-0 shadow-inner">🔓</div>
         <div className="space-y-6">
            <h4 className="text-4xl font-black text-slate-800 italic leading-tight">"Audit Otomatis, Negara Tenang."</h4>
            <p className="text-slate-500 text-xl leading-relaxed italic">
               "KoperatifAI memberikan kunci akses baca (Read-Only) ke database ledger bagi pihak berwenang. Ini menghapus proses audit manual yang lambat dan rawan korupsi."
            </p>
         </div>
      </div>
    </div>
  );
};

export default GovSovereigntyVault;
