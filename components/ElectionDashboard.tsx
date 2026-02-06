
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const candidates = [
  { id: 1, name: 'Siti Aminah', role: 'Calon Ketua', aiScore: 942, icon: '👩‍💼', vision: 'Inklusi penuh digital untuk pasar tradisional.' },
  { id: 2, name: 'Andi Wijaya', role: 'Calon Bendahara', aiScore: 885, icon: '👨‍💼', vision: 'Likuiditas 100% transparan via real-time ledger.' },
  { id: 3, name: 'Rian Prasetyo', role: 'Calon Sekretaris', aiScore: 910, icon: '👨‍💻', vision: 'Automasi total pelaporan ODS Kemenkop.' },
];

const ElectionDashboard: React.FC = () => {
  const [votedId, setVotedId] = useState<number | null>(null);
  const [isVetting, setIsVetting] = useState(false);
  const [vettingReport, setVettingReport] = useState('');

  const runAIVetting = async (candidateName: string) => {
    setIsVetting(true);
    setVettingReport('');
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis kelayakan pencalonan pengurus koperasi untuk '${candidateName}'. Berikan 'Trust Score Audit' (0-100) berdasarkan kejujuran angsuran pinjaman di masa lalu, keaktifan menabung, dan reputasi di forum komunitas. Jelaskan kenapa ia layak memimpin di era KoperatifAI.`,
      });
      setVettingReport(response.text || "Hasil vetting belum tersedia.");
    } catch (e) {
      setVettingReport("Audit Integritas sedang berlangsung. Silakan cek ledger riwayat.");
    } finally {
      setIsVetting(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <div className="text-center space-y-4">
         <h2 className="text-4xl font-black text-slate-800 italic tracking-tight">Pusat Pemilihan Digital</h2>
         <p className="text-slate-500">Masa jabatan 2026-2031. Pilih pemimpin yang Anda percayai.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Candidate List */}
         <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 italic uppercase px-4 tracking-widest">Kandidat Terverifikasi AI</h3>
            <div className="space-y-4">
               {candidates.map((c) => (
                 <div key={c.id} className={`p-8 bg-white rounded-[3.5rem] border-2 transition-all group ${votedId === c.id ? 'border-indigo-600 shadow-xl' : 'border-slate-100 shadow-sm'}`}>
                    <div className="flex justify-between items-start mb-6">
                       <div className="flex gap-4 items-center">
                          <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center text-4xl shadow-inner">{c.icon}</div>
                          <div>
                             <h4 className="font-black text-slate-800 text-lg">{c.name}</h4>
                             <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{c.role}</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <p className="text-xs font-black text-emerald-600">AI Score</p>
                          <p className="text-2xl font-black text-slate-800">{c.aiScore}</p>
                       </div>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed italic mb-8">"{c.vision}"</p>
                    <div className="flex gap-3">
                       <button 
                        onClick={() => runAIVetting(c.name)}
                        className="px-6 py-3 bg-slate-900 text-white rounded-2xl font-black uppercase text-[9px] tracking-widest hover:bg-black transition-all"
                       >
                         🔍 Audit AI
                       </button>
                       <button 
                        onClick={() => setVotedId(c.id)}
                        disabled={votedId !== null}
                        className={`flex-1 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${
                           votedId === c.id ? 'bg-emerald-500 text-white shadow-lg' : 
                           votedId !== null ? 'bg-slate-100 text-slate-300' : 'bg-indigo-600 text-white shadow-lg hover:bg-indigo-700'
                        }`}
                       >
                         {votedId === c.id ? '✓ SUARA TERCATAT' : votedId !== null ? 'SUDAH MEMILIH' : 'BERIKAN SUARA'}
                       </button>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* AI Vetting Console */}
         <div className="bg-slate-950 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[700px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">AI Integrity Vetting</h3>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[3rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isVetting ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="flex gap-4">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                     </div>
                     <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.4em] text-center">AI IS SCANNING BEHAVIORAL LEDGER...</p>
                  </div>
               ) : vettingReport ? (
                  <div className="animate-in fade-in duration-1000">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-2xl shadow-xl">🛡️</div>
                        <p className="text-xs font-black text-emerald-400 uppercase tracking-widest">Integrity Audit Complete</p>
                     </div>
                     <pre className="whitespace-pre-wrap">{vettingReport}</pre>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-20 py-20 space-y-8">
                     <div className="text-9xl">🏛️</div>
                     <p className="max-w-md mx-auto font-bold text-2xl">Klik "Audit AI" pada kandidat untuk membedah kelayakan pimpinan secara objektif.</p>
                  </div>
               )}
            </div>
         </div>
      </div>
    </div>
  );
};

export default ElectionDashboard;
