import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { useAppContext } from '../contexts/AppContext.tsx';

const OfficialAssignmentLetter: React.FC = () => {
  const { user } = useAppContext();
  const [villageName, setVillageName] = useState('Pasirhayo');
  const [chiefName, setChiefName] = useState('Bpk. Mamat');
  const [isGenerating, setIsGenerating] = useState(false);
  const [letterContent, setLetterContent] = useState('');

  const generateAILetter = async () => {
    setIsGenerating(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Susunlah naskah "SURAT MANDAT & KERJASAMA STRATEGIS" dari Koperasi KoperatifAI untuk Kepala Desa ${villageName} yang bernama ${chiefName}.
        Tujuan: Memperkenalkan ${user?.name} sebagai Duta Resmi.
        Poin Penting:
        1. Koperasi ingin membantu warga desa terbebas dari hutang lintah darat.
        2. Ingin menjadikan desa tersebut sebagai pilot project "Desa Digital Mandiri".
        3. Memohon restu untuk menggunakan fasilitas desa dalam rangka literasi ekonomi.
        Gunakan gaya bahasa Indonesia yang SANGAT sopan, menggunakan kromo inggil (jika relevan secara budaya), atau bahasa birokrasi yang sangat santun dan berwibawa.`,
      });
      setLetterContent(response.text || "Gagal menyusun surat.");
    } catch (e) {
      setLetterContent("Koneksi AI terganggu. Silakan gunakan draf standar di bawah.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <header className="space-y-1">
        <h2 className="text-3xl font-black text-slate-800 italic uppercase tracking-tight">Otoritas Desa Duta.</h2>
        <p className="text-slate-500 font-medium">Lengkapi legalitas Anda untuk bertemu dengan perangkat desa.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Config Panel */}
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-8 h-fit">
            <h3 className="text-xl font-black text-slate-800 italic">Data Tujuan</h3>
            <div className="space-y-5">
               <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Nama Desa / Wilayah</label>
                  <input 
                    type="text" 
                    value={villageName}
                    onChange={(e) => setVillageName(e.target.value)}
                    className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-600"
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Nama Kepala Desa / Tokoh</label>
                  <input 
                    type="text" 
                    value={chiefName}
                    onChange={(e) => setChiefName(e.target.value)}
                    className="w-full p-4 bg-slate-50 border-none rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-indigo-600"
                  />
               </div>
               <button 
                  onClick={generateAILetter}
                  disabled={isGenerating}
                  className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all"
               >
                  {isGenerating ? '⏳ MENYUSUN KALIMAT...' : '📝 BUAT SURAT MANDAT AI'}
               </button>
            </div>
            <div className="p-6 bg-indigo-50 rounded-3xl border border-indigo-100 italic text-[10px] text-indigo-700 leading-relaxed">
               "Surat yang dibuat oleh AI menggunakan diksi yang dioptimasi untuk memicu rasa 'Keluarga' dan 'Kehormatan' bagi tokoh desa."
            </div>
         </div>

         {/* Visual Letter */}
         <div className="lg:col-span-2 bg-slate-900 rounded-[4rem] p-1 shadow-2xl border-4 border-slate-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
            
            <div className="bg-white h-full w-full rounded-[3.8rem] overflow-hidden flex flex-col">
               <div className="flex-1 overflow-y-auto p-12 lg:p-20 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
                  <div className="max-w-2xl mx-auto bg-white p-12 shadow-inner border border-slate-50 rounded-xl min-h-screen">
                     {/* Letterhead */}
                     <div className="text-center space-y-4 border-b-4 border-double border-slate-800 pb-10 mb-10 relative">
                        <div className="absolute -top-4 left-0 w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-lg">◈</div>
                        <h1 className="text-2xl font-black uppercase tracking-[0.2em] font-serif">Koperasi KoperatifAI Indonesia</h1>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Legalitas Nasional: AHU-001248.AH.01.26.Tahun 2026</p>
                        <p className="text-[8px] text-slate-400 italic">Gedung Kedaulatan Digital, Jakarta - Indonesia</p>
                     </div>

                     {/* Content */}
                     <div className="font-serif text-sm text-slate-800 leading-relaxed space-y-8">
                        {isGenerating ? (
                           <div className="py-20 flex flex-col items-center justify-center space-y-6">
                              <div className="flex gap-2">
                                 <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
                                 <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                 <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                              </div>
                              <p className="text-[10px] font-black uppercase text-slate-400">AI sedang menulis untuk anda...</p>
                           </div>
                        ) : letterContent ? (
                           <div className="animate-in fade-in duration-1000 whitespace-pre-wrap italic">
                              {letterContent}
                           </div>
                        ) : (
                           <div className="py-20 flex flex-col items-center justify-center text-center opacity-20 space-y-4">
                              <div className="text-8xl">📜</div>
                              <p className="font-bold">Draf surat akan muncul di sini.</p>
                           </div>
                        )}

                        {letterContent && (
                           <div className="mt-20 flex justify-between items-end border-t border-slate-100 pt-10">
                              <div className="text-center space-y-4">
                                 <p className="text-[10px] font-black text-slate-400 uppercase">Tanda Tangan Ketua</p>
                                 <div className="w-32 h-20 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-indigo-400 italic text-xl font-serif">
                                    Budi Utama
                                 </div>
                              </div>
                              <div className="text-right space-y-2">
                                 <div className="w-24 h-24 bg-slate-900 p-2 rounded-xl inline-block border-2 border-slate-100 shadow-xl">
                                    {/* Mock QR Code for Verification */}
                                    <div className="w-full h-full bg-indigo-600 rounded-lg flex items-center justify-center text-white text-[8px] font-bold text-center">SCAN TO<br/>VERIFY DUTA</div>
                                 </div>
                                 <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Hash ID: KOP-2026-MANDAT</p>
                              </div>
                           </div>
                        )}
                     </div>
                  </div>
               </div>

               {letterContent && (
                  <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-center gap-6">
                     <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl">🖨️ Cetak Untuk Desa</button>
                     <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all shadow-xl">📥 Simpan PDF</button>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Psychology Tip */}
      <div className="p-10 bg-emerald-50 border border-emerald-100 rounded-[3rem] flex flex-col md:flex-row items-center gap-10">
         <div className="text-6xl animate-bounce">💡</div>
         <div className="flex-1">
            <h4 className="text-2xl font-bold text-emerald-900 italic">Tip Bertemu Tokoh Desa:</h4>
            <p className="text-emerald-700/70 mt-2 leading-relaxed">
               "Jangan biarkan surat ini hanya di HP. **Cetak dengan kertas tebal**, masukkan ke dalam map batik, dan berikan dengan dua tangan. KoperatifAI adalah teknologi, tapi pendekatan kita tetap menggunakan **Adat & Sopan Santun**."
            </p>
         </div>
      </div>
    </div>
  );
};

export default OfficialAssignmentLetter;