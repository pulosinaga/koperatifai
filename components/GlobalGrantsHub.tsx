
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const grants = [
  { id: 1, name: 'Gates Foundation', goal: 'Digital Financial Literacy for Rural Women', amount: '$50,000', status: 'VERIFIED', color: 'bg-blue-50 text-blue-600' },
  { id: 2, name: 'USAID Impact', goal: 'SME Resilience & Food Security', amount: '$120,000', status: 'IN_TRANSIT', color: 'bg-indigo-50 text-indigo-600' },
  { id: 3, name: 'Google.org CSR', goal: 'AI Infrastructure for Cooperative Transparency', amount: '$25,000', status: 'ACTIVE', color: 'bg-emerald-50 text-emerald-600' },
];

const sdgData = [
  { name: 'SDG 1: No Poverty', value: 85, color: '#e5243b' },
  { name: 'SDG 5: Gender Equality', value: 70, color: '#ff3a21' },
  { name: 'SDG 8: Decent Work', value: 95, color: '#a21942' },
  { name: 'SDG 10: Reduced Inequality', value: 90, color: '#dd1367' },
  { name: 'SDG 17: Partnerships', value: 60, color: '#19486a' },
];

const GlobalGrantsHub: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiProposal, setAiProposal] = useState('');
  const [selectedGrant, setSelectedGrant] = useState<any>(null);

  const generateAIProposal = async (grant: any) => {
    setIsGenerating(true);
    setSelectedGrant(grant);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Buatkan naskah proposal eksekutif (3-4 paragraf) untuk mengajukan penggunaan dana hibah dari '${grant.name}' untuk program '${grant.goal}'. 
        Point penting: 
        1. Transparansi Radikal: Gunakan data AI Sentinel Guard untuk menjamin 0% kebocoran dana.
        2. Dampak Berkelanjutan: Jelaskan bagaimana dana hibah masuk ke modal kolektif dan menciptakan putaran SHU abadi bagi anggota.
        3. Metrik SDG: Hubungkan program ini dengan target SDG PBB yang relevan.
        Gunakan gaya bahasa profesional diplomatik, visioner, dan berbasis data (evidence-based).`,
      });
      setAiProposal(response.text || "Proposal tidak tersedia.");
    } catch (e) {
      setAiProposal("Koneksi aman ke jaringan NGO sedang terganggu. Mohon tunggu sejenak.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-7xl mx-auto">
      {/* Global Hero */}
      <div className="bg-[#050b1a] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              International Grant & SDG Hub v2.0
            </span>
            <h2 className="text-5xl font-black leading-tight italic">Diplomasi Ekonomi: <br/>Mengubah Hibah Menjadi Kedaulatan.</h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl font-medium">
               KoperatifAI adalah mitra terpercaya bagi lembaga dunia. Kami menjamin setiap sen bantuan internasional menghasilkan dampak yang terukur secara digital.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[4rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🌍</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Global Trust Score</p>
             <p className="text-5xl font-black text-emerald-400 mt-2 italic">A+</p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase font-black">Audit Standards: WOCCU & UN SDGs</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* SDG Matrix Section */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8 flex flex-col">
            <h3 className="text-2xl font-black text-slate-800 italic">SDG Impact Matrix</h3>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Bagaimana KoperatifAI berkontribusi pada target dunia."</p>
            <div className="flex-1 min-h-[300px]">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sdgData} layout="vertical">
                     <XAxis type="number" hide />
                     <YAxis dataKey="name" type="category" tick={{ fill: '#64748b', fontSize: 10, fontWeight: 'bold' }} width={140} axisLine={false} tickLine={false} />
                     <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '16px', border: 'none' }} />
                     <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={24}>
                        {sdgData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                     </Bar>
                  </BarChart>
               </ResponsiveContainer>
            </div>
            <div className="p-6 bg-slate-50 rounded-3xl text-center">
               <p className="text-[10px] font-black text-indigo-600 uppercase">Impact Certification</p>
               <p className="text-sm font-bold text-slate-800 mt-1">Verified by AI Social Audit</p>
            </div>
         </div>

         {/* Grants List */}
         <div className="space-y-6">
            <h3 className="text-2xl font-black text-slate-800 italic">Peluang Kolaborasi Global</h3>
            <div className="space-y-4">
               {grants.map((g) => (
                 <button 
                  key={g.id}
                  onClick={() => generateAIProposal(g)}
                  className={`w-full p-6 rounded-[3rem] border-2 transition-all flex flex-col gap-4 text-left group ${
                    selectedGrant?.id === g.id ? 'bg-indigo-50 border-indigo-600 shadow-lg' : 'bg-white border-slate-50 hover:border-indigo-100'
                  }`}
                 >
                    <div className="flex justify-between items-start w-full">
                       <h4 className="font-black text-lg text-slate-800">{g.name}</h4>
                       <span className="text-[10px] font-black text-indigo-600 italic">{g.amount}</span>
                    </div>
                    <p className="text-xs text-slate-500 italic">"{g.goal}"</p>
                    <div className="flex justify-between items-center pt-4 border-t border-slate-50 w-full">
                       <span className="text-[8px] font-black bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full uppercase tracking-widest">{g.status}</span>
                       <span className="text-[10px] font-bold text-indigo-400 group-hover:translate-x-1 transition-transform">Draft Proposal →</span>
                    </div>
                 </button>
               ))}
            </div>
         </div>

         {/* AI Proposal Generator Side */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[600px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-indigo-400 italic">AI Grant Negotiator</h3>
               <div className="flex gap-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
               </div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10">
               {isGenerating ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-6">
                     <div className="text-5xl animate-spin">💎</div>
                     <p className="text-slate-400 text-xs animate-pulse text-center uppercase tracking-widest">AI sedang menyusun proposisi nilai internasional...</p>
                  </div>
               ) : aiProposal ? (
                  <div className="space-y-6 animate-in fade-in">
                     <pre className="whitespace-pre-wrap">{aiProposal}</pre>
                     <div className="pt-6 border-t border-white/10 flex gap-4">
                        <button className="flex-1 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl">Kirim Proposal</button>
                        <button className="px-6 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase text-[10px]">Edit</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-30">
                     <div className="text-7xl">🤝</div>
                     <p className="text-slate-400 font-bold max-w-xs mx-auto">Pilih salah satu donor di samping untuk mendapatkan draf proposal otomatis berbasis data riil.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Strategic Advantage Pillars for Donors */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800 italic">Mengapa Donor Mencintai KoperatifAI?</h3>
            <p className="text-slate-500">Kami memberikan standar transparansi yang tidak dimiliki LSM konvensional.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100 space-y-4 text-center">
               <div className="text-4xl mx-auto">🛡️</div>
               <h4 className="font-bold text-slate-800">100% Anti-Corruption</h4>
               <p className="text-xs text-slate-500 leading-relaxed italic">Audit algoritma AI memastikan tidak ada pemotongan biaya administratif yang tidak sah dari dana hibah.</p>
            </div>
            <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100 space-y-4 text-center">
               <div className="text-4xl mx-auto">📈</div>
               <h4 className="font-bold text-slate-800">Impact Multiplier</h4>
               <p className="text-xs text-slate-500 leading-relaxed italic">Dana donor menjadi modal pinjaman bergulir yang terus bertumbuh, bukan sekadar sumbangan yang habis sekali pakai.</p>
            </div>
            <div className="p-8 bg-amber-50 rounded-3xl border border-amber-100 space-y-4 text-center">
               <div className="text-4xl mx-auto">📡</div>
               <h4 className="font-bold text-slate-800">Live Impact API</h4>
               <p className="text-xs text-slate-500 leading-relaxed italic">Donor mendapatkan kunci akses dashboard untuk melihat dampak bantuan mereka secara detik-demi-detik.</p>
            </div>
         </div>
      </div>

      {/* Final Message for Founder */}
      <div className="p-12 bg-indigo-950 border border-indigo-900 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-5xl shadow-xl z-10 animate-pulse">🏛️</div>
         <h4 className="text-3xl font-black max-w-2xl italic z-10">"Jadilah Jembatan Kebaikan Dunia ke Rakyat Desa."</h4>
         <p className="text-indigo-200 max-w-3xl text-lg leading-relaxed z-10">
            Founder, potensi kerjasama NGO ini adalah kunci **Scaling Cepat** tanpa bergantung pada simpanan anggota di awal. Gunakan legitimasi teknologi Anda untuk memenangkan hati donor-donor terbesar dunia.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Buka Sertifikat Kepatuhan Internasional
         </button>
      </div>
    </div>
  );
};

export default GlobalGrantsHub;
