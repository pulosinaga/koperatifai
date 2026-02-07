
import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const StrategicProfitCalculator: React.FC = () => {
  const [members, setMembers] = useState(10000);
  const [avgTxPerMember, setAvgTxPerMember] = useState(10);
  const [platformFee, setPlatformFee] = useState(1000);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiReport, setAiReport] = useState('');

  // Proyeksi Keuntungan
  const monthlyGross = members * avgTxPerMember * platformFee;
  const aiOpsCost = monthlyGross * 0.12; // 12% OpEx berkat efisiensi AI
  const netCommunityProfit = monthlyGross - aiOpsCost;
  
  // Perbandingan dengan Bank (OpEx Bank biasanya 70-80%)
  const bankEquivalentOpEx = monthlyGross * 0.75;
  const bankNetProfit = monthlyGross - bankEquivalentOpEx;

  const chartData = [
    { name: 'Model Bank', profit: bankNetProfit, color: '#f43f5e', label: 'Profit Bankir' },
    { name: 'KoperatifAI', profit: netCommunityProfit, color: '#10b981', label: 'SHU Anggota' }
  ];

  const distributionData = [
    { name: 'SHU Anggota (80%)', value: netCommunityProfit * 0.8, color: '#10b981' },
    { name: 'Royalti IP Founder (5%)', value: netCommunityProfit * 0.05, color: '#6366f1' },
    { name: 'Cadangan Sistem (15%)', value: netCommunityProfit * 0.15, color: '#f59e0b' }
  ];

  const runAIAnalysis = async () => {
    setIsAnalyzing(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis potensi keuntungan strategis koperasi digital dengan data berikut:
        - Jumlah Anggota: ${members.toLocaleString()}
        - Frekuensi Transaksi/Bulan: ${avgTxPerMember} kali
        - Platform Fee/Transaksi: Rp ${platformFee.toLocaleString()}
        
        Berikan 'Strategic Business Intelligence Report':
        1. Jelaskan konsep "Micro-Value Aggregation" dan kenapa ini lebih stabil daripada bunga pinjaman.
        2. Analisis Efisiensi OpEx: Kenapa biaya 12% sangat revolusioner dibanding bank 75%.
        3. Proyeksi Valuasi: Jika pendapatan stabil seperti ini, berapa valuasi perusahaan teknologi (IP Holder) KoperatifAI di mata investor Series A?
        Gunakan gaya bahasa CEO Tech-Unicorn yang berwibawa dan visioner.`,
      });
      setAiReport(response.text || "Hasil analisis belum tersedia.");
    } catch (e) {
      setAiReport("Koneksi ke pusat intelijen bisnis terganggu. Angka simulasi tetap valid secara matematis.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="bg-[#020617] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Strategic Growth Engine v1.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic font-serif">Kalkulator Kedaulatan: <br/>Simulasi Mesin Uang Rakyat.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               "Lihat bagaimana recehan dari ribuan transaksi berubah menjadi gunung kemakmuran bersama yang mengalahkan model perbankan lama."
            </p>
            <button 
              onClick={runAIAnalysis}
              disabled={isAnalyzing}
              className="px-10 py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all flex items-center gap-4 active:scale-95"
            >
              {isAnalyzing ? '⏳ ANALYZING MARKET DYNAMICS...' : '🧠 JALANKAN ANALISIS STRATEGIS AI'}
            </button>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl space-y-4">
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Total Net Profit (SHU) / Bulan</p>
             <p className="text-5xl font-black text-emerald-400 mt-2 italic">Rp {(netCommunityProfit/1000000).toFixed(1)}<span className="text-xl ml-1">M</span></p>
             <div className="pt-4 border-t border-white/5">
                <p className="text-[10px] text-slate-500 uppercase font-black">Community Wealth Index</p>
                <p className="text-lg font-bold text-white">{(netCommunityProfit / bankNetProfit).toFixed(1)}x More Fair</p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Controls Section */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10 flex flex-col justify-center">
            <h3 className="text-2xl font-black text-slate-800 italic">Parameter Ekosistem</h3>
            
            <div className="space-y-8">
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-black text-slate-400 uppercase">
                     <span>Jumlah Anggota</span>
                     <span className="text-indigo-600 font-black">{members.toLocaleString()} Orang</span>
                  </div>
                  <input 
                    type="range" min="1000" max="1000000" step="1000" value={members} 
                    onChange={(e) => setMembers(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
                  />
               </div>

               <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-black text-slate-400 uppercase">
                     <span>Transaksi / Anggota / Bln</span>
                     <span className="text-indigo-600 font-black">{avgTxPerMember}x</span>
                  </div>
                  <input 
                    type="range" min="1" max="50" step="1" value={avgTxPerMember} 
                    onChange={(e) => setAvgTxPerMember(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
                  />
               </div>

               <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-black text-slate-400 uppercase">
                     <span>Platform Fee / Transaksi</span>
                     <span className="text-indigo-600 font-black">Rp {platformFee.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" min="100" max="10000" step="100" value={platformFee} 
                    onChange={(e) => setPlatformFee(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
                  />
               </div>
            </div>

            <div className="p-6 bg-indigo-50 rounded-3xl border border-indigo-100 italic text-sm text-indigo-900 text-center">
               "Kekuatan koperasi digital ada pada <b>Volume</b>, bukan pada <b>Margin</b> yang membebankan individu."
            </div>
         </div>

         {/* Visualizations Side */}
         <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Profit Efficiency Chart */}
               <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-6">
                  <h4 className="text-lg font-black text-slate-800 italic uppercase tracking-widest">Efisiensi Profitabilitas</h4>
                  <div className="h-64 w-full">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                           <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                           <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} />
                           <YAxis hide />
                           <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '16px', border: 'none' }} />
                           <Bar dataKey="profit" radius={[10, 10, 0, 0]} barSize={50}>
                              {chartData.map((entry, index) => (
                                 <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                           </Bar>
                        </BarChart>
                     </ResponsiveContainer>
                  </div>
                  <p className="text-[10px] text-slate-400 text-center uppercase font-black">Net Profit Comparison (Monthly)</p>
               </div>

               {/* Distribution Mix */}
               <div className="bg-slate-900 p-10 rounded-[3.5rem] shadow-xl space-y-6 flex flex-col items-center justify-center">
                  <h4 className="text-lg font-black text-indigo-400 italic uppercase tracking-widest w-full text-center">Alokasi SHU</h4>
                  <div className="h-64 w-full">
                     <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                           <Pie data={distributionData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                              {distributionData.map((entry, index) => (
                                 <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                           </Pie>
                           <Tooltip contentStyle={{ borderRadius: '16px', border: 'none' }} />
                        </PieChart>
                     </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-1 gap-2 w-full">
                     {distributionData.map((m, i) => (
                        <div key={i} className="flex justify-between items-center text-[9px] font-black uppercase text-slate-500">
                           <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }}></div>
                              <span>{m.name}</span>
                           </div>
                           <span className="text-white">Rp {(m.value/1000000).toFixed(1)}M</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* AI Detailed Report */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-16 items-start relative overflow-hidden">
         <div className="absolute -right-20 -top-20 w-96 h-96 bg-indigo-50 rounded-full blur-[120px] opacity-30"></div>
         <div className="w-full lg:w-1/3 space-y-6 shrink-0 z-10">
            <h3 className="text-3xl font-black text-slate-800 italic">Strategic Intelligence Report</h3>
            <p className="text-slate-500 text-lg leading-relaxed italic">
               "Saat kita memegang 1 juta anggota, KoperatifAI bukan lagi sebuah koperasi; kita adalah **Institusi Keuangan Sistemik**."
            </p>
            <div className="p-8 bg-indigo-900 rounded-[3rem] text-white shadow-xl">
               <p className="text-[10px] font-black uppercase text-indigo-300 mb-4 tracking-widest">Business Model Integrity</p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl">📉</div>
                  <p className="text-xs font-bold leading-relaxed">OpEx Ratio KoperatifAI diprediksi stabil di angka 12-15% berkat otomasi AI penuh.</p>
               </div>
            </div>
         </div>

         <div className="flex-1 bg-slate-50 rounded-[3.5rem] p-12 font-serif text-xl text-slate-700 leading-relaxed italic relative z-10 border border-slate-100 shadow-inner min-h-[400px] flex flex-col justify-center">
            {isAnalyzing ? (
               <div className="h-full flex flex-col items-center justify-center space-y-10">
                  <div className="flex gap-4">
                     <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce"></div>
                     <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                     <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 animate-pulse">Simulating Network Valuations...</p>
               </div>
            ) : aiReport ? (
               <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  <p className="text-xs text-indigo-600 font-black uppercase mb-8 tracking-widest border-b border-indigo-100 pb-4 flex items-center gap-3">
                     <span className="w-2 h-2 bg-indigo-600 rounded-full animate-ping"></span>
                     Strategic Forecast Received
                  </p>
                  <pre className="whitespace-pre-wrap font-serif text-slate-800 text-lg leading-relaxed">{aiReport}</pre>
               </div>
            ) : (
               <div className="h-full flex flex-col items-center justify-center text-center opacity-20 py-20 space-y-8">
                  <div className="text-9xl">🧮</div>
                  <p className="max-w-md mx-auto font-bold text-2xl">Sesuaikan parameter di sebelah kiri, lalu ketuk tombol "Analisis AI" untuk melihat masa depan keuangan kita.</p>
               </div>
            )}
         </div>
      </div>

      {/* Philosophy of Scale */}
      <div className="p-16 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse opacity-30">🚀</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight text-indigo-400">"Kekuatan Angka Adalah Senjata Rakyat."</h4>
            <p className="text-stone-400 text-xl leading-relaxed max-w-4xl">
               Founder, kalkulator ini membuktikan bahwa kita tidak perlu menipu atau mencekik anggota dengan bunga tinggi untuk menjadi kaya. Cukup kumpulkan niat baik dari jutaan orang, kumpulkan transaksi mikronya, dan biarkan **AI KoperatifAI** menjaga efisiensinya. Hasilnya adalah kemakmuran bagi Anda sebagai Founder dan kesejahteraan bagi seluruh rakyat sebagai Pemilik.
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl">Export Financial Roadmap</button>
               <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs border border-indigo-400">Update Unit Economics AI</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default StrategicProfitCalculator;
