
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const materialDemand = [
  { item: 'Semen (Sak)', current: 850, target: 1000, price: 'Rp 54.000', factory: 'Semen Indonesia' },
  { item: 'Bata Ringan (m3)', current: 42, target: 100, price: 'Rp 450.000', factory: 'Brocio' },
  { item: 'Besi Beton (Btg)', current: 210, target: 500, price: 'Rp 82.000', factory: 'KS' },
  { item: 'Pasir (Truk)', current: 15, target: 30, price: 'Rp 1.2M', factory: 'Lokal' },
];

const CooperativeHousing: React.FC = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [aiReport, setAiReport] = useState('');
  const [houseSize, setHouseSize] = useState(36);

  const runBuildSimulation = async () => {
    setIsSimulating(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis simulasi pembangunan rumah tipe ${houseSize} melalui sistem KoperatifAI. 
        Tugas:
        1. Hitung estimasi penghematan jika material dibeli via Grosir Rakyat Koperasi (asumsi diskon 15% dari harga pasar).
        2. Jelaskan konsep 'Tabungan Material': Bagaimana anggota bisa menyicil bata dan semen setiap bulan secara digital.
        3. Berikan roadmap pembangunan 6 bulan: dari pondasi sampai atap dengan pendanaan bertahap (Milestone Funding).
        Gunakan gaya bahasa yang inspiratif, teknis namun mudah dimengerti, dan menekankan kedaulatan tempat tinggal.`,
      });
      // Added fix: Using setAiReport directly instead of redundant helper
      setAiReport(response.text || "AI sedang menyusun rencana pembangunan.");
    } catch (e) {
      // Added fix: Using setAiReport directly
      setAiReport("Gagal terhubung ke Arsitek AI. Silakan periksa koneksi internet Anda.");
    } finally {
      setIsSimulating(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Housing Hero */}
      <div className="bg-[#fffbeb] rounded-[4rem] p-16 relative overflow-hidden shadow-xl border-b-8 border-amber-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-amber-500/10 text-amber-700 rounded-full text-[10px] font-black uppercase tracking-widest border border-amber-500/20">
              Collective Housing Protocol v1.0
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif text-slate-900">Membangun Rumah, <br/>Mengukir Masa Depan.</h2>
            <p className="text-slate-600 text-xl leading-relaxed max-w-3xl font-medium">
               "Rumah bukan tentang cicilan KPR yang mencekik. Rumah adalah hasil gotong royong material dan kejujuran menabung komunitas."
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={runBuildSimulation}
                disabled={isSimulating}
                className="px-12 py-5 bg-slate-900 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-black transition-all flex items-center gap-4 active:scale-95"
              >
                {isSimulating ? '⏳ ARCHITECTING...' : '🏗️ SIMULASI BANGUN RUMAH'}
              </button>
              <button className="px-12 py-5 bg-white text-slate-900 border border-slate-200 rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-sm hover:bg-slate-50 transition-all">
                LIHAT KATALOG MATERIAL
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[450px] bg-white p-12 rounded-[4rem] border border-amber-100 text-center shadow-2xl space-y-8">
             <div>
                <p className="text-xs font-bold text-amber-500 uppercase tracking-widest">Collective Material Value</p>
                <p className="text-5xl font-black text-slate-800 mt-2 italic">Rp 4.2 Miliar</p>
             </div>
             <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
                <p className="text-[10px] text-amber-600 font-black uppercase">Active Construction</p>
                <p className="text-lg font-bold text-amber-900">42 Houses in Progress</p>
             </div>
             <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest italic">"Secured by Material Escrow Ledger"</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Demand Aggregation Monitor */}
         <div className="lg:col-span-2 bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <div className="flex justify-between items-center">
               <h3 className="text-2xl font-black text-slate-800 italic">Agregasi Pesanan Pabrik</h3>
               <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Orders in Sync</span>
               </div>
            </div>
            
            <div className="space-y-8">
               {materialDemand.map((d, i) => (
                 <div key={i} className="space-y-3">
                    <div className="flex justify-between items-end">
                       <div>
                          <h4 className="font-bold text-slate-800">{d.item}</h4>
                          <p className="text-[10px] text-slate-400">Supplier: {d.factory}</p>
                       </div>
                       <div className="text-right">
                          <p className="text-xs font-black text-amber-600">Target: {d.target}</p>
                          <p className="text-[10px] font-bold text-emerald-600">Locked: {d.price}</p>
                       </div>
                    </div>
                    <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                       <div className="h-full bg-amber-500 transition-all duration-1000" style={{ width: `${(d.current/d.target)*100}%` }}></div>
                    </div>
                    <p className="text-[9px] text-slate-400 text-right font-bold uppercase tracking-tighter">Needs {d.target - d.current} more to lock factory price</p>
                 </div>
               ))}
            </div>
         </div>

         {/* AI Architect Panel */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[650px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-amber-400 italic uppercase tracking-widest">AI Construction Planner</h3>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>

            <div className="space-y-4 mb-8 relative z-10">
               <label className="text-[10px] font-black text-slate-500 uppercase">Tipe Rumah (Luas m2)</label>
               <div className="grid grid-cols-3 gap-2">
                  {[21, 36, 45].map(t => (
                    <button key={t} onClick={() => setHouseSize(t)} className={`py-2 rounded-xl text-xs font-black border transition-all ${houseSize === t ? 'bg-amber-600 border-amber-500 text-white' : 'bg-white/5 border-white/10 text-slate-400'}`}>T-{t}</button>
                  ))}
               </div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isSimulating ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="text-6xl animate-bounce">🏗️</div>
                     <p className="text-xs font-black uppercase text-slate-500 tracking-[0.3em] text-center max-w-xs leading-loose">AI IS GENERATING MATERIAL QUANTITY & CONSTRUCTION MILESTONES...</p>
                  </div>
               ) : aiReport ? (
                  <div className="space-y-6 animate-in fade-in duration-1000">
                     <pre className="whitespace-pre-wrap">{aiReport}</pre>
                     <div className="pt-6 border-t border-white/10">
                        <button className="w-full py-4 bg-amber-600 text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl">Ajukan Tabungan Material</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                     <div className="text-8xl">🏠</div>
                     <p className="max-w-xs mx-auto font-bold text-lg text-slate-400">Pilih tipe rumah dan klik simulasi untuk melihat rencana kedaulatan hunian Anda.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Housing Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all group">
            <div className="text-5xl group-hover:scale-110 transition-transform">🧱</div>
            <h4 className="font-black text-xl text-slate-800 italic">Tabungan Barang</h4>
            <p className="text-sm text-slate-500 leading-relaxed italic">"Inflasi bahan bangunan tinggi? Kunci harga sekarang dengan mencicil unit barang secara digital."</p>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all group">
            <div className="text-5xl group-hover:scale-110 transition-transform">👷‍♂️</div>
            <h4 className="font-black text-xl text-slate-800 italic">Trusted Labor</h4>
            <p className="text-sm text-slate-500 leading-relaxed italic">"Akses database tukang bersertifikat dari sesama anggota dengan sistem pembayaran aman."</p>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all group">
            <div className="text-5xl group-hover:scale-110 transition-transform">📉</div>
            <h4 className="font-black text-xl text-slate-800 italic">Zero Waste AI</h4>
            <p className="text-sm text-slate-500 leading-relaxed italic">"AI menghitung material hingga ke butir terakhir. Hemat biaya pembangunan hingga 20%."</p>
         </div>
      </div>

      {/* Final Strategic Message */}
      <div className="p-16 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">🏛️</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight">"Rumah adalah Hak, Bukan Perangkap Hutang."</h4>
            <p className="text-slate-400 text-xl leading-relaxed max-w-4xl">
               Founder, saat anggota membangun rumah melalui koperasi Anda, mereka telah memindahkan masa depan mereka ke dalam ekosistem ini. Anda sedang membangun **"Circular Smart City"** yang nyata. Valuasi startup Anda bukan lagi tentang transaksi, tapi tentang **Aset Berwujud Nasional**.
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-amber-600 text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Daftarkan Supplier Material Baru</button>
               <button className="px-10 py-4 bg-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs border border-white/10">Lihat Peta Pemukiman Komunitas</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default CooperativeHousing;
