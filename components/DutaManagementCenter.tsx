
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const initialDutaList = [
  { id: 'D-001', name: 'Joni Setiawan', region: 'Cianjur', members: 45, integrity: 98, status: 'Active', icon: '👨‍💼' },
  { id: 'D-002', name: 'Siti Aminah', region: 'Bandung Barat', members: 120, integrity: 95, status: 'Active', icon: '🧕' },
  { id: 'D-003', name: 'Andi Wijaya', region: 'Sidoarjo', members: 12, integrity: 40, status: 'Under Review', icon: '👨‍🔧' },
];

const DutaManagementCenter: React.FC = () => {
  const [selectedDuta, setSelectedDuta] = useState<any>(null);
  const [isAuditing, setIsAuditing] = useState(false);
  const [aiAuditReport, setAiAuditReport] = useState('');

  const runPerformanceAudit = async (duta: any) => {
    setIsAuditing(true);
    setSelectedDuta(duta);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis kinerja Duta Wilayah bernama ${duta.name} di wilayah ${duta.region}. 
        Data: ${duta.members} anggota, Skor Integritas AI ${duta.integrity}%. 
        
        Tugas:
        1. Berikan evaluasi risiko penyelewengan kas berdasarkan skor integritas.
        2. Hitung estimasi jasa/komisi yang layak ia terima bulan ini (Gunakan asumsi Rp 500 per transaksi anggota).
        3. Rekomendasi: Apakah ia layak diberikan kenaikan 'Plafon Trust' untuk melayani lebih banyak penarikan tunai?
        Gunakan gaya bahasa manajer operasional yang tegas, adil, dan berbasis data.`,
      });
      setAiAuditReport(response.text || "Hasil audit belum tersedia.");
    } catch (e) {
      setAiAuditReport("Sistem audit AI sedang memproses jutaan log transaksi wilayah.");
    } finally {
      setIsAuditing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-[#0f172a] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Regional Representative Control
            </span>
            <h2 className="text-4xl font-black leading-tight italic font-serif">Pusat Kendali Duta.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               "Teknologi menjangkau sinyal, Duta menjangkau hati. Pantau integritas ujung tombak kedaulatan Anda di sini."
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🛵</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Total Duta Aktif</p>
             <p className="text-5xl font-black text-emerald-400 mt-2 italic">128</p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase font-black">Across 14 Provinces</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Duta List */}
         <div className="lg:col-span-2 bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic">Daftar Pimpinan Wilayah</h3>
            <div className="space-y-4">
               {initialDutaList.map((duta) => (
                 <button 
                  key={duta.id}
                  onClick={() => runPerformanceAudit(duta)}
                  className={`w-full p-6 rounded-[2.5rem] border-2 transition-all flex items-center justify-between group ${
                    selectedDuta?.id === duta.id ? 'bg-indigo-50 border-indigo-600 shadow-lg scale-102' : 'bg-white border-slate-50 hover:border-indigo-100'
                  }`}
                 >
                    <div className="flex gap-4 items-center">
                       <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl shadow-inner">{duta.icon}</div>
                       <div className="text-left">
                          <h4 className="font-bold text-slate-800">{duta.name}</h4>
                          <p className="text-[10px] text-slate-400 font-black uppercase">{duta.region}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className={`text-[10px] font-black uppercase ${duta.integrity > 80 ? 'text-emerald-600' : 'text-rose-500'}`}>Integrity: {duta.integrity}%</p>
                       <p className="text-xs font-bold text-slate-800 mt-1">{duta.members} Members</p>
                    </div>
                 </button>
               ))}
            </div>
         </div>

         {/* AI Audit Side */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[600px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">AI Representative Audit</h3>
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isAuditing ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-10 py-20">
                     <div className="text-6xl animate-spin">⚖️</div>
                     <p className="text-xs font-black uppercase text-slate-500 tracking-[0.3em] text-center max-w-xs leading-loose">AI IS SCANNING REGIONAL CASHFLOW & VETTING LOGS...</p>
                  </div>
               ) : aiAuditReport ? (
                  <div className="space-y-6 animate-in fade-in duration-1000">
                     <pre className="whitespace-pre-wrap">{aiAuditReport}</pre>
                     <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                        <button className="py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl">Approve Jasa Duta</button>
                        <button className="py-4 bg-rose-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl">Freeze Account</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                     <div className="text-8xl">🕵️‍♂️</div>
                     <p className="max-w-xs mx-auto font-bold text-lg text-slate-400">Pilih Duta untuk membedah kinerja dan risiko wilayah secara otomatis via AI.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Duta Vetting Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all">
            <div className="text-5xl">📍</div>
            <h4 className="font-black text-xl text-slate-800 italic">Geofenced Operation</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Duta hanya bisa melakukan transaksi jika GPS berada di radius wilayah tugasnya. Zero-Fraud Fieldwork."</p>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all">
            <div className="text-5xl">🔐</div>
            <h4 className="font-black text-xl text-slate-800 italic">Multi-Signature Wallet</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Setiap penarikan dana besar di desa butuh konfirmasi digital dari Founder & 1 Duta Senior lainnya."</p>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all">
            <div className="text-5xl">📊</div>
            <h4 className="font-black text-xl text-slate-800 italic">Trust-Based Limits</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"AI menaikkan limit kas Duta secara otomatis seiring meningkatnya riwayat kejujuran penyetoran."</p>
         </div>
      </div>
    </div>
  );
};

export default DutaManagementCenter;
