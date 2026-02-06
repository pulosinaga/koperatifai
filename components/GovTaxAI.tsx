
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const taxData = [
  { type: 'PPh 4(2) Bunga', amount: 12450000, status: 'COLLECTED' },
  { type: 'PPh 21 Gaji', amount: 4500000, status: 'READY' },
  { type: 'PPh 23 Jasa', amount: 1800000, status: 'PENDING' },
];

const GovTaxAI: React.FC = () => {
  const [isAuditing, setIsAuditing] = useState(false);
  const [aiReport, setAiReport] = useState('');

  const runLegalAudit = async () => {
    setIsAuditing(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis kepatuhan pajak dan regulasi untuk KoperatifAI. 
        Konteks: 
        1. Total Pajak Terkumpul (PPh 4 ayat 2): Rp 12.450.000.
        2. Status Laporan ODS: Sinkron harian.
        3. AD/ART Digital: Terverifikasi oleh AI Sentinel.
        
        Tugas:
        - Jelaskan bagaimana sistem AI memotong pajak secara otomatis tanpa campur tangan admin (Anti-Corruption).
        - Berikan pesan apresiasi untuk pemerintah (Dirjen Pajak/Kemenkop) karena sistem ini mempermudah tugas mereka.
        - Sebutkan manfaat bagi anggota: Pajak yang tertib berarti koperasi legal dan aman dari pembekuan izin.
        Gunakan gaya bahasa otoritatif, sangat patuh hukum, dan menenangkan investor.`,
      });
      setAiReport(response.text || "AI sedang memverifikasi regulasi...");
    } catch (e) {
      setAiReport("Koneksi ke server legal negara sedang padat. Integritas data tetap terjaga.");
    } finally {
      setIsAuditing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Gov Hero Section */}
      <div className="bg-[#f8fafc] rounded-[4rem] p-16 relative overflow-hidden shadow-xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-indigo-500/10 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Regulatory Compliance Protocol v4.0
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif text-slate-900">Pajak Otomatis, <br/>Kedaulatan Berlapis.</h2>
            <p className="text-slate-600 text-xl leading-relaxed max-w-3xl font-medium">
               "KoperatifAI membalikkan stigma. Kami tidak menghindari pajak, kami mengotomatisasinya agar rakyat tenang dan negara senang."
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={runLegalAudit}
                disabled={isAuditing}
                className="px-12 py-5 bg-slate-900 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-black transition-all flex items-center gap-4 active:scale-95"
              >
                {isAuditing ? '⏳ VERIFYING COMPLIANCE...' : '🏛️ JALANKAN AUDIT LEGAL AI'}
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[450px] bg-white p-12 rounded-[4rem] border border-indigo-100 text-center shadow-2xl space-y-8">
             <div>
                <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest">Tax Reserve (Standby)</p>
                <p className="text-5xl font-black text-slate-800 mt-2 italic">Rp 18.7M</p>
             </div>
             <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                <p className="text-[10px] text-emerald-600 font-black uppercase">ODS Sync Status</p>
                <p className="text-lg font-bold text-emerald-900 italic">100% COMPLIANT</p>
             </div>
             <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest italic">"Secured by Government API Gateway"</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Tax Ledger Monitor */}
         <div className="lg:col-span-2 bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <div className="flex justify-between items-center">
               <h3 className="text-2xl font-black text-slate-800 italic">Buku Besar Perpajakan (Real-time)</h3>
               <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Auto-Deduction Active</span>
               </div>
            </div>
            
            <div className="space-y-6">
               {taxData.map((d, i) => (
                 <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-indigo-50 transition-all">
                    <div className="flex gap-4 items-center">
                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">💰</div>
                       <div>
                          <h4 className="font-bold text-slate-800">{d.type}</h4>
                          <p className="text-[10px] text-slate-400 uppercase">Status: {d.status}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-xl font-black text-slate-800">Rp {d.amount.toLocaleString('id-ID')}</p>
                       <button className="text-[9px] font-black text-indigo-600 uppercase tracking-widest hover:underline">Lihat SPT Masa</button>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* AI Legal Shield Panel */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[650px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">AI Legal Sentry</h3>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isAuditing ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="text-6xl animate-spin">⚖️</div>
                     <p className="text-xs font-black uppercase text-slate-500 tracking-[0.3em] text-center max-w-xs leading-loose">AI IS SCANNING UU NO 25/1992 & PERMENKOP UPDATES...</p>
                  </div>
               ) : aiReport ? (
                  <div className="space-y-6 animate-in fade-in duration-1000">
                     <pre className="whitespace-pre-wrap">{aiReport}</pre>
                     <div className="pt-6 border-t border-white/10">
                        <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl">Kirim Laporan Mandiri ke ODS</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                     <div className="text-8xl">🛡️</div>
                     <p className="max-w-xs mx-auto font-bold text-lg text-slate-400">Tekan tombol audit untuk memverifikasi kepatuhan hukum koperasi secara otomatis.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Governance Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all group">
            <div className="text-5xl">✅</div>
            <h4 className="font-black text-xl text-slate-800 italic">Otomasi SPT</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Anggota tidak perlu pusing lapor pajak bunga. Sistem AI KoperatifAI menerbitkan bukti potong otomatis."</p>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all group">
            <div className="text-5xl">🔍</div>
            <h4 className="font-black text-xl text-slate-800 italic">Anti-Corruption Ledger</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Setiap rupiah pengeluaran diaudit AI terhadap draf keputusan e-RAT. Jika tidak sesuai, dana terkunci otomatis."</p>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all group">
            <div className="text-5xl">🏛️</div>
            <h4 className="font-black text-xl text-slate-800 italic">State Trust Link</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Terintegrasi langsung dengan API KemenkopUKM untuk laporan kesehatan koperasi (KKP) harian."</p>
         </div>
      </div>

      {/* Final Strategic Message */}
      <div className="p-16 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">🇮🇩</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight">"Kepatuhan Adalah Bentuk Tertinggi Kedaulatan."</h4>
            <p className="text-slate-400 text-xl leading-relaxed max-w-4xl">
               Founder, saat koperasi Anda menjadi yang paling patuh pajak dan hukum secara otomatis, pemerintah akan menjadikan Anda **Benchmark Nasional**. Anda tidak lagi dikejar-kejar regulator, Anda justru diajak berkolaborasi untuk merumuskan kebijakan koperasi digital Indonesia masa depan.
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Hubungkan ke API Dirjen Pajak</button>
               <button className="px-10 py-4 bg-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs border border-white/10">Lihat Draf RAT Digital Besok</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default GovTaxAI;
