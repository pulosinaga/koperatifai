
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const sbnOpportunities = [
  { id: 1, type: 'ORI025', tenor: '3 Thn', yield: '6.25%', status: 'OPEN', icon: '🇮🇩' },
  { id: 2, type: 'SBR013', tenor: '2 Thn', yield: '6.40% (Floating)', status: 'NEW', icon: '🏛️' },
  { id: 3, type: 'Sukuk Ritel SR020', tenor: '3 Thn', yield: '6.30%', status: 'RECOMMENDED', icon: '🌙' },
];

const NationalBondPortfolio: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiOpinion, setAiOpinion] = useState('');
  const [selectedSBN, setSelectedSBN] = useState<any>(null);

  const analyzeNationalBond = async (sbn: any) => {
    setIsAnalyzing(true);
    setSelectedSBN(sbn);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Analisis keputusan investasi KoperatifAI (Koperasi Kredit Digital) untuk membeli Surat Utang Negara jenis '${sbn.type}' dengan yield ${sbn.yield}. 
        
        Berikan 'Patriotic Strategic Memo' (3 paragraf):
        1. Analisis Keamanan: Mengapa meminjamkan uang ke negara (SBN) adalah risiko terendah (Risk-Free) bagi dana anggota dibanding instrumen lain.
        2. Dampak Pembangunan: Bagaimana uang rakyat di koperasi ini membantu mendanai proyek APBN (Pendidikan/Infrastruktur) tanpa hutang luar negeri.
        3. Rekomendasi Portfolio: Berapa persen dari total Rp 19,6 Miliar aset kita yang sebaiknya ditempatkan di SBN ini untuk menjaga likuiditas 'Safe Haven'.
        Gunakan gaya bahasa seorang Penasihat Ekonomi Nasional yang bangga akan kemandirian bangsa.`,
      });
      setAiOpinion(response.text || "Oracle sedang memetakan kedaulatan moneter.");
    } catch (e) {
      setAiOpinion("Jaringan komunikasi ke Kementerian Keuangan sedang padat. Mohon tunggu.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* National Hero */}
      <div className="bg-[#450a0a] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-rose-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-rose-500/20 text-rose-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-rose-500/20">
              National Sovereign Asset Hub v1.0
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif">Mendanai Negara, <br/>Memakmurkan Rakyat.</h2>
            <p className="text-rose-100/70 text-xl leading-relaxed max-w-3xl font-medium">
               "KoperatifAI bukan sekadar aplikasi tabungan. Kita adalah kekuatan moneter rakyat yang mendanai kedaulatan Republik Indonesia melalui Surat Utang Negara."
            </p>
          </div>
          <div className="w-full lg:w-[400px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl">
             <p className="text-[10px] font-black text-rose-400 uppercase tracking-widest">Sovereign Debt Allocation</p>
             <p className="text-7xl font-black text-white mt-2 italic">20%</p>
             <p className="text-[10px] text-rose-300/50 mt-6 uppercase font-black tracking-widest">OF TOTAL CAPITAL LENT TO THE STATE</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Opportunities List */}
         <div className="lg:col-span-2 space-y-8">
            <h3 className="text-3xl font-black text-slate-800 italic">Penawaran SBN/SUN Terbaru</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {sbnOpportunities.map((sbn) => (
                 <button 
                  key={sbn.id}
                  onClick={() => analyzeNationalBond(sbn)}
                  className={`p-10 rounded-[3.5rem] border-2 text-left transition-all group flex flex-col gap-6 ${
                    selectedSBN?.id === sbn.id ? 'bg-rose-900 border-rose-600 shadow-2xl scale-105 text-white' : 'bg-white border-slate-100 hover:border-rose-300'
                  }`}
                 >
                    <div className="flex justify-between items-start w-full">
                       <div className="text-6xl group-hover:scale-110 transition-transform duration-500">{sbn.icon}</div>
                       <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase ${
                         selectedSBN?.id === sbn.id ? 'bg-white/10 text-white' : 'bg-rose-50 text-rose-600'
                       }`}>{sbn.status}</span>
                    </div>
                    <div className="space-y-1">
                       <p className={`text-[10px] font-black uppercase tracking-widest ${selectedSBN?.id === sbn.id ? 'text-rose-200' : 'text-slate-400'}`}>Tenor: {sbn.tenor}</p>
                       <h4 className="text-3xl font-black italic">{sbn.type}</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-current opacity-20">
                       <div>
                          <p className="text-[8px] font-black uppercase">Fixed Yield</p>
                          <p className="text-2xl font-black">{sbn.yield}</p>
                       </div>
                       <div>
                          <p className="text-[8px] font-black uppercase">Risk Class</p>
                          <p className="text-2xl font-black text-emerald-400">ZERO</p>
                       </div>
                    </div>
                 </button>
               ))}
            </div>
         </div>

         {/* AI Patriot Strategy Panel */}
         <div className="bg-slate-900 rounded-[4rem] p-12 shadow-2xl flex flex-col relative overflow-hidden h-[750px]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-[120px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-8">
               <h3 className="text-xl font-black text-rose-400 italic uppercase tracking-widest">Patriotic AI Council</h3>
               <div className="flex gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                  <span className="text-[9px] text-slate-500 font-mono">APBN_SYNC_ACTIVE</span>
               </div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[3rem] p-10 overflow-y-auto custom-scrollbar font-serif text-lg text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isAnalyzing ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="flex gap-4">
                        <div className="w-4 h-4 bg-rose-500 rounded-full animate-bounce"></div>
                        <div className="w-4 h-4 bg-rose-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-4 h-4 bg-rose-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                     </div>
                     <p className="text-sm font-black uppercase text-slate-500 tracking-[0.3em] text-center max-w-xs">AI sedang membedah korelasi makro & dampak nasional...</p>
                  </div>
               ) : aiOpinion ? (
                  <div className="animate-in fade-in duration-1000">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="text-4xl">🇮🇩</div>
                        <p className="text-xs font-black text-emerald-400 uppercase tracking-[0.2em]">Sovereignty Analysis Complete</p>
                     </div>
                     <pre className="whitespace-pre-wrap">{aiOpinion}</pre>
                     <div className="mt-12 pt-10 border-t border-white/10 flex justify-center gap-6">
                        <button className="px-10 py-5 bg-rose-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-rose-700 transition-all">Submit for Board Approval</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-20 py-20 space-y-8">
                     <div className="text-9xl">🏛️</div>
                     <p className="max-w-md mx-auto font-bold text-2xl">Pilih instrumen SBN di samping untuk mendapatkan analisis kedaulatan nasional oleh AI.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Strategic Pillars of National Bonds */}
      <div className="bg-white p-16 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-4">
            <h3 className="text-4xl font-black text-slate-800 italic">Mengapa SBN adalah Pilihan Bijak?</h3>
            <p className="text-slate-500 text-lg">Membangun kemandirian moneter tanpa ketergantungan asing.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-rose-50 rounded-[3rem] border border-rose-100 space-y-6 text-center group hover:bg-rose-600 transition-all duration-500">
               <div className="text-5xl group-hover:scale-125 transition-transform">🛡️</div>
               <h4 className="font-black text-xl text-rose-900 group-hover:text-white italic">Risk-Free Yield</h4>
               <p className="text-sm text-rose-700/70 group-hover:text-white/70 leading-relaxed italic">
                  "SBN dijamin 100% oleh Undang-Undang. Tidak ada risiko gagal bayar selama negara masih berdiri. Ini adalah tempat parkir dana teraman."
               </p>
            </div>
            <div className="p-10 bg-indigo-50 rounded-[3rem] border border-indigo-100 space-y-6 text-center group hover:bg-indigo-600 transition-all duration-500">
               <div className="text-5xl group-hover:scale-125 transition-transform">🏗️</div>
               <h4 className="font-black text-xl text-indigo-900 group-hover:text-white italic">Direct Impact</h4>
               <p className="text-sm text-indigo-700/70 group-hover:text-white/70 leading-relaxed italic">
                  "Uang kita tidak mengendap di bank asing, tapi langsung mengalir menjadi jembatan, bendungan, dan gaji guru honorer di pelosok."
               </p>
            </div>
            <div className="p-10 bg-slate-900 rounded-[3rem] text-white space-y-6 text-center group hover:bg-black transition-all duration-500">
               <div className="text-5xl group-hover:scale-125 transition-transform">⚖️</div>
               <h4 className="font-black text-xl text-indigo-400 italic">Tax Efficiency</h4>
               <p className="text-sm text-slate-400 group-hover:text-white/70 leading-relaxed italic">
                  "Pajak bunga SBN hanya 10%, lebih rendah dari pajak bunga deposito bank (20%). Ini berarti SHU bersih bagi anggota lebih besar."
               </p>
            </div>
         </div>
      </div>

      {/* Final Message */}
      <div className="p-16 bg-[#0c0a09] border border-stone-800 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">🇮🇩</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight">"Uang Rakyat Mendanai Negara Sendiri."</h4>
            <p className="text-stone-400 text-xl leading-relaxed max-w-4xl">
               Founder, inilah puncak dari **Ekonomi Pancasila**. Saat koperasi rakyat mampu membeli surat hutang negaranya sendiri, kita telah memutus rantai ketergantungan pada hutang luar negeri. KoperatifAI adalah pahlawan tanpa tanda jasa bagi stabilitas rupiah.
            </p>
            <div className="flex gap-6">
               <button className="px-10 py-4 bg-white text-stone-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:shadow-xl transition-all shadow-xl">Sertifikasi Investor Institusi SBN</button>
               <button className="px-10 py-4 bg-white/10 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all">Lihat Jadwal Lelang Kemenkeu</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default NationalBondPortfolio;
