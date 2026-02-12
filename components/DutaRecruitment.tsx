import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const applicants = [
  { id: 'APP-01', name: 'H. Suherman', region: 'Desa Pasirhayo', profession: 'Ketua Gapoktan', score: 94, status: 'VETTED', icon: '👨‍🌾' },
  { id: 'APP-02', name: 'Ibu Listia', region: 'Cianjur Kota', profession: 'Pemilik Toko Emas', score: 82, status: 'VETTED', icon: '🧕' },
  { id: 'APP-03', name: 'Andika Pratama', region: 'Medan Baru', profession: 'Mantan Pegawai Bank', score: 45, status: 'RISK', icon: '👨‍💼' },
];

const DutaRecruitment: React.FC = () => {
  const [selectedApp, setSelectedApp] = useState<any>(null);
  const [isVetting, setIsVetting] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState('');

  const runAIVetting = async (app: any) => {
    setIsVetting(true);
    setSelectedApp(app);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis kelayakan calon Duta Wilayah bernama ${app.name} (${app.profession}) untuk wilayah ${app.region}. 
        AI Score saat ini: ${app.score}/100. 
        Tunjukkan:
        1. Potensi 'Moral Hazard' berdasarkan profesinya.
        2. Strategi 'Integrity Test' yang harus diberikan Founder saat wawancara.
        3. Rekomendasi plafon kas awal (Limit Trust).
        Gunakan gaya bahasa intelijen bisnis yang tajam dan waspada.`,
      });
      setAiAnalysis(response.text || "Hasil audit tidak tersedia.");
    } catch (e) {
      setAiAnalysis("Sistem AI sedang membedah rekam jejak digital calon...");
    } finally {
      setIsVetting(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-7xl mx-auto">
      <header className="space-y-1">
        <h2 className="text-3xl font-black text-slate-800 italic tracking-tight">Otorisasi Duta Wilayah.</h2>
        <p className="text-slate-500 font-medium">Saring pimpinan lokal melalui audit integritas AI lapis empat.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Applicants List */}
         <div className="lg:col-span-1 space-y-6">
            <h3 className="text-sm font-black text-slate-400 uppercase px-4 tracking-widest">Antrean Pelamar</h3>
            <div className="space-y-4">
               {applicants.map((app) => (
                 <button 
                  key={app.id}
                  onClick={() => runAIVetting(app)}
                  className={`w-full p-6 rounded-[3rem] border-2 transition-all flex items-center justify-between group ${
                    selectedApp?.id === app.id ? 'bg-indigo-600 border-indigo-500 shadow-xl scale-105' : 'bg-white border-slate-100 hover:border-indigo-100'
                  }`}
                 >
                    <div className="flex gap-4 items-center">
                       <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl shadow-inner">{app.icon}</div>
                       <div className="text-left">
                          <h4 className={`font-bold ${selectedApp?.id === app.id ? 'text-white' : 'text-slate-800'}`}>{app.name}</h4>
                          <p className={`text-[10px] font-black uppercase ${selectedApp?.id === app.id ? 'text-indigo-200' : 'text-slate-400'}`}>{app.region}</p>
                       </div>
                    </div>
                    <div className={`text-[10px] font-black px-2 py-1 rounded-lg ${app.status === 'RISK' ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'}`}>
                       {app.score}%
                    </div>
                 </button>
               ))}
            </div>
         </div>

         {/* AI Analysis Console */}
         <div className="lg:col-span-2 bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[600px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">AI Integrity Vetting</h3>
               <div className="flex gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                  <span className="text-[9px] text-slate-500 font-mono italic">AI_VERSION: 3.5_PRO</span>
               </div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isVetting ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="flex gap-4">
                        <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce"></div>
                        <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                     </div>
                     <p className="text-xs font-black uppercase text-slate-500 tracking-[0.3em] text-center">AI IS SCANNING SOCIAL GRAPHS & FINANCIAL HISTORY...</p>
                  </div>
               ) : aiAnalysis ? (
                  <div className="space-y-6 animate-in fade-in duration-1000">
                     <pre className="whitespace-pre-wrap">{aiAnalysis}</pre>
                     <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                        <button className="py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-indigo-700 transition-all">Approve & Issue Certificate</button>
                        <button className="py-4 bg-rose-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-rose-700 transition-all">Reject & Blacklist</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                     <div className="text-8xl">🕵️‍♂️</div>
                     <p className="max-w-xs mx-auto font-bold text-lg text-slate-400">Pilih pelamar di samping untuk membedah karakter mereka melalui sistem verifikasi digital AI.</p>
                  </div>
               )}
            </div>
         </div>
      </div>
    </div>
  );
};

export default DutaRecruitment;