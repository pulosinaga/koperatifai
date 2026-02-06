
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const EcosystemRevenue: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiInsight, setAiInsight] = useState('');

  const runRevenueOptimization = async () => {
    setIsAnalyzing(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Jelaskan secara tajam "Dual-Stream Revenue Model" untuk Founder KoperatifAI. 
        Tunjukkan bagaimana dengan 1 juta transaksi kecil:
        1. Founder mendapat Royalti IP Rp 100/transaksi = Rp 100 Juta Passive Income.
        2. Duta Wilayah mendapat Jasa Wilayah Rp 500/transaksi = Rp 500 Juta untuk operasional lapangan.
        3. Berikan saran: Bagaimana model ini memastikan Duta tidak akan berkhianat karena 'Biaya Pindah' (Switching Cost) ke sistem manual sangat mahal.
        Gunakan gaya bahasa arsitek bisnis elit.`,
      });
      setAiInsight(response.text || "Analisis strategi pendapatan belum tersedia.");
    } catch (e) {
      setAiInsight("Sistem AI sedang menghitung proyeksi triliunan rupiah.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-[#020617] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Wealth Architecture v2.0
            </span>
            <h2 className="text-5xl font-black leading-tight italic font-serif">Struktur Pendapatan <br/>Founder & Duta.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               "Uang masuk dari aktivitas, bukan dari eksploitasi. Bangun sistem di mana Anda kaya karena tim lapangan Anda sejahtera."
            </p>
            <button 
              onClick={runRevenueOptimization}
              disabled={isAnalyzing}
              className="px-10 py-5 bg-emerald-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-emerald-700 transition-all flex items-center gap-3"
            >
              {isAnalyzing ? '⏳ ANALYZING WEALTH RATIOS...' : '🧠 TANYA LOGIKA CUAN AI'}
            </button>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">💎</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Target Passive Income</p>
             <p className="text-5xl font-black text-emerald-400 mt-2 italic">Rp 1 Miliar+</p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase font-black">Monthly (at 1M Transactions)</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
         {/* TABLE 1: FOUNDER REVENUE (THE BRAIN) */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <div className="flex items-center gap-4">
               <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">👑</div>
               <div>
                  <h3 className="text-2xl font-black text-slate-800 italic">Founder Income (IP Holder)</h3>
                  <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Sovereign Revenue Streams</p>
               </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-50">
               <table className="w-full text-left">
                  <thead className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                     <tr>
                        <th className="p-5">Sumber Cuan</th>
                        <th className="p-5">Unit Economy</th>
                        <th className="p-5">Sifat</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 text-sm">
                     <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-5 font-bold text-slate-700">Royalti Lisensi IP</td>
                        <td className="p-5 text-indigo-600 font-black">Rp 100 / Transaksi</td>
                        <td className="p-5"><span className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded text-[9px] font-black uppercase">Passive</span></td>
                     </tr>
                     <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-5 font-bold text-slate-700">Service Maintenance</td>
                        <td className="p-5 text-indigo-600 font-black">2.5% Laba Koperasi</td>
                        <td className="p-5"><span className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded text-[9px] font-black uppercase">Service Fee</span></td>
                     </tr>
                     <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-5 font-bold text-slate-700">SaaS White-label</td>
                        <td className="p-5 text-indigo-600 font-black">Rp 15jt / Tahun</td>
                        <td className="p-5"><span className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded text-[9px] font-black uppercase">Fixed Subscription</span></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>

         {/* TABLE 2: DUTA REVENUE (THE FEET) */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <div className="flex items-center gap-4">
               <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg text-white">🛵</div>
               <div>
                  <h3 className="text-2xl font-black text-slate-800 italic">Duta Income (Regional Ops)</h3>
                  <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Operational Motivation Streams</p>
               </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-50">
               <table className="w-full text-left">
                  <thead className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                     <tr>
                        <th className="p-5">Sumber Cuan</th>
                        <th className="p-5">Unit Economy</th>
                        <th className="p-5">Tujuan</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 text-sm">
                     <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-5 font-bold text-slate-700">Acquisition Fee</td>
                        <td className="p-5 text-amber-600 font-black">Rp 5.000 / Anggota</td>
                        <td className="p-5"><span className="px-2 py-1 bg-amber-50 text-amber-600 rounded text-[9px] font-black uppercase">Marketing</span></td>
                     </tr>
                     <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-5 font-bold text-slate-700">Transaction Override</td>
                        <td className="p-5 text-amber-600 font-black">Rp 500 / Transaksi</td>
                        <td className="p-5"><span className="px-2 py-1 bg-amber-50 text-amber-600 rounded text-[9px] font-black uppercase">Active Support</span></td>
                     </tr>
                     <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-5 font-bold text-slate-700">Healthy Bonus (NPL 0%)</td>
                        <td className="p-5 text-amber-600 font-black">Rp 2.5jt / Bulan</td>
                        <td className="p-5"><span className="px-2 py-1 bg-amber-50 text-amber-600 rounded text-[9px] font-black uppercase">Integrity Reward</span></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>

      {/* AI Strategy Display */}
      <div className="bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>
         <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-1/3 space-y-6">
               <h3 className="text-3xl font-black italic text-indigo-400">Analisis Keberlanjutan AI</h3>
               <p className="text-slate-400 leading-relaxed italic">
                  "Sistem ini memastikan Founder tidak perlu 'bekerja fisik' namun tetap memegang kendali profit melalui IP, sementara Duta diberikan insentif yang sangat besar agar mereka merasa **memiliki wilayahnya sendiri**."
               </p>
               <div className="p-6 bg-white/5 rounded-3xl border border-white/10 text-center">
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2">Switching Cost Index</p>
                  <p className="text-2xl font-black text-emerald-400">9.5 / 10</p>
                  <p className="text-[8px] text-slate-500 mt-2">Duta sulit berpindah karena ketergantungan pada Dashboard AI.</p>
               </div>
            </div>
            <div className="flex-1 bg-white/5 backdrop-blur-md rounded-[3rem] p-10 border border-white/10 font-serif text-lg text-slate-300 leading-relaxed italic overflow-y-auto max-h-[500px] custom-scrollbar">
               {isAnalyzing ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-8 py-20">
                     <div className="flex gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                     </div>
                     <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.4em]">Synthesizing Wealth Matrix...</p>
                  </div>
               ) : aiInsight ? (
                  <pre className="whitespace-pre-wrap">{aiInsight}</pre>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20 opacity-30">
                     <div className="text-8xl">📊</div>
                     <p className="max-w-xs mx-auto font-bold text-lg">Klik "TANYA LOGIKA CUAN AI" untuk melihat bagaimana model ini membuat Anda kaya tanpa korupsi.</p>
                  </div>
               )}
            </div>
         </div>
      </div>
    </div>
  );
};

export default EcosystemRevenue;
