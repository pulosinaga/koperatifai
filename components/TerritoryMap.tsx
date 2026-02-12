import React, { useState } from 'react';

const regions = [
  { id: 1, name: 'Cianjur Selatan', unbanked: '82%', umkm: 1450, potential: 'HIGH', color: 'bg-rose-500' },
  { id: 2, name: 'Sidoarjo Industrial', unbanked: '15%', umkm: 8900, potential: 'MEDIUM', color: 'bg-amber-500' },
  { id: 3, name: 'Garut Agrikultur', unbanked: '64%', umkm: 2100, potential: 'HIGH', color: 'bg-rose-500' },
  { id: 4, name: 'Bandung Kota', unbanked: '5%', umkm: 12000, potential: 'LOW', color: 'bg-emerald-500' },
];

const TerritoryMap: React.FC = () => {
  const [selected, setSelected] = useState(regions[0]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      <header className="space-y-1">
        <h2 className="text-3xl font-black text-slate-800 italic tracking-tight">Peta Penetrasi Nasional.</h2>
        <p className="text-slate-500 font-medium">AI mendeteksi wilayah "Underbanked" yang butuh kedaulatan modal.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Visual Map Mockup */}
        <div className="lg:col-span-2 bg-slate-900 rounded-[3.5rem] p-1 shadow-2xl relative overflow-hidden h-[500px]">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
           <div className="absolute top-10 left-10 z-20">
              <div className="flex items-center gap-3">
                 <div className="w-3 h-3 bg-rose-500 rounded-full animate-ping"></div>
                 <span className="text-white font-black text-xs uppercase tracking-widest">Live Demand Radar</span>
              </div>
           </div>
           
           {/* Simulated Map Nodes */}
           <div className="w-full h-full flex items-center justify-center relative">
              {regions.map((reg, i) => (
                <button
                  key={reg.id}
                  onClick={() => setSelected(reg)}
                  className={`absolute w-12 h-12 rounded-full border-4 border-white/20 transition-all hover:scale-150 hover:z-30 shadow-2xl ${reg.color} ${selected.id === reg.id ? 'ring-8 ring-white/10 scale-125 z-20' : 'opacity-60 grayscale'}`}
                  style={{ top: `${20 + (i*15)}%`, left: `${20 + (i*20)}%` }}
                >
                  <span className="text-white text-[10px] font-black">{reg.potential[0]}</span>
                </button>
              ))}
           </div>

           <div className="absolute bottom-10 right-10 flex gap-4">
              <div className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-2">
                 <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                 <span className="text-[8px] text-white font-bold uppercase">High Need</span>
              </div>
              <div className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-2">
                 <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                 <span className="text-[8px] text-white font-bold uppercase">Saturated</span>
              </div>
           </div>
        </div>

        {/* Region Insights */}
        <div className="space-y-6">
           <div className="bg-white p-8 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-6 h-full">
              <div className="space-y-1 text-center">
                 <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Detail Wilayah</p>
                 <h3 className="text-2xl font-black text-slate-800 italic">{selected.name}</h3>
              </div>
              
              <div className="space-y-4">
                 <div className="p-5 bg-slate-50 rounded-3xl flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-500 uppercase">Rasio Unbanked</span>
                    <span className="text-lg font-black text-rose-600">{selected.unbanked}</span>
                 </div>
                 <div className="p-5 bg-slate-50 rounded-3xl flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-500 uppercase">Jumlah UMKM</span>
                    <span className="text-lg font-black text-slate-800">{selected.umkm.toLocaleString()}</span>
                 </div>
                 <div className="p-5 bg-indigo-50 rounded-3xl flex justify-between items-center border border-indigo-100">
                    <span className="text-xs font-bold text-indigo-600 uppercase">Prioritas Penetrasi</span>
                    <span className="text-lg font-black text-indigo-700">{selected.potential}</span>
                 </div>
              </div>

              <button className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-indigo-700 transition-all">Tugaskan Duta Baru</button>
           </div>
        </div>
      </div>

      {/* Strategic Vision */}
      <div className="p-10 bg-white border border-slate-100 rounded-[3.5rem] flex flex-col md:flex-row items-center gap-10">
         <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-5xl">🔭</div>
         <div className="flex-1 space-y-2">
            <h4 className="text-2xl font-black text-slate-800 italic leading-tight">Data adalah Pedang Anda.</h4>
            <p className="text-slate-500 leading-relaxed text-sm">
               "Jangan kirim Duta ke wilayah yang sudah penuh perbankan. Kirim mereka ke desa di mana rakyatnya diperas bunga 10% per bulan oleh rentenir. Di sana, KoperatifAI akan disambut seperti pahlawan."
            </p>
         </div>
      </div>
    </div>
  );
};

export default TerritoryMap;