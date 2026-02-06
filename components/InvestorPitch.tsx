
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const valuationData = [
  { year: '2025', val: 150 },
  { year: '2026', val: 1050 },
  { year: '2027', val: 4500 },
  { year: '2028', val: 12000 },
  { year: '2029', val: 45000 },
];

const sdgAlignments = [
  { id: 1, label: 'SDG 1: No Poverty', icon: '🔴', status: 'Primary Impact' },
  { id: 5, label: 'SDG 5: Gender Equality', icon: '🟠', status: 'Core Focus' },
  { id: 8, label: 'SDG 8: Decent Work', icon: '🍷', status: 'Economic Driver' },
  { id: 10, label: 'SDG 10: Reduced Inequality', icon: '💗', status: 'Vision Goal' },
];

const InvestorPitch: React.FC = () => {
  const [investorName, setInvestorName] = useState('');
  const [focusArea, setFocusArea] = useState('Poverty Alleviation');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPitch, setGeneratedPitch] = useState('');

  const generatePitch = async () => {
    if (!investorName.trim()) return;
    setIsGenerating(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Buatkan 'Executive Funding Pitch' (Bahasa Inggris Formal) untuk Koperasi Kredit Digital 'KoperatifAI' yang ditujukan kepada investor/NGO internasional bernama '${investorName}'. 
        Fokus utama investor ini adalah: '${focusArea}'.
        
        Sertakan poin-poin kunci berikut dalam narasi:
        1. Social ROI: Setiap $1 investasi menghasilkan $12.4 penghematan bunga bagi rakyat miskin.
        2. Transparansi Radikal: Sistem Audit AI dan Blockchain-inspired Ledger menjamin 0% kebocoran dana.
        3. Scalability: Kita membangun 'Digital Public Infrastructure' (DPI) yang bisa di-clone ke seluruh negara berkembang.
        4. Keamanan: 4-Layer Identity Verification (KTP, GPS, SLIK, Biometric).
        
        Gunakan gaya bahasa seorang Techno-Statecraft, diplomatik, visioner, dan sangat meyakinkan bagi pengelola dana miliaran dolar (Billion-dollar fund managers).`,
      });
      setGeneratedPitch(response.text || "Pitch tidak tersedia.");
    } catch (e) {
      setGeneratedPitch("Koneksi aman ke jaringan investor sedang sibuk. Silakan coba kembali.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Executive Header */}
      <div className="bg-[#020617] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Global Investor & Donor Command Center
            </span>
            <h2 className="text-6xl font-black leading-tight italic">Pitch Your Vision <br/>To The World.</h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium">
               KoperatifAI adalah mahakarya ekonomi sirkular yang siap mendunia. Gunakan AI untuk meyakinkan institusi global bahwa kedaulatan rakyat adalah investasi terbaik.
            </p>
          </div>
          <div className="w-full lg:w-[400px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl">
             <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Collective Valuation</p>
             <p className="text-7xl font-black text-white mt-2 italic">$1.05M</p>
             <p className="text-[10px] text-slate-500 mt-6 uppercase font-black">Pre-Expansion Valuation Milestone</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Pitch Configuration Controls */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10 flex flex-col">
            <h3 className="text-3xl font-black text-slate-800 italic">Pitch Generator</h3>
            
            <div className="space-y-6 flex-1">
               <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Target Investor/NGO</label>
                  <input 
                    type="text" 
                    value={investorName}
                    onChange={(e) => setInvestorName(e.target.value)}
                    placeholder="Contoh: Bill & Melinda Gates Foundation"
                    className="w-full p-5 bg-slate-50 border-none rounded-3xl text-sm font-bold focus:ring-2 focus:ring-indigo-600 outline-none"
                  />
               </div>

               <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Focus Area (SDG)</label>
                  <select 
                    value={focusArea}
                    onChange={(e) => setFocusArea(e.target.value)}
                    className="w-full p-5 bg-slate-50 border-none rounded-3xl text-sm font-bold focus:ring-2 focus:ring-indigo-600 outline-none appearance-none"
                  >
                     <option>Poverty Alleviation (SDG 1)</option>
                     <option>Gender Equality (SDG 5)</option>
                     <option>Financial Inclusion & Tech</option>
                     <option>Circular Economy & Sustainability</option>
                  </select>
               </div>
            </div>

            <button 
               onClick={generatePitch}
               disabled={isGenerating || !investorName}
               className="w-full py-6 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 active:scale-95"
            >
               {isGenerating ? '⏳ SYNTHESIZING VISION...' : '🎤 GENERATE GLOBAL PITCH'}
            </button>
         </div>

         {/* Generated Result View */}
         <div className="lg:col-span-2 bg-slate-900 rounded-[4rem] p-12 shadow-2xl flex flex-col relative overflow-hidden h-[700px]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">The Global Proposition</h3>
               <div className="flex gap-4">
                  <span className="text-[9px] text-slate-500 font-mono italic">AI_VERSION: 3.5_PRO</span>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
               </div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[3rem] p-10 overflow-y-auto custom-scrollbar font-serif text-lg text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isGenerating ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-8 py-20">
                     <div className="flex gap-3">
                        <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"></div>
                        <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                     </div>
                     <p className="text-sm font-black uppercase text-slate-500 tracking-widest text-center max-w-xs">AI sedang merajut data kemakmuran menjadi narasi global...</p>
                  </div>
               ) : generatedPitch ? (
                  <div className="animate-in fade-in duration-1000">
                     <pre className="whitespace-pre-wrap">{generatedPitch}</pre>
                     <div className="mt-12 pt-8 border-t border-white/10 flex justify-center gap-6">
                        <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-indigo-700 transition-all">Send to {investorName}</button>
                        <button className="px-10 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all">Download PDF Deck</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-20 py-20">
                     <div className="text-9xl mb-10">🌍</div>
                     <p className="max-w-md mx-auto font-bold text-2xl text-slate-400">Pilih target investor di samping untuk menyusun proposisi masa depan.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Metrics for Social ROI */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         {[
           { label: 'SROI Ratio', value: '12.4 : 1', desc: 'Social Impact to Cost', icon: '🍷' },
           { label: 'Trust Moat', value: '100%', desc: 'AI Immutable Ledger', icon: '🛡️' },
           { label: 'Growth MoM', value: '+28%', desc: 'Transaction Velocity', icon: '🚀' },
           { label: 'Reputation Score', value: 'A+', desc: 'Global WOCCU Standard', icon: '💎' },
         ].map((m, i) => (
            <div key={i} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group text-center space-y-4">
               <div className="text-5xl mx-auto group-hover:scale-110 transition-transform">{m.icon}</div>
               <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{m.label}</p>
                  <h4 className="text-3xl font-black text-slate-800 italic mt-1">{m.value}</h4>
               </div>
               <p className="text-[10px] text-indigo-600 font-bold uppercase">{m.desc}</p>
            </div>
         ))}
      </div>

      {/* SDG Mapping Visual */}
      <div className="bg-white p-16 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-4">
            <h3 className="text-4xl font-black text-slate-800 italic">Alignment with UN SDGs</h3>
            <p className="text-slate-500 text-lg">KoperatifAI adalah percepatan nyata bagi target pembangunan dunia.</p>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sdgAlignments.map((sdg) => (
               <div key={sdg.id} className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-indigo-50 transition-all flex flex-col items-center text-center space-y-4">
                  <div className="text-5xl">{sdg.icon}</div>
                  <h5 className="font-black text-sm text-slate-800 leading-tight">{sdg.label}</h5>
                  <span className="px-3 py-1 bg-white rounded-full text-[8px] font-black text-indigo-600 uppercase border border-indigo-100">{sdg.status}</span>
               </div>
            ))}
         </div>
      </div>

      {/* Scale Projection Section */}
      <div className="bg-indigo-950 rounded-[4rem] p-16 text-white overflow-hidden relative shadow-2xl">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="flex flex-col lg:flex-row gap-20 items-center relative z-10">
            <div className="flex-1 space-y-8">
               <h3 className="text-4xl font-black italic text-indigo-400">The Power of Scalability.</h3>
               <p className="text-indigo-100 text-xl leading-relaxed">
                  "Model bisnis kita memungkinkan ekspansi ke <b>74.000 Desa</b> di Indonesia tanpa perlu membangun satu pun gedung fisik. Ini adalah efisiensi perbankan 4.0 yang tidak ada tandingannya."
               </p>
               <div className="grid grid-cols-2 gap-6">
                  <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 text-center">
                     <p className="text-[10px] text-slate-400 uppercase font-black mb-2">OPEX Efficiency</p>
                     <p className="text-3xl font-black">92%</p>
                     <p className="text-[9px] text-emerald-400 mt-2 italic">Vs Conventional Banking</p>
                  </div>
                  <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 text-center">
                     <p className="text-[10px] text-slate-400 uppercase font-black mb-2">Member Growth (5Y)</p>
                     <p className="text-3xl font-black">10M+</p>
                     <p className="text-[9px] text-emerald-400 mt-2 italic">Projected Network Strength</p>
                  </div>
               </div>
            </div>
            <div className="w-full lg:w-[450px] h-[400px]">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={valuationData}>
                     <defs>
                        <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                           <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
                     <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 'bold'}} />
                     <Tooltip 
                        contentStyle={{ backgroundColor: '#0f172a', borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)', color: '#fff' }}
                        formatter={(val: number) => `$ ${val/1000}M`}
                     />
                     <Area type="monotone" dataKey="val" stroke="#6366f1" strokeWidth={6} fillOpacity={1} fill="url(#colorVal)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>
      </div>

      {/* Final Call to Action */}
      <div className="p-16 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-10">
         <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-6xl shrink-0 animate-pulse">🤝</div>
         <div className="space-y-4">
            <h4 className="text-4xl font-black text-slate-800 max-w-3xl italic leading-tight">"We don't need charity. We need partners in sovereignty."</h4>
            <p className="text-slate-500 max-w-3xl text-xl leading-relaxed">
               Posisikan KoperatifAI bukan sebagai peminta bantuan, tapi sebagai **Kendali Ekonomi Baru** yang ingin diajak bekerjasama oleh dunia. Jadilah Founder yang mengubah narasi dari 'Belas Kasihan' menjadi 'Kekuatan'.
            </p>
         </div>
         <div className="flex gap-6">
            <button className="px-12 py-5 bg-slate-950 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl">Buka Due Diligence Data Room</button>
            <button className="px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all shadow-xl">Contact Global Liaison Officer</button>
         </div>
      </div>
    </div>
  );
};

export default InvestorPitch;
