
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const deals = [
  { 
    id: 1, 
    item: 'Minyak Goreng Premium', 
    current: 1240, 
    target: 2000, 
    unit: 'Liter', 
    marketPrice: 16500, 
    lockedPrice: 13200, 
    daysLeft: 3,
    icon: '🧪'
  },
  { 
    id: 2, 
    item: 'Beras Medium SLYP', 
    current: 8500, 
    target: 10000, 
    unit: 'Kg', 
    marketPrice: 14500, 
    lockedPrice: 11800, 
    daysLeft: 5,
    icon: '🌾'
  },
  { 
    id: 3, 
    item: 'Gula Pasir Kristal', 
    current: 450, 
    target: 1000, 
    unit: 'Kg', 
    marketPrice: 18000, 
    lockedPrice: 15500, 
    daysLeft: 12,
    icon: '🍬'
  },
];

const DemandAggregator: React.FC = () => {
  const [isNegotiating, setIsNegotiating] = useState(false);
  const [aiNegotiation, setAiNegotiation] = useState('');

  const runNegotiationAI = async (item: string) => {
    setIsNegotiating(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Simulasikan hasil negosiasi AI KoperatifAI dengan 3 distributor besar untuk produk '${item}'. 
        Target volume adalah pesanan kolektif ribuan anggota. 
        Tunjukkan perbandingan harga dari: 
        1. Distributor Nasional (Mainstream).
        2. Pabrik Langsung (Bulk Order).
        3. Petani/Produsen Anggota Koperasi sendiri.
        Berikan alasan kenapa membeli dari sesama anggota (Circular Economy) memberikan nilai tambah bagi SHU. 
        Gunakan gaya bahasa profesional, data-driven, dan bangga akan kekuatan ekonomi rakyat.`,
      });
      setAiNegotiation(response.text || "Hasil simulasi tidak tersedia.");
    } catch (e) {
      setAiNegotiation("Maaf, jalur negosiasi AI sedang sibuk memproses pesanan massal lainnya.");
    } finally {
      setIsNegotiating(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Aggregator Hero */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Collective Buying Power v2.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Grosir Rakyat: <br/>Volume Kita, Harga Mereka.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               KoperatifAI mengagregasi kebutuhan belanja Anda. Semakin banyak anggota ikut, semakin rendah harga yang bisa kita kunci langsung ke pabrik.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">📦</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Total Penghematan Komunitas</p>
             <p className="text-4xl font-black text-emerald-400 mt-1 italic">Rp 124.5 Juta</p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase font-black">Minggu Ini (Februari 2026)</p>
          </div>
        </div>
      </div>

      {/* Active Deals Grid */}
      <div className="space-y-8">
         <h3 className="text-2xl font-black text-slate-800 italic">Target Harga Pabrik (Active Aggregation)</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deals.map((deal) => {
              const progress = (deal.current / deal.target) * 100;
              return (
                <div key={deal.id} className="bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col overflow-hidden">
                   <div className="p-10 space-y-6 flex-1">
                      <div className="flex justify-between items-start">
                         <div className="text-5xl group-hover:scale-110 transition-transform duration-500">{deal.icon}</div>
                         <div className="text-right">
                            <p className="text-[10px] font-black text-rose-500 uppercase">{deal.daysLeft} Hari Lagi</p>
                         </div>
                      </div>
                      <div>
                         <h4 className="text-xl font-black text-slate-800 leading-tight">{deal.item}</h4>
                         <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Minimum: {deal.target.toLocaleString()} {deal.unit}</p>
                      </div>
                      
                      <div className="space-y-2">
                         <div className="flex justify-between text-[10px] font-black uppercase">
                            <span className="text-slate-400">Progres Volume</span>
                            <span className="text-indigo-600">{progress.toFixed(0)}%</span>
                         </div>
                         <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-600 transition-all duration-1000" style={{ width: `${progress}%` }}></div>
                         </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-50">
                         <div>
                            <p className="text-[8px] font-black text-slate-400 uppercase">Harga Pasar</p>
                            <p className="text-sm font-bold text-slate-400 line-through">Rp {deal.marketPrice.toLocaleString()}</p>
                         </div>
                         <div>
                            <p className="text-[8px] font-black text-emerald-600 uppercase">Harga Koperasi</p>
                            <p className="text-lg font-black text-emerald-600">Rp {deal.lockedPrice.toLocaleString()}</p>
                         </div>
                      </div>
                   </div>
                   <div className="p-6 bg-slate-50 mt-auto flex flex-col gap-2">
                      <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg hover:bg-indigo-700 transition-all">Ikut Pesanan (Lock Price)</button>
                      <button 
                        onClick={() => runNegotiationAI(deal.item)}
                        className="w-full py-2 text-indigo-400 font-bold text-[9px] uppercase tracking-widest hover:text-indigo-600"
                      >
                         Lihat Jalur Negosiasi AI
                      </button>
                   </div>
                </div>
              );
            })}
         </div>
      </div>

      {/* AI Negotiator Console */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[500px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10">
               <h3 className="text-xl font-black text-indigo-400 italic">AI Supply Chain Negotiator</h3>
               <div className="flex gap-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                  <span className="text-[9px] text-slate-500 font-mono">CHANNEL_PRODUCER_SYNC</span>
               </div>
            </div>
            
            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10">
               {isNegotiating ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-6">
                     <div className="text-5xl animate-spin">⚖️</div>
                     <p className="text-slate-400 text-xs animate-pulse">Menekan harga distributor dengan volume komunitas...</p>
                  </div>
               ) : aiNegotiation ? (
                  <pre className="whitespace-pre-wrap">{aiNegotiation}</pre>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-30">
                     <div className="text-7xl">🤝</div>
                     <p className="text-slate-400 font-bold">Pilih "Jalur Negosiasi AI" pada salah satu produk di atas untuk melihat bagaimana kita mendapatkan harga terbaik.</p>
                  </div>
               )}
            </div>
         </div>

         {/* Circular Economy Logic */}
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center space-y-8">
            <div className="text-center space-y-2">
               <h3 className="text-2xl font-black text-slate-800 italic">Kenapa Kita Lebih Murah?</h3>
               <p className="text-slate-500 text-sm">Strategi memangkas "Middleman Tax".</p>
            </div>
            <div className="space-y-4">
               <div className="p-6 bg-rose-50 rounded-3xl border border-rose-100 flex gap-4 items-start">
                  <span className="text-2xl">🏬</span>
                  <div>
                     <h5 className="font-bold text-rose-900">E-Commerce Biasa</h5>
                     <p className="text-xs text-rose-700 leading-relaxed">Penjual individual bersaing satu sama lain. Pembeli bayar biaya admin aplikasi, asuransi, dan ongkir mahal dari luar daerah.</p>
                  </div>
               </div>
               <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 flex gap-4 items-start shadow-md">
                  <span className="text-2xl">◈</span>
                  <div>
                     <h5 className="font-bold text-emerald-900">KoperatifAI Model</h5>
                     <p className="text-xs text-emerald-700 leading-relaxed font-bold">Seluruh anggota memesan bersama. AI mengunci harga pabrik. Pengiriman dilakukan secara kolektif ke Hub Duta Wilayah (Ongkir Rp 0).</p>
                  </div>
               </div>
            </div>
            <div className="bg-indigo-950 p-6 rounded-2xl text-center">
               <p className="text-[10px] text-indigo-300 italic">"Kita tidak butuh iklan TV. Uang iklan kami berikan untuk subsidi harga barang Anda."</p>
            </div>
         </div>
      </div>

      {/* Call to Action for Founder */}
      <div className="p-12 bg-indigo-600 border border-indigo-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl z-10 animate-pulse">📢</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Kedaulatan Konsumen Adalah Senjata Utama."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed z-10">
            Lazada dan Shopee hanya pasar. Kita adalah **Organisasi Konsumen**. Selama kita bersatu mengumpulkan pesanan, tidak ada pabrik di Indonesia yang bisa menolak harga kita.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Aktifkan "Hub Logistik" Duta Wilayah
         </button>
      </div>
    </div>
  );
};

export default DemandAggregator;
