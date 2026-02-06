
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const ngoProfiles = [
  { 
    id: 'grameen', 
    name: 'Grameen Foundation', 
    mission: 'Empowering the poor through microcredit.',
    focus: 'Micro-entrepreneurship & Gender Equality',
    icon: '🌾',
    theme: 'emerald'
  },
  { 
    id: 'unesco', 
    name: 'UNESCO', 
    mission: 'Cultural preservation & educational inclusion.',
    focus: 'Digital Literacy & Heritage Marketplaces',
    icon: '🇺🇳',
    theme: 'blue'
  },
  { 
    id: 'usaid', 
    name: 'USAID', 
    mission: 'Global development & regional stability.',
    focus: 'Financial Resilience & Food Security',
    icon: '🦅',
    theme: 'indigo'
  },
  { 
    id: 'ford', 
    name: 'Ford Foundation', 
    mission: 'Reducing inequality and strengthening democracy.',
    focus: 'Economic Justice & Community Ownership',
    icon: '🛡️',
    theme: 'rose'
  }
];

const impactProjection = [
  { name: 'Traditional Grant', impact: 100, sustainability: 20, color: '#f43f5e' },
  { name: 'KoperatifAI Model', impact: 1240, sustainability: 100, color: '#10b981' }
];

const ExecutivePitchSimulator: React.FC = () => {
  const [selectedNGO, setSelectedNGO] = useState<any>(ngoProfiles[0]);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [generatedScript, setGeneratedScript] = useState('');
  const [activeTab, setActiveTab] = useState<'SCRIPT' | 'METRICS' | 'SROI'>('SCRIPT');

  const generateGoldenScript = async (ngo: any) => {
    setIsSynthesizing(true);
    setGeneratedScript('');
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Susunlah naskah 'Opening Keynote Speech' (Bahasa Inggris Formal & Diplomatik) untuk Founder KoperatifAI yang sedang mempresentasikan visinya kepada dewan pimpinan '${ngo.name}'. 
        
        Konteks Strategis:
        - Institusi: ${ngo.name} dengan misi ${ngo.mission}.
        - Solusi kita: Koperasi Kredit Digital 100% milik anggota yang dipandu AI.
        - Poin Kunci: Transparansi Radikal (Audit AI), Skalabilitas Tanpa Kantor, dan Social ROI 12x lipat.
        
        Naskah harus mencakup:
        1. Hook yang menyentuh misi utama mereka.
        2. Demonstrasi teknologi sebagai 'Vehicle of Sovereignty' (Kendaraan Kedaulatan).
        3. 'Ask' (Permintaan): Kemitraan strategis untuk skalabilitas nasional, bukan sekadar dana hibah.
        
        Gunakan gaya bahasa seorang Global Visionary seperti Satya Nadella atau Muhammad Yunus. Sangat intelektual namun penuh empati.`,
      });
      setGeneratedScript(response.text || "Oracle sedang menyusun visi...");
    } catch (e) {
      setGeneratedScript("Gagal menghubungkan ke Pusat Intelijen Strategis AI.");
    } finally {
      setIsSynthesizing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* High-End Header */}
      <div className="bg-[#020617] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              The Grand Pitch Simulator v2.5
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif">Win the World, <br/>Empower the People.</h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium italic">
               "Satu pidato yang tepat dapat mengubah hibah $50k menjadi kemitraan strategis $10M."
            </p>
          </div>
          <div className="w-full lg:w-[400px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl">
             <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Global Influence Potential</p>
             <p className="text-7xl font-black text-white mt-2 italic">A++</p>
             <p className="text-[10px] text-slate-500 mt-6 uppercase font-black">Audit Standards: UN SDG 1, 8, 10</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
         {/* NGO Selector Sidebar */}
         <div className="space-y-4">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest px-4">Pilih Target Donor</h3>
            {ngoProfiles.map((ngo) => (
               <button 
                key={ngo.id}
                onClick={() => { setSelectedNGO(ngo); setGeneratedScript(''); }}
                className={`w-full p-8 rounded-[3rem] border-2 transition-all text-left flex flex-col gap-4 group ${
                  selectedNGO.id === ngo.id ? 'bg-indigo-600 border-indigo-500 shadow-xl scale-105' : 'bg-white border-slate-100 hover:border-indigo-200'
                }`}
               >
                  <div className="flex justify-between items-start w-full">
                     <div className="text-4xl group-hover:scale-110 transition-transform">{ngo.icon}</div>
                     <div className={`w-2 h-2 rounded-full ${selectedNGO.id === ngo.id ? 'bg-emerald-400 animate-pulse' : 'bg-slate-200'}`}></div>
                  </div>
                  <div>
                     <h4 className={`font-black text-lg ${selectedNGO.id === ngo.id ? 'text-white' : 'text-slate-800'}`}>{ngo.name}</h4>
                     <p className={`text-[10px] font-bold uppercase mt-1 ${selectedNGO.id === ngo.id ? 'text-indigo-200' : 'text-slate-400'}`}>{ngo.focus}</p>
                  </div>
               </button>
            ))}
         </div>

         {/* Presentation Room */}
         <div className="lg:col-span-3 space-y-8">
            {/* Tabs */}
            <div className="flex justify-center">
               <div className="bg-white p-1.5 rounded-3xl border border-slate-100 shadow-sm inline-flex">
                  {[
                    { id: 'SCRIPT', label: 'The Golden Script', icon: '📜' },
                    { id: 'METRICS', label: 'Impact Metrics', icon: '📊' },
                    { id: 'SROI', label: 'ROI Calculator', icon: '⚖️' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 transition-all ${
                        activeTab === tab.id ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'
                      }`}
                    >
                      <span>{tab.icon}</span> {tab.label}
                    </button>
                  ))}
               </div>
            </div>

            {activeTab === 'SCRIPT' && (
               <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-16 shadow-2xl flex flex-col relative overflow-hidden min-h-[700px]">
                  <div className="absolute top-0 right-0 w-full h-full bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
                  <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"></div>
                  
                  <div className="flex justify-between items-center mb-12 relative z-10 border-b border-white/10 pb-8">
                     <div className="space-y-1">
                        <h3 className="text-3xl font-black text-indigo-400 italic font-serif tracking-tight">Keynote: To {selectedNGO.name}</h3>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Personalized AI Synthesis Protocol</p>
                     </div>
                     <button 
                        onClick={() => generateGoldenScript(selectedNGO)}
                        disabled={isSynthesizing}
                        className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-indigo-700 transition-all active:scale-95 flex items-center gap-3"
                     >
                        {isSynthesizing ? '⏳ WEAVING THE VISION...' : '🎤 RE-GENERATE SPEECH'}
                     </button>
                  </div>

                  <div className="flex-1 font-serif text-xl text-slate-300 leading-[1.8] italic relative z-10 custom-scrollbar pr-6 overflow-y-auto">
                     {isSynthesizing ? (
                        <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                           <div className="flex gap-4">
                              <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce"></div>
                              <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                              <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                           </div>
                           <p className="text-sm font-black uppercase text-slate-500 tracking-[0.3em]">AI IS MASTERING YOUR PERSUASION...</p>
                        </div>
                     ) : generatedScript ? (
                        <div className="animate-in fade-in duration-1000">
                           <pre className="whitespace-pre-wrap">{generatedScript}</pre>
                           <div className="mt-16 pt-10 border-t border-white/10 flex justify-center gap-6">
                              <button className="px-10 py-4 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Export Presentation Deck</button>
                              <button className="px-10 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all">Copy to Teleprompter</button>
                           </div>
                        </div>
                     ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20">
                           <div className="text-9xl mb-8">🗣️</div>
                           <p className="max-w-md mx-auto font-bold text-2xl">Pilih NGO di samping, lalu tekan tombol "Generate" untuk memulai simulasi pidato tingkat tinggi.</p>
                        </div>
                     )}
                  </div>
               </div>
            )}

            {activeTab === 'METRICS' && (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in zoom-in duration-500">
                  <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-8 flex flex-col justify-center">
                     <h4 className="text-3xl font-black text-slate-800 italic">Efficiency Multiplier</h4>
                     <p className="text-slate-500 text-lg leading-relaxed">
                        Tunjukkan kepada donor bahwa kita <b>12.4x lebih efisien</b> daripada LSM atau bank konvensional dalam menyalurkan bantuan.
                     </p>
                     <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                           <BarChart data={impactProjection}>
                              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} />
                              <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '24px', border: 'none' }} />
                              <Bar dataKey="impact" barSize={50} radius={[10, 10, 0, 0]}>
                                 {impactProjection.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                 ))}
                              </Bar>
                           </BarChart>
                        </ResponsiveContainer>
                     </div>
                  </div>
                  <div className="bg-indigo-950 p-12 rounded-[4rem] text-white space-y-8 flex flex-col justify-center shadow-2xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]"></div>
                     <h4 className="text-3xl font-black italic text-emerald-400">Why KoperatifAI?</h4>
                     <ul className="space-y-6">
                        {[
                          { t: '100% Anti-Corruption', d: 'Audit AI menjamin dana tidak "disunat" di jalan.', icon: '🛡️' },
                          { t: 'Circular Capital', d: 'Dana bantuan tidak habis, tapi berputar abadi di pasar anggota.', icon: '🔄' },
                          { t: 'Live Impact API', d: 'Donor mendapat kunci dashboard untuk pantau hasil detik demi detik.', icon: '📡' },
                        ].map((item, i) => (
                          <li key={i} className="flex gap-4">
                             <span className="text-2xl">{item.icon}</span>
                             <div>
                                <h5 className="font-bold text-lg">{item.t}</h5>
                                <p className="text-xs text-indigo-300 leading-relaxed italic">{item.d}</p>
                             </div>
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>
            )}

            {activeTab === 'SROI' && (
               <div className="bg-white p-16 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-12 animate-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center text-6xl shrink-0 animate-pulse border-4 border-rose-100">⚖️</div>
                  <div className="space-y-4">
                     <h4 className="text-4xl font-black text-slate-800 italic leading-tight">Social Return on Investment (SROI)</h4>
                     <p className="text-slate-500 max-w-2xl text-xl leading-relaxed">
                        Di KoperatifAI, setiap <b>$1.000</b> hibah internasional diubah menjadi modal pinjaman bergulir yang melayani <b>50 keluarga</b> dan mencegah mereka berhutang ke rentenir.
                     </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
                     <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Cost to Donor</p>
                        <p className="text-3xl font-black text-slate-800">$1,000</p>
                        <p className="text-[10px] text-slate-400 mt-2">ONE-TIME GRANT</p>
                     </div>
                     <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100 shadow-lg scale-110">
                        <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-2">Interest Saved by Poor</p>
                        <p className="text-3xl font-black text-indigo-900">$12,400</p>
                        <p className="text-[10px] text-indigo-600 mt-2">ANNUAL COMMUNITY GAIN</p>
                     </div>
                     <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Sustainability</p>
                        <p className="text-3xl font-black text-slate-800">PERPETUAL</p>
                        <p className="text-[10px] text-slate-400 mt-2">CIRCULAR LOOP ACTIVE</p>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>

      {/* Strategic Closing Callout */}
      <div className="p-16 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-10 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px:30px]"></div>
         <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-5xl shadow-xl z-10 animate-pulse">🏛️</div>
         <div className="space-y-6 z-10">
            <h4 className="text-4xl font-black italic max-w-4xl">"Ubah Narasi Dari Belas Kasihan Menjadi Kedaulatan."</h4>
            <p className="text-slate-400 max-w-3xl text-xl leading-relaxed mx-auto">
               Founder, saat Anda bicara dengan institusi global, posisikan KoperatifAI bukan sebagai peminta-minta. Posisikan kita sebagai **Teknologi Tercanggih** yang siap mereka gunakan untuk menghapus kemiskinan secara permanen.
            </p>
         </div>
         <div className="flex gap-6 z-10">
            <button className="px-12 py-5 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl">Download All Whitepapers</button>
            <button className="px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all shadow-xl">Contact Global Liaison</button>
         </div>
      </div>
    </div>
  );
};

export default ExecutivePitchSimulator;
