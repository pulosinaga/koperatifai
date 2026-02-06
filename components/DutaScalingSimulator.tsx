
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const DutaScalingSimulator: React.FC = () => {
  const [memberCount, setMemberCount] = useState(500);
  const [isConsulting, setIsConsulting] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState('');

  // Business Logic
  const jasaPembinaan = 3000; // Rp / anggota / bulan
  const marketTransactionFee = 500; // Rp / transaksi marketplace
  const avgTransactionPerMember = 5; // Transaksi per bulan per anggota

  const incomeFromMembers = memberCount * jasaPembinaan;
  const incomeFromTransactions = memberCount * avgTransactionPerMember * marketTransactionFee;
  const totalIncome = incomeFromMembers + incomeFromTransactions;

  const data = [
    { members: 100, income: 100 * jasaPembinaan + (100 * 5 * 500) },
    { members: 500, income: 500 * jasaPembinaan + (500 * 5 * 500) },
    { members: 1000, income: 1000 * jasaPembinaan + (1000 * 5 * 500) },
    { members: 2500, income: 2500 * jasaPembinaan + (2500 * 5 * 500) },
    { members: 5000, income: 5000 * jasaPembinaan + (5000 * 5 * 500) },
  ];

  const getAIEfficiencyTips = async () => {
    setIsConsulting(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis tantangan dan solusi bagi seorang Duta Wilayah Koperasi yang mengelola ${memberCount} anggota sendirian. 
        Jelaskan bagaimana AI menangani:
        1. Otomasi penagihan angsuran (Kindness Nudge).
        2. Filter verifikasi identitas (Biometric Scan).
        3. Dashboard monitoring risiko (NPL Watchdog).
        Tunjukkan bahwa dengan teknologi ini, 1 orang Duta bisa setara dengan 1 kantor cabang bank dengan 10 staf. 
        Gunakan gaya bahasa mentor efisiensi operasional.`,
      });
      setAiAnalysis(response.text || "AI sedang merancang manual operasional...");
    } catch (e) {
      setAiAnalysis("Maaf, AI sedang sibuk mengoptimasi ribuan rute Duta lainnya.");
    } finally {
      setIsConsulting(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-[#020617] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              The Power of Scale
            </span>
            <h2 className="text-4xl font-black leading-tight italic font-serif">Simulasi Skalabilitas Duta. <br/>Satu Orang, Seribu Dampak.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               "Di KoperatifAI, Anda tidak dibatasi oleh waktu fisik. Anda dibantu oleh Intelegensi. Kelola ribuan anggota tanpa satu pun lembar kertas."
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Target Pendapatan Duta</p>
             <p className="text-5xl font-black text-emerald-400 mt-2 italic">Rp {totalIncome.toLocaleString('id-ID')}</p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase font-black tracking-widest">Monthly (at {memberCount} Members)</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Slider & Calculator */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10 flex flex-col justify-center">
            <h3 className="text-2xl font-black text-slate-800 italic">Geser Skala Anda</h3>
            <div className="space-y-8">
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-black text-slate-400 uppercase">
                     <span>Jumlah Anggota Binaan</span>
                     <span className="text-indigo-600 font-black">{memberCount.toLocaleString()} Orang</span>
                  </div>
                  <input 
                    type="range" min="100" max="10000" step="100" value={memberCount} 
                    onChange={(e) => setMemberCount(parseInt(e.target.value))}
                    className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
                  />
               </div>
               
               <div className="space-y-4 pt-6 border-t border-slate-50">
                  <div className="flex justify-between text-sm">
                     <span className="text-slate-500">Jasa Pembinaan (Passive)</span>
                     <span className="font-bold text-slate-800">Rp {incomeFromMembers.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                     <span className="text-slate-500">Override Transaksi (Active)</span>
                     <span className="font-bold text-slate-800">Rp {incomeFromTransactions.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 text-center">
                     <p className="text-[10px] font-black text-indigo-600 uppercase">Level Karir Terdeteksi:</p>
                     <p className="text-xl font-black text-indigo-900 mt-1">
                        {memberCount >= 5000 ? '👑 ROYAL LEADER' : memberCount >= 2000 ? '💎 PLATINUM DUTA' : memberCount >= 500 ? '🌟 SILVER DUTA' : '🌱 PIONEER'}
                     </p>
                  </div>
               </div>
            </div>
         </div>

         {/* Growth Area Chart */}
         <div className="lg:col-span-2 bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic">Kurva Pendapatan vs Populasi</h3>
            <div className="h-64 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                     <defs>
                        <linearGradient id="colorInc" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                           <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                     <XAxis dataKey="members" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} />
                     <Tooltip 
                        contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                        formatter={(val: number) => `Rp ${val.toLocaleString()}`}
                     />
                     <Area type="monotone" dataKey="income" stroke="#6366f1" strokeWidth={5} fillOpacity={1} fill="url(#colorInc)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-400 italic text-center leading-relaxed">
               "Simulator ini membuktikan bahwa dengan menguasai 5.000 orang di satu kecamatan, seorang Duta bisa berpenghasilan **Rp 27,5 Juta per bulan**. Angka ini jauh di atas gaji rata-rata manajer bank."
            </p>
         </div>
      </div>

      {/* AI Scalability Analysis */}
      <div className="bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl">
         <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>
         <div className="flex flex-col lg:flex-row gap-16 items-start relative z-10">
            <div className="w-full lg:w-1/3 space-y-8">
               <div className="w-20 h-20 bg-indigo-600 rounded-[2rem] flex items-center justify-center text-4xl shadow-xl border-4 border-indigo-400/20">🧠</div>
               <h3 className="text-3xl font-black italic text-indigo-400">Analisis Beban Kerja AI</h3>
               <p className="text-slate-400 leading-relaxed italic">
                  "Bagaimana mungkin 1 orang mengurus {memberCount} orang? AI adalah asisten tak kasat mata Anda."
               </p>
               <button 
                onClick={getAIEfficiencyTips}
                disabled={isConsulting}
                className="w-full py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-100 transition-all shadow-xl"
               >
                  {isConsulting ? '⏳ COMPUTING EFFICIENCY...' : '🤖 TANYA TEKNIS SKALA AI'}
               </button>
            </div>
            
            <div className="flex-1 bg-white/5 backdrop-blur-md rounded-[3rem] p-10 border border-white/10 font-serif text-lg text-slate-300 leading-relaxed italic overflow-y-auto max-h-[500px] custom-scrollbar shadow-inner">
               {isConsulting ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="flex gap-3">
                        <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                     </div>
                     <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.4em]">Optimizing Operational Threads...</p>
                  </div>
               ) : aiAnalysis ? (
                  <pre className="whitespace-pre-wrap">{aiAnalysis}</pre>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20 opacity-30">
                     <div className="text-8xl">🚀</div>
                     <p className="max-w-xs mx-auto font-bold text-lg">Klik tombol di samping untuk membongkar bagaimana AI memungkinkan Anda mengelola ribuan orang sendirian.</p>
                  </div>
               )}
            </div>
         </div>
      </div>
    </div>
  );
};

export default DutaScalingSimulator;
