
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const FoundingDeedGenerator: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [deedContent, setDeedContent] = useState('');
  const [founderLeader, setFounderLeader] = useState('Budi Utama');

  const generateDraft = async () => {
    setIsGenerating(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Buatkan draf "BERITA ACARA RAPAT PENDIRIAN KOPERASI" yang sangat formal untuk Notaris.
        Koperasi: KSP KoperatifAI Indonesia.
        Ketua Pengurus Terpilih: ${founderLeader}.
        
        Isi naskah harus mencakup:
        1. Pembukaan Rapat Pendirian oleh 20 orang pendiri.
        2. Pernyataan Aklamasi penunjukan ${founderLeader} sebagai Ketua Pengurus Pertama (Periode 2026-2031).
        3. Penjelasan pasal AD/ART mengenai "Koperasi Digital Officeless": Bahwa operasional dilakukan via platform KoperatifAI.
        4. Pernyataan Modal Setoran: Simpanan Pokok Rp 100.000 per orang.
        5. Penutup yang menyatakan draf ini dibawa ke Notaris Pembuat Akta Koperasi (NPAK).
        
        Gunakan bahasa hukum yang sangat baku, kaku, berwibawa, dan sesuai UU No. 25 Tahun 1992.`,
      });
      setDeedContent(response.text || "Gagal menyusun akta.");
    } catch (e) {
      setDeedContent("Terjadi gangguan sinkronisasi dengan database hukum.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Hero */}
      <div className="bg-[#1e1b4b] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/30">
              Notarial Bridge Protocol v1.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic font-serif">Legalisasi Pendirian: <br/>Dari Kode ke Akta Negara.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               Jangan pusing dengan bahasa hukum. AI kami menyusun Berita Acara Rapat Pendirian yang siap Anda serahkan ke Notaris untuk proses legalitas KSP.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🖋️</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">NPAK Ready</p>
             <p className="text-xl font-black text-emerald-400 mt-1 uppercase">Siap Legalisasi</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Configuration Side */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <h3 className="text-2xl font-black text-slate-800 italic">Konfigurasi Pengurus Awal</h3>
            <div className="space-y-6">
               <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Nama Ketua (Founder)</label>
                  <input 
                    type="text"
                    value={founderLeader}
                    onChange={(e) => setFounderLeader(e.target.value)}
                    className="w-full p-5 bg-slate-50 border-none rounded-3xl text-sm font-black focus:ring-2 focus:ring-indigo-600 outline-none"
                  />
               </div>
               <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100 flex gap-4 items-start">
                  <span className="text-2xl">⚖️</span>
                  <p className="text-xs text-amber-900 leading-relaxed font-bold italic">
                    "Secara hukum, Anda dan 19 pendiri lainnya adalah anggota pertama. Anda dipilih oleh 'Rapat Pendirian' untuk menjadi Pengurus Pertama. Ini SAH secara undang-undang."
                  </p>
               </div>
               <button 
                  onClick={generateDraft}
                  disabled={isGenerating}
                  className="w-full py-6 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-4 active:scale-95"
               >
                  {isGenerating ? '⏳ MENYUSUN AKTA NEGARA...' : '📝 GENERATE DRAF BERITA ACARA'}
               </button>
            </div>
         </div>

         {/* Preview Document */}
         <div className="bg-slate-900 rounded-[4rem] p-1 shadow-2xl flex flex-col relative overflow-hidden h-[700px] border-4 border-slate-800">
            <div className="bg-white h-full w-full rounded-[3.8rem] overflow-hidden flex flex-col">
               <div className="bg-slate-50 p-6 border-b border-slate-100 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                     <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                     <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Document Preview: DRAFT_AKTA.DOC</p>
               </div>
               
               <div className="flex-1 overflow-y-auto p-12 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
                  {isGenerating ? (
                    <div className="h-full flex flex-col items-center justify-center space-y-6">
                       <div className="flex gap-2">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                          <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                       </div>
                       <p className="text-[10px] font-black text-slate-400 uppercase">AI sedang merajut pasal kedaulatan...</p>
                    </div>
                  ) : deedContent ? (
                    <div className="animate-in fade-in duration-1000 max-w-lg mx-auto bg-white p-10 shadow-inner border border-slate-100 rounded-xl min-h-screen font-serif text-sm text-slate-800 leading-relaxed whitespace-pre-wrap italic">
                       {deedContent}
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center opacity-20 space-y-6 px-10">
                       <div className="text-8xl">📑</div>
                       <p className="font-bold text-xl">Klik tombol "Generate" untuk menyusun draf Berita Acara Rapat Pendirian untuk Notaris.</p>
                    </div>
                  )}
               </div>

               {deedContent && (
                  <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-center gap-4">
                     <button className="px-8 py-3 bg-slate-900 text-white rounded-xl font-black uppercase text-[10px] shadow-lg">Download PDF</button>
                     <button className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-black uppercase text-[10px] shadow-lg">Kirim ke Notaris</button>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Strategic Wisdom */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-5xl shrink-0">🏛️</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-slate-800 italic leading-tight">Satu Aturan Emas bagi Founder:</h4>
            <p className="text-slate-500 text-lg leading-relaxed">
               "Pastikan di dalam Akta Pendirian, koperasi Anda berkewajiban menggunakan **Sistem KoperatifAI** secara eksklusif. Ini adalah cara legal untuk memastikan kedaulatan teknologi tetap di tangan Anda, meskipun kepengurusan berganti di masa depan."
            </p>
         </div>
      </div>
    </div>
  );
};

export default FoundingDeedGenerator;
