import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const profitStreams = [
  { name: 'Logistik (Grosir)', revenue: 'Rp 500 / paket', logic: 'Memanfaatkan motor Duta antar desa yang memang sedang jalan.', icon: '📦', color: '#10b981' },
  { name: 'Rating (Trust)', revenue: 'Rp 25.000 / sertifikat', logic: 'Jasa verifikasi karakter AI untuk pihak ketiga (Leasing/Bank).', icon: '🏆', color: '#6366f1' },
  { name: 'Treasury (Emas/SBN)', revenue: '6.5% - 12% / thn', logic: 'Memarkir dana mengendap di aset yang inflasi-proof.', icon: '🏛️', color: '#f59e0b' },
  { name: 'Remitansi (Bi-Fast)', revenue: 'Rp 1.500 / transfer', logic: 'Biaya admin transfer bank yang 75% lebih murah dari ATM.', icon: '💸', color: '#ef4444' },
  { name: 'Admin Pasar', revenue: 'Rp 1.000 / transaksi', logic: 'Biaya platform marketplace dari perputaran belanja anggota.', icon: '🛒', color: '#8b5cf6' },
];

const CooperativeProfitStrategy: React.FC = () => {
  const [memberCount, setMemberCount] = useState(1248);
  const [isExplaining, setIsExplaining] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState('');

  const calculateTotalMonthly = () => {
    // Estimasi konservatif bulanan per anggota
    const logVal = (memberCount * 2 * 500); // 2 paket/bln
    const ratingVal = (memberCount * 0.05 * 25000); // 5% cetak sertifikat/bln
    const sbnVal = (19600000000 * 0.065 / 12); // bunga SBN bulanan (dari 19.6M aset)
    const remitVal = (memberCount * 4 * 1500); // 4 transfer/bln
    const marketVal = (memberCount * 10 * 1000); // 10 belanja/bln
    
    return logVal + ratingVal + sbnVal + remitVal + marketVal;
  };

  const explainLogic = async () => {
    setIsExplaining(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Jelaskan secara tajam kepada Founder Koperasi tentang konsep "Micro-Revenue Scaling". 
        Tunjukkan bagaimana dengan 1 juta anggota, admin Rp 1.000 dari marketplace berubah menjadi pendapatan Rp 1 Miliar+ per bulan. 
        Tekankan bahwa biaya operasional kita rendah (biaya server cloud) berkat AI, sehingga margin ini murni menjadi SHU dan Royalti IP Founder. 
        Sebutkan bahwa ini mematuhi UU 25/1992 karena keuntungan digunakan untuk kesejahteraan bersama.`,
      });
      setAiAnalysis(response.text || "Analisis strategi pendapatan belum tersedia.");
    } catch (e) {
      setAiAnalysis("Sistem strategi sedang offline. Fokus pada volume transaksi mikro.");
    } finally {
      setIsExplaining(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Header Strategy */}
      <div className="bg-[#020617] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Founder Business Architect v2.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic font-serif">Online-kan Koperasi. <br/>Mencetak Cuan Dari Efisiensi.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               "Kita tidak menghasilkan uang dengan memeras rakyat lewat bunga tinggi. Kita mencetak uang dengan mengagregasi ribuan transaksi kecil yang selama ini dinikmati bank asing."
            </p>
            <button 
              onClick={explainLogic}
              disabled={isExplaining}
              className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase text-xs shadow-xl hover:bg-indigo-700 transition-all flex items-center gap-3"
            >
              {isExplaining ? '⏳ ANALYZING MARKET...' : '🤖 TANYA AI LOGIKA CUAN'}
            </button>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl space-y-4">
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Proyeksi Pendapatan Platform / Bulan</p>
             <p className="text-5xl font-black text-emerald-400 mt-2 italic">Rp {(calculateTotalMonthly()/1000000).toFixed(1)}<span className="text-2xl ml-1 text-slate-500">Jt</span></p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase font-black">Dengan {memberCount.toLocaleString()} Anggota Aktif</p>
          </div>
        </div>
      </div>

      {/* Streams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {profitStreams.map((stream, i) => (
           <div key={i} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{stream.icon}</div>
              <h4 className="text-xl font-black text-slate-800 leading-tight">{stream.name}</h4>
              <p className={`text-sm font-black mt-2`} style={{ color: stream.color }}>Estimasi: {stream.revenue}</p>
              <p className="text-xs text-slate-500 mt-4 leading-relaxed italic">"{stream.logic}"</p>
           </div>
        ))}
      </div>

      {/* AI Strategy Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-8 flex flex-col justify-center">
            <h3 className="text-2xl font-black text-slate-800 italic uppercase">Simulasi Skala Anggota</h3>
            <p className="text-slate-500 leading-relaxed">
               Semakin besar jumlah anggota yang Bapak "Online-kan", semakin rendah biaya server per-orang, dan semakin besar volume transaksi mikronya. Inilah daya ungkit (leverage) teknologi.
            </p>
            <div className="space-y-6">
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-black uppercase text-slate-400">
                     <span>Input Jumlah Anggota Target</span>
                     <span className="text-indigo-600 font-black">{memberCount.toLocaleString()} Orang</span>
                  </div>
                  <input 
                    type="range" min="1000" max="1000000" step="1000" 
                    value={memberCount} 
                    onChange={(e) => setMemberCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
                  />
               </div>
               <div className="p-8 bg-slate-900 rounded-3xl text-white text-center shadow-xl">
                  <p className="text-[10px] font-black text-indigo-400 uppercase mb-2">Potensi Revenue Royalti IP (Founder)</p>
                  <p className="text-4xl font-black text-emerald-400 italic">Rp {(memberCount * 100 * 10 / 1000000).toFixed(0)} Juta / bln</p>
                  <p className="text-[8px] text-slate-500 mt-2 italic">*Asumsi Rp 100 per transaksi x 10 transaksi/bln</p>
               </div>
            </div>
         </div>

         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[600px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">AI Revenue Strategist</h3>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isExplaining ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-6">
                     <div className="flex gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                     </div>
                     <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest text-center">AI sedang membedah model ekonomi...</p>
                  </div>
               ) : aiAnalysis ? (
                  <pre className="whitespace-pre-wrap">{aiAnalysis}</pre>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                     <div className="text-8xl">📊</div>
                     <p className="max-w-xs mx-auto font-bold text-lg">Ketuk "TANYA AI LOGIKA CUAN" untuk melihat bagaimana Bapak bisa menghasilkan uang tanpa melabrak aturan kementerian.</p>
                  </div>
               )}
            </div>
         </div>
      </div>
      
      {/* Legal Guardrail */}
      <div className="p-12 bg-emerald-50 border border-emerald-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shrink-0 shadow-inner">⚖️</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-emerald-900 italic leading-tight">Kepmenkop No. 25 & Kedaulatan Anda</h4>
            <p className="text-emerald-700 text-lg leading-relaxed">
               "Aturan tersebut menjaga agar koperasi tidak dikuasai segelintir elit lewat modal. Di KoperatifAI, Bapak mematuhi ini dengan memberikan **Satu Anggota Satu Suara**. Namun, sebagai **Penyedia Teknologi**, Bapak berhak menerima Royalti IP dan biaya jasa operasional secara profesional. Ini adalah pemisahan antara 'Kepemilikan Saham' dan 'Kepemilikan Teknologi'."
            </p>
         </div>
      </div>
    </div>
  );
};

export default CooperativeProfitStrategy;