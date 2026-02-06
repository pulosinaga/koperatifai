
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

const DutaContract: React.FC = () => {
  const [isSigned, setIsSigned] = useState(false);
  const [isExplaining, setIsExplaining] = useState(false);
  const [aiExplanation, setAiExplanation] = useState('');
  const [activeClause, setActiveClause] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const clauses = [
    { 
      id: 1, 
      title: "Pasal 1: Verifikasi Integritas Lapis 4", 
      text: "Duta wajib melakukan validasi fisik anggota yang mencakup pemeriksaan e-KTP asli, pencocokan wajah (Liveness), koordinat GPS rumah/usaha, dan saksi tetangga (Vouching). Setiap kelalaian dalam validasi yang menyebabkan akun fiktif akan menjadi tanggung jawab renteng Duta." 
    },
    { 
      id: 2, 
      title: "Pasal 2: Manajemen Kas & Settlement 24 Jam", 
      text: "Seluruh dana tunai yang dikumpulkan dari anggota wilayah wajib disetorkan ke rekening bank Escrow Koperasi melalui Virtual Account maksimal dalam waktu 24 jam setelah limit plafon kas harian tercapai." 
    },
    { 
      id: 3, 
      title: "Pasal 3: Hak Jasa Pembinaan & Komisi", 
      text: "Koperasi menjamin pembayaran jasa pembinaan sebesar Rp 3.000 per anggota aktif/bulan dan komisi sirklulasi ekonomi sebesar 0.1% dari GTV marketplace wilayah, yang akan dikreditkan otomatis oleh AI Treasury setiap tanggal 1." 
    },
    { 
      id: 4, 
      title: "Pasal 4: Kerahasiaan Data Anggota", 
      text: "Duta dilarang keras menyalin, menyebarkan, atau menyalahgunakan data pribadi anggota yang diakses melalui tablet operasional. Pelanggaran terhadap pasal ini akan diproses secara hukum pidana sesuai UU ITE." 
    },
    { 
      id: 5, 
      title: "Pasal 5: Jenjang Karier & Ekspansi Teritori", 
      text: "Hak melayani antar desa (Level 2) akan terbuka secara otomatis oleh sistem jika Duta mempertahankan Skor Integritas > 90% dan NPL 0% selama 6 bulan berturut-turut." 
    }
  ];

  const explainWithAI = async (clause: string, id: number) => {
    setIsExplaining(true);
    setActiveClause(id);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Terjemahkan pasal hukum kontrak Duta Koperasi berikut ke dalam bahasa gaul atau bahasa sehari-hari yang sangat mudah dimengerti, namun tetap tegas. Jelaskan apa resikonya jika dilanggar dan apa untungnya jika dipatuhi: "${clause}"`,
      });
      setAiExplanation(response.text || "Gagal mendapatkan penjelasan AI.");
    } catch (e) {
      setAiExplanation("Sistem AI sedang memproses kontrak lain. Mohon coba sesaat lagi.");
    } finally {
      setIsExplaining(false);
    }
  };

  const handleSign = () => {
    setIsSigned(true);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-[#020617] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Legal Binding Digital Agreement
            </span>
            <h2 className="text-4xl font-black leading-tight italic font-serif">Akad Integritas Duta.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               "Kontrak ini mengunci tanggung jawab manusia melalui teknologi. Pahami hak Anda, embanlah amanah Anda."
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">📜</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Document Status</p>
             <p className={`text-xl font-black mt-1 ${isSigned ? 'text-emerald-400' : 'text-rose-400'}`}>
                {isSigned ? 'FULLY EXECUTED' : 'PENDING SIGNATURE'}
             </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* The Contract Paper */}
         <div className="lg:col-span-2 bg-white rounded-[4rem] shadow-2xl border-2 border-slate-100 overflow-hidden flex flex-col relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-indigo-600"></div>
            <div className="p-12 lg:p-20 space-y-12 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
               <div className="text-center space-y-2 border-b-2 border-slate-900 pb-8">
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-[0.3em] font-serif">SURAT PERJANJIAN KERJA</h3>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Nomor: KOP-AI/AKAD-DUTA/2026/001</p>
               </div>

               <div className="space-y-10 font-serif text-slate-800 leading-relaxed">
                  <p className="text-sm">Pada hari ini, <b>Kamis, 05 Pebruari 2026</b>, bertempat di ekosistem digital KoperatifAI, disepakati perjanjian antara <b>FOUNDER KOPERATIFAI</b> (Pihak Pertama) dan <b>DUTA WILAYAH</b> (Pihak Kedua) dengan butir-butir sebagai berikut:</p>
                  
                  {clauses.map((c) => (
                    <div key={c.id} className="group relative">
                       <div className="flex justify-between items-center mb-2">
                          <h4 className="font-black text-lg text-slate-900 italic">{c.title}</h4>
                          <button 
                            onClick={() => explainWithAI(c.text, c.id)}
                            className="text-[9px] font-black text-indigo-600 hover:underline uppercase tracking-widest bg-indigo-50 px-2 py-1 rounded-lg"
                          >
                             Pahamkan Saya
                          </button>
                       </div>
                       <p className="text-sm italic text-slate-700 bg-white/50 p-4 rounded-xl border border-slate-100">{c.text}</p>
                    </div>
                  ))}
               </div>

               {/* Signatures Area */}
               <div className="flex flex-col md:flex-row justify-between items-end pt-20 border-t-2 border-slate-900 gap-12">
                  <div className="text-center space-y-6 flex-1">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pihak Pertama (Founder)</p>
                     <div className="w-48 h-24 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-indigo-200 italic font-serif">
                        <span className="text-indigo-400 opacity-50">DIGITALLY SEALED</span>
                     </div>
                     <p className="text-xs font-bold text-slate-800 underline">BUDI UTAMA</p>
                  </div>

                  <div className="text-center space-y-6 flex-1">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pihak Kedua (Duta)</p>
                     <div className="relative group">
                        <canvas 
                           ref={canvasRef} 
                           width={250} 
                           height={120} 
                           className={`bg-slate-50 border-2 border-dashed rounded-2xl transition-all ${isSigned ? 'border-emerald-500 bg-emerald-50/30' : 'border-slate-200 hover:border-indigo-400'}`}
                        />
                        {!isSigned && (
                           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-sm pointer-events-none">
                              <p className="text-[8px] font-black text-indigo-600 uppercase">Gunakan Mouse/Touch untuk Tanda Tangan</p>
                           </div>
                        )}
                        {isSigned && (
                           <div className="absolute top-2 right-2 p-1 bg-emerald-500 text-white rounded-full text-[8px] font-black">HASHED</div>
                        )}
                     </div>
                     <div className="flex gap-2 justify-center">
                        <button onClick={handleSign} className="text-[8px] font-black text-emerald-600 uppercase hover:underline">Kunci Sign</button>
                        <span className="text-slate-300">|</span>
                        <button className="text-[8px] font-black text-rose-600 uppercase hover:underline">Ulangi</button>
                     </div>
                     <p className="text-xs font-bold text-slate-800 underline">JONI SETIAWAN</p>
                  </div>
               </div>
            </div>
         </div>

         {/* AI Sidebar: Explanation & Witness */}
         <div className="space-y-8">
            <div className="bg-slate-900 rounded-[3rem] p-10 shadow-2xl flex flex-col relative overflow-hidden border border-white/5 min-h-[500px]">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6 relative z-10">
                  <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">AI Legal Translator</h3>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
               </div>

               <div className="flex-1 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10">
                  {isExplaining ? (
                     <div className="h-full flex flex-col items-center justify-center space-y-6 py-20">
                        <div className="text-4xl animate-bounce">🤖</div>
                        <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest text-center leading-loose">AI sedang membedah pasal untuk Anda...</p>
                     </div>
                  ) : aiExplanation ? (
                     <div className="animate-in fade-in duration-1000">
                        <p className="text-[10px] font-black text-indigo-400 uppercase mb-4 tracking-widest border-b border-white/5 pb-2">Penjelasan Pasal {activeClause}:</p>
                        <pre className="whitespace-pre-wrap">{aiExplanation}</pre>
                     </div>
                  ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                        <div className="text-7xl">⚖️</div>
                        <p className="max-w-xs mx-auto font-bold text-lg">Klik "Pahamkan Saya" di samping pasal untuk mendengar penjelasan santun dari AI.</p>
                     </div>
                  )}
               </div>
               
               <div className="mt-8 pt-6 border-t border-white/10 text-center relative z-10">
                  <p className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em]">Verified Digital Witness: GEMINI_AGENT_V3</p>
               </div>
            </div>

            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
               <h4 className="text-xl font-black text-slate-800 italic uppercase text-center tracking-tighter">Ekspansi Teritori</h4>
               <div className="space-y-4">
                  {[
                    { l: 'Desa (Pioneer)', s: 'CURRENT', c: 'bg-indigo-600' },
                    { l: 'Kecamatan (District)', s: 'LOCKED', c: 'bg-slate-200' },
                    { l: 'Kabupaten (Provincial)', s: 'LOCKED', c: 'bg-slate-200' },
                  ].map((lvl, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                       <span className="text-xs font-bold text-slate-700">{lvl.l}</span>
                       <span className={`text-[8px] font-black px-2 py-1 rounded uppercase ${lvl.s === 'CURRENT' ? 'bg-indigo-600 text-white animate-pulse' : 'text-slate-400'}`}>{lvl.s}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {/* Execute Final Callout */}
      <div className="p-12 bg-indigo-950 border border-indigo-900 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-5xl shadow-xl z-10 animate-pulse">🏛️</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Sertifikat Integritas Nasional."</h4>
         <p className="text-indigo-200 max-w-2xl text-lg leading-relaxed z-10">
            Setelah ditandatangani, kontrak ini akan menghasilkan **Sertifikat Digital Pimpinan Wilayah** yang sah secara hukum dan dapat digunakan untuk kredibilitas Anda di mata pemerintah daerah.
         </p>
         <button 
           disabled={!isSigned}
           className={`px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl transition-all ${isSigned ? 'bg-white text-indigo-950 hover:bg-slate-100' : 'bg-white/10 text-white/30 cursor-not-allowed'}`}
         >
            DOWNLOAD AKTA KERJA & SERTIFIKAT DUTA
         </button>
      </div>
    </div>
  );
};

export default DutaContract;
