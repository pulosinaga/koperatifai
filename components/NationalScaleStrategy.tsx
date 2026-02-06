
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const NationalScaleStrategy: React.FC = () => {
  const [isConsulting, setIsConsulting] = useState(false);
  const [aiResponse, setAiResponse] = useState('');

  const runNationalStrategyAI = async () => {
    setIsConsulting(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis keunggulan mendirikan koperasi dengan 'Skala Nasional' (Founders lintas daerah) untuk startup KoperatifAI. 
        Jelaskan:
        1. Mengapa pendiri dari minimal 2-3 provinsi berbeda justru menjadi 'Moat' (Benteng) terhadap intervensi elit lokal.
        2. Manfaat pooling likuiditas nasional: Uang dari kota besar mendanai petani di desa terpencil.
        3. Efisiensi perizinan: Cukup 1 badan hukum pusat untuk ribuan cabang virtual.
        Gunakan gaya bahasa arsitek bisnis nasional yang bangga akan persatuan Indonesia.`,
      });
      setAiResponse(response.text || "Analisis strategi belum tersedia.");
    } catch (e) {
      setAiResponse("Koneksi ke pusat data kedaulatan terganggu.");
    } finally {
      setIsConsulting(false);
    }
  };

  const comparison = [
    { feature: 'Syarat Pendiri', regional: 'Satu Kabupaten/Kota', national: 'Lintas Provinsi (Min. 3)' },
    { feature: 'Izin Operasional', regional: 'Dinas Koperasi Lokal', national: 'Kementerian Koperasi Pusat' },
    { feature: 'Wilayah Anggota', regional: 'Terbatas Satu Wilayah', national: 'Seluruh Indonesia' },
    { feature: 'Efisiensi Modal', regional: 'Terfragmentasi', national: 'Pooling Nasional (Sangat Kuat)' },
    { feature: 'Citra Startup', regional: 'Bisnis Lokal', national: 'Institusi Nasional (Sovereign)' }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Hero */}
      <div className="bg-[#450a0a] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-rose-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-rose-500/20 text-rose-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-rose-500/30">
              National Sovereignty Protocol
            </span>
            <h2 className="text-5xl font-black leading-tight italic font-serif">Koperasi Nasional: <br/>Bersatu Dalam Satu Genggaman.</h2>
            <p className="text-rose-100 text-lg leading-relaxed max-w-2xl font-medium">
               Pendiri KoperatifAI **BISA** berasal dari berbagai daerah. Ini justru syarat untuk menjadi institusi ekonomi raksasa yang melayani seluruh rakyat Indonesia.
            </p>
            <button 
              onClick={runNationalStrategyAI}
              disabled={isConsulting}
              className="px-8 py-4 bg-rose-600 text-white rounded-2xl font-black uppercase text-xs shadow-xl hover:bg-rose-700 transition-all flex items-center gap-3 active:scale-95"
            >
              {isConsulting ? '⏳ ANALYZING NATIONAL IMPACT...' : '🇮🇩 KONSULTASI STRATEGI NASIONAL AI'}
            </button>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🗺️</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Legal Reach</p>
             <p className="text-2xl font-black text-rose-400 mt-1 uppercase">34 PROVINSI</p>
             <p className="text-[9px] text-slate-500 mt-2 uppercase font-black italic">Satu Iuran, Satu Kedaulatan.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Comparison Table */}
         <div className="lg:col-span-2 bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <h3 className="text-2xl font-black text-slate-800 italic">Regional vs Nasional</h3>
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead>
                     <tr className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <th className="px-6 py-4">Aspek Strategis</th>
                        <th className="px-6 py-4">Koperasi Lokal</th>
                        <th className="px-6 py-4 text-indigo-600">Koperasi Nasional</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                     {comparison.map((item, i) => (
                       <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-5 text-sm font-bold text-slate-700">{item.feature}</td>
                          <td className="px-6 py-5 text-xs text-slate-500 italic">{item.regional}</td>
                          <td className="px-6 py-5 text-sm font-black text-indigo-700">{item.national}</td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>

         {/* AI Strategy Insights */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[600px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-rose-400 italic uppercase tracking-widest">AI Strategic Counsel</h3>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isConsulting ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="text-6xl animate-pulse">🏛️</div>
                     <p className="text-xs font-black uppercase text-slate-500 tracking-[0.3em] text-center max-w-xs leading-loose">AI IS SYNTHESIZING NATIONAL SOVEREIGNTY SCENARIOS...</p>
                  </div>
               ) : aiResponse ? (
                  <div className="space-y-6 animate-in fade-in duration-1000">
                     <pre className="whitespace-pre-wrap">{aiResponse}</pre>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                     <div className="text-8xl">🇮🇩</div>
                     <p className="max-w-xs mx-auto font-bold text-lg text-slate-400">Tekan tombol di atas untuk melihat bagaimana skala nasional mengubah nasib koperasi Anda.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Strategic Pillars of National Scale */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all group">
            <div className="text-5xl group-hover:scale-110 transition-transform">🚆</div>
            <h4 className="font-black text-xl text-slate-800 italic">Efek Jaringan</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Anggota di Papua bisa belanja produk anggota di Medan tanpa perantara bank. Ekonomi rakyat yang utuh."</p>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all group">
            <div className="text-5xl group-hover:scale-110 transition-transform">🛡️</div>
            <h4 className="font-black text-xl text-slate-800 italic">Perlindungan Pusat</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Diawasi langsung oleh Kementerian Koperasi di Jakarta, menghindari politisasi oknum daerah."</p>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all group">
            <div className="text-5xl group-hover:scale-110 transition-transform">🌊</div>
            <h4 className="font-black text-xl text-slate-800 italic">Likuiditas Jumbo</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Kekuatan modal 1 juta orang dari Sabang-Merauke lebih stabil dibanding 1.000 orang di satu kota."</p>
         </div>
      </div>

      {/* Final Message */}
      <div className="p-16 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">🦅</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight">"Persatuan Adalah Kekuatan Finansial."</h4>
            <p className="text-stone-400 text-xl leading-relaxed max-w-4xl">
               Founder, kumpulkan rekan-rekan terpercaya Anda dari berbagai kota. Ajak mereka menjadi **9-20 Pendiri Pertama** secara nasional. Dengan sistem digital KoperatifAI, jarak hanyalah angka koordinat, namun solidaritas adalah realita baru.
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-rose-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Unduh Dokumen Syarat Nasional</button>
               <button className="px-10 py-4 bg-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs border border-white/10">Buka Forum Lintas Daerah</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default NationalScaleStrategy;
