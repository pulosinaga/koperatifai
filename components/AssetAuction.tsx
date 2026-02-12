import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { GoogleGenAI } from "@google/genai";

const auctionItems = [
  { id: 1, name: 'Yamaha NMAX 2023', price: 18500000, currentBid: 19200000, status: 'OPEN', timer: '02:45:12', icon: '🛵', desc: 'Aset jaminan anggota (Default). Kondisi 95% mulus.' },
  { id: 2, name: 'Laptop MacBook Air M1', price: 8000000, currentBid: 8500000, status: 'OPEN', timer: '05:12:40', icon: '💻', desc: 'Aset sitaan produktif. Sudah diinspeksi tim staf.' },
  { id: 3, name: 'Sawah Produktif 500m2', price: 45000000, currentBid: 45000000, status: 'IDLE', timer: 'Besok', icon: '🌾', desc: 'Eksklusif anggota: Sertifikat SHM aman di Brankas Pusat.' },
];

const AssetAuction: React.FC = () => {
  const { user } = useAppContext();
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiOpinion, setAiOpinion] = useState('');

  const runAssetValuation = async (item: any) => {
    setIsAnalyzing(true);
    setSelectedItem(item);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis nilai lelang aset koperasi: '${item.name}'. 
        Harga Awal: Rp ${item.price.toLocaleString()}. Penawaran Tertinggi: Rp ${item.currentBid.toLocaleString()}. 
        Jelaskan kepada anggota kenapa membeli aset lelang koperasi menguntungkan: 
        1. Harga di bawah pasar (Distressed Asset). 
        2. Legalitas dijamin koperasi (Bebas sengketa). 
        3. Hasil lelang membantu melunasi hutang saudara anggota lain (Keadilan Sosial). 
        Gunakan gaya bahasa kurator aset yang profesional dan cerdas.`,
      });
      setAiOpinion(response.text || "Aset ini memiliki nilai investasi tinggi.");
    } catch (e) {
      setAiOpinion("Audit nilai aset tersedia secara offline di Hub Duta.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              P2P Distressed Asset Exchange
            </span>
            <h2 className="text-4xl font-black leading-tight italic font-serif text-white">Lelang Kedaulatan. <br/>Aset Aman, Likuiditas Kembali.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               "Kami tidak menyita untuk menghabisi, kami melelang untuk menyelamatkan. Aset macet diubah menjadi modal produktif demi kemakmuran seluruh anggota."
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🔨</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Total Aset Dilelang</p>
             <p className="text-3xl font-black text-emerald-400 mt-1 italic">Rp 425.8Jt</p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase font-black">Member-Only Access</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="space-y-6">
            <h3 className="text-2xl font-black text-slate-800 italic uppercase">Aset Siap Tawar</h3>
            <div className="space-y-4">
               {auctionItems.map((item) => (
                 <div key={item.id} className="bg-white p-6 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex gap-6 items-center">
                    <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center text-5xl shrink-0 shadow-inner group-hover:scale-110 transition-transform">{item.icon}</div>
                    <div className="flex-1">
                       <div className="flex justify-between items-start">
                          <h4 className="font-black text-slate-800">{item.name}</h4>
                          <span className="text-[8px] font-black bg-rose-100 text-rose-600 px-2 py-1 rounded uppercase animate-pulse">{item.timer}</span>
                       </div>
                       <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Bid Tertinggi: Rp {item.currentBid.toLocaleString()}</p>
                       <div className="mt-4 flex gap-2">
                          <button onClick={() => runAssetValuation(item)} className="px-4 py-2 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase hover:bg-black">🔍 Audit AI</button>
                          <button className="flex-1 py-2 bg-indigo-600 text-white rounded-xl text-[9px] font-black uppercase shadow-lg hover:bg-indigo-700">IKUT LELANG</button>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[600px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">AI Asset Analysis</h3>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isAnalyzing ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="text-6xl animate-bounce">⚖️</div>
                     <p className="text-xs font-black uppercase text-slate-500 tracking-[0.3em] text-center max-w-xs leading-loose">AI IS SCANNING MARKET VALUES & LEGAL DEEDS...</p>
                  </div>
               ) : aiOpinion ? (
                  <div className="animate-in fade-in duration-1000 space-y-6">
                     <p className="text-white text-xl leading-relaxed">"{aiOpinion}"</p>
                     <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/5 rounded-2xl text-center">
                           <p className="text-[8px] font-black text-indigo-400 uppercase mb-1">Market Gap</p>
                           <p className="text-sm font-bold text-white">-22% Cheaper</p>
                        </div>
                        <div className="p-4 bg-white/5 rounded-2xl text-center">
                           <p className="text-[8px] font-black text-indigo-400 uppercase mb-1">Legal Status</p>
                           <p className="text-sm font-bold text-white">CLEAN & SECURE</p>
                        </div>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                     <div className="text-8xl">🏷️</div>
                     <p className="max-w-xs mx-auto font-bold text-lg text-slate-400">Pilih aset di samping untuk membedah potensi investasi oleh AI.</p>
                  </div>
               )}
            </div>
         </div>
      </div>
    </div>
  );
};

export default AssetAuction;