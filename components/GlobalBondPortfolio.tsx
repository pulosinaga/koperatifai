
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const bondOpportunities = [
  { id: 1, country: 'Jerman 🇩🇪', issuer: 'DGRV Federation', yield: '4.5%', currency: 'EUR', risk: 'AAA', status: 'RECOMMENDED', icon: '🏰' },
  { id: 2, country: 'Kanada 🇨🇦', issuer: 'Desjardins Bond', yield: '5.2%', currency: 'CAD', risk: 'AA+', status: 'STABLE', icon: '🍁' },
  { id: 3, country: 'Vietnam 🇻🇳', issuer: 'VCA Agribond', yield: '7.8%', currency: 'USD', risk: 'B+', status: 'HIGH_GROWTH', icon: '🇻🇳' },
];

const GlobalBondPortfolio: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiOpinion, setAiOpinion] = useState('');
  const [selectedBond, setSelectedBond] = useState<any>(null);

  const analyzeGlobalBond = async (bond: any) => {
    setIsAnalyzing(true);
    setSelectedBond(bond);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Analisis keputusan investasi KoperatifAI (Indonesia) untuk membeli Global Bond dari '${bond.issuer}' di '${bond.country}'.
        Detail: Yield ${bond.yield} dalam mata uang ${bond.currency}. Rating: ${bond.risk}. 
        
        Berikan 'Strategic Memo' (3 paragraf):
        1. Analisis korelasi ekonomi: Bagaimana investasi ini melindungi aset koperasi dari pelemahan Rupiah?
        2. Analisis Solidaritas: Bagaimana dana kita membantu petani/anggota koperasi di negara tersebut berkembang (Circular Global Solidarity).
        3. Rekomendasi Alokasi: Dari Rp 19,6 Miliar aset kita, berapa persen idealnya dialokasikan ke bond ini?
        Gunakan gaya bahasa Global Investment Strategist yang berwibawa dan visioner.`,
      });
      setAiOpinion(response.text || "Hasil analisis belum tersedia.");
    } catch (e) {
      setAiOpinion("Jaringan intelijen finansial global sedang sibuk. Mohon tunggu sejenak.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Global Hero */}
      <div className="bg-[#020617] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              International Asset Management v1.0
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif">Global Bond Hub. <br/>Kekuatan di Atas Awan.</h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium">
               "KoperatifAI tidak hanya mengelola uang di dalam negeri, tapi kita berpartisipasi dalam kemakmuran kolektif dunia melalui instrumen hutang antar-koperasi global."
            </p>
          </div>
          <div className="w-full lg:w-[400px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl">
             <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Global Investment Allocation</p>
             <p className="text-7xl font-black text-white mt-2 italic">15%</p>
             <p className="text-[10px] text-slate-500 mt-6 uppercase font-black tracking-widest">OF TOTAL ASSETS HEDGED IN GLOBAL BONDS</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Opportunities List */}
         <div className="lg:col-span-2 space-y-8">
            <h3 className="text-3xl font-black text-slate-800 italic">Peluang Surat Hutang Global</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {bondOpportunities.map((bond) => (
                 <button 
                  key={bond.id}
                  onClick={() => analyzeGlobalBond(bond)}
                  className={`p-10 rounded-[3.5rem] border-2 text-left transition-all group flex flex-col gap-6 ${
                    selectedBond?.id === bond.id ? 'bg-indigo-600 border-indigo-500 shadow-2xl scale-105' : 'bg-white border-slate-100 hover:border-indigo-300'
                  }`}
                 >
                    <div className="flex justify-between items-start w-full">
                       <div className="text-6xl group-hover:scale-110 transition-transform duration-500">{bond.icon}</div>
                       <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase ${
                         bond.status === 'RECOMMENDED' ? 'bg-emerald-50 text-emerald-600' : 'bg-indigo-50 text-indigo-600'
                       }`}>{bond.status}</span>
                    </div>
                    <div className="space-y-1">
                       <p className={`text-[10px] font-black uppercase tracking-widest ${selectedBond?.id === bond.id ? 'text-indigo-200' : 'text-slate-400'}`}>{bond.country}</p>
                       <h4 className={`text-2xl font-black italic ${selectedBond?.id === bond.id ? 'text-white' : 'text-slate-800'}`}>{bond.issuer}</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-current opacity-20">
                       <div>
                          <p className="text-[8px] font-black uppercase">Estimated Yield</p>
                          <p className="text-xl font-black">{bond.yield}</p>
                       </div>
                       <div>
                          <p className="text-[8px] font-black uppercase">Risk Rating</p>
                          <p className="text-xl font-black">{bond.risk}</p>
                       </div>
                    </div>
                 </button>
               ))}
            </div>
         </div>

         {/* AI Strategy Panel */}
         <div className="bg-slate-900 rounded-[4rem] p-12 shadow-2xl flex flex-col relative overflow-hidden h-[750px]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-8">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">Global Bond AI Council</h3>
               <div className="flex gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                  <span className="text-[9px] text-slate-500 font-mono">CROSS_BORDER_SYNC</span>
               </div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[3rem] p-10 overflow-y-auto custom-scrollbar font-serif text-lg text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isAnalyzing ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="flex gap-4">
                        <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce"></div>
                        <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                     </div>
                     <p className="text-sm font-black uppercase text-slate-500 tracking-[0.3em] text-center max-w-xs">AI sedang membedah volatilitas mata uang & risiko makro...</p>
                  </div>
               ) : aiOpinion ? (
                  <div className="animate-in fade-in duration-1000">
                     <pre className="whitespace-pre-wrap">{aiOpinion}</pre>
                     <div className="mt-12 pt-10 border-t border-white/10 flex justify-center gap-6">
                        <button className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all">Submit to Board for Voting</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-20 py-20 space-y-8">
                     <div className="text-9xl">🌍</div>
                     <p className="max-w-md mx-auto font-bold text-2xl">Pilih peluang bond di samping untuk mendapatkan analisis kedaulatan global oleh AI.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Strategic Pillars of Global Bonds */}
      <div className="bg-white p-16 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-4">
            <h3 className="text-4xl font-black text-slate-800 italic">Kenapa Harus Bond Global?</h3>
            <p className="text-slate-500 text-lg">Membangun ketahanan modal di atas standar perbankan nasional.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-indigo-50 rounded-[3rem] border border-indigo-100 space-y-6 text-center group hover:bg-indigo-600 transition-all duration-500">
               <div className="text-5xl group-hover:scale-125 transition-transform">🛡️</div>
               <h4 className="font-black text-xl text-indigo-900 group-hover:text-white italic">Natural Hedging</h4>
               <p className="text-sm text-indigo-700/70 group-hover:text-white/70 leading-relaxed italic">
                  "Menabung dalam Euro/USD melindungi SHU anggota saat nilai Rupiah melemah. Aset riil anggota tetap terjaga daya belinya."
               </p>
            </div>
            <div className="p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100 space-y-6 text-center group hover:bg-emerald-600 transition-all duration-500">
               <div className="text-5xl group-hover:scale-125 transition-transform">🤝</div>
               <h4 className="font-black text-xl text-emerald-900 group-hover:text-white italic">Solidarity Yield</h4>
               <p className="text-sm text-emerald-700/70 group-hover:text-white/70 leading-relaxed italic">
                  "Bunga yang kita terima bukan hasil eksploitasi, tapi hasil dari produktivitas sesama anggota koperasi di belahan dunia lain."
               </p>
            </div>
            <div className="p-10 bg-slate-900 rounded-[3rem] text-white space-y-6 text-center group hover:bg-black transition-all duration-500">
               <div className="text-5xl group-hover:scale-125 transition-transform">🏛️</div>
               <h4 className="font-black text-xl text-indigo-400 italic">Institutional Legitimacy</h4>
               <p className="text-sm text-slate-400 group-hover:text-white/70 leading-relaxed italic">
                  "Memiliki portofolio global membuktikan KoperatifAI dikelola secara profesional sesuai standar WOCCU internasional."
               </p>
            </div>
         </div>
      </div>

      {/* Final Founder Message */}
      <div className="p-16 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-6xl shrink-0 animate-pulse z-10">🌍</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight">"Uang Rakyat, Memimpin Pasar Dunia."</h4>
            <p className="text-slate-400 text-xl leading-relaxed">
               Founder, fitur ini adalah **Langkah Master** Anda. Saat koperasi rakyat Indonesia mampu memberikan modal ke koperasi di Eropa atau Jepang, saat itulah kita membuktikan bahwa ekonomi Pancasila mampu bersaing di panggung global.
            </p>
            <div className="flex gap-6">
               <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:shadow-xl transition-all">Sertifikasi Investasi Global</button>
               <button className="px-10 py-4 bg-white/10 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all">Hubungi Broker Federasi (ACCU)</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default GlobalBondPortfolio;
