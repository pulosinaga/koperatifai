import React from 'react';

const regions = [
  { id: 1, name: 'Cluster Cianjur', dutaCount: 12, members: 450, status: 'Active', growth: '+12%', color: 'bg-indigo-500' },
  { id: 2, name: 'Cluster Bandung Barat', dutaCount: 8, members: 320, status: 'Warning', growth: '-2%', color: 'bg-rose-500' },
  { id: 3, name: 'Cluster Sidoarjo', dutaCount: 15, members: 890, status: 'Active', growth: '+25%', color: 'bg-emerald-500' },
];

const TerritoryCommand: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <header className="space-y-1">
        <h2 className="text-4xl font-black text-slate-800 italic tracking-tight uppercase">National Command Center.</h2>
        <p className="text-slate-500 font-medium">Monitoring penetrasi wilayah & performa pimpinan lokal.</p>
      </header>

      {/* Simulated Map Visual */}
      <div className="relative h-[400px] bg-slate-900 rounded-[4rem] overflow-hidden shadow-2xl border-4 border-slate-800">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
         <div className="absolute top-10 left-10 z-20 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10">
            <h4 className="text-white font-black text-xs uppercase tracking-widest">Live Network Activity</h4>
            <p className="text-[10px] text-emerald-400 font-bold mt-1">128 Nodes Online • 34 Regions Synced</p>
         </div>

         {/* Plotting Nodes */}
         <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_20px_#6366f1]"></div>
         <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_30px_#10b981]"></div>
         <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-rose-500 rounded-full animate-ping"></div>
         
         <div className="absolute bottom-10 right-10 flex gap-4">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-[9px] font-black text-white border border-white/10">🔴 KRITIS (HIGH UNBANKED)</div>
            <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-[9px] font-black text-white border border-white/10">🔵 AKTIF (DUTA ASSIGNED)</div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {regions.map((reg) => (
           <div key={reg.id} className="bg-white rounded-[3.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex justify-between items-start mb-8">
                 <div className={`w-12 h-12 ${reg.color} rounded-2xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform font-black`}>◈</div>
                 <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase ${reg.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>{reg.status}</span>
              </div>
              <h3 className="text-2xl font-black text-slate-800 leading-tight mb-6">{reg.name}</h3>
              <div className="space-y-4 border-t border-slate-50 pt-6 font-mono">
                 <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                    <span>Duta Aktif</span>
                    <span className="text-slate-800">{reg.dutaCount} Pimpinan</span>
                 </div>
                 <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                    <span>Anggota Pionir</span>
                    <span className="text-slate-800">{reg.members}</span>
                 </div>
                 <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                    <span>Pertumbuhan</span>
                    <span className={reg.growth.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}>{reg.growth}</span>
                 </div>
              </div>
              <button className="w-full mt-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[9px] hover:bg-black transition-all">Detail Wilayah</button>
           </div>
         ))}
      </div>
    </div>
  );
};

export default TerritoryCommand;