
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

const ADARTGenerator: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [content, setContent] = useState('');
  const [address, setAddress] = useState('Jakarta Selatan, DKI Jakarta');
  const [founderName, setFounderName] = useState('Budi Utama');
  const docRef = useRef<HTMLDivElement>(null);

  const generateFullADART = async () => {
    setIsGenerating(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Susunlah naskah lengkap "ANGGARAN DASAR (AD)" untuk Koperasi Simpan Pinjam Skala Nasional bernama "KSP KOPERATIFAI INDONESIA". 
        
        Parameter Khusus:
        1. Nama Founder/Ketua Pertama: ${founderName}.
        2. Kedudukan Kantor Pusat: ${address}.
        3. Pasal KHUSUS Digital: Jelaskan bahwa Rapat Anggota Tahunan (RAT) dilakukan secara elektronik (e-RAT) dan buku tabungan bersifat digital (Paperless).
        4. Pasal KHUSUS AI: Jelaskan bahwa penilaian risiko pinjaman menggunakan algoritma kecerdasan buatan (AI Scoring) untuk menjamin objektivitas.
        5. Modal Setoran: Simpanan Pokok Rp 100.000 dan Simpanan Wajib Rp 20.000.
        
        Susun dalam bab-bab standar Notaris Indonesia:
        BAB I: Nama & Tempat Kedudukan.
        BAB II: Landasan, Asas & Prinsip.
        BAB III: Tujuan & Bidang Usaha.
        BAB IV: Keanggotaan.
        BAB V: Perangkat Koperasi (RAT, Pengurus, Pengawas).
        BAB VI: Permodalan.
        BAB VII: SHU.
        
        Gunakan bahasa hukum yang sangat formal, kaku, dan sesuai dengan UU No. 25 Tahun 1992 tentang Perkoperasian.`,
      });
      setContent(response.text || "");
    } catch (e) {
      setContent("Terjadi kesalahan teknis saat menyusun pasal-pasal kedaulatan.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <div className="bg-[#020617] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-black leading-tight italic font-serif">Penyusun Konstitusi Digital.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               Gunakan fitur ini untuk menghasilkan draf AD/ART yang lengkap untuk dibawa ke Notaris Pembuat Akta Koperasi (NPAK).
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         <div className="space-y-6">
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
               <h3 className="text-xl font-black text-slate-800 italic">Konfigurasi Akta</h3>
               <div className="space-y-4">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Alamat Kantor Pusat</label>
                     <input 
                       type="text" value={address} onChange={(e) => setAddress(e.target.value)}
                       className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-600"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Ketua Pendiri</label>
                     <input 
                       type="text" value={founderName} onChange={(e) => setFounderName(e.target.value)}
                       className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-600"
                     />
                  </div>
                  <button 
                     onClick={generateFullADART}
                     disabled={isGenerating}
                     className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all active:scale-95"
                  >
                     {isGenerating ? '⏳ MENYUSUN KONSTITUSI...' : '📝 GENERATE DRAF LENGKAP'}
                  </button>
               </div>
            </div>

            <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-[3rem] text-center space-y-4">
               <div className="text-4xl">💡</div>
               <h4 className="text-xl font-black text-indigo-900 italic">Tips Notaris:</h4>
               <p className="text-[10px] text-indigo-700/70 leading-relaxed italic">
                  "Pastikan Bapak membawa KTP asli 20 orang pendiri saat menghadap Notaris. Sebutkan bahwa sistem KoperatifAI adalah infrastruktur utama yang menjamin transparansi dana."
               </p>
            </div>
         </div>

         <div className="lg:col-span-2">
            <div className="bg-slate-900 rounded-[4rem] p-1.5 shadow-2xl border-4 border-slate-800 relative">
               <div className="bg-white h-[800px] w-full rounded-[4.2rem] overflow-hidden flex flex-col relative">
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Document Preview: ANGGARAN_DASAR_KSP_KOPERATIFAI.DOC</p>
                     {content && (
                       <button onClick={handlePrint} className="text-[10px] font-black text-indigo-600 hover:underline">🖨️ CETAK SEKARANG</button>
                     )}
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-12 lg:p-20 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
                     {isGenerating ? (
                        <div className="h-full flex flex-col items-center justify-center space-y-6">
                           <div className="flex gap-2">
                              <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce"></div>
                              <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                              <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                           </div>
                           <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest text-center">AI sedang menyinkronkan pasal hukum dengan teknologi...</p>
                        </div>
                     ) : content ? (
                        <div ref={docRef} className="animate-in fade-in duration-1000 max-w-2xl mx-auto bg-white p-12 shadow-inner border border-slate-100 rounded-xl min-h-screen">
                           <div className="text-center space-y-4 border-b-4 border-double border-slate-900 pb-10 mb-10">
                              <h1 className="text-2xl font-black uppercase tracking-[0.2em] font-serif">Koperasi Simpan Pinjam</h1>
                              <h1 className="text-3xl font-black uppercase tracking-[0.2em] font-serif">KoperatifAI Indonesia</h1>
                              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest italic">Berdaulat - Mandiri - Terpercaya</p>
                           </div>
                           
                           <div className="font-serif text-sm text-slate-800 leading-relaxed whitespace-pre-wrap text-justify">
                              {content}
                           </div>

                           <div className="mt-20 pt-16 border-t border-slate-200 flex justify-between items-end italic font-serif text-slate-400">
                              <p>Dicetak secara otomatis melalui sistem KoperatifAI v1.0</p>
                              <p>{new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                           </div>
                        </div>
                     ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center opacity-20 py-20 space-y-6">
                           <div className="text-9xl">🏛️</div>
                           <p className="max-w-xs mx-auto font-bold text-2xl">Lengkapi data dan klik "GENERATE" untuk menyusun draf hukum Koperasi Bapak.</p>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ADARTGenerator;
