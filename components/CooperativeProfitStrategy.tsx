
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const profitStreams = [
  { name: 'Logistik (Grosir)', revenue: 'Rp 500 / paket', logic: 'Memanfaatkan kapasitas kosong motor anggota antar desa.', icon: '📦', color: '#10b981' },
  { name: 'Rating (Trust)', revenue: 'Rp 25.000 / sertifikat', logic: 'Jasa verifikasi karakter anggota untuk pihak ketiga.', icon: '🏆', color: '#6366f1' },
  { name: 'Treasury (SBN)', revenue: '6.5% / tahun', logic: 'Memarkir dana anggota di surat utang negara yang risk-free.', icon: '🏛️', color: '#f59e0b' },
  { name: 'Remitansi', revenue: 'Rp 1.500 / transfer', logic: 'Biaya admin transfer antar bank via gateway SNAP.', icon: '💸', color: '#ef4444' },
  { name: 'Marketplace', revenue: 'Rp 1.000 / transaksi', logic: 'Biaya platform dari setiap belanja sesama anggota.', icon: '🛒', color: '#8b5cf6' },
];

const CooperativeProfitStrategy: React.FC = () => {
  const [memberCount, setMemberCount] = useState(1248);
  const [isExplaining, setIsExplaining] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState('');

  const calculateTotalMonthly = () => {
    // Estimasi konservatif bulanan per anggota
    const logVal = (memberCount * 2 * 500); // 2 paket/bln
    const ratingVal = (memberCount * 0.05 * 25000); // 5% anggota cetak sertifikat/bln
    const sbnVal = (19600000000 * 0.065 / 12); // bunga SBN bulanan
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
        Gunakan contoh biaya logistik Rp 500 dan admin marketplace Rp 1.000. 
        Tunjukkan bagaimana dengan 1 juta anggota, recehan ini berubah menjadi pendapatan Rp 1 Miliar+ per bulan tanpa harus menarik bunga pinjaman yang mahal. 
        Tekankan bahwa 'Efisiensi AI' adalah rahasia agar biaya operasional tetap nol sehingga margin ini murni menjadi SHU. 
        Gunakan gaya bahasa "Business Architect" yang cerdas dan praktis.`,
      });
      setAiAnalysis(response.text || "Analisis tidak tersedia.");
    } catch (e) {
      setAiAnalysis("Sistem strategi sedang offline. Fokus pada efisiensi biaya operasional.");
    } finally {
      setIsExplaining(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-6xl mx-auto">
      {/* Header Strategy */}
      <div className="bg-[#020617] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Profit Architecture v1.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic font-serif">Bagaimana Kita Menghasilkan Uang?</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               "Kami tidak membakar modal. Kami mengagregasi ribuan transaksi mikro menjadi arus pendapatan raksasa yang transparan."
            </p>
            <button 
              onClick={explainLogic}
              disabled={isExplaining}
              className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase text-xs shadow-xl hover:bg-indigo-700 transition-all flex items-center gap-3"
            >
              {isExplaining ? '⏳ ANALYZING MARGINS...' : '🤖 TANYA AI LOGIKA BISNIS'}
            </button>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Total Estimasi Pendapatan / Bulan</p>
             <p className="text-4xl font-black text-emerald-400 mt-2 italic">Rp {(calculateTotalMonthly()/1000000).toFixed(1)} Juta</p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase font-black">Berdasarkan {memberCount} Anggota Aktif</p>
          </div>
        </div>
      </div>

      {/* Logic Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {profitStreams.map((stream, i) => (
           <div key={i} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{stream.icon}</div>
              <h4 className="text-xl font-black text-slate-800 leading-tight">{stream.name}</h4>
              <p className={`text-sm font-black mt-2`} style={{ color: stream.color }}>Revenue: {stream.revenue}</p>
              <p className="text-xs text-slate-500 mt-4 leading-relaxed italic">"{stream.logic}"</p>
           </div>
        ))}
      </div>

      {/* AI Explanation Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-8 flex flex-col justify-center">
            <h3 className="text-2xl font-black text-slate-800 italic">Prinsip "Volume over Margin"</h3>
            <p className="text-slate-500 leading-relaxed">
               Bank konvensional mengambil margin besar (bunga 2-3% per bulan) dari sedikit orang. KoperatifAI mengambil margin sangat kecil (Rp 500 - Rp 1.000) dari aktivitas ekonomi harian ribuan anggota.
            </p>
            <div className="space-y-4">
               <div className="flex justify-between items-center text-xs font-black uppercase text-slate-400">
                  <span>Simulasi Jumlah Anggota</span>
                  <span className="text-indigo-600">{memberCount.toLocaleString()}</span>
               </div>
               <input 
                  type="range" min="1000" max="1000000" step="1000" 
                  value={memberCount} 
                  onChange={(e) => setMemberCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
               />
               <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 text-center">
                  <p className="text-[10px] font-black text-emerald-600 uppercase mb-1">Potensi Omzet Tahunan (1M Members)</p>
                  <p className="text-3xl font-black text-emerald-900">Rp 450 Miliar+</p>
               </div>
            </div>
         </div>

         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[500px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px]"></div>
            <h3 className="text-xl font-black text-indigo-400 mb-8 uppercase tracking-widest italic relative z-10">AI Revenue Architect</h3>
            
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
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 space-y-6">
                     <div className="text-8xl">📊</div>
                     <p className="font-bold text-slate-500">Ketuk robot di atas untuk mendapatkan rincian strategi monetisasi eksklusif.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Founder Message */}
      <div className="p-12 bg-indigo-600 border border-indigo-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl z-10 animate-pulse">👑</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Inilah Rahasia Startup Rakyat."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed z-10">
            Founder, maksud dari semua fitur online ini adalah untuk **Mengambil Kembali Biaya Menengah** yang biasanya dinikmati bank dan lintah darat, lalu membagikannya kembali ke seluruh anggota (termasuk Anda) melalui sistem yang transparan. Inilah kemakmuran bersama yang sebenarnya.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Download Proyeksi Bisnis 5 Tahun
         </button>
      </div>
    </div>
  );
};

export default CooperativeProfitStrategy;
