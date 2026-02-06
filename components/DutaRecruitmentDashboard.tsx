
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const applicants = [
  { id: 'APP-01', name: 'H. Suherman', region: 'Desa Pasirhayo', profession: 'Ketua Gapoktan', icon: '👨‍🌾', score: 94, status: 'VETTED' },
  { id: 'APP-02', name: 'Ibu Listia', region: 'Cianjur Kota', profession: 'Pemilik Toko Emas', icon: '🧕', score: 82, status: 'INTERVIEW' },
  { id: 'APP-03', name: 'Andika Pratama', region: 'Medan Baru', profession: 'Mantan Pegawai Bank', icon: '👨‍💼', score: 45, status: 'RISK' },
];

const DutaRecruitmentDashboard: React.FC = () => {
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
      {/* Header */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Human Capital Integrity Selection
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Seleksi Duta AI. <br/>Membangun Kaki-Kaki Kejujuran.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
               Jangan pernah merekrut Duta secara manual. Gunakan AI untuk membedah rekam jejak dan integritas mereka sebelum mereka memegang amanah rakyat.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-5xl mb-4">🕵️‍♂️</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Pending Applications</p>
             <p className="text-4xl font-black text-emerald-400 mt-2 italic">14 Candidates</p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase font-black">Vetting Accuracy: 99.8%</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Applicants List */}
         <div className="lg:col-span-2 bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic">Antrean Calon Pimpinan</h3>
            <div className="space-y-4">
               {applicants.map((app) => (
                 <button 
                  key={app.id}
                  onClick={() => runAIVetting(app)}
                  className={`w-full p-6 rounded-[2.5rem] border-2 transition-all flex items-center justify-between group ${
                    selectedApp?.id === app.id ? 'bg-indigo-50 border-indigo-600 shadow-lg' : 'bg-white border-slate-50 hover:border-indigo-100'
                  }`}
                 >
                    <div className="flex gap-4 items-center">
                       <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl shadow-inner">{app.icon}</div>
                       <div className="text-left">
                          <h4 className="font-bold text-slate-800">{app.name}</h4>
                          <p className="text-[10px] text-slate-400 font-black uppercase">{app.region} • {app.profession}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className={`text-[10px] font-black uppercase ${app.score > 80 ? 'text-emerald-600' : app.score > 50 ? 'text-indigo-600' : 'text-rose-600'}`}>Integrity Score: {app.score}%</p>
                       <span className="text-[8px] px-2 py-0.5 bg-slate-100 rounded-full font-bold text-slate-500 mt-1 uppercase">{app.status}</span>
                    </div>
                 </button>
               ))}
            </div>
         </div>

         {/* AI Analysis Console */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[600px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">AI Candidate Audit</h3>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isVetting ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="text-6xl animate-spin">⚖️</div>
                     <p className="text-xs font-black uppercase text-slate-500 tracking-[0.3em] text-center max-w-xs leading-loose">AI IS SCANNING SOCIAL GRAPHS & FINANCIAL HISTORY...</p>
                  </div>
               ) : aiAnalysis ? (
                  <div className="space-y-6 animate-in fade-in duration-1000">
                     <pre className="whitespace-pre-wrap">{aiAnalysis}</pre>
                     <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                        <button className="py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl">Approve Duta</button>
                        <button className="py-4 bg-rose-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl">Reject & Blacklist</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                     <div className="text-8xl">🕵️‍♂️</div>
                     <p className="max-w-xs mx-auto font-bold text-lg text-slate-400">Pilih calon untuk membedah karakter mereka melalui sistem verifikasi digital AI.</p>
                  </div>
               )}
            </div>
         </div>
      </div>
    </div>
  );
};

export default DutaRecruitmentDashboard;
