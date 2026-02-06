
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const NationalSummit: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [agenda, setAgenda] = useState('');
  const [activeTab, setActiveTab] = useState<'INFO' | 'RSVP' | 'MAP'>('INFO');

  const summitInfo = {
    title: "Silaturahmi Nasional KoperatifAI 2026",
    theme: "Bersatu dalam Digital, Berdaulat dalam Nyata",
    date: "12-14 Juni 2026",
    location: "Jakarta Convention Center (JCC)",
    participants: 128, // Duta
    status: "Planning Phase"
  };

  const generateSummitAgenda = async () => {
    setIsGenerating(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Buatkan draf agenda 'National Solidarity Summit' selama 3 hari untuk Koperasi KoperatifAI Indonesia. 
        Konteks: Peserta adalah 128 Duta Wilayah, Pengurus Pusat, dan Founder. 
        Tujuan: 1. Sinkronisasi Visi 2030. 2. Awarding bagi Duta terbaik. 3. Workshop Ekonomi Sirkular tingkat lanjut. 4. Malam Keakraban Bangsa.
        Gunakan gaya bahasa yang megah, inspiratif, dan sangat terorganisir. Sertakan rincian sesi 'Founder's Talk' untuk membakar semangat kedaulatan.`,
      });
      setAgenda(response.text || "Agenda belum disusun.");
    } catch (e) {
      setAgenda("Jalur komunikasi strategis sedang sibuk.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Summit Hero */}
      <div className="bg-[#020617] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-amber-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4">
               <div className="w-16 h-16 bg-amber-500 rounded-3xl flex items-center justify-center text-4xl shadow-xl border border-white/10 animate-bounce">🏟️</div>
               <span className="px-6 py-2 bg-amber-500/20 text-amber-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-500/20">
                  Annual National Gathering v1.0
               </span>
            </div>
            <h2 className="text-6xl font-black leading-tight italic font-serif">Puncak Solidaritas <br/><span className="text-amber-500 text-4xl">Nasional.</span></h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium italic">
               "Saat ribuan Duta berkumpul, gemuruh kedaulatan rakyat akan terdengar hingga ke pusat kekuasaan dunia."
            </p>
            <div className="flex gap-4">
               <button 
                  onClick={generateSummitAgenda}
                  disabled={isGenerating}
                  className="px-12 py-5 bg-amber-500 text-slate-900 rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-amber-400 transition-all flex items-center gap-3 active:scale-95"
               >
                  {isGenerating ? '⏳ SYNTHESIZING...' : '🗓️ SUSUN AGENDA VIA AI'}
               </button>
            </div>
          </div>
          <div className="w-full lg:w-[450px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl space-y-8">
             <div>
                <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Countdown to Summit</p>
                <p className="text-7xl font-black text-white mt-2 italic">128<span className="text-xl text-slate-500 ml-1">Hari</span></p>
             </div>
             <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-8">
                <div className="text-center">
                   <p className="text-[8px] font-black text-emerald-500 uppercase">Confirmed RSVP</p>
                   <p className="text-xl font-black text-white">92 Duta</p>
                </div>
                <div className="text-center border-l border-white/5">
                   <p className="text-[8px] font-black text-indigo-400 uppercase">Provinces</p>
                   <p className="text-xl font-black text-white">24</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
         {/* Navigation Sidebar */}
         <div className="space-y-4">
            {[
               { id: 'INFO', label: 'Summit Information', icon: 'ℹ️' },
               { id: 'RSVP', label: 'Konfirmasi Kehadiran', icon: '✍️' },
               { id: 'MAP', label: 'Peta Kedatangan', icon: '📍' },
            ].map(t => (
               <button 
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`w-full p-8 rounded-[3rem] border-2 text-left transition-all flex items-center gap-4 group ${
                  activeTab === t.id ? 'bg-indigo-600 border-indigo-500 shadow-xl scale-105 text-white' : 'bg-white border-slate-100 hover:border-indigo-100'
                }`}
               >
                  <span className="text-3xl">{t.icon}</span>
                  <span className="font-black text-xs uppercase tracking-widest">{t.label}</span>
               </button>
            ))}
         </div>

         {/* Content Area */}
         <div className="lg:col-span-3">
            {activeTab === 'INFO' && (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in zoom-in duration-300">
                  <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
                     <h3 className="text-3xl font-black text-slate-800 italic">Rincian Perhelatan</h3>
                     <div className="space-y-6">
                        {[
                          { l: 'Tema Utama', v: summitInfo.theme, i: '🌟' },
                          { l: 'Waktu', v: summitInfo.date, i: '📅' },
                          { l: 'Lokasi', v: summitInfo.location, i: '📍' },
                          { l: 'Target Peserta', v: `${summitInfo.participants} Pimpinan Wilayah`, i: '👥' },
                        ].map((item, i) => (
                          <div key={i} className="flex gap-4 items-start">
                             <span className="text-2xl">{item.i}</span>
                             <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.l}</p>
                                <p className="text-lg font-bold text-slate-800 leading-tight">{item.v}</p>
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>
                  
                  <div className="bg-slate-900 rounded-[4rem] p-12 shadow-2xl flex flex-col relative overflow-hidden h-full border border-white/5">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px]"></div>
                     <h3 className="text-xl font-black text-amber-400 italic mb-8 uppercase tracking-widest relative z-10">Agenda Simulasi AI</h3>
                     <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-stone-300 leading-relaxed italic relative z-10">
                        {isGenerating ? (
                           <div className="h-full flex flex-col items-center justify-center space-y-6">
                              <div className="text-4xl animate-spin">📜</div>
                              <p className="text-[10px] font-black uppercase text-stone-500 tracking-[0.3em]">AI IS WRITING THE FUTURE...</p>
                           </div>
                        ) : agenda ? (
                           <pre className="whitespace-pre-wrap">{agenda}</pre>
                        ) : (
                           <div className="h-full flex items-center justify-center text-center opacity-30 px-10">
                              "Tekan tombol 'Susun Agenda' di atas untuk melihat draf acara nasional hasil racikan AI."
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            )}

            {activeTab === 'RSVP' && (
               <div className="bg-white p-16 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-12 animate-in slide-in-from-right">
                  <div className="w-32 h-32 bg-indigo-50 rounded-[3rem] flex items-center justify-center text-7xl shadow-inner border border-indigo-100">🤳</div>
                  <div className="space-y-4">
                     <h3 className="text-4xl font-black text-slate-800 italic">Konfirmasi Biometrik</h3>
                     <p className="text-slate-500 max-w-md mx-auto text-lg leading-relaxed">
                        Khusus Pengurus & Duta, silakan lakukan konfirmasi kehadiran menggunakan Face ID untuk mengamankan slot hotel dan akomodasi.
                     </p>
                  </div>
                  <button className="px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all flex items-center gap-4">
                     <span>📸</span> MULAI VERIFIKASI WAJAH & KONFIRMASI
                  </button>
                  <p className="text-[10px] text-slate-400 italic">"Akomodasi ditanggung oleh Dana Pendidikan & Pelatihan Koperasi (SHU 5%)"</p>
               </div>
            )}

            {activeTab === 'MAP' && (
               <div className="bg-[#0f172a] rounded-[4rem] p-1 shadow-2xl relative h-[600px] overflow-hidden border border-white/10 animate-in fade-in">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                  <div className="absolute top-10 left-10 z-20">
                     <h3 className="text-xl font-black text-white italic uppercase tracking-widest">Regional Delegation Flow</h3>
                     <div className="flex items-center gap-2 mt-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                        <p className="text-[10px] font-bold text-slate-400">92 DUTA IN TRANSIT</p>
                     </div>
                  </div>
                  
                  {/* Simulated Map Nodes */}
                  <div className="w-full h-full flex items-center justify-center relative">
                     <div className="absolute w-6 h-6 bg-amber-500 rounded-full animate-pulse shadow-[0_0_30px_#f59e0b] flex items-center justify-center text-[10px] font-black text-black z-30">HOST</div>
                     {[...Array(8)].map((_, i) => (
                        <div key={i} className="absolute group" style={{ top: `${20 + Math.random()*60}%`, left: `${10 + Math.random()*80}%` }}>
                           <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_15px_#6366f1]"></div>
                           <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-all">
                              <p className="text-[8px] text-white font-black whitespace-nowrap">DUTA WILAYAH {i+1}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            )}
         </div>
      </div>

      {/* Strategic Callout */}
      <div className="p-16 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse opacity-30">🇮🇩</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight text-amber-500">"Satu Meja, Satu Bangsa, Satu Kedaulatan."</h4>
            <p className="text-stone-400 text-xl leading-relaxed max-w-4xl italic">
               "Pertemuan fisik ini adalah saat di mana kita membuktikan bahwa **Ekonomi Pancasila** bisa dijalankan dengan efisiensi Silicon Valley tanpa kehilangan kehangatan silaturahmi tanah air. Founder, siapkan pidato terbaik Anda!"
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-amber-600 text-[#0c0a09] rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Unduh Undangan Resmi Protokol</button>
               <button className="px-10 py-4 bg-white/10 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all">Buka Forum Panitia Nasional</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default NationalSummit;
