
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const exportDemands = [
  { id: 1, country: 'Jerman 🇩🇪', coop: 'Raiffeisen Coop', item: 'Biji Kopi Gayo (Grade A)', volume: '10 Ton', price: '$8.50/kg', status: 'OPEN' },
  { id: 2, country: 'Jepang 🇯🇵', coop: 'Zen-Noh Group', item: 'Teh Putih Organik', volume: '500 Kg', price: '$45.00/kg', status: 'URGENT' },
  { id: 3, country: 'Kanada 🇨🇦', coop: 'Desjardins Network', item: 'Kerajinan Rotan Lestari', volume: '2 Container', price: 'Negotiable', status: 'INSPECTION' },
];

const GlobalTradeBridge: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedDemand, setSelectedDemand] = useState<any>(null);
  const [aiReport, setAiReport] = useState('');

  const runExportAudit = async (demand: any) => {
    setIsAnalyzing(true);
    setSelectedDemand(demand);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis potensi ekspor produk anggota koperasi: '${demand.item}' ke '${demand.coop}' di '${demand.country}'.
        Harga pasar tujuan: ${demand.price}.
        Berikan panduan singkat:
        1. Sertifikasi apa yang wajib dimiliki petani desa (misal: Rainforest Alliance, Organic Cert).
        2. Analisis Kurs: Bagaimana AI menjaga margin keuntungan jika terjadi fluktuasi Rupiah (Currency Hedging).
        3. Keuntungan SHU: Seberapa besar dampak satu kali ekspor ini terhadap dividen 1.248 anggota kita.
        Gunakan gaya bahasa profesional, global, namun tetap berorientasi pada kesejahteraan petani lokal.`,
      });
      setAiReport(response.text || "Analisis ekspor tidak tersedia.");
    } catch (e) {
      setAiReport("Jalur komunikasi satelit ke jaringan koperasi global sedang dalam pemeliharaan.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Global Hero */}
      <div className="bg-[#050b1a] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              International Cooperative Trade Hub
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Ekspor Tanpa Tengkulak: <br/>Dari Desa, Menuju Dunia.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               KoperatifAI menghubungkan produsen desa langsung ke rak toko koperasi di luar negeri. Harga Global, Manfaat Lokal.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl relative">
             <div className="text-6xl mb-4">🌍</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Global Export Volume (Est.)</p>
             <p className="text-4xl font-black text-emerald-400 mt-2 italic">$42.5K <span className="text-lg">USD</span></p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase font-black">Trade Corridor: Indonesia - Germany</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Demand List */}
         <div className="space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic">Permintaan Koperasi Dunia</h3>
            <div className="space-y-4">
               {exportDemands.map((d) => (
                 <button 
                  key={d.id}
                  onClick={() => runExportAudit(d)}
                  className={`w-full p-8 rounded-[3rem] border-2 transition-all flex items-center justify-between group ${
                    selectedDemand?.id === d.id ? 'bg-indigo-50 border-indigo-600 shadow-lg scale-102' : 'bg-white border-slate-50 hover:border-indigo-100'
                  }`}
                 >
                    <div className="text-left space-y-2">
                       <div className="flex items-center gap-2">
                          <span className="text-sm font-black text-indigo-600 uppercase tracking-widest">{d.country}</span>
                          <span className={`px-2 py-0.5 rounded text-[8px] font-black ${d.status === 'URGENT' ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'}`}>{d.status}</span>
                       </div>
                       <h4 className="text-xl font-black text-slate-800 leading-tight">{d.item}</h4>
                       <p className="text-[10px] text-slate-400 font-bold uppercase">{d.coop} • Target: {d.volume}</p>
                    </div>
                    <div className="text-right">
                       <p className="text-lg font-black text-slate-900 italic">{d.price}</p>
                       <p className="text-[9px] text-slate-400 uppercase">Per Unit</p>
                    </div>
                 </button>
               ))}
            </div>
         </div>

         {/* AI Export Strategy Panel */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[650px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase">AI Export Intelligence</h3>
               <span className="text-[9px] text-slate-500 font-mono">X-BORDER_SYNC_ACTIVE</span>
            </div>
            
            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10">
               {isAnalyzing ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-6 py-20">
                     <div className="text-5xl animate-spin">🚢</div>
                     <p className="text-slate-400 text-xs animate-pulse text-center max-w-[200px] uppercase tracking-widest leading-loose">Menyusun Jalur Logistik & Verifikasi Standar Internasional...</p>
                  </div>
               ) : aiReport ? (
                  <div className="space-y-6">
                     <pre className="whitespace-pre-wrap">{aiReport}</pre>
                     <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                        <button className="py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl">Ajukan Pengiriman</button>
                        <button className="py-4 bg-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] border border-white/10">Buka Panduan ISO</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-30">
                     <div className="text-8xl">🏗️</div>
                     <p className="text-slate-400 font-bold max-w-xs mx-auto">Pilih permintaan ekspor di samping untuk membedah strategi penetrasi pasar global.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Strategic Value Proposition */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="p-8 bg-white rounded-[3rem] border border-slate-100 shadow-sm space-y-4 text-center">
            <div className="text-4xl mx-auto">🛡️</div>
            <h4 className="font-bold text-slate-800 italic">Currency Hedging</h4>
            <p className="text-xs text-slate-500 leading-relaxed">AI otomatis menggunakan instrumen derivatif sederhana untuk memastikan fluktuasi USD tidak merugikan petani.</p>
         </div>
         <div className="p-8 bg-white rounded-[3rem] border border-slate-100 shadow-sm space-y-4 text-center">
            <div className="text-4xl mx-auto">📦</div>
            <h4 className="font-bold text-slate-800 italic">Shared Logistics</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Barang anggota desa A, B, dan C dikonsolidasi dalam satu kontainer untuk menekan biaya kirim internasional hingga 40%.</p>
         </div>
         <div className="p-8 bg-white rounded-[3rem] border border-slate-100 shadow-sm space-y-4 text-center">
            <div className="text-4xl mx-auto">🏢</div>
            <h4 className="font-bold text-slate-800 italic">Coop-to-Coop Trust</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Bukan hubungan pembeli-penjual biasa, tapi aliansi persaudaraan koperasi yang menjamin kelangsungan kontrak jangka panjang.</p>
         </div>
      </div>

      {/* Final Action for Founder */}
      <div className="p-12 bg-indigo-600 border border-indigo-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl z-10 animate-pulse">🛳️</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Jadilah Eksportir Tanpa Batas."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed z-10">
            KoperatifAI menghapus hambatan ekspor bagi rakyat kecil. Saat produk anggota kita sampai di London atau Tokyo, saat itulah kemandirian ekonomi Indonesia benar-benar terwujud.
         </p>
         <div className="flex gap-4 z-10">
            <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl">Buka Dashboard Kemitraan Internasional</button>
            <button className="px-10 py-4 bg-indigo-950 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl">Daftarkan Produk Unggulan Desa</button>
         </div>
      </div>
    </div>
  );
};

export default GlobalTradeBridge;
