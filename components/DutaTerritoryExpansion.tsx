
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const DutaTerritoryExpansion: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [isConsulting, setIsConsulting] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState('');

  const tiers = [
    { id: 1, label: 'VILLAGE PIONEER', scope: '1 Desa / Kelurahan', income: 'Rp 2jt - 5jt', members: '100 - 500', icon: '🏡', color: 'bg-indigo-600' },
    { id: 2, label: 'DISTRICT LEADER', scope: 'Antar Desa (1 Kecamatan)', income: 'Rp 5jt - 15jt', members: '500 - 2.500', icon: '🏢', color: 'bg-emerald-600' },
    { id: 3, label: 'REGIONAL ENVOY', scope: 'Antar Kecamatan (1 Kabupaten)', income: 'Rp 15jt - 50jt', members: '2.500 - 10.000', icon: '🏛️', color: 'bg-amber-600' },
    { id: 4, label: 'PROVINCIAL MARSHAL', scope: 'Lintas Kabupaten (1 Provinsi)', income: 'Rp 50jt+', members: '10.000+', icon: '🦅', color: 'bg-rose-600' }
  ];

  const getScalingAdvice = async () => {
    setIsConsulting(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis tantangan logistik dan manajemen bagi seorang Duta yang ingin naik dari level ${tiers[currentLevel - 1].label} ke level ${tiers[currentLevel] ? tiers[currentLevel].label : 'Puncak'}. 
        Berikan 3 syarat kualitatif dari AI (misal: skor NPL di bawah 0.5%, jumlah testimoni anggota, dll) agar permintaan ekspansi wilayah disetujui oleh Founder. 
        Jelaskan bagaimana AI membantu Duta mengelola ribuan anggota lintas kecamatan tanpa stres.`,
      });
      setAiAnalysis(response.text || "AI sedang memetakan teritori...");
    } catch (e) {
      setAiAnalysis("Maaf, AI sedang mensimulasikan rute logistik nasional.");
    } finally {
      setIsConsulting(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Expansion Roadmap & Career Path
            </span>
            <h2 className="text-4xl font-black leading-tight italic font-serif">Mobilitas Teritori Duta. <br/>Kuasai Desa, Sejahterakan Kabupaten.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
               Seorang Duta **SANGAT BISA** melayani antar desa hingga kabupaten. Semua bergantung pada Skor Integritas dan Skalabilitas Anda yang diukur oleh AI.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-5xl mb-4">🏆</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Current Territory Level</p>
             <p className="text-3xl font-black text-emerald-400 mt-1 italic">{tiers[currentLevel - 1].label}</p>
             <button 
              onClick={getScalingAdvice}
              className="mt-6 w-full py-3 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-indigo-700 transition-all shadow-lg"
             >
                {isConsulting ? '⏳ ANALYZING SCALABILITY...' : '🚀 AJUKAN EKSPANSI WILAYAH'}
             </button>
          </div>
        </div>
      </div>

      {/* Progression View */}
      <div className="space-y-8">
         <h3 className="text-2xl font-black text-slate-800 italic text-center uppercase tracking-[0.2em]">Career Progression Matrix</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((t, i) => (
               <div 
                key={t.id} 
                onClick={() => setCurrentLevel(t.id)}
                className={`p-8 rounded-[3.5rem] border-2 cursor-pointer transition-all flex flex-col group ${
                  currentLevel === t.id ? 'bg-white border-indigo-600 shadow-2xl scale-105' : 'bg-slate-50 border-slate-100 opacity-60 grayscale hover:grayscale-0'
                }`}
               >
                  <div className={`w-16 h-16 ${t.color} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-xl group-hover:scale-110 transition-transform`}>
                     {t.icon}
                  </div>
                  <h4 className="font-black text-slate-800 text-sm mb-1">{t.label}</h4>
                  <p className="text-[10px] font-bold text-indigo-600 uppercase mb-6 tracking-widest">{t.scope}</p>
                  
                  <div className="space-y-4 flex-1">
                     <div className="p-4 bg-slate-50 rounded-2xl">
                        <p className="text-[8px] font-black text-slate-400 uppercase">Est. Income</p>
                        <p className="text-sm font-black text-slate-800">{t.income}</p>
                     </div>
                     <div className="p-4 bg-slate-50 rounded-2xl">
                        <p className="text-[8px] font-black text-slate-400 uppercase">Anggota Wajib</p>
                        <p className="text-sm font-black text-slate-800">{t.members}</p>
                     </div>
                  </div>
                  
                  {currentLevel > t.id && (
                    <div className="mt-6 text-center">
                       <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[8px] font-black uppercase">Unlocking Success</span>
                    </div>
                  )}
               </div>
            ))}
         </div>
      </div>

      {/* AI Expansion Report */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-16 items-start relative overflow-hidden">
         <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-50 rounded-full blur-[120px] opacity-30"></div>
         <div className="w-full lg:w-1/3 space-y-6 shrink-0 z-10">
            <h3 className="text-3xl font-black text-slate-800 italic">Laporan Kelayakan Ekspansi</h3>
            <p className="text-slate-500 text-lg leading-relaxed italic">
               "Mempeluas wilayah berarti membagi tanggung jawab. Pastikan sistem kepercayaan (Trust) Anda tetap stabil."
            </p>
            <div className="p-8 bg-indigo-950 rounded-[3rem] text-white shadow-xl rotate-1">
               <p className="text-[10px] font-black uppercase text-indigo-300 mb-4 tracking-widest">Requirement Checklist</p>
               <div className="space-y-3">
                  <div className="flex items-center gap-3">
                     <span className="text-emerald-400">✓</span>
                     <p className="text-[10px] font-bold">NPL (Kredit Macet) &lt; 1%</p>
                  </div>
                  <div className="flex items-center gap-3">
                     <span className="text-emerald-400">✓</span>
                     <p className="text-[10px] font-bold">Literasi Anggota Wilayah &gt; 80%</p>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500">
                     <span>○</span>
                     <p className="text-[10px] font-bold">Minimum 500 Anggota Aktif</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="flex-1 bg-slate-900 rounded-[3.5rem] p-10 font-serif text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-2xl min-h-[350px] flex flex-col justify-center">
            {isConsulting ? (
               <div className="h-full flex flex-col items-center justify-center space-y-8 py-20">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"></div>
                     <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                     <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 animate-pulse">Calculating Regional Integrity Matrix...</p>
               </div>
            ) : aiAnalysis ? (
               <div className="animate-in fade-in duration-1000">
                  <p className="text-xs text-indigo-400 font-black uppercase mb-6 tracking-widest border-b border-indigo-500/20 pb-4 flex items-center gap-2">
                     <span className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></span>
                     Expansion Analysis: Level {currentLevel} → {currentLevel + 1}
                  </p>
                  <pre className="whitespace-pre-wrap font-serif text-lg">{aiAnalysis}</pre>
               </div>
            ) : (
               <div className="h-full flex flex-col items-center justify-center text-center opacity-20 py-20 space-y-6">
                  <div className="text-9xl mb-4">🌍</div>
                  <p className="max-w-md mx-auto font-bold text-2xl">Klik "AJUKAN EKSPANSI WILAYAH" untuk membedah potensi jangkauan baru Anda.</p>
               </div>
            )}
         </div>
      </div>
    </div>
  );
};

export default DutaTerritoryExpansion;
