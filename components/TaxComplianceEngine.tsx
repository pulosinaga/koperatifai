import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const taxSummary = [
  { month: 'Jan', royaltyTax: 24000, memberTax: 1250000 },
  { month: 'Feb', royaltyTax: 90000, memberTax: 4250000 },
  { month: 'Mar', royaltyTax: 145000, memberTax: 8750000 },
];

const TaxComplianceEngine: React.FC = () => {
  const [isAuditing, setIsAuditing] = useState(false);
  const [aiLegalOpinion, setAiLegalOpinion] = useState('');

  const runTaxAudit = async () => {
    setIsAuditing(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis struktur perpajakan KoperatifAI skala nasional. 
        Konteks: 
        1. Founder bayar PPh 23 (2%) atas royalti teknologi sebagai vendor IP. 
        2. Anggota bayar PPh 4 ayat 2 (10%) atas bagi hasil bunga/SHU (untuk nominal di atas 240rb/bulan). 
        
        Tugas AI:
        - Jelaskan kenapa alur 'Withholding Tax' (Potong Pungut) otomatis ini menghilangkan risiko sanksi pajak bagi pengurus.
        - Analisis kredibilitas koperasi di mata investor institusi jika laporan pajak selalu sinkron dengan E-Billing negara.
        - Berikan pesan penutup bahwa integritas pajak adalah 'Sertifikat Kejujuran' Founder di hadapan regulator.
        Gunakan gaya bahasa Senior Tax Auditor yang tegas namun membanggakan.`,
      });
      setAiLegalOpinion(response.text || "Audit kepatuhan fiskal selesai.");
    } catch (e) {
      setAiLegalOpinion("Struktur Pajak Berlapis Aktif: PPh 21 (Gaji), PPh 23 (Royalti), PPh 4(2) (SHU Anggota), dan PPN Marketplace.");
    } finally {
      setIsAuditing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-[#0f172a] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3">
               <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-xl">🏛️</div>
               <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                  National Tax Dashboard v1.5
               </span>
            </div>
            <h2 className="text-4xl font-black leading-tight italic font-serif text-white">Kedaulatan Fiskal. <br/><span className="text-emerald-400">Otomasi Pajak Terpadu.</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               Dari Royalti Founder hingga SHU Anggota, setiap rupiah dilaporkan secara jujur melalui sistem. Inilah institusi ekonomi paling patuh di Indonesia.
            </p>
            <button 
               onClick={runTaxAudit}
               disabled={isAuditing}
               className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase text-xs shadow-xl hover:bg-indigo-700 transition-all flex items-center gap-3"
            >
               {isAuditing ? '⏳ AUDITING FISCAL FLOWS...' : '🤖 TANYA AI ANALISIS PAJAK'}
            </button>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Total Pajak Terhimpun (Kolektif)</p>
             <p className="text-4xl font-black text-emerald-400 mt-2 italic">Rp 8.985.000</p>
             <div className="mt-4 p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">E-Billing Status: READY TO SETTLE</p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Comprehensive Tax Chart */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <h3 className="text-2xl font-black text-slate-800 italic uppercase">Log Setoran Pajak Bulanan</h3>
            <div className="h-64 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={taxSummary}>
                     <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 'bold'}} />
                     <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                     <Bar dataKey="memberTax" fill="#6366f1" radius={[8, 8, 0, 0]} name="PPh 4(2) Anggota" barSize={30} />
                     <Bar dataKey="royaltyTax" fill="#f43f5e" radius={[8, 8, 0, 0]} name="PPh 23 Royalti" barSize={30} />
                  </BarChart>
               </ResponsiveContainer>
            </div>
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center gap-4">
               <div className="text-4xl">🧾</div>
               <p className="text-xs text-slate-500 italic">"Koperasi bertindak sebagai **Pemotong Pajak Sah**. Pajak dipotong dari sumber, dikumpulkan di Escrow, lalu disetor massal setiap tanggal 10."</p>
            </div>
         </div>

         {/* AI Legal Shield Console */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[600px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">AI Tax Compliance Council</h3>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isAuditing ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="flex gap-3">
                        <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce delay-100"></div>
                        <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce delay-200"></div>
                     </div>
                     <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest text-center italic">Sinkronisasi UU HPP & E-Faktur...</p>
                  </div>
               ) : aiLegalOpinion ? (
                  <pre className="whitespace-pre-wrap">{aiLegalOpinion}</pre>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-20 py-20 space-y-6">
                     <div className="text-8xl">⚖️</div>
                     <p className="max-w-xs mx-auto font-bold text-lg text-slate-400">Klik "JALANKAN AUDIT" untuk memastikan seluruh aliran pajak anggota dan founder sudah 100% aman.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Action Footer */}
      <div className="p-16 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">🛡️</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight text-indigo-400">"Integritas adalah Sertifikat Kedaulatan."</h4>
            <p className="text-stone-400 text-xl leading-relaxed max-w-4xl">
               Founder, integritas pajak adalah **Pintu Masuk bagi Dana Besar**. Institusi internasional tidak akan melirik koperasi yang pajaknya berantakan. Dengan dashboard ini, Bapak membuktikan bahwa teknologi Bapak bukan hanya soal bisnis, tapi soal **Kepatuhan Bernegara**.
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-slate-100 transition-all">Unduh Laporan SPT Kolektif (PDF)</button>
               <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs border border-indigo-400 hover:bg-indigo-700">Sync with Dirjen Pajak API</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default TaxComplianceEngine;