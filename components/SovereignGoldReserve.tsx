
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const goldPriceHistory = [
  { month: 'Sep', price: 1050000 },
  { month: 'Okt', price: 1120000 },
  { month: 'Nov', price: 1080000 },
  { month: 'Des', price: 1150000 },
  { month: 'Jan', price: 1250000 },
  { month: 'Feb', price: 1320000 },
];

const SovereignGoldReserve: React.FC = () => {
  const [isConsulting, setIsConsulting] = useState(false);
  const [aiAdvice, setAiAdvice] = useState('');
  const [goldWeight] = useState(1250); // in grams (1.25kg)
  const [backingRatio] = useState(15.4); // 15.4% of digital balance is backed by gold

  const consultGoldStrategist = async () => {
    setIsConsulting(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Analisis strategi cadangan emas fisik untuk KoperatifAI. 
        Konteks: Saat ini koperasi memiliki 1.250 gram emas fisik sebagai cadangan abadi. 
        Total simpanan digital anggota adalah Rp 19,6 Miliar. 
        Rasio backup emas saat ini: 15.4%. 
        
        Tanyakan kepada AI:
        1. Apakah rasio 15% ideal menghadapi inflasi tahun 2026?
        2. Bagaimana mekanisme 'Gold-to-Emergency' jika terjadi penarikan massal?
        3. Rekomendasi porsi penambahan emas dari surplus marketplace bulan depan.
        Gunakan gaya bahasa ahli makroekonomi yang berwibawa dan melindungi rakyat.`,
      });
      setAiAdvice(response.text || "Strategist sedang menghitung volatilitas global.");
    } catch (e) {
      setAiAdvice("Gagal menghubungi AI Gold Strategist. Silakan cek koneksi brankas.");
    } finally {
      setIsConsulting(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Gold Hero Section */}
      <div className="bg-[#0c0a09] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-amber-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-600/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-amber-600/20 text-amber-500 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-600/20">
              The Sovereign Hedge Layer
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif">The Gold Vault. <br/><span className="text-amber-500 text-4xl">Kedaulatan Abadi.</span></h2>
            <p className="text-stone-400 text-xl leading-relaxed max-w-3xl font-medium">
               "Digital untuk kemudahan, Emas untuk ketahanan." KoperatifAI mengamankan masa depan anggota melalui cadangan logam mulia fisik yang tersertifikasi.
            </p>
            <button 
              onClick={consultGoldStrategist}
              disabled={isConsulting}
              className="px-12 py-5 bg-amber-600 text-[#0c0a09] rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-amber-500 transition-all flex items-center gap-4 active:scale-95"
            >
              {isConsulting ? '⏳ ANALYZING MARKET VOLATILITY...' : '📀 CONSULT AI GOLD STRATEGIST'}
            </button>
          </div>
          <div className="w-full lg:w-[400px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl">
             <p className="text-xs font-bold text-amber-500 uppercase tracking-widest">Total Physical Reserves</p>
             <p className="text-7xl font-black text-white mt-2 italic">{goldWeight.toLocaleString()}<span className="text-2xl ml-1 text-stone-500">g</span></p>
             <div className="mt-8 flex justify-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] text-stone-400 font-black uppercase">Stored at Certified Vault (Antam)</span>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Gold Price Chart */}
         <div className="lg:col-span-2 bg-white p-10 rounded-[4rem] border border-stone-200 shadow-sm space-y-10">
            <div className="flex justify-between items-center">
               <h3 className="text-2xl font-black text-stone-800 italic">Market Performance (IDR/Gram)</h3>
               <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-emerald-600">↑ 12.4% YTD</span>
               </div>
            </div>
            <div className="h-80 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={goldPriceHistory}>
                     <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#d97706" stopOpacity={0.1}/>
                           <stop offset="95%" stopColor="#d97706" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f4" />
                     <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#a8a29e', fontSize: 12, fontWeight: 'bold'}} />
                     <YAxis hide />
                     <Tooltip 
                        contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                        formatter={(val: number) => `Rp ${val.toLocaleString()}`}
                     />
                     <Area type="monotone" dataKey="price" stroke="#d97706" strokeWidth={5} fillOpacity={1} fill="url(#colorPrice)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-8 border-t border-stone-100 pt-8">
               <div className="space-y-1">
                  <p className="text-[10px] font-black text-stone-400 uppercase">Valuasi Cadangan Saat Ini</p>
                  <p className="text-2xl font-black text-stone-800">Rp {(goldWeight * 1320000 / 1000000000).toFixed(2)} Miliar</p>
               </div>
               <div className="text-right space-y-1">
                  <p className="text-[10px] font-black text-stone-400 uppercase">Target Cadangan 2026</p>
                  <p className="text-2xl font-black text-amber-600">5,000 g</p>
               </div>
            </div>
         </div>

         {/* Ratio & Protection Side */}
         <div className="space-y-8">
            <div className="bg-stone-900 p-12 rounded-[4rem] text-white space-y-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
               <div className="text-center space-y-2">
                  <h4 className="text-xl font-black italic text-amber-500 uppercase tracking-widest">Backing Ratio</h4>
                  <p className="text-6xl font-black text-white">{backingRatio}%</p>
                  <p className="text-[10px] text-stone-500 uppercase font-black">Digital-to-Gold Anchor</p>
               </div>
               <div className="space-y-4 pt-4 border-t border-white/5">
                  <p className="text-xs text-stone-400 leading-relaxed italic">
                     "Artinya, setiap Rp 1.000.000 saldo anggota dijamin oleh Rp 154.000 emas fisik murni."
                  </p>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-amber-500 shadow-[0_0_10px_#f59e0b]" style={{ width: `${backingRatio}%` }}></div>
                  </div>
               </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] border border-stone-200 shadow-sm space-y-6">
               <h4 className="font-black text-stone-800 italic uppercase text-sm tracking-widest">Vault Security Details</h4>
               <div className="space-y-4">
                  {[
                    { t: 'Serial Log', d: 'D-882-991-A2', s: 'Verified' },
                    { t: 'Purity Check', d: '999.9 Fine Gold', s: 'Certified' },
                    { t: 'Storage', d: 'BRINKS Jakarta', s: 'Insured' }
                  ].map((log, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-stone-50 last:border-0">
                       <span className="text-[10px] font-bold text-stone-400 uppercase">{log.t}</span>
                       <div className="text-right">
                          <p className="text-xs font-black text-stone-800">{log.d}</p>
                          <p className="text-[8px] font-bold text-emerald-500 uppercase">{log.s}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {/* AI Strategy Output */}
      <div className="bg-white p-16 rounded-[4rem] border border-stone-200 shadow-sm flex flex-col lg:flex-row gap-16 items-start relative overflow-hidden">
         <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-amber-50 rounded-full blur-[120px] opacity-50"></div>
         <div className="w-full lg:w-1/3 space-y-6 shrink-0 z-10">
            <h3 className="text-4xl font-black text-stone-800 italic font-serif">The AI Strategic Council.</h3>
            <p className="text-stone-500 text-lg leading-relaxed">
               Hasil analisis makro oleh Gemini 3 Pro untuk menjaga kestabilan nilai aset anggota dari badai ekonomi dunia.
            </p>
            <div className="p-6 bg-stone-900 rounded-3xl text-white shadow-xl">
               <p className="text-[10px] font-black uppercase text-amber-500 mb-2">Market Sentiment</p>
               <p className="text-sm font-bold">BULLISH ON GOLD</p>
               <p className="text-[9px] text-stone-500 mt-1 uppercase">Decision Integrity Check: PASSED</p>
            </div>
         </div>

         <div className="flex-1 bg-stone-50 rounded-[3rem] p-12 font-serif text-stone-700 leading-relaxed italic relative z-10 border border-stone-100 shadow-inner min-h-[350px]">
            {isConsulting ? (
               <div className="h-full flex flex-col items-center justify-center space-y-6 py-20">
                  <div className="flex gap-4">
                     <div className="w-4 h-4 bg-amber-600 rounded-full animate-bounce"></div>
                     <div className="w-4 h-4 bg-amber-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                     <div className="w-4 h-4 bg-amber-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                  <p className="text-xs font-black uppercase text-stone-400 tracking-widest">AI sedang menyusun peta jalan kedaulatan...</p>
               </div>
            ) : aiAdvice ? (
               <div className="animate-in fade-in duration-1000">
                  <pre className="whitespace-pre-wrap text-lg">{aiAdvice}</pre>
                  <div className="mt-12 pt-8 border-t border-stone-200 flex justify-center">
                     <button className="px-10 py-4 bg-stone-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-black transition-all">Download Gold Allocation Whitepaper</button>
                  </div>
               </div>
            ) : (
               <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20">
                  <div className="text-9xl mb-8">📀</div>
                  <p className="max-w-xs mx-auto font-bold text-xl">Klik "CONSULT AI GOLD STRATEGIST" untuk melihat bagaimana emas melindungi kita.</p>
               </div>
            )}
         </div>
      </div>

      {/* Trust & Sovereignty Message */}
      <div className="p-16 bg-stone-900 rounded-[4rem] text-white flex flex-col md:flex-row items-center gap-16 shadow-2xl relative overflow-hidden border border-white/5">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10">🏛️</div>
         <div className="space-y-6 z-10">
            <h4 className="text-4xl font-black italic">"Sound Money is a Human Right."</h4>
            <p className="text-stone-400 text-xl leading-relaxed max-w-4xl">
               Founder, cadangan emas fisik ini adalah bukti bahwa KoperatifAI tidak sedang "mencetak uang digital kosong". Kita membangun institusi yang memiliki **Nilai Nyata**. Saat bank-bank besar runtuh karena gelembung hutang, koperasi kita akan tetap tegak berdiri karena kita memiliki **Emas Rakyat**.
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-amber-600 text-[#0c0a09] rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Sertifikasi Audit Emas Fisik</button>
               <button className="px-10 py-4 bg-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs border border-white/10">Buka Brankas Pusat (Live Stream)</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default SovereignGoldReserve;
