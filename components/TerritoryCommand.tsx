
import React from 'react';

const regions = [
  { id: 1, name: 'Cluster Cianjur', dutaCount: 12, members: 450, status: 'Active', growth: '+12%', color: 'bg-indigo-500' },
  { id: 2, name: 'Cluster Bandung Barat', dutaCount: 8, members: 320, status: 'Warning', growth: '-2%', color: 'bg-rose-500' },
  { id: 3, name: 'Cluster Sidoarjo', dutaCount: 15, members: 890, status: 'Active', growth: '+25%', color: 'bg-emerald-500' },
];

const TerritoryCommand: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <div className="text-center space-y-4">
         <h2 className="text-4xl font-black text-slate-800 italic tracking-tight">Peta Komando Wilayah</h2>
         <p className="text-slate-500">Kelola dan pantau sebaran Duta serta kesejahteraan anggota per wilayah.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {regions.map((reg) => (
           <div key={reg.id} className="bg-white rounded-[3.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex justify-between items-start mb-8">
                 <div className={`w-12 h-12 ${reg.color} rounded-2xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform`}>📍</div>
                 <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase ${reg.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>{reg.status}</span>
              </div>
              <h3 className="text-2xl font-black text-slate-800 leading-tight mb-6">{reg.name}</h3>
              <div className="space-y-4 border-t border-slate-50 pt-6">
                 <div className="flex justify-between text-xs font-bold text-slate-400 uppercase">
                    <span>Jumlah Duta</span>
                    <span className="text-slate-800">{reg.dutaCount}</span>
                 </div>
                 <div className="flex justify-between text-xs font-bold text-slate-400 uppercase">
                    <span>Total Anggota</span>
                    <span className="text-slate-800">{reg.members}</span>
                 </div>
                 <div className="flex justify-between text-xs font-bold text-slate-400 uppercase">
                    <span>Growth (MoM)</span>
                    <span className={reg.growth.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}>{reg.growth}</span>
                 </div>
              </div>
              <button className="w-full mt-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-black transition-all">Detail Wilayah</button>
           </div>
         ))}
      </div>

      <div className="bg-indigo-900 rounded-[4rem] p-12 text-white flex flex-col md:flex-row items-center gap-16 shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 opacity-30">🗺️</div>
         <div className="space-y-6 z-10">
            <h4 className="text-3xl font-black italic">"Kuasai Wilayah, Sejahterakan Rakyat."</h4>
            <p className="text-indigo-100 text-lg leading-relaxed max-w-4xl">
               Founder, gunakan peta ini untuk mendeteksi wilayah mana yang masih tertinggal inklusi keuangannya. Tugaskan Duta baru ke wilayah 'abu-abu' untuk melepaskan mereka dari ketergantungan rentenir.
            </p>
            <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Buka Peta Penetrasi Nasional</button>
         </div>
      </div>
    </div>
  );
};

export default TerritoryCommand;
