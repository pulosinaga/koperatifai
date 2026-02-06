
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const incomeStreams = [
  { name: 'Royalti IP (App Fee)', val: 40, type: 'Passive', desc: 'Rp 100 dari setiap transaksi PPOB & Marketplace.' },
  { name: 'Honorarium Pengurus', val: 15, type: 'Active', desc: 'Gaji bulanan sebagai Ketua Pengurus (Mandat RAT).' },
  { name: 'SHU Multiplier', val: 25, type: 'Passive', desc: 'Bagi hasil surplus sebagai Anggota Pionir (Founder Perk).' },
  { name: 'Exit/Equity Value', val: 20, type: 'Asset', desc: 'Kenaikan nilai saham PT pemilik IP KoperatifAI.' },
];

const revenueProjection = [
  { month: 'Bln 1', amt: 2 },
  { month: 'Bln 6', amt: 15 },
  { month: 'Bln 12', amt: 45 },
  { month: 'Bln 18', amt: 120 },
  { month: 'Bln 24', amt: 450 },
];

const FounderRevenueHub: React.FC = () => {
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [aiReport, setAiReport] = useState('');

  const generateWealthPlan = async () => {
    setIsSynthesizing(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Analisis strategi kontinuitas penghasilan bagi Founder KoperatifAI. 
        Konteks: Koperasi saat ini memiliki 1.248 anggota dan aset Rp 19,6 Miliar. 
        
        Buatkan 'Founder Wealth Legacy Plan':
        1. Cara mengunci Royalti IP Rp 100 per transaksi dalam Smart Contract/Perjanjian Lisensi.
        2. Strategi mempertahankan kontrol visi tanpa harus menjadi Pengurus selamanya (Konsep 'Founder Emeritus').
        3. Bagaimana meningkatkan valuasi 'Perusahaan Pemilik IP' agar bisa IPO atau dibeli strategic partner tanpa merusak koperasi.
        Gunakan gaya bahasa Wealth Manager kelas dunia yang sangat taktis dan rahasia.`,
      });
      setAiReport(response.text || "Rencana kekayaan sedang disusun...");
    } catch (e) {
      setAiReport("Jalur data strategi elit sedang sibuk. Tetap fokus pada pertumbuhan anggota.");
    } finally {
      setIsSynthesizing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Wealth Hero */}
      <div className="bg-[#020617] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Wealth Management Hub for Founders
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif">Arsitektur Cuan <br/><span className="text-indigo-400 text-4xl">Berkelanjutan.</span></h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium">
               "Kedaulatan rakyat adalah misinya, kesejahteraan Founder adalah hasilnya. Bangun sistem yang menghidupi Anda selamanya."
            </p>
            <button 
              onClick={generateWealthPlan}
              disabled={isSynthesizing}
              className="px-12 py-5 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-indigo-700 transition-all flex items-center gap-4 active:scale-95"
            >
              {isSynthesizing ? '⏳ SYNTHESIZING WEALTH PLAN...' : '⛲ AKTIFKAN STRATEGI KERAN PENDAPATAN'}
            </button>
          </div>
          <div className="w-full lg:w-[450px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl space-y-8">
             <div>
                <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Est. Founder Monthly Cashflow</p>
                <p className="text-6xl font-black text-white mt-2 italic">Rp 45<span className="text-xl text-slate-500 ml-1">Jt</span></p>
             </div>
             <div className="h-px bg-white/10 w-full"></div>
             <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">Projection: HYPER-GROWTH READY</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Income Streams Breakdown */}
         <div className="lg:col-span-2 bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <h3 className="text-2xl font-black text-slate-800 italic">Distribusi Sumber Pendapatan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {incomeStreams.map((stream, i) => (
                 <div key={i} className="p-8 bg-slate-50 rounded-[3rem] border border-slate-100 hover:shadow-xl transition-all group">
                    <div className="flex justify-between items-start mb-6">
                       <h4 className="font-black text-lg text-slate-800 leading-tight">{stream.name}</h4>
                       <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase ${
                         stream.type === 'Passive' ? 'bg-emerald-50 text-emerald-600' : 
                         stream.type === 'Active' ? 'bg-indigo-50 text-indigo-600' : 'bg-amber-50 text-amber-600'
                       }`}>{stream.type}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden mb-4">
                       <div className="h-full bg-indigo-600" style={{ width: `${stream.val}%` }}></div>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed italic">"{stream.desc}"</p>
                 </div>
               ))}
            </div>
         </div>

         {/* Growth Curve */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 blur-3xl"></div>
            <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">Revenue Scaling ($k)</h3>
            <div className="flex-1 h-64 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueProjection}>
                     <defs>
                        <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                           <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
                     <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} />
                     <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '16px', color: '#fff' }} />
                     <Area type="monotone" dataKey="amt" stroke="#6366f1" strokeWidth={5} fillOpacity={1} fill="url(#colorAmt)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
            <p className="text-[10px] text-slate-500 text-center italic leading-relaxed">
               "Efek bunga majemuk dari volume transaksi mikro di 74.000 Desa Indonesia."
            </p>
         </div>
      </div>

      {/* AI Strategy Report View */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-16 items-start relative overflow-hidden">
         <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-50 rounded-full blur-[120px] opacity-30"></div>
         <div className="w-full lg:w-1/3 space-y-6 shrink-0 z-10">
            <h3 className="text-3xl font-black text-slate-800 italic">Executive Wealth Council</h3>
            <p className="text-slate-500 text-lg leading-relaxed italic">
               "Data adalah aset, tapi sistem adalah mesin cetaknya. Jangan pernah menjual kontrol teknologi Anda."
            </p>
            <div className="p-8 bg-indigo-900 rounded-[3rem] text-white shadow-xl">
               <p className="text-[10px] font-black uppercase text-indigo-300 mb-4 tracking-widest">Royalty Protection Status</p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl">🏛️</div>
                  <p className="text-xs font-bold leading-relaxed">Kontrak Lisensi IP Terkunci di Akta Notaris Pendirian.</p>
               </div>
            </div>
         </div>

         <div className="flex-1 bg-slate-900 rounded-[3.5rem] p-10 font-serif text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-2xl min-h-[350px]">
            {isSynthesizing ? (
               <div className="h-full flex flex-col items-center justify-center space-y-6 py-20">
                  <div className="flex gap-2">
                     <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                     <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                     <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">AI sedang menghitung valuasi masa depan...</p>
               </div>
            ) : aiReport ? (
               <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <pre className="whitespace-pre-wrap">{aiReport}</pre>
               </div>
            ) : (
               <div className="h-full flex flex-col items-center justify-center text-center opacity-20 py-20 space-y-6">
                  <div className="text-8xl">💎</div>
                  <p className="max-w-md mx-auto font-bold text-2xl text-slate-400">Klik tombol di atas untuk mendapatkan Masterplan Keuangan Founder secara rahasia.</p>
               </div>
            )}
         </div>
      </div>

      {/* Strategic Closing Callout */}
      <div className="p-16 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">👑</div>
         <div className="space-y-6 z-10">
            <h4 className="text-4xl font-black italic">"The Ultimate Goal: Shared Sovereignty."</h4>
            <p className="text-indigo-100 text-xl leading-relaxed max-w-4xl">
               Founder, kesejahteraan Anda adalah jaminan bahwa sistem ini akan terus dijaga kualitasnya. Di KoperatifAI, kita menghapus model "Bakar Uang" dan menggantinya dengan model "Bangun Harta". Jadilah jutawan rakyat yang memimpin perubahan.
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:shadow-xl transition-all">Download Revenue Model Canvas</button>
               <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs border border-indigo-400 hover:bg-indigo-700 transition-all">Buka Setting Royalti IP AI</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default FounderRevenueHub;
