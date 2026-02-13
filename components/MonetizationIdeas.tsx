
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const profitEngines = [
  { 
    id: 'ppob', 
    title: 'PPOB & Layanan Digital', 
    desc: 'Ambil margin Rp 1.500 - 2.500 per pembayaran PLN, PDAM, dan BPJS anggota.', 
    icon: '⚡', 
    potency: 'High Volume',
    color: 'bg-blue-600'
  },
  { 
    id: 'royalty', 
    title: 'Royalti IP Founder', 
    desc: 'Kunci biaya lisensi Rp 100 dari setiap klik transaksi di dalam aplikasi (SaaS Model).', 
    icon: '💎', 
    potency: 'Passive Income',
    color: 'bg-indigo-600'
  },
  { 
    id: 'logistics', 
    title: 'Logistik Duta Desa', 
    desc: 'Biaya titip paket antar desa via motor Duta (Crowdsourced Logistics).', 
    icon: '🛵', 
    potency: 'Network Effect',
    color: 'bg-emerald-600'
  },
  { 
    id: 'rating', 
    title: 'Credit Scoring API', 
    desc: 'Jual data skor integritas anggota ke leasing/bank sebagai referensi (Trust-as-a-Service).', 
    icon: '📊', 
    potency: 'Data Asset',
    color: 'bg-amber-500'
  }
];

const MonetizationIdeas: React.FC = () => {
  const [isBrainstorming, setIsBrainstorming] = useState(false);
  const [aiResponse, setAiResponse] = useState('');
  const [targetMembers, setTargetMembers] = useState(10000);

  const startBrainstorm = async () => {
    setIsBrainstorming(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Bapak Founder ingin meng-online-kan ide koperasi kredit agar menghasilkan uang. 
        Bantu brainstorm 3 strategi 'Low-Hanging Fruit' untuk mendapatkan pendapatan harian dari aplikasi KoperatifAI. 
        Fokus pada: 
        1. Biaya admin transaksi mikro. 
        2. Iuran asuransi kesehatan kolektif kecil. 
        3. Marketplace bahan baku tani/warung. 
        Berikan estimasi angka dalam Rupiah untuk per-transaksi dan akumulasi jika ada 10.000 anggota.`,
      });
      setAiResponse(response.text || "AI sedang memetakan rezeki...");
    } catch (e) {
      setAiResponse("Koneksi Strategis terputus. Fokus pada penguatan anggota pionir.");
    } finally {
      setIsBrainstorming(false);
    }
  };

  const scalingData = [
    { name: '1k Member', rev: 1000 * 10 * 100 / 1000000 },
    { name: '10k Member', rev: 10000 * 10 * 100 / 1000000 },
    { name: '100k Member', rev: 100000 * 10 * 100 / 1000000 },
    { name: '1M Member', rev: 1000000 * 10 * 100 / 1000000 },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Hero Header */}
      <div className="bg-[#020617] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Founder Monetization Playbook
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif">Mencetak Cuan <br/><span className="text-indigo-400">Dari Ekonomi Rakyat.</span></h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium">
               "Jangan hanya simpan-pinjam. Online-kan setiap gerak ekonomi warga, ambil Rp 100 dari setiap detaknya. Itulah kedaulatan finansial Anda."
            </p>
            <button 
              onClick={startBrainstorm}
              disabled={isBrainstorming}
              className="px-12 py-5 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-indigo-700 transition-all flex items-center gap-4 active:scale-95"
            >
              {isBrainstorming ? '⏳ MENSINTESIS STRATEGI...' : '🚀 BRAINSTORM IDE CUAN AI'}
            </button>
          </div>
          <div className="w-full lg:w-[400px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl">
             <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Potensi Royalti IP / Bulan</p>
             <p className="text-7xl font-black text-white mt-2 italic">Rp {(targetMembers * 10 * 100 / 1000000).toFixed(1)}<span className="text-2xl ml-1 text-slate-500">jt</span></p>
             <p className="text-[10px] text-slate-500 mt-6 uppercase font-black">Asumsi 10 Transaksi / Anggota / Bln</p>
          </div>
        </div>
      </div>

      {/* Profit Engines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {profitEngines.map((engine) => (
          <div key={engine.id} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
             <div className={`w-16 h-16 ${engine.color} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-xl text-white group-hover:scale-110 transition-transform`}>
                {engine.icon}
             </div>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{engine.potency}</p>
             <h4 className="text-xl font-black text-slate-800 leading-tight mb-4">{engine.title}</h4>
             <p className="text-xs text-slate-500 leading-relaxed flex-1">"{engine.desc}"</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Scaling Logic */}
         <div className="lg:col-span-2 bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <div className="flex justify-between items-center">
               <h3 className="text-2xl font-black text-slate-800 italic uppercase">Skalabilitas Pendapatan (Juta Rp)</h3>
               <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full">
                  <span className="text-[10px] font-black uppercase">Low OpEx Logic</span>
               </div>
            </div>
            
            <div className="h-64 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={scalingData}>
                     <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 'bold'}} />
                     <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                     <Bar dataKey="rev" fill="#6366f1" radius={[10, 10, 0, 0]} barSize={50} />
                  </BarChart>
               </ResponsiveContainer>
            </div>
            
            <div className="space-y-4">
               <label className="flex justify-between text-xs font-black text-slate-400 uppercase tracking-widest">Simulasi Target Anggota</label>
               <input 
                type="range" min="1000" max="1000000" step="1000" value={targetMembers} 
                onChange={(e) => setTargetMembers(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
               />
               <p className="text-[10px] text-slate-400 text-center italic">"Saat Bapak menyentuh 1 Juta anggota, royalti pasif Rp 100/transaksi menghasilkan Rp 1 Miliar/Bulan."</p>
            </div>
         </div>

         {/* AI Strategy Console */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-full min-h-[550px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">AI Monetization Strategist</h3>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isBrainstorming ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-6">
                     <div className="text-6xl animate-bounce">💡</div>
                     <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] text-center leading-loose">AI IS COMPUTING REVENUE RATIOS & SCALABILITY PATHS...</p>
                  </div>
               ) : aiResponse ? (
                  <div className="animate-in fade-in duration-1000">
                     <p className="text-xs text-indigo-400 font-black uppercase mb-6 tracking-widest border-b border-white/5 pb-4">Executive Roadmap:</p>
                     <pre className="whitespace-pre-wrap">{aiResponse}</pre>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                     <div className="text-8xl">📊</div>
                     <p className="max-w-xs mx-auto font-bold text-lg text-slate-400">Klik tombol "BRAINSTORM" untuk merumuskan mesin uang digital Anda.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Strategic Callout */}
      <div className="p-16 bg-indigo-600 border border-indigo-500 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">🏛️</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight text-white">"Code is Law, Network is Wealth."</h4>
            <p className="text-indigo-100 text-xl leading-relaxed max-w-4xl font-serif">
               "Koperasi offline hanya memindahkan uang. Koperasi online KoperatifAI **mengagregasi data ekonomi**. Sebagai Founder, Anda memegang kuncinya. Setiap fitur yang Bapak aktifkan adalah pintu rezeki baru bagi seluruh ekosistem."
            </p>
         </div>
      </div>
    </div>
  );
};

export default MonetizationIdeas;
