import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const priceTrends = [
  { time: '01 Feb', pasar: 14500, koperatif: 12200 },
  { time: '02 Feb', pasar: 15000, koperatif: 12200 },
  { time: '03 Feb', pasar: 15500, koperatif: 12300 },
  { time: '04 Feb', pasar: 16000, koperatif: 12300 },
  { time: '05 Feb', pasar: 15800, koperatif: 12300 },
];

const GovPasarRakyatBridge: React.FC = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState('');

  const generateReportForGov = async () => {
    setIsSyncing(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Buatkan laporan "Bantuan Stabilitas Harga Pangan" untuk Kementerian Perdagangan dan Kementerian Koperasi. 
        Tunjukkan bahwa sistem Marketplace KoperatifAI berhasil menjaga harga beras 20% di bawah harga pasar melalui agregasi pesanan pabrik. 
        Tawarkan kerja sama: 'KoperatifAI siap menjadi dashboard monitor harga nasional'. 
        Gunakan gaya bahasa patriotik, profesional, dan menekankan efisiensi digital bagi negara.`,
      });
      setAiAnalysis(response.text || "Laporan belum tersedia.");
    } catch (e) {
      setAiAnalysis("Koneksi ke server pusat sedang sibuk.");
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-7xl mx-auto">
      {/* Hero */}
      <div className="bg-[#450a0a] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-rose-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-4 py-1.5 bg-rose-600/30 text-rose-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-rose-600/30">
              National Market Partnership v1.0
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif">Jembatan Pasar Rakyat.</h2>
            <p className="text-rose-100 text-xl leading-relaxed max-w-3xl font-medium">
               "Kami tidak menggantikan peran negara. Kami memberikan 'Mata Digital' agar negara bisa mengendalikan inflasi dan membantu rakyat dengan tepat sasaran."
            </p>
            <button 
              onClick={generateReportForGov}
              disabled={isSyncing}
              className="px-12 py-5 bg-white text-rose-900 rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-rose-50 transition-all flex items-center gap-4"
            >
              {isSyncing ? '⏳ MENSINKRONKAN DATA...' : '🏛️ GENERATE LAPORAN UNTUK KEMENKOP'}
            </button>
          </div>
          <div className="w-full lg:w-[450px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl space-y-8">
             <div>
                <p className="text-xs font-bold text-rose-400 uppercase tracking-widest">Kontribusi Stabilitas Harga</p>
                <p className="text-7xl font-black text-white mt-2 italic">22<span className="text-3xl ml-1">%</span></p>
             </div>
             <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest animate-pulse">Price Gap: OPTIMIZED</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Price Comparison Chart */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <h3 className="text-2xl font-black text-slate-800 italic uppercase tracking-widest">KoperatifAI vs Harga Pasar (Beras)</h3>
            <div className="h-80 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={priceTrends}>
                     <defs>
                        <linearGradient id="colorPasar" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.1}/>
                           <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorKop" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                           <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                     <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 'bold'}} />
                     <YAxis hide />
                     <Tooltip contentStyle={{ borderRadius: '24px', border: 'none' }} />
                     <Area type="monotone" dataKey="pasar" stroke="#f43f5e" strokeWidth={5} fillOpacity={1} fill="url(#colorPasar)" name="Harga Pasar" />
                     <Area type="monotone" dataKey="koperatif" stroke="#10b981" strokeWidth={5} fillOpacity={1} fill="url(#colorKop)" name="Harga KoperatifAI" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
            <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 text-center">
               <p className="text-xs font-bold text-emerald-900 italic">
                  "Sistem kami menstabilkan harga karena kita memiliki stok fisik di Hub Duta Wilayah, bukan sekadar dropship."
               </p>
            </div>
         </div>

         {/* AI Advocacy Result */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[600px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">AI Advocacy Council</h3>
               <div className="flex gap-2">
                  <span className="text-[9px] text-slate-500 font-mono">GOV_SYNC: READY</span>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
               </div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isSyncing ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="text-6xl animate-bounce">🏛️</div>
                     <p className="text-xs font-black uppercase text-slate-500 tracking-[0.3em] text-center max-w-xs leading-loose">AI IS PREPARING THE NATIONAL PRICE STABILITY REPORT...</p>
                  </div>
               ) : aiAnalysis ? (
                  <div className="space-y-6 animate-in fade-in duration-1000">
                     <pre className="whitespace-pre-wrap">{aiAnalysis}</pre>
                     <div className="pt-6 border-t border-white/10">
                        <button className="w-full py-4 bg-white text-rose-900 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl">Kirim ke WhatsApp Menteri Koperasi</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                     <div className="text-8xl">🇮🇩</div>
                     <p className="max-w-xs mx-auto font-bold text-lg text-slate-400">Posisikan startup Anda sebagai solusi bagi kegagalan teknis pemerintah di pasar rakyat.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Strategic Synergy Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all">
            <div className="text-5xl">📊</div>
            <h4 className="font-black text-xl text-slate-800 italic">Data TPID Gratis</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Kita memberikan data harga riil di level warung secara gratis ke pemerintah sebagai kontribusi bela negara."</p>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all">
            <div className="text-5xl">📦</div>
            <h4 className="font-black text-xl text-slate-800 italic">Operasi Pasar Digital</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Negara bisa menitipkan stok barang subsidi ke gudang Duta Wilayah kita untuk disalurkan secara presisi."</p>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all">
            <div className="text-5xl">🛡️</div>
            <h4 className="font-black text-xl text-slate-800 italic">Pajak Negara Sah</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Setiap transaksi pasar rakyat kita mencatat PPN/PPh secara otomatis. Pemerintah mendapatkan devisa tanpa repot audit."</p>
         </div>
      </div>
    </div>
  );
};

export default GovPasarRakyatBridge;