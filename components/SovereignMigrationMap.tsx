
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const sourceData = [
  { name: 'Ex-Pinjol Victims', value: 45, color: '#f43f5e', desc: 'Migrasi dari lintah darat digital.' },
  { name: 'The Unbanked', value: 30, color: '#10b981', desc: 'Rakyat desa tanpa akses bank sebelumnya.' },
  { name: 'Bank Refugees', value: 25, color: '#6366f1', desc: 'Pencari efisiensi & kedaulatan modal.' },
];

const growthHistory = [
  { month: 'Bulan 1', members: 100 },
  { month: 'Bulan 6', members: 5000 },
  { month: 'Bulan 12', members: 25000 },
  { month: 'Bulan 18', members: 150000 },
  { month: 'Bulan 24', members: 1000000 },
];

const SovereignMigrationMap: React.FC = () => {
  const [isForecasting, setIsForecasting] = useState(false);
  const [aiForecast, setAiForecast] = useState('');
  const [activeRegion, setActiveRegion] = useState('Jawa Barat');

  const runMigrationForecast = async () => {
    setIsForecasting(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Analisis strategi migrasi 1 juta anggota untuk KoperatifAI. 
        Konteks: Saat ini mayoritas anggota berasal dari korban Pinjol (45%) dan Unbanked (30%). 
        Pertanyaan Strategis: 
        1. Bagaimana pola penyebaran 'Viral Trust' dari desa ke kota? 
        2. Kapan titik 'Tipping Point' di mana bank konvensional mulai merasa kehilangan likuiditas mikro ke koperasi kita? 
        3. Berikan estimasi penghematan bunga rakyat (Wealth Re-routing) jika 1 juta orang pindah ke bunga 0.9% kita.
        Gunakan gaya bahasa seorang Chief Strategy Officer yang visioner dan pro-rakyat.`,
      });
      setAiForecast(response.text || "Forecast sedang disusun...");
    } catch (e) {
      setAiForecast("Sistem prediksi AI sedang memproses jutaan variabel kedaulatan.");
    } finally {
      setIsForecasting(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Strategic Header */}
      <div className="bg-[#020617] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              User Acquisition & Migration Strategy
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif">The Great Migration <br/>to Sovereignty.</h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium">
               "Kita tidak mencari nasabah. Kita memanggil pemilik untuk pulang ke rumah ekonominya sendiri."
            </p>
            <button 
              onClick={runMigrationForecast}
              disabled={isForecasting}
              className="px-12 py-5 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-indigo-700 transition-all flex items-center gap-4 active:scale-95"
            >
              {isForecasting ? '⏳ CALCULATING VIRAL VELOCITY...' : '🚀 RUN MIGRATION FORECAST'}
            </button>
          </div>
          <div className="w-full lg:w-[400px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl">
             <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Target Kemandirian Rakyat</p>
             <p className="text-7xl font-black text-white mt-2 italic">1M</p>
             <p className="text-[10px] text-slate-500 mt-6 uppercase font-black tracking-widest">MEMBERS IN 24 MONTHS</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Map Visualization Placeholder */}
         <div className="lg:col-span-2 bg-slate-900 rounded-[4rem] p-12 shadow-2xl flex flex-col relative overflow-hidden h-[600px] border border-white/5">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div className="flex justify-between items-center mb-10 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-2xl font-black text-indigo-400 italic font-serif uppercase tracking-widest">National Deployment Node</h3>
               <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                  <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Live Syncing Regional Hubs</p>
               </div>
            </div>

            <div className="flex-1 relative flex items-center justify-center">
               {/* Simulated Map UI */}
               <div className="w-full h-full relative">
                  <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_20px_#6366f1]"></div>
                  <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_30px_#10b981]"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-indigo-400 rounded-full animate-pulse shadow-[0_0_15px_#818cf8]"></div>
                  <div className="absolute top-1/3 right-1/2 w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
                  
                  <div className="absolute bottom-10 left-10 p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
                     <p className="text-[10px] font-black text-indigo-300 uppercase tracking-widest mb-1">Focus Region</p>
                     <h4 className="text-2xl font-black text-white italic">{activeRegion}</h4>
                     <p className="text-xs text-slate-500 mt-2">Duta Aktif: 12 • Anggota: 450</p>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-3 gap-6 relative z-10 mt-8">
               {['Jawa', 'Sumatera', 'Sulawesi'].map(reg => (
                 <button key={reg} onClick={() => setActiveRegion(reg)} className={`py-3 rounded-2xl font-black uppercase text-[9px] tracking-widest border transition-all ${activeRegion === reg ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-white/5 text-slate-500 border-white/10 hover:bg-white/10'}`}>
                    {reg} Node
                 </button>
               ))}
            </div>
         </div>

         {/* Source of Migration Pie */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col space-y-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
            <h3 className="text-xl font-black text-slate-800 italic relative z-10">Asal Migrasi Anggota</h3>
            <div className="h-64 w-full relative z-10">
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                     <Pie
                        data={sourceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                     >
                        {sourceData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                     </Pie>
                     <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                  </PieChart>
               </ResponsiveContainer>
            </div>
            <div className="space-y-4 flex-1 relative z-10 overflow-y-auto custom-scrollbar pr-2">
               {sourceData.map((item, i) => (
                 <div key={i} className="space-y-1">
                    <div className="flex justify-between items-center">
                       <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                          <span className="text-[10px] font-black text-slate-500 uppercase">{item.name}</span>
                       </div>
                       <span className="text-xs font-black text-slate-800">{item.value}%</span>
                    </div>
                    <p className="text-[9px] text-slate-400 italic pl-4 leading-tight">"{item.desc}"</p>
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* Exponential Growth Forecast */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1 space-y-8">
               <div className="space-y-2">
                  <h3 className="text-3xl font-black text-slate-800 italic">Proyeksi Titik Jenuh Perbankan</h3>
                  <p className="text-slate-500 text-lg leading-relaxed italic">
                     "Kita tidak menyerang bank, kita merebut kedaulatan modal rakyat dari tangan mereka secara alami."
                  </p>
               </div>
               <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={growthHistory}>
                        <defs>
                           <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                              <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                           </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 'bold'}} />
                        <Tooltip 
                           contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                           formatter={(val: number) => `${val.toLocaleString()} Anggota`}
                        />
                        <Area type="monotone" dataKey="members" stroke="#6366f1" strokeWidth={6} fillOpacity={1} fill="url(#colorMembers)" />
                     </AreaChart>
                  </ResponsiveContainer>
               </div>
            </div>

            <div className="w-full lg:w-96 bg-slate-900 rounded-[3.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-[100px]"></div>
               <h4 className="text-xl font-black text-indigo-400 mb-8 uppercase tracking-widest italic">AI Strategic Insight</h4>
               
               <div className="flex-1 font-serif text-sm text-slate-300 leading-relaxed italic overflow-y-auto max-h-[400px] custom-scrollbar pr-4">
                  {isForecasting ? (
                     <div className="h-full flex flex-col items-center justify-center space-y-6 py-20">
                        <div className="flex gap-2">
                           <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                           <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                           <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                        </div>
                        <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]">AI IS SIMULATING MILLIONS OF TRADES...</p>
                     </div>
                  ) : aiForecast ? (
                     <pre className="whitespace-pre-wrap">{aiForecast}</pre>
                  ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center py-20 space-y-6 opacity-30">
                        <div className="text-6xl">📜</div>
                        <p className="font-bold text-slate-500 uppercase text-[10px] tracking-widest">Laporan belum di-generate.</p>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>

      {/* Migration Freedom Meter */}
      <div className="p-16 bg-emerald-600 rounded-[4rem] text-white flex flex-col md:flex-row items-center gap-16 shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">🕊️</div>
         <div className="space-y-6 z-10">
            <h4 className="text-4xl font-black italic">"Freedom Meter: Rp 450 Miliar/Tahun."</h4>
            <p className="text-emerald-100 text-xl leading-relaxed max-w-4xl">
               Ini adalah estimasi bunga yang berhasil kita **REBUT KEMBALI** dari lintah darat untuk dikembalikan ke kantong rakyat saat kita menyentuh 1 juta anggota. Ini bukan sekadar angka, ini adalah **Kemerdekaan Ekonomi**.
            </p>
            <div className="flex gap-6">
               <button className="px-10 py-4 bg-white text-emerald-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl">Download Migration Whitepaper</button>
               <button className="px-10 py-4 bg-emerald-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs border border-emerald-500 hover:bg-black transition-all">Present to World Bank</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default SovereignMigrationMap;
