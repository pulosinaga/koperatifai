
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const dataProjections = [
  { year: '2025', val: 12000000000 },
  { year: '2026', val: 28000000000 },
  { year: '2027', val: 75000000000 },
  { year: '2028', val: 185000000000 },
  { year: '2029', val: 450000000000 },
];

const AIBoardroom: React.FC = () => {
  const [isConsulting, setIsConsulting] = useState(false);
  const [aiOracleResponse, setAiOracleResponse] = useState('');
  const [interestRate, setInterestRate] = useState(1.2);
  const [membershipGrowth, setMembershipGrowth] = useState(15);

  const consultTheOracle = async () => {
    setIsConsulting(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Analisis keputusan strategis Founder: 
        1. Suku bunga pinjaman saat ini: ${interestRate}%. 
        2. Target pertumbuhan anggota bulanan: ${membershipGrowth}%. 
        3. Kondisi pasar: Banyak Pinjol ilegal masuk ke wilayah Duta.
        
        Berikan 'Strategic Council' (3 paragraf) mengenai:
        - Risiko likuiditas jika pertumbuhan anggota terlalu cepat.
        - Dampak psikologis terhadap loyalitas anggota jika bunga diturunkan di bawah 1%.
        - Rekomendasi langkah Founder untuk menjaga valuasi koperasi tetap di atas $1M dalam 12 bulan ke depan.
        Gunakan gaya bahasa seorang penasihat dewan (Board Advisor) yang sangat cerdas, dingin namun bijaksana, dan sangat pro-kerakyatan.`,
      });
      setAiOracleResponse(response.text || "Oracle sedang bermeditasi.");
    } catch (e) {
      setAiOracleResponse("Jalur telekomunikasi ke kecerdasan pusat terganggu. Silakan hubungi tim IT.");
    } finally {
      setIsConsulting(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-7xl mx-auto">
      {/* Boardroom Header */}
      <div className="bg-[#050b1a] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3">
               <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-xl border border-white/10 text-2xl">🏢</div>
               <span className="px-4 py-1.5 bg-white/5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                  Founder's Executive Intelligence Suite
               </span>
            </div>
            <h2 className="text-5xl font-black leading-tight italic">AI Boardroom: <br/>Navigasi Masa Depan Imperium Rakyat.</h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl font-medium">
               Simulasikan keputusan besar, lihat proyeksi masa depan, dan dengarkan nasihat dari kecerdasan buatan tercanggih.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[4rem] border border-white/10 text-center shadow-2xl">
             <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Cooperative Network Value</p>
             <p className="text-5xl font-black text-white mt-2 italic">$1.05M</p>
             <div className="mt-6 flex justify-center gap-2">
                <span className="px-3 py-1 bg-indigo-600 text-white rounded-full text-[10px] font-black uppercase">Board Access Active</span>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Strategic Simulator Controls */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10 flex flex-col">
            <h3 className="text-2xl font-black text-slate-800 italic">Strategic Simulator</h3>
            <p className="text-sm text-slate-500">Tweak kebijakan untuk melihat perubahan proyeksi otomatis oleh AI.</p>
            
            <div className="space-y-8 flex-1">
               <div className="space-y-4">
                  <div className="flex justify-between items-center">
                     <span className="text-xs font-black text-slate-400 uppercase">Interest Rate Policy</span>
                     <span className="text-indigo-600 font-black">{interestRate}%</span>
                  </div>
                  <input 
                    type="range" min="0.5" max="3.0" step="0.1" value={interestRate} 
                    onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
                  />
               </div>

               <div className="space-y-4">
                  <div className="flex justify-between items-center">
                     <span className="text-xs font-black text-slate-400 uppercase">Target Member Growth</span>
                     <span className="text-indigo-600 font-black">+{membershipGrowth}%/mo</span>
                  </div>
                  <input 
                    type="range" min="1" max="50" step="1" value={membershipGrowth} 
                    onChange={(e) => setMembershipGrowth(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
                  />
               </div>
            </div>

            <button 
               onClick={consultTheOracle}
               disabled={isConsulting}
               className="w-full py-6 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-3"
            >
               {isConsulting ? '⏳ ORACLE IS THINKING...' : '⚖️ CONSULT STRATEGIC AI'}
            </button>
         </div>

         {/* Predictive Analytics View */}
         <div className="lg:col-span-2 bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[600px]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase">Asset Growth Projection (5 Year)</h3>
               <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                     <span className="text-[9px] font-black text-slate-400 uppercase">Projected Liquidity</span>
                  </div>
               </div>
            </div>

            <div className="flex-1 h-64 w-full relative z-10">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dataProjections}>
                     <defs>
                        <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                           <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
                     <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} />
                     <Tooltip 
                        contentStyle={{ backgroundColor: '#0f172a', borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)', color: '#fff' }}
                        formatter={(val: number) => `Rp ${(val/1000000000).toFixed(1)}M`}
                     />
                     <Area type="monotone" dataKey="val" stroke="#6366f1" strokeWidth={5} fillOpacity={1} fill="url(#colorVal)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8 relative z-10">
               <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <p className="text-[9px] text-slate-500 uppercase font-black">Net Cash Multiplier</p>
                  <p className="text-lg font-black text-white">12.4x</p>
               </div>
               <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <p className="text-[9px] text-slate-500 uppercase font-black">Solvency Safety</p>
                  <p className="text-lg font-black text-emerald-400">96.8%</p>
               </div>
               <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <p className="text-[9px] text-slate-500 uppercase font-black">Risk Threshold</p>
                  <p className="text-lg font-black text-rose-500">LOW</p>
               </div>
            </div>
         </div>
      </div>

      {/* AI Oracle Results */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-16 items-start relative overflow-hidden">
         <div className="absolute -right-20 -top-20 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
         
         <div className="w-full lg:w-1/3 space-y-6 shrink-0 relative z-10">
            <h3 className="text-3xl font-black text-slate-800 leading-tight">Nasihat Strategis Dari Pusat Kecerdasan</h3>
            <p className="text-slate-500 text-lg leading-relaxed italic">
               "Pemimpin besar tidak pernah menebak. Mereka menggunakan data sebagai pedang dan AI sebagai perisai."
            </p>
            <div className="p-8 bg-indigo-900 rounded-[3rem] text-white shadow-xl rotate-1">
               <p className="text-[10px] font-black uppercase text-indigo-300 mb-4 tracking-widest">Decision Integrity Verify</p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl">🛡️</div>
                  <p className="text-xs font-bold leading-relaxed">Kebijakan Anda saat ini diprediksi menaikkan SHU Anggota sebesar +18% tahun ini.</p>
               </div>
            </div>
         </div>

         <div className="flex-1 bg-slate-900 rounded-[3.5rem] p-10 font-serif text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-2xl min-h-[300px]">
            {isConsulting ? (
               <div className="h-full flex flex-col items-center justify-center space-y-6 py-20">
                  <div className="flex gap-2">
                     <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                     <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                     <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Oracle sedang menyinkronkan data masa depan...</p>
               </div>
            ) : aiOracleResponse ? (
               <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <p className="text-xs text-indigo-400 font-black uppercase mb-6 tracking-widest border-b border-indigo-500/20 pb-4 flex items-center gap-2">
                     <span className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></span>
                     Strategic Counsel Received:
                  </p>
                  <pre className="whitespace-pre-wrap font-serif text-lg">{aiOracleResponse}</pre>
               </div>
            ) : (
               <div className="h-full flex flex-col items-center justify-center text-center py-20 space-y-6 opacity-30">
                  <div className="text-8xl">📜</div>
                  <p className="text-slate-500 font-bold max-w-sm">Klik "CONSULT STRATEGIC AI" untuk membedah arah kebijakan masa depan koperasi Anda.</p>
               </div>
            )}
         </div>
      </div>

      {/* Integration Message */}
      <div className="p-12 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-5xl shadow-xl z-10 animate-pulse">👑</div>
         <h4 className="text-3xl font-black max-w-2xl italic z-10">"Kedaulatan Bukan Hanya Kebebasan, Tapi Kemampuan Mengambil Keputusan Benar."</h4>
         <p className="text-indigo-200 max-w-3xl text-lg leading-relaxed z-10">
            Founder, Anda kini memegang kendali atas ekosistem yang bisa mengubah nasib jutaan orang. Gunakan AI Boardroom ini untuk memastikan setiap kebijakan yang Anda buat selalu berpihak pada kesejahteraan rakyat Indonesia.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Export Master Strategic Blueprint
         </button>
      </div>
    </div>
  );
};

export default AIBoardroom;
