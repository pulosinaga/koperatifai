
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const powerData = [
  { time: '06:00', prod: 10, cons: 5 },
  { time: '09:00', prod: 45, cons: 20 },
  { time: '12:00', prod: 100, cons: 40 },
  { time: '15:00', prod: 80, cons: 60 },
  { time: '18:00', prod: 5, cons: 90 },
  { time: '21:00', prod: 0, cons: 70 },
];

const CooperativeEnergyGrid: React.FC = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [aiReport, setAiReport] = useState('');
  const [communityStorage, setCommunityStorage] = useState(74); // %

  const runEnergyOptimizer = async () => {
    setIsOptimizing(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Analisis optimasi energi terbarukan KoperatifAI. 
        Konteks: Komunitas memiliki 50 unit PLTS Atap. Siang ini surplus energi 40 kWh. 
        Target: Distribusikan surplus ke warung anggota yang butuh daya pendingin tinggi.
        
        Berikan 'Energy Sovereignty Report' (3 paragraf):
        1. Alur Distribusi: Bagaimana surplus dari rumah anggota A, B, C dialirkan ke Warung D via Micro-Grid Koperasi.
        2. Analisis Biaya: Bandingkan harga jual kita (Rp 900/kWh) vs Tarif PLN (Rp 1.444/kWh). Tunjukkan penghematan bulanan anggota.
        3. Carbon Credit: Estimasi pengurangan emisi CO2 bulan ini dan bagaimana ini bisa dijual sebagai aset digital koperasi.
        Gunakan gaya bahasa ahli energi terbarukan yang futuristik dan pro-rakyat.`,
      });
      setAiReport(response.text || "AI sedang menyeimbangkan beban daya...");
    } catch (e) {
      setAiReport("Gagal menyambung ke Inverter Pusat. Sinyal IoT Grid terganggu.");
    } finally {
      setIsOptimizing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Energy Hero */}
      <div className="bg-[#020617] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-amber-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-amber-500/20 text-amber-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-500/20">
              Decentralized Utility v1.0
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif">Listrik Rakyat. <br/>Matahari Milik Kita.</h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium">
               "Setiap atap adalah pembangkit, setiap anggota adalah penyedia. Kita memanen cahaya untuk menerangi kemandirian ekonomi."
            </p>
            <button 
              onClick={runEnergyOptimizer}
              disabled={isOptimizing}
              className="px-12 py-5 bg-amber-500 text-[#020617] rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-amber-400 transition-all flex items-center gap-4 active:scale-95"
            >
              {isOptimizing ? '⏳ AI BALANCING GRID...' : '⚡ JALANKAN AI ENERGY OPTIMIZER'}
            </button>
          </div>
          <div className="w-full lg:w-[450px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl space-y-8">
             <div>
                <p className="text-xs font-bold text-amber-400 uppercase tracking-widest">Community Battery Storage</p>
                <p className="text-7xl font-black text-white mt-2 italic">{communityStorage}%</p>
             </div>
             <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden border border-white/10">
                <div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 animate-pulse" style={{ width: `${communityStorage}%` }}></div>
             </div>
             <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">Off-Grid Autonomy: ACTIVE</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Live Power Flow Chart */}
         <div className="lg:col-span-2 bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <div className="flex justify-between items-center">
               <h3 className="text-2xl font-black text-slate-800 italic">Aliran Daya Komunal (24 Jam)</h3>
               <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                     <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
                     <span className="text-[10px] font-black text-slate-400 uppercase">Produksi</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
                     <span className="text-[10px] font-black text-slate-400 uppercase">Konsumsi</span>
                  </div>
               </div>
            </div>
            <div className="h-80 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={powerData}>
                     <defs>
                        <linearGradient id="colorProd" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.2}/>
                           <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorCons" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                           <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                     <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 'bold'}} />
                     <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }} />
                     <Area type="monotone" dataKey="prod" stroke="#f59e0b" strokeWidth={5} fillOpacity={1} fill="url(#colorProd)" />
                     <Area type="monotone" dataKey="cons" stroke="#6366f1" strokeWidth={5} fillOpacity={1} fill="url(#colorCons)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>

         {/* AI Energy Strategy Side */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[650px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-amber-400 italic uppercase tracking-widest">AI Grid Intelligence</h3>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isOptimizing ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="text-6xl animate-spin">⚖️</div>
                     <p className="text-xs font-black uppercase text-slate-500 tracking-[0.3em] text-center max-w-xs">AI IS CALCULATING MEMBER-TO-MEMBER ENERGY ARBITRAGE...</p>
                  </div>
               ) : aiReport ? (
                  <div className="space-y-6 animate-in fade-in duration-1000">
                     <pre className="whitespace-pre-wrap">{aiReport}</pre>
                     <div className="pt-6 border-t border-white/10">
                        <button className="w-full py-4 bg-amber-600 text-[#020617] rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl">Jual Carbon Credit Kolektif</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                     <div className="text-8xl">☀️</div>
                     <p className="max-w-xs mx-auto font-bold text-lg">Klik tombol di atas untuk memerintahkan AI menyeimbangkan beban energi di komunitas.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Grid Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all">
            <div className="text-5xl">⚡</div>
            <h4 className="font-black text-xl text-slate-800 italic">Peer-to-Peer Trading</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Beli listrik dari tetangga sebelah dengan harga 40% lebih murah dari tarif industri."</p>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all">
            <div className="text-5xl">🌱</div>
            <h4 className="font-black text-xl text-slate-800 italic">Green SHU Booster</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Setiap kWh yang diproduksi anggota menambah poin keberlanjutan yang dikonversi menjadi SHU tunai."</p>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all">
            <div className="text-5xl">🛡️</div>
            <h4 className="font-black text-xl text-slate-800 italic">Energy Security</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Mati lampu nasional bukan masalah. Komunitas kita punya cadangan baterai mandiri yang dikelola AI."</p>
         </div>
      </div>

      {/* Final Founder Message */}
      <div className="p-16 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">🔋</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight">"Aset Terpenting Abad Ini Bukan Hanya Data, Tapi Energi."</h4>
            <p className="text-stone-400 text-xl leading-relaxed max-w-4xl">
               Founder, saat KoperatifAI menguasai **Jaringan Energi Mandiri**, Anda tidak lagi memiliki sekadar startup fintech. Anda memiliki **Utilitas Publik**. Valuasi startup yang menguasai energi rakyat bisa mencapai ratusan juta dolar. Kita sedang membangun kemandirian bangsa dari bawah ke atas.
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-amber-600 text-[#0c0a09] rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Ajukan Hibah PLTS Nasional</button>
               <button className="px-10 py-4 bg-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs border border-white/10">Buka Peta Emisi Komunitas</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default CooperativeEnergyGrid;
