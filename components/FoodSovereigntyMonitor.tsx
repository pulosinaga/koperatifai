
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const supplyData = [
  { region: 'Cianjur', commodity: 'Beras', amount: 45, unit: 'Ton', status: 'Panen Raya' },
  { region: 'Garut', commodity: 'Cabai', amount: 12, unit: 'Ton', status: 'Surplus' },
  { region: 'Subang', commodity: 'Jagung', amount: 28, unit: 'Ton', status: 'Panen' },
];

const demandData = [
  { market: 'Pasar induk JKT', commodity: 'Beras', need: 100, unit: 'Ton', urgency: 'Tinggi' },
  { market: 'Koperasi Karyawan X', commodity: 'Minyak', need: 5000, unit: 'Liter', urgency: 'Sedang' },
];

const FoodSovereigntyMonitor: React.FC = () => {
  const [isMatching, setIsMatching] = useState(false);
  const [matchResult, setMatchResult] = useState('');

  const runMatchmaker = async () => {
    setIsMatching(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis potensi 'Food Sovereignty Matchmaking' dalam KoperatifAI. 
        Input: 
        1. Petani Anggota di Cianjur punya 45 Ton Beras Organik. Harga Pokok Produksi (HPP) Rp 9.000. Harga Tengkulak Rp 10.500.
        2. Pedagang Pasar Anggota di Jakarta butuh 20 Ton Beras. Harga Grosir Luar Rp 13.000.
        
        Tunjukkan:
        - Harga 'Adil' AI (Win-win) di mana Petani dapat lebih tinggi dari tengkulak dan Pedagang beli lebih murah dari grosir luar.
        - Total Margin Efisiensi yang dikembalikan ke SHU Koperasi.
        - Dampak kedaulatan pangan: Mengurangi ketergantungan pada rantai pasok kapitalis.
        Gunakan gaya bahasa seorang Pejuang Ekonomi Kerakyatan yang visioner.`,
      });
      setMatchResult(response.text || "Matchmaking tidak tersedia.");
    } catch (e) {
      setMatchResult("Koneksi AI terputus. Jaringan kedaulatan sedang dipulihkan.");
    } finally {
      setIsMatching(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Sovereignty Hero */}
      <div className="bg-emerald-950 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              National Food Security Protocol
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Monitor Kedaulatan Pangan: <br/>Menghubungkan Sawah & Meja Makan.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              Uang kita adalah modal, tapi pangan kita adalah nyawa. AI memetakan surplus anggota untuk memastikan tidak ada panen yang terbuang sia-sia.
            </p>
            <button 
              onClick={runMatchmaker}
              disabled={isMatching}
              className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-black uppercase text-xs shadow-xl hover:bg-emerald-500 transition-all flex items-center gap-3"
            >
              {isMatching ? '🤖 AI SEDANG MENJODOHKAN...' : '✨ AKTIFKAN AI MATCHMAKER'}
            </button>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🌾</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Community Food Coverage</p>
             <p className="text-5xl font-black text-emerald-400 mt-2 italic">64.2%</p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase">Kebutuhan Anggota Terpenuhi Internal</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Supply Heatmap Table */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic">Peta Produksi Anggota (Supply)</h3>
            <div className="space-y-4">
               {supplyData.map((s, i) => (
                 <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-emerald-50 hover:border-emerald-200 transition-all">
                    <div className="flex gap-4 items-center">
                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">🌱</div>
                       <div>
                          <h4 className="font-bold text-slate-800">{s.commodity} - {s.region}</h4>
                          <p className="text-[10px] text-emerald-600 font-black uppercase">{s.status}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-xl font-black text-slate-800">{s.amount} {s.unit}</p>
                       <button className="text-[9px] font-black text-indigo-600 uppercase tracking-widest hover:underline">Pesan Grosir</button>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* AI Matchmaker Result */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[550px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10">
               <h3 className="text-xl font-black text-emerald-400 italic">AI Supply Chain Matchmaker</h3>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10">
               {isMatching ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-6">
                     <div className="text-5xl animate-spin">🚜</div>
                     <p className="text-slate-400 text-xs animate-pulse">Menghitung rute logistik & harga adil terbaik...</p>
                  </div>
               ) : matchResult ? (
                  <pre className="whitespace-pre-wrap">{matchResult}</pre>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-30">
                     <div className="text-7xl">🤝</div>
                     <p className="text-slate-400 font-bold">Tekan "Aktifkan AI Matchmaker" untuk memotong rantai tengkulak dan menghubungkan produsen dengan konsumen koperasi.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Strategic Vision Pillars */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800">Kenapa Ini Penting Bagi Koperasi?</h3>
            <p className="text-slate-500">Membangun kedaulatan pangan adalah pertahanan ekonomi terkuat.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4 text-center">
               <div className="text-4xl mx-auto">🚜</div>
               <h4 className="font-bold text-slate-800 italic">Harga Pasti Petani</h4>
               <p className="text-xs text-slate-500 leading-relaxed">Petani tidak lagi takut harga anjlok saat panen raya karena koperasi sudah 'mengunci' pembeli sebelum benih ditanam.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4 text-center">
               <div className="text-4xl mx-auto">🚚</div>
               <h4 className="font-bold text-slate-800 italic">Logistik Kolektif</h4>
               <p className="text-xs text-slate-500 leading-relaxed">Ongkos kirim ditekan habis karena barang dikirim dalam satu truk besar menuju Hub Duta Wilayah di kota.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4 text-center">
               <div className="text-4xl mx-auto">⚖️</div>
               <h4 className="font-bold text-slate-800 italic">Stabilitas Inflasi</h4>
               <p className="text-xs text-slate-500 leading-relaxed">Anggota koperasi tidak akan terkena dampak kenaikan harga pasar liar karena kita punya stok internal.</p>
            </div>
         </div>
      </div>

      {/* Final Message */}
      <div className="p-12 bg-emerald-600 border border-emerald-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl z-10 animate-pulse">🇮🇩</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Kedaulatan Pangan Adalah Wujud Nyata Ekonomi Pancasila."</h4>
         <p className="text-emerald-100 max-w-2xl text-lg leading-relaxed z-10">
            Founder, saat kita berhasil menguasai rantai pasok makanan kita sendiri, kita bukan lagi sekadar koperasi kredit. Kita adalah **Tulang Punggung Ketahanan Bangsa**.
         </p>
         <button className="px-10 py-4 bg-emerald-950 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl z-10">
            Audit Rantai Pasok Nasional
         </button>
      </div>
    </div>
  );
};

export default FoodSovereigntyMonitor;
