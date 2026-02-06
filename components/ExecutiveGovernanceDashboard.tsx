
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const assetAllocation = [
  { name: 'Member Loans', value: 55, color: '#6366f1' },
  { name: 'Gold Reserve', value: 15, color: '#f59e0b' },
  { name: 'Global Bonds', value: 10, color: '#10b981' },
  { name: 'Cash Liquidity', value: 20, color: '#f43f5e' },
];

const liquidityPulse = [
  { time: '08:00', inflow: 45, outflow: 20 },
  { time: '12:00', inflow: 85, outflow: 55 },
  { time: '16:00', inflow: 120, outflow: 90 },
  { time: '20:00', inflow: 65, outflow: 40 },
];

const aiGuards = [
  { name: 'Sentinel Sentry', status: 'ARMED', latency: '12ms', icon: '🛡️' },
  { name: 'Oracle Strategist', status: 'SYNCHRONIZING', latency: '45ms', icon: '🔮' },
  { name: 'Kindness Collector', status: 'ACTIVE', latency: '8ms', icon: '🕊️' },
  { name: 'Treasury Optimizer', status: 'BALANCING', latency: '22ms', icon: '⚖️' },
];

const ExecutiveGovernanceDashboard: React.FC = () => {
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [masterDirective, setMasterDirective] = useState('');
  const [isEmergencyArmed, setIsEmergencyArmed] = useState(false);

  const synthesizeMasterDirective = async () => {
    setIsSynthesizing(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Analisis ekosistem KoperatifAI saat ini untuk Founder. 
        Data: 
        - Likuiditas: 20% (Sehat). 
        - Cadangan Emas: 1.250g (Kedaulatan fisik terjaga). 
        - Global Bond: Investasi di Jerman 4.5% Yield (Aktif). 
        - Anggota: 1.248 (Meningkat +15%).
        
        Berikan 'Founder's Master Directive' (2 paragraf):
        1. Evaluasi singkat kekuatan ekosistem dibanding bank konvensional.
        2. Langkah prioritas 24 jam ke depan untuk menjaga momentum kedaulatan rakyat.
        Gunakan gaya bahasa komandan tertinggi yang visioner, otoritatif, namun melindungi anggota.`,
      });
      setMasterDirective(response.text || "Oracle sedang memetakan kedaulatan.");
    } catch (e) {
      setMasterDirective("Gagal mensintesis direktif. Sistem offline atau API kunci tidak valid.");
    } finally {
      setIsSynthesizing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Executive Cockpit Header */}
      <div className="bg-[#020617] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4">
               <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center text-4xl shadow-xl border border-white/10 animate-pulse">🔒</div>
               <span className="px-6 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
                  Sovereign Command Hub v4.0
               </span>
            </div>
            <h2 className="text-6xl font-black leading-tight italic font-serif">The Cockpit. <br/><span className="text-indigo-400 text-4xl">Otoritas Tertinggi.</span></h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium">
               Pusat kontrol rahasia Founder. Pantau seluruh alokasi aset, status perisai AI, dan likuiditas nasional dalam satu layar perintah tunggal.
            </p>
            <div className="flex gap-6">
               <button 
                onClick={synthesizeMasterDirective}
                disabled={isSynthesizing}
                className="px-12 py-5 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-indigo-700 transition-all active:scale-95 flex items-center gap-4"
               >
                  {isSynthesizing ? '🧠 SYNTHESIZING ECOSYSTEM...' : '📜 GENERATE MASTER DIRECTIVE'}
               </button>
               <button 
                onMouseDown={() => setIsEmergencyArmed(true)}
                onMouseUp={() => setIsEmergencyArmed(false)}
                className={`px-10 py-5 rounded-[2.5rem] font-black uppercase tracking-widest text-xs transition-all border-4 flex items-center gap-3 ${
                  isEmergencyArmed ? 'bg-rose-600 border-rose-400 animate-shake' : 'bg-transparent border-rose-900/30 text-rose-500 hover:bg-rose-500/10'
                }`}
               >
                  💀 {isEmergencyArmed ? 'HOLD TO ACTIVATE KILL-SWITCH' : 'EMERGENCY LOCKDOWN'}
               </button>
            </div>
          </div>
          <div className="w-full lg:w-[450px] bg-white/5 backdrop-blur-3xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl space-y-8">
             <div>
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Global Cooperative Assets</p>
                <p className="text-6xl font-black text-white mt-2 italic">Rp 19.6<span className="text-xl text-slate-500 ml-1">M</span></p>
             </div>
             <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-8">
                <div className="text-center">
                   <p className="text-[8px] font-black text-amber-500 uppercase">Physical Reserve</p>
                   <p className="text-xl font-black text-white">1,250g</p>
                </div>
                <div className="text-center border-l border-white/5">
                   <p className="text-[8px] font-black text-emerald-400 uppercase">Yield Portfolio</p>
                   <p className="text-xl font-black text-white">4.5%</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Strategic Metrics Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Asset Mix Chart */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col items-center">
            <h3 className="text-xl font-black text-slate-800 italic mb-8 uppercase tracking-widest w-full">Strategic Asset Mix</h3>
            <div className="w-full h-64">
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                     <Pie
                        data={assetAllocation}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                     >
                        {assetAllocation.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                     </Pie>
                     <Tooltip 
                        contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                     />
                  </PieChart>
               </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full mt-6">
               {assetAllocation.map((m, i) => (
                 <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }}></div>
                    <span className="text-[10px] font-black text-slate-500 uppercase">{m.name}</span>
                 </div>
               ))}
            </div>
         </div>

         {/* Liquidity Pulse Bar Chart */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col space-y-8">
            <div className="flex justify-between items-center">
               <h3 className="text-xl font-black text-slate-800 italic uppercase tracking-widest">Liquidity Pulse</h3>
               <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[9px] font-black animate-pulse">SYSTEM HEALTH: OPTIMAL</span>
            </div>
            <div className="flex-1 h-64 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={liquidityPulse}>
                     <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} />
                     <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '24px', border: 'none' }} />
                     <Bar dataKey="inflow" fill="#10b981" radius={[6, 6, 0, 0]} barSize={20} />
                     <Bar dataKey="outflow" fill="#f43f5e" radius={[6, 6, 0, 0]} barSize={20} />
                  </BarChart>
               </ResponsiveContainer>
            </div>
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-center">
               <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Cash Coverage Ratio</p>
               <p className="text-xl font-black text-indigo-600">145% Safe</p>
            </div>
         </div>

         {/* AI Guard Network Monitor */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col space-y-8 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
            <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest relative z-10">AI Guard Network</h3>
            <div className="space-y-6 relative z-10">
               {aiGuards.map((guard, i) => (
                 <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all group">
                    <div className="flex gap-4 items-center">
                       <span className="text-2xl">{guard.icon}</span>
                       <div>
                          <p className="text-xs font-bold text-white uppercase">{guard.name}</p>
                          <p className="text-[8px] text-slate-500 font-mono">LATENCY: {guard.latency}</p>
                       </div>
                    </div>
                    <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded text-[8px] font-black animate-pulse">{guard.status}</span>
                 </div>
               ))}
            </div>
            <div className="mt-auto pt-6 border-t border-white/10 text-center">
               <p className="text-[9px] text-slate-500 italic">"Autonomous decision-making protocol is currently RESTRICTED to Founder confirmation."</p>
            </div>
         </div>
      </div>

      {/* AI Master Directive Synthesizer Output */}
      <div className="bg-white p-16 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-20 items-start relative overflow-hidden">
         <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-indigo-50 rounded-full blur-[120px] opacity-30"></div>
         <div className="w-full lg:w-1/3 space-y-8 shrink-0 z-10">
            <div className="w-24 h-24 bg-indigo-600 rounded-[2.5rem] flex items-center justify-center text-5xl shadow-2xl border-4 border-indigo-100">⚖️</div>
            <h3 className="text-4xl font-black text-slate-800 italic font-serif">Executive Intelligence <br/>Directive.</h3>
            <p className="text-slate-500 text-lg leading-relaxed">
               Hasil pemrosesan Gemini 3 Pro untuk memberikan arahan strategis harian bagi Founder.
            </p>
            <div className="flex gap-4">
               <div className="p-4 bg-slate-950 rounded-3xl text-white text-center flex-1 shadow-xl">
                  <p className="text-[8px] font-black text-indigo-400 uppercase tracking-widest">Sovereignty Score</p>
                  <p className="text-xl font-black">9.8/10</p>
               </div>
               <div className="p-4 bg-indigo-600 rounded-3xl text-white text-center flex-1 shadow-xl">
                  <p className="text-[8px] font-black text-indigo-200 uppercase tracking-widest">Risk Tolerance</p>
                  <p className="text-xl font-black">ULTRA-LOW</p>
               </div>
            </div>
         </div>

         <div className="flex-1 bg-slate-50 rounded-[3.5rem] p-12 font-serif text-xl text-slate-700 leading-relaxed italic relative z-10 border border-slate-100 shadow-inner min-h-[400px] flex flex-col justify-center">
            {isSynthesizing ? (
               <div className="h-full flex flex-col items-center justify-center space-y-10">
                  <div className="flex gap-4">
                     <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce"></div>
                     <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                     <div className="w-4 h-4 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 animate-pulse">Computing Global Sovereignty Matrix...</p>
               </div>
            ) : masterDirective ? (
               <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  <p className="text-xs text-indigo-600 font-black uppercase mb-8 tracking-widest border-b border-indigo-100 pb-4 flex items-center gap-3">
                     <span className="w-2 h-2 bg-indigo-600 rounded-full animate-ping"></span>
                     DIRECTIVE RECEIVED: FEB 05, 2026
                  </p>
                  <pre className="whitespace-pre-wrap font-serif text-slate-800">{masterDirective}</pre>
                  <div className="mt-12 pt-8 border-t border-slate-200 flex justify-end gap-6">
                     <button className="text-[9px] font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors">Broadcast to Board Members</button>
                     <button className="text-[9px] font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-colors">Archive in Permanent Ledger</button>
                  </div>
               </div>
            ) : (
               <div className="h-full flex flex-col items-center justify-center text-center opacity-20 space-y-8 py-20">
                  <div className="text-9xl mb-4">🏛️</div>
                  <p className="max-w-md mx-auto font-bold text-2xl">Klik "GENERATE MASTER DIRECTIVE" untuk menyatukan data menjadi keputusan eksekutif.</p>
               </div>
            )}
         </div>
      </div>

      {/* Strategic Command Panel */}
      <div className="p-16 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">👑</div>
         <div className="space-y-6 z-10">
            <h4 className="text-4xl font-black italic">"Power is Shared, Sovereignty is Guarded."</h4>
            <p className="text-stone-400 text-xl leading-relaxed max-w-4xl">
               Founder, dashboard ini adalah bukti bahwa Anda telah membangun **Ekosistem Yang Terorganisir**. Setiap klik di sini memiliki dampak pada ribuan keluarga anggota. Gunakan wewenang Anda dengan bijak melalui bimbingan kecerdasan kolektif.
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Audit Log Pengurus (Board Audit)</button>
               <button className="px-10 py-4 bg-white/10 text-white border border-white/10 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all">Setting Multi-Signature Auth</button>
            </div>
         </div>
      </div>
      
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-2px); }
          75% { transform: translateX(2px); }
        }
        .animate-shake {
          animation: shake 0.1s infinite;
        }
      `}</style>
    </div>
  );
};

export default ExecutiveGovernanceDashboard;
