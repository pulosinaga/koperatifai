
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell, AreaChart, Area } from 'recharts';

const SmartProcurement: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const demandData = [
    { item: 'Beras (Ton)', need: 12.5, supply: 10, price: 'Rp 11.500' },
    { item: 'Minyak (Liter)', need: 2500, supply: 1200, price: 'Rp 14.200' },
    { item: 'Gula (Kg)', need: 1800, supply: 1500, price: 'Rp 13.500' },
    { item: 'Terigu (Karung)', need: 450, supply: 100, price: 'Rp 210.000' },
  ];

  const savingsPotential = [
    { name: 'Harga Pasar', val: 100, color: '#94a3b8' },
    { name: 'KoperatifAI Price', val: 72, color: '#10b981' }
  ];

  const handleAggregate = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResult(true);
    }, 2500);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="bg-emerald-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Bulk Buying Power Engine
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Pengadaan Pintar AI: <br/>Hancurkan Harga Tengkulak.</h2>
            <p className="text-emerald-100 text-lg leading-relaxed max-w-2xl font-medium">
               KoperatifAI mengumpulkan kebutuhan belanja ribuan warung anggota menjadi satu pesanan raksasa, sehingga kita bisa membeli langsung dari pabrik.
            </p>
            <button 
              onClick={handleAggregate}
              disabled={isAnalyzing}
              className="px-10 py-5 bg-white text-emerald-900 rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-emerald-50 transition-all flex items-center gap-3 active:scale-95"
            >
               {isAnalyzing ? '🤖 AI SEDANG MENGHITUNG KEBUTUHAN...' : '🚀 JALANKAN AGREGASI KEBUTUHAN'}
            </button>
          </div>
          <div className="w-full lg:w-96 bg-white p-10 rounded-[3rem] shadow-2xl text-center flex flex-col items-center">
             <div className="text-7xl mb-6 animate-bounce">📦</div>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Co-Buying Discount</p>
             <p className="text-5xl font-black text-emerald-600 mt-1">-28%</p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase font-black italic">Berdasarkan Volume Pebruari 2026</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Live Demand Monitor */}
         <div className="lg:col-span-2 bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <div className="flex justify-between items-center">
               <h3 className="text-2xl font-black text-slate-800 italic">Monitor Kebutuhan Komunitas</h3>
               <div className="flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[9px] font-black animate-pulse">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> LIVE SYNC FROM 1,248 SHOPS
               </div>
            </div>

            <div className="space-y-6">
               {demandData.map((d, i) => (
                 <div key={i} className="space-y-2">
                    <div className="flex justify-between items-end">
                       <div>
                          <h5 className="font-bold text-slate-800">{d.item}</h5>
                          <p className="text-[10px] text-slate-400 uppercase">Stok Terakhir: {d.supply}</p>
                       </div>
                       <div className="text-right">
                          <p className="text-xs font-black text-indigo-600 uppercase">Target: {d.need}</p>
                          <p className="text-[9px] text-emerald-600 font-bold">Est. Saving: 15%</p>
                       </div>
                    </div>
                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex">
                       <div className="h-full bg-indigo-200" style={{ width: `${(d.supply/d.need)*100}%` }}></div>
                       <div className="h-full bg-indigo-600 animate-pulse" style={{ width: `${((d.need-d.supply)/d.need)*100}%` }}></div>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Savings Visualization */}
         <div className="bg-slate-900 p-10 rounded-[4rem] shadow-xl space-y-8 flex flex-col justify-center overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px]"></div>
            <h3 className="text-xl font-black text-emerald-400 uppercase tracking-widest italic relative z-10">Efisiensi Harga AI</h3>
            <div className="flex-1 h-64 w-full relative z-10">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={savingsPotential} layout="vertical">
                     <XAxis type="number" hide />
                     <YAxis dataKey="name" type="category" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 'bold' }} width={120} axisLine={false} tickLine={false} />
                     <Bar dataKey="val" radius={[0, 10, 10, 0]} barSize={40}>
                        {savingsPotential.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                     </Bar>
                  </BarChart>
               </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-400 italic text-center relative z-10">
               "Setiap anggota warung menghemat **Rp 2.800** per liter minyak dibanding beli di grosir luar."
            </p>
         </div>
      </div>

      {/* Logic Breakdown for Founder */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-2xl font-black text-slate-800 italic">Mesin Uang Koperasi #1</h3>
            <div className="space-y-4">
               {[
                 { t: 'Volume Game', d: 'Keuntungan kita bukan dari margin besar, tapi dari putaran barang jutaan anggota.', icon: '⚖️' },
                 { t: 'Data Monopoly', d: 'Koperasi tahu siapa yang butuh apa sebelum anggota itu sendiri sadar. Ini data paling berharga bagi distributor.', icon: '📊' },
                 { t: 'Zero Middleman', d: 'Kita membuang minimal 4 lapis perantara (Grosir, Sub-grosir, Sales, Agen).', icon: '⛓️' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white transition-all">
                    <div className="text-3xl shrink-0">{item.icon}</div>
                    <div>
                       <h5 className="font-bold text-slate-800">{item.t}</h5>
                       <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-indigo-900 p-12 rounded-[4rem] text-white flex flex-col justify-center space-y-8 shadow-xl">
            <div className="text-6xl text-center">🚜</div>
            <h3 className="text-3xl font-black italic text-center leading-tight">"Hubungan Langsung dengan Produsen."</h3>
            <p className="text-indigo-100 text-sm leading-relaxed text-center px-6 italic">
               "KoperatifAI bisa menandatangani kontrak eksklusif dengan pabrik tepung atau petani beras. Mereka dapat pembeli pasti (komunitas kita), kita dapat harga termurah di Indonesia."
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <p className="text-[10px] font-black uppercase text-indigo-400">Total Profit Area</p>
                  <p className="text-lg font-bold">Rp 450jt/bln</p>
               </div>
               <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <p className="text-[10px] font-black uppercase text-indigo-400">Merchant Growth</p>
                  <p className="text-lg font-bold">+42%</p>
               </div>
            </div>
         </div>
      </div>

      {/* Integration Message */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-5xl shrink-0">🏛️</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-slate-800 italic leading-tight">Visi "Grosir Rakyat Digital"</h4>
            <p className="text-slate-500 text-lg leading-relaxed">
               "Saat ribuan warung anggota tersambung ke sistem pengadaan KoperatifAI, Anda sedang membangun **Infrastruktur Logistik Nasional**. Inilah alasan mengapa startup koperasi digital memiliki valuasi jauh lebih tinggi dibanding e-commerce biasa."
            </p>
         </div>
      </div>

      {/* Action Banner for Founder */}
      <div className="p-12 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-5xl shadow-xl z-10 animate-pulse">📢</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Aktifkan Jaringan Supplier Pabrik Sekarang."</h4>
         <p className="text-indigo-200 max-w-2xl text-lg leading-relaxed z-10">
            Founder dapat mulai mendaftarkan mitra distributor besar di menu **Konfigurasi Teknis**. AI akan otomatis mengelola penawaran harga terbaik untuk komunitas anggota.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Buka Katalog Supplier Global
         </button>
      </div>
    </div>
  );
};

export default SmartProcurement;
