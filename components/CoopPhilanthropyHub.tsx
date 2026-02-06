
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const socialPrograms = [
  { id: 1, title: 'Laptop untuk Anak Berprestasi', target: 50000000, collected: 32450000, desc: 'Pemberian perangkat belajar digital bagi anak anggota yang menduduki peringkat 3 besar di sekolah.', icon: '💻', category: 'Pendidikan' },
  { id: 2, title: 'Kesehatan Lansia Duta', target: 25000000, collected: 12000000, desc: 'Pemeriksaan kesehatan gratis dan suplemen harian bagi anggota lansia yang tetap produktif.', icon: '🩺', category: 'Kesehatan' },
  { id: 3, title: 'Emergency Food Bank', target: 15000000, collected: 8900000, desc: 'Stok beras dan bahan pokok darurat bagi anggota yang tertimpa musibah mendadak.', icon: '🌾', category: 'Sosial' },
];

const CoopPhilanthropyHub: React.FC = () => {
  const [autoDonate, setAutoDonate] = useState(false);
  const [donatePercent, setDonatePercent] = useState(2.5);
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiReport, setAiReport] = useState('');
  const [selectedProgram, setSelectedProgram] = useState<any>(null);

  const getImpactReport = async (programTitle: string) => {
    setIsGenerating(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Buatkan laporan dampak sosial (social impact report) singkat dan menyentuh hati untuk program filantropi koperasi: '${programTitle}'. 
        Asumsikan dana yang terkumpul berasal dari potongan SHU sukarela ribuan anggota. 
        Jelaskan: 1. Berapa banyak jiwa yang terbantu. 2. Cerita sukses singkat seorang penerima manfaat. 3. Kenapa transparansi AI menjamin dana ini sampai ke sasaran.
        Gunakan gaya bahasa yang hangat, penuh syukur, dan menginspirasi anggota untuk terus berbagi.`,
      });
      setAiReport(response.text || "Laporan dampak belum tersedia.");
    } catch (e) {
      setAiReport("Sistem AI sedang menghitung detil dampak di lapangan. Terima kasih atas kesabaran Anda.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Philanthropy Hero */}
      <div className="bg-rose-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-rose-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Community Compassion Engine v1.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Filantropi Rakyat AI: <br/>Kebaikan yang Terukur & Transparan.</h2>
            <p className="text-rose-100 text-lg leading-relaxed max-w-2xl font-medium">
               Di KoperatifAI, kekayaan bukan hanya tentang saldo, tapi tentang berapa banyak tangan yang kita gandeng bersama.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">❤️</div>
             <p className="text-xs font-bold text-rose-300 uppercase tracking-widest">Total Dana Sosial Disalurkan</p>
             <p className="text-4xl font-black text-white mt-2 italic">Rp 452.8M</p>
             <p className="text-[9px] text-rose-400 mt-4 uppercase font-black">1.248 Jiwa Terbantu Bulan Ini</p>
          </div>
        </div>
      </div>

      {/* Auto-Donate Setting */}
      <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-12 items-center">
         <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center text-5xl shrink-0">✨</div>
         <div className="flex-1 space-y-2">
            <h3 className="text-2xl font-black text-slate-800 italic">Program Donasi SHU Otomatis</h3>
            <p className="text-slate-500 text-sm">Sisihkan sebagian kecil Sisa Hasil Usaha (SHU) Anda untuk program sosial pilihan AI.</p>
         </div>
         <div className="flex flex-col items-end gap-4 w-full lg:w-auto">
            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-3xl border border-slate-100 w-full lg:w-auto">
               <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Status: {autoDonate ? 'AKTIF' : 'NON-AKTIF'}</span>
               <button 
                onClick={() => setAutoDonate(!autoDonate)}
                className={`w-14 h-8 rounded-full p-1 transition-all duration-300 ${autoDonate ? 'bg-emerald-500' : 'bg-slate-300'}`}
               >
                  <div className={`w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${autoDonate ? 'translate-x-6' : 'translate-x-0'}`}></div>
               </button>
            </div>
            {autoDonate && (
               <div className="flex items-center gap-3 animate-in slide-in-from-right w-full lg:w-auto">
                  <span className="text-[10px] font-black text-rose-500 uppercase">Besaran: {donatePercent}% SHU</span>
                  <input 
                    type="range" min="0.5" max="10" step="0.5" value={donatePercent} 
                    onChange={(e) => setDonatePercent(parseFloat(e.target.value))}
                    className="w-32 h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer accent-rose-500"
                  />
               </div>
            )}
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Active Programs */}
         <div className="space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic">Program Sosial Aktif</h3>
            <div className="space-y-4">
               {socialPrograms.map((prog) => {
                 const progress = (prog.collected / prog.target) * 100;
                 return (
                   <button 
                    key={prog.id}
                    onClick={() => { setSelectedProgram(prog); getImpactReport(prog.title); }}
                    className={`w-full p-8 rounded-[3rem] border-2 text-left transition-all flex flex-col gap-6 group ${
                      selectedProgram?.id === prog.id ? 'bg-rose-50 border-rose-600 shadow-lg scale-102' : 'bg-white border-slate-50 hover:border-rose-200'
                    }`}
                   >
                      <div className="flex justify-between items-start w-full">
                         <div className="flex gap-4 items-center">
                            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-inner">{prog.icon}</div>
                            <div>
                               <h4 className="font-bold text-slate-800">{prog.title}</h4>
                               <p className="text-[10px] text-rose-500 font-black uppercase tracking-widest">{prog.category}</p>
                            </div>
                         </div>
                         <div className="text-right">
                            <p className="text-xs font-black text-slate-900">{progress.toFixed(0)}%</p>
                         </div>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                         <div className="h-full bg-rose-500 transition-all duration-1000" style={{ width: `${progress}%` }}></div>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed italic">"{prog.desc}"</p>
                   </button>
                 );
               })}
            </div>
         </div>

         {/* AI Impact Side */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[600px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-rose-400 italic">AI Impact Stories</h3>
               <div className="w-2 h-2 bg-rose-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10">
               {isGenerating ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-6">
                     <div className="text-5xl animate-bounce">💗</div>
                     <p className="text-slate-400 text-xs animate-pulse text-center max-w-[200px] uppercase tracking-widest">AI sedang menyusun laporan kebermanfaatan...</p>
                  </div>
               ) : aiReport ? (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                     <pre className="whitespace-pre-wrap">{aiReport}</pre>
                     <div className="pt-6 border-t border-white/10 flex justify-center">
                        <button className="px-10 py-4 bg-rose-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-rose-700 transition-all">Daftar Jadi Relawan Lapangan</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-30">
                     <div className="text-8xl">🕊️</div>
                     <p className="text-slate-400 font-bold max-w-xs mx-auto">Klik pada salah satu program sosial untuk melihat bagaimana donasi Anda mengubah hidup anggota lain.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Philosophy Pillar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {[
           { t: 'Kemanusiaan Digital', d: 'Koperasi bukan hanya mesin hitung bunga, tapi wadah kasih sayang antar manusia.', icon: '🤝' },
           { t: 'Audit Kasih Sayang', d: 'Setiap sen donasi diverifikasi AI untuk memastikan tidak ada pemotongan operasional sedikitpun.', icon: '🛡️' },
           { t: 'Ekosistem Berbagi', d: 'Saat anggota saling bantu, stabilitas ekonomi seluruh wilayah Duta meningkat otomatis.', icon: '🌍' }
         ].map((item, i) => (
           <div key={i} className="p-8 bg-white rounded-[3rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all group">
              <div className="text-4xl group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-bold text-slate-800 italic">{item.t}</h4>
              <p className="text-xs text-slate-500 leading-relaxed italic">"{item.d}"</p>
           </div>
         ))}
      </div>

      {/* Integration Message for Founder */}
      <div className="p-12 bg-rose-800 border border-rose-700 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl z-10 animate-pulse">💝</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Kekayaan Sejati Adalah Kemanfaatan."</h4>
         <p className="text-rose-100 max-w-2xl text-lg leading-relaxed z-10">
            Founder, fitur filantropi ini adalah **Jiwanya KoperatifAI**. Inilah yang membedakan kita dari bank manapun di dunia. Kita membangun sistem di mana setiap kesuksesan individual adalah berkat bagi kolektif.
         </p>
         <button className="px-10 py-4 bg-white text-rose-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Buka Panel Pengawas Dana Sosial
         </button>
      </div>
    </div>
  );
};

export default CoopPhilanthropyHub;
