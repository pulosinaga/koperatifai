
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const CompetitiveEdge: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiInsight, setAiInsight] = useState('');

  const costData = [
    { name: 'Platform Big Tech', commission: 15, marketing: 30, logistics: 25, profit: 30, color: '#f43f5e' },
    { name: 'KoperatifAI', commission: 1, marketing: 5, logistics: 5, profit: 89, color: '#10b981' }
  ];

  const generateAIStrategy = async () => {
    setIsAnalyzing(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis keunggulan strategis Koperasi Kredit Digital (KoperatifAI) dibanding raksasa seperti Shopee atau Gojek dalam melayani UMKM di pelosok. 
        Fokus pada: 
        1. Loyalitas anggota karena rasa memiliki (Ownership). 
        2. Pengadaan barang kolektif (Buying Power). 
        3. Biaya platform yang hampir nol. 
        4. Keamanan data privasi anggota. 
        Gunakan gaya bahasa seorang Chief Strategy Officer yang visioner dan meyakinkan.`,
      });
      setAiInsight(response.text || "Analisis tidak tersedia.");
    } catch (e) {
      setAiInsight("Koneksi AI terputus. Silakan coba sesaat lagi.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Strategic Hero */}
      <div className="bg-[#020617] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Founder Strategic Intel v1.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Melampaui Raksasa Tech: <br/>Solidaritas Adalah Moat Kita.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              Kita tidak bersaing dengan mereka di "Lautan Merah". Kita membangun ekosistem di mana Anggota adalah **Penguasa Pasar**.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">⚔️</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Platform Commission</p>
             <div className="flex items-center justify-center gap-4 mt-2">
                <div className="text-center">
                   <p className="text-[8px] text-rose-400 font-black uppercase">Big Tech</p>
                   <p className="text-2xl font-black text-rose-500 italic">20%</p>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="text-center">
                   <p className="text-[8px] text-emerald-400 font-black uppercase">KoperatifAI</p>
                   <p className="text-4xl font-black text-emerald-400 italic">0%</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Efficiency Comparison */}
         <div className="lg:col-span-2 bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <h3 className="text-2xl font-black text-slate-800 italic">Ke Mana Nilai Ekonomi Mengalir?</h3>
            <div className="h-64 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={costData} layout="vertical">
                     <XAxis type="number" hide />
                     <YAxis dataKey="name" type="category" tick={{ fill: '#64748b', fontSize: 10, fontWeight: 'bold' }} width={120} axisLine={false} tickLine={false} />
                     <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '16px', border: 'none' }} />
                     <Bar dataKey="commission" stackId="a" fill="#334155" name="Platform Fee" />
                     <Bar dataKey="marketing" stackId="a" fill="#6366f1" name="Burn/Marketing" />
                     <Bar dataKey="profit" stackId="a" fill="#10b981" name="Nilai Kembali ke Anggota" radius={[0, 10, 10, 0]} />
                  </BarChart>
               </ResponsiveContainer>
            </div>
            <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
               <p className="text-xs text-indigo-900 leading-relaxed font-bold italic">
                  "Raksasa teknologi butuh margin besar untuk membayar investor mereka di Silicon Valley. KoperatifAI butuh margin nol karena tujuannya adalah memakmurkan Anda."
               </p>
            </div>
         </div>

         {/* AI Strategy Tool */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[550px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10">
               <h3 className="text-xl font-black text-indigo-400 italic">Strategy AI</h3>
               <button 
                onClick={generateAIStrategy}
                disabled={isAnalyzing}
                className="p-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition-all"
               >
                  {isAnalyzing ? '⏳' : '🤖'}
               </button>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-6 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10">
               {isAnalyzing ? (
                  <div className="h-full flex items-center justify-center">
                     <div className="flex gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                     </div>
                  </div>
               ) : aiInsight ? (
                  <pre className="whitespace-pre-wrap">{aiInsight}</pre>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                     <div className="text-7xl opacity-20">🎯</div>
                     <p className="text-slate-500">Klik robot di atas untuk melihat "Battle Plan" kita melawan sistem monopoli raksasa.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Strategic Pillars against Giants */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800 tracking-tight">Senjata Rahasia KoperatifAI</h3>
            <p className="text-slate-500">Inilah alasan mengapa kita tidak bisa dihancurkan oleh uang mereka.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
               <div className="text-3xl">🧩</div>
               <h4 className="font-bold text-slate-800 italic">Hyper-Local Logistics</h4>
               <p className="text-xs text-slate-500 leading-relaxed">Kita tidak butuh kurir pesawat. Barang dikirim antar-anggota dalam satu pasar atau desa. Kecepatan cahaya dengan biaya nol.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
               <div className="text-3xl">📦</div>
               <h4 className="font-bold text-slate-800 italic">Collective Procurement</h4>
               <p className="text-xs text-slate-500 leading-relaxed">Shopee adalah lapak individual. Kita adalah pembeli kolektif. Kita memesan langsung 10 ton gula ke pabrik untuk dibagikan ke 1.000 warung anggota.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
               <div className="text-3xl">💎</div>
               <h4 className="font-bold text-slate-800 italic">Zero Ad Spend</h4>
               <p className="text-xs text-slate-500 leading-relaxed">Gojek bakar uang untuk diskon. Kita tidak perlu iklan. Rasa bangga anggota sebagai Pemilik adalah marketing tercanggih di dunia.</p>
            </div>
         </div>
      </div>

      {/* Final Founder Statement */}
      <div className="p-12 bg-indigo-600 border border-indigo-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl z-10 animate-pulse">👑</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Platform Raksasa Menjual Produk, Kita Menjual Kedaulatan."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed z-10">
            Jangan takut pada ukuran mereka. Takutlah jika kita kehilangan **Nilai Gotong Royong**. Selama anggota percaya mereka adalah Pemilik, KoperatifAI akan menjadi pemenang abadi.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Aktifkan Protokol "Grosir Rakyat"
         </button>
      </div>
    </div>
  );
};

export default CompetitiveEdge;
