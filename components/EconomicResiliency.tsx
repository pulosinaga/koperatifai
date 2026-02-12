import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const retentionData = [
  { name: 'Sistem Bank', leakage: 85, retention: 15, label: 'Uang Keluar ke Kota/Asing' },
  { name: 'KoperatifAI', leakage: 5, retention: 95, label: 'Uang Berputar di Desa' },
];

const immunityData = [
  { subject: 'Likuiditas', A: 95, fullMark: 100 },
  { subject: 'Anti-Inflasi', A: 88, fullMark: 100 },
  { subject: 'Solidaritas', A: 100, fullMark: 100 },
  { subject: 'Efisiensi AI', A: 92, fullMark: 100 },
  { subject: 'Aset Fisik (Emas)', A: 85, fullMark: 100 },
];

const EconomicResiliency: React.FC = () => {
  const [isAnalysing, setIsAnalysing] = useState(false);
  const [aiInsight, setAiInsight] = useState('');
  const [isSimulatingShock, setIsSimulatingShock] = useState(false);

  const generateDeepInsight = async () => {
    setIsAnalysing(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: "Berikan analisis tajam mengenai ketahanan Koperasi Kredit Digital di tengah suku bunga bank sentral yang tinggi. Bandingkan 'Economic Leakage' bank konvensional dengan 'Wealth Retention' koperasi sirkular. Tekankan pada perlindungan daya beli anggota melalui pengadaan kolektif. Gunakan gaya bahasa arsitek ekonomi makro.",
      });
      setAiInsight(response.text || "Solidaritas adalah benteng terbaik melawan inflasi.");
    } catch (e) {
      setAiInsight("Efisiensi radikal kita (OpEx 12%) memungkinkan kita tetap memberikan bunga rendah saat bank terpaksa menaikkan bunga.");
    } finally {
      setIsAnalysing(false);
    }
  };

  const triggerShockSimulation = () => {
    setIsSimulatingShock(true);
    setTimeout(() => setIsSimulatingShock(false), 3000);
  };

  useEffect(() => {
    generateDeepInsight();
  }, []);

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Dynamic Hero Section */}
      <div className={`rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 transition-all duration-500 ${isSimulatingShock ? 'bg-rose-900 border-rose-500' : 'bg-slate-900 border-emerald-500'}`}>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              {isSimulatingShock ? '⚠️ KRISIS SIMULATED: HIGH INFLATION' : '🛡️ PROKOL PERTAHANAN EKONOMI AKTIF'}
            </span>
            <h2 className="text-5xl font-black leading-tight italic font-serif">
              {isSimulatingShock ? 'Benteng Bertahan!' : 'Kedaulatan Adalah Perisai.'}
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
               Di saat ekonomi global bergejolak, KoperatifAI memastikan kekayaan anggota tidak bocor ke sistem luar yang predator.
            </p>
            <button 
              onClick={triggerShockSimulation}
              disabled={isSimulatingShock}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl transition-all active:scale-95"
            >
              {isSimulatingShock ? '⚡ AI SEDANG MENYEIMBANGKAN KAS...' : '🔥 SIMULASI GUNCANGAN EKONOMI'}
            </button>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">{isSimulatingShock ? '📉' : '🛡️'}</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Resiliency Score</p>
             <p className={`text-6xl font-black mt-2 italic transition-all ${isSimulatingShock ? 'text-amber-400' : 'text-emerald-400'}`}>9.6</p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase font-black">Status: Antifragile</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* WEALTH RETENTION CHART */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <div className="space-y-2">
               <h3 className="text-2xl font-black text-slate-800 italic uppercase">Wealth Retention Ratio</h3>
               <p className="text-slate-500 text-sm italic">"Ke mana setiap Rp 1.000 yang Anda simpan mengalir?"</p>
            </div>
            <div className="h-64 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={retentionData} layout="vertical">
                     <XAxis type="number" hide />
                     <YAxis dataKey="name" type="category" tick={{fill: '#64748b', fontSize: 10, fontWeight: 'bold'}} width={100} axisLine={false} tickLine={false} />
                     <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                     <Bar dataKey="leakage" stackId="a" fill="#f43f5e" name="Leakage (Bunga Bank/Admin)" radius={[10, 0, 0, 10]} barSize={40} />
                     <Bar dataKey="retention" stackId="a" fill="#10b981" name="Retention (Modal Rakyat)" radius={[0, 10, 10, 0]} />
                  </BarChart>
               </ResponsiveContainer>
            </div>
            <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
               <p className="text-xs text-emerald-800 font-bold italic leading-relaxed">
                  "Uang Anda tetap di desa. Setiap jasa yang Anda bayar kembali ke tetangga Anda sebagai SHU, bukan ke pemilik modal besar di luar negeri."
               </p>
            </div>
         </div>

         {/* IMMUNITY RADAR CHART */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-6 flex flex-col items-center">
            <h3 className="text-2xl font-black text-slate-800 italic uppercase tracking-widest w-full">Immunity Pillars</h3>
            <div className="w-full h-80">
               <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={immunityData}>
                     <PolarGrid stroke="#f1f5f9" />
                     <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 11, fontWeight: 'black' }} />
                     <PolarRadiusAxis angle={30} domain={[0, 100]} hide />
                     <Radar
                        name="Immunity"
                        dataKey="A"
                        stroke="#4338ca"
                        fill="#6366f1"
                        fillOpacity={0.6}
                     />
                  </RadarChart>
               </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
               <div className="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100">
                  <p className="text-[9px] font-black text-slate-400 uppercase">Risk Tolerance</p>
                  <p className="text-sm font-bold text-indigo-600">ULTRA-LOW</p>
               </div>
               <div className="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100">
                  <p className="text-[9px] font-black text-slate-400 uppercase">Stability Level</p>
                  <p className="text-sm font-bold text-emerald-600">RELIABLE</p>
               </div>
            </div>
         </div>
      </div>

      {/* AI STRATEGIC REPORT */}
      <div className="bg-indigo-900 rounded-[4rem] p-12 shadow-2xl flex flex-col relative overflow-hidden border border-white/5">
         <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"></div>
         <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
            <div className="space-y-1">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">AI Strategic Counsel</h3>
               <p className="text-[8px] text-slate-500 font-mono">MACRO_PROTECTION_ENABLED</p>
            </div>
            <button onClick={generateDeepInsight} disabled={isAnalysing} className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg animate-pulse">
               {isAnalysing ? '⏳' : '🤖'}
            </button>
         </div>

         <div className="flex-1 bg-white/5 rounded-[3rem] p-10 overflow-y-auto custom-scrollbar font-serif text-lg text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
            {isAnalysing ? (
               <div className="h-full flex flex-col items-center justify-center space-y-6 py-20">
                  <div className="flex gap-4">
                     <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce"></div>
                     <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                     <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                  <p className="text-xs font-black uppercase text-slate-500 tracking-[0.3em]">Analysing National Inflation Index...</p>
               </div>
            ) : aiInsight ? (
               <div className="animate-in fade-in duration-1000">
                  <pre className="whitespace-pre-wrap">{aiInsight}</pre>
               </div>
            ) : (
               <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20">
                  <div className="text-9xl mb-8">⚖️</div>
                  <p className="max-w-md mx-auto font-bold text-2xl">Klik tombol robot untuk mendapatkan arahan kedaulatan di tengah krisis.</p>
               </div>
            )}
         </div>
      </div>

      {/* FINAL PLEDGE */}
      <div className="p-16 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-center md:text-left">
         <div className="w-32 h-32 bg-emerald-50 rounded-full flex items-center justify-center text-7xl shrink-0 shadow-inner">🏛️</div>
         <div className="space-y-6">
            <h4 className="text-4xl font-black text-slate-800 italic leading-tight">"Uang Adalah Amanah, <br/>Koperasi Adalah Rumah."</h4>
            <p className="text-slate-500 text-xl leading-relaxed italic">
               Di tengah dunia yang semakin mahal, kita harus semakin dekat. KoperatifAI bukan sekadar aplikasi, tapi **Benteng Pertahanan Ekonomi Keluarga Anda.**
            </p>
         </div>
      </div>
    </div>
  );
};

export default EconomicResiliency;