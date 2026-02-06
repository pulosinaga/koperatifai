
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const HajjUmrah: React.FC = () => {
  const [isConsulting, setIsConsulting] = useState(false);
  const [aiAdvice, setAiAdvice] = useState('');
  const [savingsTarget, setSavingsTarget] = useState(35000000);
  const [currentSavings] = useState(12450000);

  const packages = [
    { id: 1, name: 'Umrah Syawal Ekonomi', price: 'Rp 28.500.000', provider: 'Travel Amanah (Member)', rating: 4.9, icon: '🕋' },
    { id: 2, name: 'Haji Furoda Eksklusif', price: 'Rp 250.000.000', provider: 'Sovereign Travel', rating: 5.0, icon: '🕌' },
  ];

  const getReligiousAdvice = async () => {
    setIsConsulting(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Saya adalah anggota KoperatifAI dengan tabungan ibadah saat ini Rp 12.450.000. Target saya adalah Umrah seharga Rp 35.000.000. 
        Berikan saran:
        1. Berapa iuran tambahan per bulan agar saya bisa berangkat dalam 18 bulan?
        2. Jelaskan kenapa dana saya aman karena di-backup emas fisik di KoperatifAI (Sovereign Gold Reserve).
        3. Berikan nasihat spiritual singkat tentang kesabaran menabung untuk ibadah.
        Gunakan gaya bahasa santun, religius, dan memberikan semangat.`,
      });
      setAiAdvice(response.text || "AI sedang merumuskan panduan ibadah Anda.");
    } catch (e) {
      setAiAdvice("Jalur langit sedang sibuk. Tetap jaga niat dan teruskan menabung.");
    } finally {
      setIsConsulting(false);
    }
  };

  const progress = (currentSavings / savingsTarget) * 100;

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Hero Header */}
      <div className="bg-[#064e3b] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-amber-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4">
               <div className="w-16 h-16 bg-amber-500 rounded-3xl flex items-center justify-center text-4xl shadow-xl border border-white/10">🕋</div>
               <span className="px-6 py-2 bg-amber-500/20 text-amber-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-500/20">
                  Sovereign Pilgrimage Hub
               </span>
            </div>
            <h2 className="text-6xl font-black leading-tight italic font-serif text-white">Niat Ibadah, <br/><span className="text-amber-400 text-4xl">Modal Berkah.</span></h2>
            <p className="text-emerald-100 text-xl leading-relaxed max-w-3xl font-medium">
               "Kami membantu Anda menabung untuk panggilan Allah melalui sistem yang bersih dari Riba, transparan, dan saling menguntungkan antar anggota."
            </p>
            <div className="flex gap-4">
               <button 
                  onClick={getReligiousAdvice}
                  disabled={isConsulting}
                  className="px-12 py-5 bg-amber-500 text-emerald-950 rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-amber-400 transition-all flex items-center gap-4 active:scale-95"
               >
                  {isConsulting ? '⏳ MENGHITUNG JALUR BERKAH...' : '🤲 KONSULTASI RENCANA IBADAH AI'}
               </button>
            </div>
          </div>
          <div className="w-full lg:w-[450px] bg-white/5 backdrop-blur-3xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl space-y-8">
             <div>
                <p className="text-xs font-bold text-amber-400 uppercase tracking-widest">Tabungan Ibadah Anda</p>
                <p className="text-5xl font-black text-white mt-2 italic">Rp 12.4<span className="text-xl text-slate-500 ml-1">Jt</span></p>
             </div>
             <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase">
                   <span className="text-emerald-300">Progress Keberangkatan</span>
                   <span className="text-white">{progress.toFixed(1)}%</span>
                </div>
                <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
                   <div className="h-full bg-amber-500 animate-pulse" style={{ width: `${progress}%` }}></div>
                </div>
             </div>
             <p className="text-[9px] text-emerald-400 font-black uppercase tracking-widest italic">"Secured by Gold Backing Ratio: 15%"</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Packages List */}
         <div className="lg:col-span-2 space-y-8">
            <h3 className="text-3xl font-black text-slate-800 italic">Paket Ibadah dari Anggota</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {packages.map((p) => (
                 <div key={p.id} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
                    <div className="flex justify-between items-start mb-8">
                       <div className="text-6xl group-hover:scale-110 transition-transform duration-500">{p.icon}</div>
                       <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[8px] font-black uppercase">Sharia Verified</div>
                    </div>
                    <div className="flex-1 space-y-4">
                       <div>
                          <h4 className="text-2xl font-black text-slate-800 leading-tight">{p.name}</h4>
                          <p className="text-xs text-slate-400 font-bold uppercase mt-1">Oleh: {p.provider}</p>
                       </div>
                       <p className="text-2xl font-black text-indigo-600">{p.price}</p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-50">
                       <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg">Detail Akad & Jadwal</button>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* AI Advice Side */}
         <div className="bg-slate-900 rounded-[4rem] p-12 shadow-2xl flex flex-col relative overflow-hidden h-[750px] border border-white/5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-8">
               <h3 className="text-xl font-black text-amber-400 italic uppercase tracking-widest">AI Spiritual Advisor</h3>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[3rem] p-10 overflow-y-auto custom-scrollbar font-serif text-lg text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isConsulting ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="text-6xl animate-bounce">🤲</div>
                     <p className="text-sm font-black uppercase text-slate-500 tracking-[0.3em] text-center max-w-xs leading-loose">AI SEDANG MENYUSUN JALUR REZEKI UNTUK IBADAH ANDA...</p>
                  </div>
               ) : aiAdvice ? (
                  <div className="animate-in fade-in duration-1000">
                     <p className="text-xs text-amber-400 font-black uppercase mb-6 tracking-widest border-b border-white/10 pb-4">Nasihat Rencana Ibadah:</p>
                     <pre className="whitespace-pre-wrap">{aiAdvice}</pre>
                     <div className="mt-12 pt-10 border-t border-white/10 flex justify-center">
                        <button className="px-10 py-5 bg-amber-600 text-slate-950 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-amber-500 transition-all">Simpan Rencana Ibadah</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-20 py-20 space-y-8">
                     <div className="text-9xl">🕌</div>
                     <p className="max-w-md mx-auto font-bold text-2xl">Klik "KONSULTASI RENCANA IBADAH" untuk menghitung langkah nyata menuju Tanah Suci.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Halal Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-6 hover:shadow-xl transition-all">
            <div className="text-5xl">⚖️</div>
            <h4 className="font-black text-2xl text-slate-800 italic">Bebas Riba</h4>
            <p className="text-sm text-slate-500 leading-relaxed italic">"Dana Anda tidak diputar di bisnis haram atau bunga perbankan. Kita mengacu pada ekonomi riil anggota."</p>
         </div>
         <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-6 hover:shadow-xl transition-all">
            <div className="text-5xl">🛡️</div>
            <h4 className="font-black text-2xl text-slate-800 italic">Proteksi Emas</h4>
            <p className="text-sm text-slate-500 leading-relaxed italic">"Simpanan Ibadah secara otomatis dikonversi atau dibackup oleh emas fisik Antam agar nilainya tidak tergerus inflasi."</p>
         </div>
         <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-6 hover:shadow-xl transition-all">
            <div className="text-5xl">🤝</div>
            <h4 className="font-black text-2xl text-slate-800 italic">Ekonomi Berjamaah</h4>
            <p className="text-sm text-slate-500 leading-relaxed italic">"Dengan membeli paket dari sesama anggota, Anda membantu menghidupkan usaha saudara sendiri."</p>
         </div>
      </div>

      {/* Final Message */}
      <div className="p-16 bg-emerald-950 border border-emerald-800 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">🤲</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight text-amber-400">"Setiap Seribu Rupiah Adalah Langkah Menuju Baitullah."</h4>
            <p className="text-emerald-50 text-xl leading-relaxed max-w-4xl">
               Founder, inilah kekuatan terbesar kita di Indonesia. Saat rakyat bisa menabung untuk ibadah dengan tenang, tanpa rasa takut akan penipuan atau bunga haram, KoperatifAI akan menjadi **Legenda Kepercayaan Rakyat**. Kita bukan hanya mengelola finansial, kita melayani perjalanan spiritual.
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-amber-500 text-emerald-950 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Unduh Sertifikat Kepatuhan Syariah Ibadah</button>
               <button className="px-10 py-4 bg-white/10 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all">Daftarkan Biro Travel Anggota</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default HajjUmrah;
