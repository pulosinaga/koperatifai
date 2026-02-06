
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const franchiseModels = [
  { id: 'FR-01', name: 'Bakso Budi Mulia', category: 'Kuliner', entry: 'Rp 5.000.000', success: '94%', icon: '🍜', owner: 'Pak Budi Utama' },
  { id: 'FR-02', name: 'Laundry Kiloan Rakyat', category: 'Jasa', entry: 'Rp 12.000.000', success: '88%', icon: '🧺', owner: 'Ibu Siti Aminah' },
  { id: 'FR-03', name: 'Barbershop Digital', category: 'Lifestyle', entry: 'Rp 8.500.000', success: '82%', icon: '💈', owner: 'Andi Saputra' },
];

const MicroFranchiseHub: React.FC = () => {
  const [isPredicting, setIsPredicting] = useState(false);
  const [aiReport, setAiReport] = useState('');
  const [selectedFranchise, setSelectedFranchise] = useState<any>(null);

  const runSuccessPredictor = async (franchise: any) => {
    setIsPredicting(true);
    setSelectedFranchise(franchise);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis potensi sukses Mikro-Franchise '${franchise.name}' (Model Sukses: ${franchise.owner}) untuk anggota baru di wilayah pedesaan.
        Konteks: 
        1. Biaya Lisensi Koperasi: Rp 500 per transaksi harian.
        2. Bahan Baku Wajib: Dibeli dari Grosir Rakyat KoperatifAI.
        3. Crowdfunding Anggota: Anggota lain bisa patungan modal mulai Rp 10.000.
        
        Berikan 'AI Success Forecast' (3 paragraf):
        - Prediksi titik balik modal (BEP) jika dikelola dengan disiplin.
        - Keunggulan model 'Beli dari Teman': Bagaimana marketplace internal koperasi menjamin pembeli awal.
        - Dampak SHU: Berapa estimasi pendapatan pasif bagi Koperasi dari model ini.
        Gunakan gaya bahasa wirausaha yang cerdas, praktis, dan bersemangat.`,
      });
      setAiReport(response.text || "Hasil prediksi belum tersedia.");
    } catch (e) {
      setAiReport("Koneksi ke pusat data bisnis AI terganggu. Silakan tinjau draf manual.");
    } finally {
      setIsPredicting(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Franchise Hero */}
      <div className="bg-indigo-900 rounded-[4rem] p-16 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="px-6 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Franchise Acceleration Node v1.0
            </span>
            <h2 className="text-6xl font-black leading-tight italic font-serif">Akselerator Mikro. <br/>Gandakan Kesuksesan.</h2>
            <p className="text-indigo-100 text-xl leading-relaxed max-w-3xl font-medium">
               "Jangan biarkan kesuksesan berhenti di satu orang. KoperatifAI mengubah usaha anggota yang sudah berhasil menjadi modul bisnis yang bisa dikloning oleh ribuan anggota lainnya."
            </p>
          </div>
          <div className="w-full lg:w-[450px] bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl space-y-8">
             <div className="text-7xl">🚀</div>
             <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Active Scale Multiplier</p>
             <p className="text-6xl font-black text-white mt-2 italic">12.5x</p>
             <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest animate-pulse">Earning Potential: AGGRESSIVE</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Franchise List */}
         <div className="lg:col-span-2 space-y-8">
            <h3 className="text-3xl font-black text-slate-800 italic">Pilih Model Bisnis Teruji</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {franchiseModels.map((f) => (
                 <button 
                  key={f.id}
                  onClick={() => runSuccessPredictor(f)}
                  className={`p-10 rounded-[3.5rem] border-2 text-left transition-all group flex flex-col gap-6 ${
                    selectedFranchise?.id === f.id ? 'bg-indigo-900 border-indigo-500 shadow-2xl scale-105 text-white' : 'bg-white border-slate-100 hover:border-indigo-300'
                  }`}
                 >
                    <div className="flex justify-between items-start w-full">
                       <div className="text-6xl group-hover:scale-110 transition-transform duration-500">{f.icon}</div>
                       <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase ${
                         selectedFranchise?.id === f.id ? 'bg-white/10 text-white' : 'bg-emerald-50 text-emerald-600'
                       }`}>{f.success} Success Rate</span>
                    </div>
                    <div className="space-y-1">
                       <p className={`text-[10px] font-black uppercase tracking-widest ${selectedFranchise?.id === f.id ? 'text-indigo-200' : 'text-slate-400'}`}>ID: {f.id}</p>
                       <h4 className="text-2xl font-black italic">{f.name}</h4>
                       <p className="text-sm font-bold opacity-60">Pencetus: {f.owner}</p>
                    </div>
                    <div className="pt-6 border-t border-current/10 flex justify-between items-center">
                       <p className="text-[10px] font-black uppercase">Modal Awal</p>
                       <p className="text-lg font-black">{f.entry}</p>
                    </div>
                 </button>
               ))}
            </div>
         </div>

         {/* AI Strategy Console */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[750px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">AI Scale Intelligence</h3>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isPredicting ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="text-6xl animate-spin">⚖️</div>
                     <p className="text-xs font-black uppercase text-slate-500 tracking-[0.3em] text-center max-w-xs leading-loose">AI IS SIMULATING DEMOGRAPHICS & MARGIN CALCULATIONS...</p>
                  </div>
               ) : aiReport ? (
                  <div className="space-y-6 animate-in fade-in duration-1000">
                     <pre className="whitespace-pre-wrap">{aiReport}</pre>
                     <div className="pt-6 border-t border-white/10 grid grid-cols-1 gap-4">
                        <button className="w-full py-4 bg-emerald-600 text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl">Ajukan Crowdfunding Anggota</button>
                        <button className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-[10px]">Tinjau Standard SOP Bisnis</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                     <div className="text-8xl">📊</div>
                     <p className="max-w-xs mx-auto font-bold text-lg text-slate-400">Pilih model bisnis di samping untuk membedah strategi pelipatgandaan aset via AI.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Monetization Pillars */}
      <div className="bg-white p-16 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-4">
            <h3 className="text-4xl font-black text-slate-800 italic">Mesin Uang Koperasi</h3>
            <p className="text-slate-500 text-lg">Bagaimana model ini mempertebal dompet seluruh anggota.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 bg-indigo-50 rounded-[3rem] border border-indigo-100 space-y-6 text-center group hover:bg-indigo-600 transition-all duration-500">
               <div className="text-5xl group-hover:scale-125 transition-transform">🏷️</div>
               <h4 className="font-black text-xl text-indigo-900 group-hover:text-white italic">IP Royalty Fee</h4>
               <p className="text-sm text-indigo-700/70 group-hover:text-white/70 leading-relaxed italic">
                  "Koperasi mengambil porsi kecil (mikro-fee) dari setiap unit franchise yang sukses sebagai biaya lisensi sistem."
               </p>
            </div>
            <div className="p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100 space-y-6 text-center group hover:bg-emerald-600 transition-all duration-500">
               <div className="text-5xl group-hover:scale-125 transition-transform">📦</div>
               <h4 className="font-black text-xl text-emerald-900 group-hover:text-white italic">Raw Material Supply</h4>
               <p className="text-sm text-emerald-700/70 group-hover:text-white/70 leading-relaxed italic">
                  "Seluruh bahan baku dibeli kolektif oleh Koperasi ke pabrik. Selisih harga grosir menjadi laba bersih SHU."
               </p>
            </div>
            <div className="p-10 bg-slate-900 rounded-[3rem] text-white space-y-6 text-center group hover:bg-black transition-all duration-500">
               <div className="text-5xl group-hover:scale-125 transition-transform">🤝</div>
               <h4 className="font-black text-xl text-indigo-400 italic">Crowdfund Success Fee</h4>
               <p className="text-sm text-slate-400 group-hover:text-white/70 leading-relaxed italic">
                  "Koperasi mengelola bagi hasil antara pengelola dan investor anggota, mengambil fee administrasi nol-error."
               </p>
            </div>
         </div>
      </div>

      {/* Final Founder Message */}
      <div className="p-16 bg-indigo-950 border border-indigo-900 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">👑</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight">"Berhenti Menjual Bunga, Mulailah Menjual Kesuksesan."</h4>
            <p className="text-indigo-100 text-xl leading-relaxed max-w-4xl">
               Founder, inilah pembeda kita dengan bank. Bank hanya meminjamkan uang dan tidak peduli usahanya gagal atau tidak. Kita memastikan usaha anggota **Sukses** karena kita mendigitalkan model bisnis yang sudah terbukti. Inilah cara tercepat menuju valuasi $10M+.
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Audit Performa Franchise</button>
               <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs border border-indigo-400">Daftarkan 'Model Sukses' Baru</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default MicroFranchiseHub;
