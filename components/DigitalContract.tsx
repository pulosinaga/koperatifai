
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

const DigitalContract: React.FC = () => {
  const [isSigned, setIsSigned] = useState(false);
  const [isExplaining, setIsExplaining] = useState(false);
  const [aiExplanation, setAiExplanation] = useState('');
  const [memberId] = useState('CU-202602005');
  const [memberName] = useState('Budi Utama');
  const signatureCanvas = useRef<HTMLCanvasElement>(null);

  const clearSignature = () => {
    const canvas = signatureCanvas.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      setIsSigned(false);
    }
  };

  const handleSign = () => {
    setIsSigned(true);
  };

  const explainClause = async (clause: string) => {
    setIsExplaining(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Terjemahkan pasal hukum koperasi berikut ke dalam bahasa gaul atau bahasa sehari-hari yang sangat mudah dimengerti oleh rakyat kecil, tanpa menghilangkan esensi keadilannya: "${clause}"`,
      });
      setAiExplanation(response.text || "Gagal menjelaskan.");
    } catch (e) {
      setAiExplanation("Error: Pastikan sistem online.");
    } finally {
      setIsExplaining(false);
    }
  };

  const clauses = [
    { 
      title: "Pasal 1: Status Kepemilikan", 
      text: "Anggota yang telah menyetor Simpanan Pokok sebesar Rp 100.000,- resmi menjadi pemilik sah KoperatifAI dengan 1 hak suara mutlak dalam Rapat Anggota Tahunan (e-RAT)." 
    },
    { 
      title: "Pasal 2: Hak Bagi Hasil (SHU)", 
      text: "Anggota berhak menerima pembagian Sisa Hasil Usaha (SHU) secara real-time yang dihitung berdasarkan partisipasi transaksi di marketplace dan saldo simpanan wajib." 
    },
    { 
      title: "Pasal 3: Perlindungan DASKOP", 
      text: "Dalam hal anggota mengalami musibah duka, koperasi menjamin pelunasan sisa pinjaman produktif dan pemberian santunan kepada ahli waris sesuai skema solidaritas." 
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10">
           <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center text-3xl shadow-xl">✍️</div>
              <div>
                 <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
                   Binding Legal Agreement 2026
                 </span>
                 <h2 className="text-4xl font-black leading-tight italic mt-2">Kontrak Digital Anggota Pionir.</h2>
              </div>
           </div>
           <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Dokumen ini mengikat secara hukum per 05 Pebruari 2026. Silakan tinjau setiap pasal sebelum menandatangani.
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* The Contract Document */}
         <div className="lg:col-span-2 bg-white rounded-[3rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-indigo-600"></div>
            <div className="p-12 space-y-10 font-serif">
               <div className="text-center space-y-2 border-b border-slate-100 pb-8">
                  <h3 className="text-2xl font-black text-slate-800 uppercase tracking-[0.2em]">SURAT PERJANJIAN</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Nomor Kontrak: CU/PNR/2026/02/005</p>
               </div>

               <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
                  <p>Pada hari ini, <b>Kamis, 05 Pebruari 2026</b>, yang bertanda tangan di bawah ini:</p>
                  <div className="pl-6 space-y-2 border-l-2 border-slate-100 italic">
                     <p>Nama: <b>{memberName}</b></p>
                     <p>ID Anggota: <b>{memberId}</b></p>
                     <p>Status: <b>PIONEER MEMBER (FOUNDER)</b></p>
                  </div>
                  <p>Menyatakan setuju untuk bergabung dalam ekosistem KoperatifAI...</p>
                  
                  <div className="space-y-8 mt-10">
                     {clauses.map((c, i) => (
                       <div key={i} className="group relative">
                          <div className="flex justify-between items-center mb-2">
                             <h4 className="font-black text-slate-800 uppercase tracking-tighter">{c.title}</h4>
                             <button onClick={() => explainClause(c.text)} className="text-[9px] font-black text-indigo-600 hover:underline uppercase tracking-widest">Jelaskan dengan AI</button>
                          </div>
                          <p className="bg-slate-50 p-4 rounded-xl border border-slate-100 italic">{c.text}</p>
                       </div>
                     ))}
                  </div>

                  <div className="flex justify-between items-end pt-12">
                        <div className="text-center space-y-4">
                           <p className="text-[10px] font-black text-slate-400 uppercase">KoperatifAI Board 2026</p>
                           <div className="w-32 h-20 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center text-indigo-200 italic text-[10px] relative overflow-hidden">
                              <span className="relative z-10 font-serif text-indigo-400">Peb 2026</span>
                           </div>
                        </div>

                        <div className="text-center space-y-4">
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pihak Pertama</p>
                           <div className="relative">
                              <canvas ref={signatureCanvas} width={200} height={100} className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl cursor-crosshair" />
                           </div>
                           <p className="text-xs font-bold text-slate-800 underline">{memberName}</p>
                        </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DigitalContract;
