
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

const DigitalContract: React.FC = () => {
  const [isSigned, setIsSigned] = useState(false);
  const [isExplaining, setIsExplaining] = useState(false);
  const [aiExplanation, setAiExplanation] = useState('');
  const [memberId] = useState('CU-202406001');
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
    // In a real app, you'd capture the image data
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
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10">
           <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center text-3xl shadow-xl">✍️</div>
              <div>
                 <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
                   Binding Legal Agreement
                 </span>
                 <h2 className="text-4xl font-black leading-tight italic mt-2">Kontrak Digital Anggota Pionir.</h2>
              </div>
           </div>
           <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Dokumen ini mengikat secara hukum antara Anda dan Komunitas KoperatifAI. Silakan tinjau setiap pasal sebelum menandatangani.
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
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Nomor Kontrak: CU/PNR/{memberId}/2024</p>
               </div>

               <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
                  <p>Pada hari ini, <b>{new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</b>, yang bertanda tangan di bawah ini:</p>
                  <div className="pl-6 space-y-2 border-l-2 border-slate-100 italic">
                     <p>Nama: <b>{memberName}</b></p>
                     <p>ID Anggota: <b>{memberId}</b></p>
                     <p>Status: <b>PIONEER MEMBER (FOUNDER)</b></p>
                  </div>
                  <p>Menyatakan setuju untuk bergabung dalam ekosistem KoperatifAI dan patuh pada seluruh aturan Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART) digital dengan poin-poin kesepakatan sebagai berikut:</p>
                  
                  <div className="space-y-8 mt-10">
                     {clauses.map((c, i) => (
                       <div key={i} className="group relative">
                          <div className="flex justify-between items-center mb-2">
                             <h4 className="font-black text-slate-800 uppercase tracking-tighter">{c.title}</h4>
                             <button 
                              onClick={() => explainClause(c.text)}
                              className="text-[9px] font-black text-indigo-600 hover:underline uppercase tracking-widest"
                             >
                                Jelaskan dengan AI
                             </button>
                          </div>
                          <p className="bg-slate-50 p-4 rounded-xl border border-slate-100 italic">{c.text}</p>
                       </div>
                     ))}
                  </div>

                  <div className="pt-10 space-y-6">
                     <p>Demikian surat perjanjian ini dibuat secara sadar, tanpa paksaan, dan disahkan melalui sistem kriptografi AI KoperatifAI.</p>
                     
                     <div className="flex justify-between items-end pt-12">
                        <div className="text-center space-y-4">
                           <p className="text-[10px] font-black text-slate-400 uppercase">KoperatifAI Board</p>
                           <div className="w-32 h-20 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center text-indigo-200 italic text-[10px] relative overflow-hidden">
                              <span className="relative z-10 font-serif text-indigo-400">Digital Stamp</span>
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 to-transparent"></div>
                           </div>
                           <p className="text-xs font-bold text-slate-800">SISTEM AI TERVERIFIKASI</p>
                        </div>

                        <div className="text-center space-y-4">
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pihak Pertama (Anggota)</p>
                           <div className="relative">
                              <canvas 
                                ref={signatureCanvas}
                                width={200}
                                height={100}
                                className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl cursor-crosshair"
                                onMouseDown={(e) => {
                                  const canvas = signatureCanvas.current;
                                  if (canvas) {
                                    const ctx = canvas.getContext('2d');
                                    ctx?.beginPath();
                                    ctx?.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
                                    setIsSigned(true);
                                  }
                                }}
                                onMouseMove={(e) => {
                                  if (e.buttons !== 1) return;
                                  const canvas = signatureCanvas.current;
                                  if (canvas) {
                                    const ctx = canvas.getContext('2d');
                                    ctx?.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
                                    ctx?.stroke();
                                  }
                                }}
                              />
                              {!isSigned && <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-[9px] text-slate-300 font-bold uppercase italic">Tanda Tangan Di Sini</div>}
                              {isSigned && (
                                <button 
                                 onClick={clearSignature}
                                 className="absolute -top-2 -right-2 w-6 h-6 bg-rose-500 text-white rounded-full text-[10px] flex items-center justify-center shadow-lg"
                                >✕</button>
                              )}
                           </div>
                           <p className="text-xs font-bold text-slate-800 underline decoration-2 underline-offset-4">{memberName}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="p-8 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
               <div className="flex gap-2">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-lg shadow-sm border border-slate-100">🔒</div>
                  <div>
                     <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Hashing Security</p>
                     <p className="text-[10px] font-mono text-indigo-600">SHA256: 9f82...ae21</p>
                  </div>
               </div>
               <button 
                onClick={handleSign}
                disabled={!isSigned}
                className={`px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl ${
                  isSigned ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-200 text-slate-400'
                }`}
               >
                  SEGEL KONTRAK DIGITAL
               </button>
            </div>
         </div>

         {/* AI Legal Explainer Sidebar */}
         <div className="space-y-8">
            <div className="bg-slate-900 rounded-[3rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[600px]">
               <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
               <div className="flex justify-between items-center mb-8 relative z-10">
                  <h3 className="text-2xl font-black italic text-indigo-400">AI Legal Helper</h3>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
               </div>

               <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10">
                  {isExplaining ? (
                     <div className="h-full flex flex-col items-center justify-center space-y-4">
                        <div className="flex gap-2">
                           <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                           <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                           <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                        </div>
                        <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Menerjemahkan Hukum...</p>
                     </div>
                  ) : aiExplanation ? (
                     <pre className="whitespace-pre-wrap">{aiExplanation}</pre>
                  ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center px-6 space-y-6">
                        <div className="text-6xl grayscale opacity-20">📖</div>
                        <p className="text-slate-500">Klik <b>"Jelaskan dengan AI"</b> pada setiap pasal dokumen untuk mendapatkan penjelasan yang lebih santai dan mudah dipahami.</p>
                     </div>
                  )}
               </div>

               <div className="mt-8 pt-6 border-t border-white/10 text-center relative z-10">
                  <p className="text-[9px] text-slate-500 uppercase tracking-widest font-black mb-4">Butuh bantuan lain?</p>
                  <button className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Hubungi Advokat Koperasi</button>
               </div>
            </div>

            <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-[3rem] flex flex-col items-center text-center space-y-4 shadow-sm">
               <div className="text-4xl">🏛️</div>
               <h4 className="font-bold text-indigo-900">Legalitas UU No. 11/2008</h4>
               <p className="text-[10px] text-indigo-700/70 leading-relaxed italic">
                  "Berdasarkan UU ITE Indonesia, tanda tangan digital dan kontrak elektronik memiliki kekuatan hukum yang sama dengan dokumen kertas bermaterai."
               </p>
            </div>
         </div>
      </div>

      {/* Trust Builder Footer */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-5xl shrink-0">🛡️</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-slate-800 italic leading-tight">"Komitmen Anda Adalah Modal Terkuat Kami."</h4>
            <p className="text-slate-500 text-lg leading-relaxed">
               Kontrak digital ini memastikan bahwa Anda bukan sekadar penabung, tapi bagian dari **Pertahanan Ekonomi Rakyat**. KoperatifAI berjanji menjaga transparansi modal Anda hingga digit terakhir.
            </p>
         </div>
      </div>
    </div>
  );
};

export default DigitalContract;
