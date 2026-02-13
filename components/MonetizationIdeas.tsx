
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const profitEngines = [
  { id: 'ppob', title: 'PPOB & Admin Fee', desc: 'Margin Rp 1.500 per bayar listrik/pulsa. Skala nasional tanpa batas.', icon: '⚡', potency: 'High Frequency', color: 'bg-blue-600' },
  { id: 'royalty', title: 'Royalti IP Founder', desc: 'Rp 100 dari setiap detak transaksi aplikasi. Pendapatan pasif seumur hidup.', icon: '💎', potency: 'Passive Wealth', color: 'bg-indigo-600' },
  { id: 'market', title: 'Marketplace Spread', desc: 'Selisih harga grosir pabrik vs harga anggota. Cuan dari perputaran barang.', icon: '🛒', potency: 'Volume Base', color: 'bg-emerald-600' },
  { id: 'trust', title: 'Trust-as-a-Service', desc: 'Biaya verifikasi karakter AI untuk pihak luar (Leasing/Bank). Jual data jujur.', icon: '🛡️', potency: 'Asset Data', color: 'bg-amber-500' }
];

const MonetizationIdeas: React.FC = () => {
  const [isBrainstorming, setIsBrainstorming] = useState(false);
  const [aiResponse, setAiResponse] = useState('');
  const [targetMembers, setTargetMembers] = useState(10000);

  const startBrainstorm = async () => {
    setIsBrainstorming(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Bapak Founder ingin strategi cuan konkret. Berikan 3 taktik 'Fast Cash' dari 10.000 anggota aktif. Contoh: Titip paket desa, Admin PPOB, dan Iuran Proteksi Sehat. Berikan angka rupiah per bulannya.`,
      });
      setAiResponse(response.text || "AI sedang merajut strategi...");
    } catch (e) {
      setAiResponse("Koneksi Strategis sedang padat. Fokus pada 100 orang pionir!");
    } finally {
      setIsBrainstorming(false);
    }
  };

  const scalingData = [
    { name: '100 Pionir', rev: 100 * 10 * 100 / 1000 },
    { name: '1k Anggota', rev: 1000 * 10 * 100 / 1000 },
    { name: '10k Anggota', rev: 10000 * 10 * 100 / 1000 },
    { name: '1M Anggota', rev: 1000000 * 10 * 100 / 1000 },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      <div className="bg-[#020617] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              The Founder's Cashflow Matrix
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif">Online-kan Cuan Bapak.</h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium">
               "Koperasi offline hanya simpan-pinjam. Koperasi online Bapak menguasai **Data Transaksi**. Setiap anggota belanja, Bapak menerima royalti teknologi."
            </p>
            <button 
              onClick={startBrainstorm}
              disabled={isBrainstorming}
              className="px-12 py-5 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-indigo-700 transition-all flex items-center gap-4 active:scale-95"
            >
              {isBrainstorming ? '⏳ MENSINTESIS DATA...' : '🚀 LIHAT PROYEKSI KEKAYAAN AI'}
            </button>
          </div>
          <div className="w-full lg:w-[400px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl">
             <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Pendapatan Royalti IP / Bulan</p>
             <p className="text-7xl font-black text-white mt-2 italic">Rp {(targetMembers * 10 * 100 / 1000).toFixed(0)}<span className="text-2xl ml-1 text-slate-500">rb</span></p>
             <p className="text-[9px] text-slate-500 mt-6 uppercase font-black tracking-widest">Asumsi 10 Klik Transaksi / Anggota</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {profitEngines.map((engine) => (
          <div key={engine.id} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
             <div className={`w-16 h-16 ${engine.color} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-xl text-white group-hover:scale-110 transition-transform`}>
                {engine.icon}
             </div>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{engine.potency}</p>
             <h4 className="text-xl font-black text-slate-800 leading-tight mb-4">{engine.title}</h4>
             <p className="text-xs text-slate-500 leading-relaxed flex-1 italic">"{engine.desc}"</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         <div className="lg:col-span-2 bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <h3 className="text-2xl font-black text-slate-800 italic uppercase">Skalabilitas Eksponensial (Ribuan Rp)</h3>
            <div className="h-64 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={scalingData}>
                     <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 'bold'}} />
                     <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                     <Bar dataKey="rev" fill="#6366f1" radius={[10, 10, 0, 0]} barSize={50} />
                  </BarChart>
               </ResponsiveContainer>
            </div>
            <div className="space-y-4">
               <label className="flex justify-between text-xs font-black text-slate-400 uppercase tracking-widest">Target Anggota (Nasional)</label>
               <input 
                type="range" min="1000" max="1000000" step="1000" value={targetMembers} 
                onChange={(e) => setTargetMembers(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
               />
               <p className="text-[10px] text-slate-400 text-center italic">"Di angka 1 Juta anggota, Royalti IP Bapak mencapai **Rp 1 Miliar/Bulan** tanpa Bapak perlu kerja fisik."</p>
            </div>
         </div>

         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-full min-h-[550px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
            <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest relative z-10 mb-8 border-b border-white/10 pb-4">AI Revenue Strategist</h3>
            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isBrainstorming ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-6">
                     <div className="text-6xl animate-bounce">💎</div>
                     <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] text-center">AI IS COMPUTING WEALTH MULTIPLIERS...</p>
                  </div>
               ) : aiResponse ? (
                  <pre className="whitespace-pre-wrap">{aiResponse}</pre>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                     <div className="text-8xl">💰</div>
                     <p className="max-w-xs mx-auto font-bold text-lg text-slate-400">Klik "BRAINSTORM" untuk merumuskan jalur kekayaan Bapak secara otomatis.</p>
                  </div>
               )}
            </div>
         </div>
      </div>
    </div>
  );
};

export default MonetizationIdeas;
