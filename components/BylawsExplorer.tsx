
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const BylawsExplorer: React.FC = () => {
  const [isExplaining, setIsExplaining] = useState(false);
  const [aiResponse, setAiResponse] = useState('');
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    { id: 'membership', title: 'Pasal 4: Keanggotaan', text: 'Anggota KoperatifAI adalah pemilik sah institusi. Keanggotaan bersifat sukarela dan terbuka bagi seluruh warga yang memiliki integritas finansial.' },
    { id: 'savings', title: 'Pasal 12: Simpanan', text: 'Terdapat 3 jenis simpanan: Pokok (Modal), Wajib (Disiplin), dan Sukarela (Likuid). Saldo sukarela dapat ditarik 24/7 melalui Duta Wilayah.' },
    { id: 'loans', title: 'Pasal 21: Pinjaman', text: 'Pinjaman diberikan hanya untuk tujuan produktif dengan iuran jasa layanan (service fee) maksimal 1.5% per bulan.' },
    { id: 'daskop', title: 'Pasal 33: Dana Duka (DASKOP)', text: 'Anggota wajib berkontribusi Rp 5.000/bln untuk perlindungan bersama. Jika ada anggota duka, hutangnya diputihkan oleh dana kolektif.' }
  ];

  const explainClause = async (clause: string) => {
    setIsExplaining(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Terjemahkan pasal AD/ART koperasi ini ke bahasa sehari-hari yang sangat mudah dimengerti rakyat kecil: "${clause}"`,
      });
      setAiResponse(response.text || "");
    } catch (e) {
      setAiResponse("Keadilan adalah hak Anda. Sistem AI sedang mensinkronkan data hukum.");
    } finally {
      setIsExplaining(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-10">
         {/* List Pasal */}
         <div className="lg:col-span-1 space-y-4">
            <h3 className="text-2xl font-black text-slate-800 italic uppercase px-4">Konstitusi Digital</h3>
            <div className="space-y-3">
               {sections.map((s) => (
                 <button 
                  key={s.id}
                  onClick={() => { setActiveSection(s.id); explainClause(s.text); }}
                  className={`w-full p-6 rounded-[2.5rem] border-2 text-left transition-all group ${
                    activeSection === s.id ? 'bg-indigo-600 border-indigo-500 shadow-xl scale-105 text-white' : 'bg-white border-slate-100 hover:border-indigo-300'
                  }`}
                 >
                    <h4 className="font-black text-sm uppercase">{s.title}</h4>
                    <p className={`text-[10px] mt-2 line-clamp-2 italic ${activeSection === s.id ? 'text-indigo-100' : 'text-slate-400'}`}>"{s.text}"</p>
                 </button>
               ))}
            </div>
         </div>

         {/* AI Interpretation Side */}
         <div className="flex-1 bg-slate-900 rounded-[4rem] p-12 shadow-2xl flex flex-col relative overflow-hidden h-fit border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">Apa Artinya Bagi Anda?</h3>
               <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl animate-bounce">🤖</div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-lg text-slate-300 leading-relaxed italic relative z-10">
               {isExplaining ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-6 py-20">
                     <div className="flex gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-200"></div>
                     </div>
                     <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest text-center">AI sedang membedah bahasa hukum...</p>
                  </div>
               ) : aiResponse ? (
                  <div className="animate-in fade-in duration-1000">
                     <p className="mb-4 text-emerald-400 text-xs font-black uppercase tracking-widest border-b border-white/10 pb-2">Penjelasan Sahabat AI:</p>
                     <pre className="whitespace-pre-wrap">{aiResponse}</pre>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                     <div className="text-8xl">📄</div>
                     <p className="max-w-xs mx-auto font-bold text-lg text-slate-400">Pilih salah satu pasal di samping untuk mendengarkan hak-hak Bapak/Ibu.</p>
                  </div>
               )}
            </div>
         </div>
      </div>
    </div>
  );
};

export default BylawsExplorer;
