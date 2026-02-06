
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const currencyRates = [
  { code: 'SAR', name: 'Saudi Riyal (Umroh)', rate: 4250, flag: '🇸🇦', trend: '+0.2%' },
  { code: 'USD', name: 'US Dollar (Pendidikan)', rate: 15800, flag: '🇺🇸', trend: '-0.1%' },
  { code: 'AUD', name: 'Australian Dollar', rate: 10400, flag: '🇦🇺', trend: '+0.4%' },
  { code: 'EUR', name: 'Euro (Global Trade)', rate: 17200, flag: '🇪🇺', trend: '+0.1%' },
];

const mockChartData = [
  { month: 'Sep', val: 4100 },
  { month: 'Okt', val: 4150 },
  { month: 'Nov', val: 4080 },
  { month: 'Des', val: 4200 },
  { month: 'Jan', val: 4230 },
  { month: 'Feb', val: 4250 },
];

const GlobalCoopSwap: React.FC = () => {
  const [shuBalance] = useState(2450000);
  const [amountToSwap, setAmountToSwap] = useState(1000000);
  const [selectedCurrency, setSelectedCurrency] = useState(currencyRates[0]);
  const [isConsulting, setIsConsulting] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState('');

  const handleSwap = () => {
    alert(`Berhasil memesan penukaran ${selectedCurrency.code}. Dana akan dikunci dalam 'Pocket Valas' Anda.`);
  };

  const getAIForexAdvice = async () => {
    setIsConsulting(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis strategi penukaran saldo SHU ke mata uang ${selectedCurrency.name}. 
        Konteks: Anggota memiliki saldo SHU Rp ${shuBalance.toLocaleString()}. Anggota ingin menukar Rp ${amountToSwap.toLocaleString()} untuk persiapan ${selectedCurrency.code === 'SAR' ? 'Umroh/Haji' : 'Pendidikan luar negeri'}.
        Berikan saran:
        1. Apakah kurs hari ini (Rp ${selectedCurrency.rate}) sedang menguntungkan?
        2. Jelaskan manfaat 'Cooperative Pooling' di mana anggota mendapat rate lebih murah dari bank umum.
        3. Berikan saran kapan sebaiknya menukar sisa saldo lainnya.
        Gunakan gaya bahasa penasihat keuangan yang cerdas, pro-anggota, dan visioner.`,
      });
      setAiAnalysis(response.text || "AI sedang memindai pasar global...");
    } catch (e) {
      setAiAnalysis("Jalur data valas sedang sibuk. Integritas saldo Anda tetap aman.");
    } finally {
      setIsConsulting(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="bg-[#0f172a] rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-amber-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-amber-500/10 text-amber-500 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-500/20">
              Cross-Border Cooperative Swap v1.0
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif text-white">SHU Global. <br/>Tanpa Batas Negara.</h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-medium">
               "Tukar hasil usaha Anda ke mata uang dunia. Hemat biaya admin hingga 80% melalui sistem pertukaran kolektif KoperatifAI."
            </p>
            <div className="flex gap-4">
              <button 
                onClick={getAIForexAdvice}
                disabled={isConsulting}
                className="px-12 py-5 bg-amber-600 text-slate-900 rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-amber-500 transition-all flex items-center gap-4 active:scale-95"
              >
                {isConsulting ? '⏳ ANALYZING GLOBAL TRENDS...' : '🤖 TANYA STRATEGI VALAS AI'}
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[450px] bg-white/5 backdrop-blur-3xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl space-y-8">
             <div>
                <p className="text-xs font-bold text-amber-400 uppercase tracking-widest">Saldo SHU Tersedia</p>
                <p className="text-5xl font-black text-white mt-2 italic">Rp {shuBalance.toLocaleString('id-ID')}</p>
             </div>
             <div className="p-6 bg-emerald-500/10 rounded-3xl border border-emerald-500/20">
                <p className="text-[10px] text-emerald-400 font-black uppercase">Co-op Rate Advantage</p>
                <p className="text-lg font-bold text-white">SAVE Rp 150/unit vs Bank</p>
             </div>
             <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest italic">"Secured by International Treasury Node"</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Swap Interface */}
         <div className="lg:col-span-2 bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <h3 className="text-2xl font-black text-slate-800 italic">Pusat Penukaran Kolektif</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-6">
                  <div className="space-y-4">
                     <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Pilih Mata Uang Tujuan</label>
                     <div className="grid grid-cols-1 gap-2">
                        {currencyRates.map((curr) => (
                           <button 
                              key={curr.code}
                              onClick={() => setSelectedCurrency(curr)}
                              className={`p-4 rounded-2xl border-2 flex items-center justify-between transition-all ${
                                 selectedCurrency.code === curr.code ? 'border-indigo-600 bg-indigo-50 shadow-md' : 'border-slate-50 hover:border-slate-200'
                              }`}
                           >
                              <div className="flex items-center gap-3">
                                 <span className="text-2xl">{curr.flag}</span>
                                 <div className="text-left">
                                    <p className="font-bold text-slate-800 text-xs">{curr.name}</p>
                                    <p className="text-[10px] text-slate-400">{curr.code}</p>
                                 </div>
                              </div>
                              <div className="text-right">
                                 <p className="font-black text-slate-800 text-sm">Rp {curr.rate.toLocaleString()}</p>
                                 <p className={`text-[8px] font-bold ${curr.trend.startsWith('+') ? 'text-rose-500' : 'text-emerald-500'}`}>{curr.trend}</p>
                              </div>
                           </button>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100 space-y-8 flex flex-col justify-center">
                  <div className="space-y-4">
                     <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Nominal SHU untuk Ditukar</label>
                     <input 
                        type="range" min="100000" max={shuBalance} step="50000" 
                        value={amountToSwap} 
                        onChange={(e) => setAmountToSwap(parseInt(e.target.value))}
                        className="w-full h-2 bg-white rounded-full appearance-none cursor-pointer accent-indigo-600"
                     />
                     <p className="text-2xl font-black text-indigo-600">Rp {amountToSwap.toLocaleString('id-ID')}</p>
                  </div>

                  <div className="p-6 bg-white rounded-3xl border border-slate-200 text-center">
                     <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Anda Akan Menerima</p>
                     <p className="text-4xl font-black text-slate-800 italic">{selectedCurrency.flag} {(amountToSwap / selectedCurrency.rate).toFixed(2)}</p>
                     <p className="text-[10px] font-bold text-emerald-600 mt-2 uppercase">KURS KOPERASI AKTIF</p>
                  </div>

                  <button 
                     onClick={handleSwap}
                     className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-black transition-all active:scale-95"
                  >
                     KONFIRMASI SWAP KOLEKTIF
                  </button>
               </div>
            </div>
         </div>

         {/* AI Analysis Console */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[600px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-amber-400 italic uppercase tracking-widest">AI Forex Council</h3>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isConsulting ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="text-6xl animate-pulse">🏛️</div>
                     <p className="text-xs font-black uppercase text-slate-500 tracking-[0.3em] text-center max-w-xs leading-loose">AI IS ANALYZING INTERBANK LIQUIDITY & MACRO TRENDS...</p>
                  </div>
               ) : aiAnalysis ? (
                  <div className="space-y-6 animate-in fade-in duration-1000">
                     <pre className="whitespace-pre-wrap">{aiAnalysis}</pre>
                     <div className="pt-6 border-t border-white/10">
                        <button className="w-full py-4 bg-amber-600 text-[#020617] rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl">Simpan Rekomendasi</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                     <div className="text-8xl">🌐</div>
                     <p className="max-w-xs mx-auto font-bold text-lg text-slate-400">Pilih mata uang dan klik "TANYA STRATEGI" untuk panduan penukaran cerdas.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all">
            <div className="text-5xl">🗳️</div>
            <h4 className="font-black text-xl text-slate-800 italic">No Middleman</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Kita langsung menukar ke provider likuiditas pusat, membuang margin keuntungan money changer jalanan."</p>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all">
            <div className="text-5xl">📈</div>
            <h4 className="font-black text-xl text-slate-800 italic">Auto-Hedging</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Simpan dalam valas untuk melindungi nilai tabungan Anda dari inflasi Rupiah."</p>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all">
            <div className="text-5xl">🕋</div>
            <h4 className="font-black text-xl text-slate-800 italic">Umroh Ready</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Cicil penukaran Riyal dari sekarang agar biaya ibadah Anda tidak melonjak di masa depan."</p>
         </div>
      </div>

      {/* Founder Vision Message */}
      <div className="p-16 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">🌍</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight">"Uang Rakyat, Membeli Dunia."</h4>
            <p className="text-stone-400 text-xl leading-relaxed max-w-4xl">
               Founder, fitur ini membuktikan bahwa KoperatifAI adalah institusi keuangan global yang sesungguhnya. Kita tidak lagi dibatasi oleh geografi. Anggota kita bisa menabung di desa, tapi memiliki aset dalam mata uang terkuat di dunia. Inilah kedaulatan tanpa batas.
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-amber-600 text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Daftarkan Rekening Valas Baru</button>
               <button className="px-10 py-4 bg-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs border border-white/10">Lihat Portofolio Valas Komunal</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default GlobalCoopSwap;
