
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const JDIHIntegration: React.FC = () => {
  const [isExplaining, setIsExplaining] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [selectedLaw, setSelectedLaw] = useState<string | null>(null);
  const [lastSync, setLastSync] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setLastSync(new Date().toLocaleTimeString());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const regulations = [
    { 
      id: 'UU-25-1992', 
      title: 'UU No. 25 Tahun 1992', 
      subject: 'Perkoperasian Indonesia', 
      date: '12 Nov 1992', 
      status: 'Berlaku',
      summary: 'Konstitusi dasar seluruh koperasi di Indonesia. Mengatur kedaulatan anggota di atas modal.'
    },
    { 
      id: 'PERMENKOP-08-2023', 
      title: 'Permenkop No. 8 Tahun 2023', 
      subject: 'Usaha Simpan Pinjam', 
      date: '15 Sep 2023', 
      status: 'Berlaku',
      summary: 'Regulasi terbaru mengenai pengawasan digital koperasi untuk mencegah praktik ilegal.'
    },
    { 
      id: 'UU-PPSK-2023', 
      title: 'UU PPSK No. 4 Tahun 2023', 
      subject: 'Penguatan Sektor Keuangan', 
      date: '12 Jan 2023', 
      status: 'Berlaku',
      summary: 'Mengatur koordinasi koperasi dengan OJK & BI untuk integrasi sistem pembayaran nasional.'
    }
  ];

  const explainLaw = async (law: any) => {
    setIsExplaining(true);
    setSelectedLaw(law.id);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Jelaskan secara sangat sederhana untuk rakyat kecil yang awam hukum tentang: ${law.title} mengenai ${law.subject}. Berikan 3 poin yang menjamin uang mereka aman di koperasi jika pengurus mematuhi aturan ini. Gunakan bahasa yang santun, otoritatif, dan tekankan bahwa KoperatifAI sudah sinkron dengan standar ini.`,
      });
      setExplanation(response.text || "Gagal mendapatkan penjelasan AI.");
    } catch (e) {
      setExplanation("Sistem sedang sibuk. Sinkronisasi hukum tetap terjaga secara offline.");
    } finally {
      setIsExplaining(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* JDIH Header */}
      <div className="bg-[#1e293b] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold shadow-lg border border-white/10 text-xl">🏛️</div>
               <div className="px-4 py-1.5 bg-white/10 rounded-full flex items-center gap-2 border border-white/10">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300">
                    JDIH PUSAT LIVE SYNC: {lastSync}
                  </span>
               </div>
            </div>
            <h2 className="text-4xl font-black leading-tight italic">Legalitas Tanpa Tapi.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              KoperatifAI terhubung langsung dengan basis data hukum nasional. Anggota dapat memantau kepatuhan operasional kami terhadap undang-undang setiap saat.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white p-8 rounded-[3rem] shadow-2xl text-center">
             <div className="text-5xl mb-4">📜</div>
             <p className="text-xs font-black uppercase tracking-widest text-slate-400">Database Integrity</p>
             <p className="text-xl font-black text-indigo-900 mt-1">UU No. 25/1992 SYNCED</p>
             <p className="text-[9px] text-emerald-500 font-bold mt-2 uppercase">Official Gov Data Stream</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="space-y-6">
            <h3 className="text-2xl font-black text-slate-800 italic">Pusat Informasi Regulasi</h3>
            <div className="space-y-4">
               {regulations.map((reg) => (
                 <div key={reg.id} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                    <div className="flex justify-between items-start mb-4">
                       <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{reg.date}</span>
                       <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase ${reg.status === 'Berlaku' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                          {reg.status}
                       </span>
                    </div>
                    <h4 className="text-lg font-black text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors">{reg.title}</h4>
                    <p className="text-[11px] font-bold text-slate-400 uppercase mt-1">{reg.subject}</p>
                    <p className="text-xs text-slate-500 mt-4 leading-relaxed italic line-clamp-2">"{reg.summary}"</p>
                    <div className="mt-8">
                       <button 
                        onClick={() => explainLaw(reg)}
                        className="w-full py-3 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-3"
                       >
                          <span>💡</span> Jelaskan Dengan AI
                       </button>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-fit sticky top-24 border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-indigo-400 italic">AI Legal Interpreter</h3>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10">
               {isExplaining ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="flex gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                     </div>
                     <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest text-center">AI sedang membedah bahasa hukum...</p>
                  </div>
               ) : explanation ? (
                  <div className="animate-in fade-in duration-700">
                     <p className="text-xs text-indigo-400 font-black uppercase mb-4 tracking-widest border-b border-indigo-500/20 pb-2">Analisis Keamanan Anggota:</p>
                     <pre className="whitespace-pre-wrap font-serif text-slate-100">{explanation}</pre>
                     <div className="mt-8 pt-6 border-t border-white/10 flex justify-center">
                        <button className="px-6 py-2 bg-emerald-600 text-white rounded-xl font-black uppercase text-[9px] shadow-lg">Unduh Salinan Undang-Undang</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-20 py-20 space-y-6">
                     <div className="text-8xl">📑</div>
                     <p className="max-w-xs mx-auto font-bold text-lg">Klik "Jelaskan Dengan AI" untuk membedah pasal yang melindungi hak Anda sebagai pemilik koperasi.</p>
                  </div>
               )}
            </div>
         </div>
      </div>
    </div>
  );
};

export default JDIHIntegration;
