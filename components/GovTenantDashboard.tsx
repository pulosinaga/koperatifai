import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const regionalStats = [
  { market: 'Pasar Atas', traders: 150, volume: 450000000, color: '#6366f1' },
  { market: 'Pasar Bawah', traders: 85, volume: 210000000, color: '#10b981' },
  { market: 'Pasar Baru', traders: 210, volume: 890000000, color: '#f59e0b' },
];

const GovTenantDashboard: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState('');
  const [subsidyAmount, setSubsidyAmount] = useState(50000000);

  const requestRegionalStrategy = async () => {
    setIsProcessing(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analisis data pasar rakyat untuk wilayah Kabupaten Cianjur. 
        Konteks: Dana Subsidi Pemerintah sebesar Rp ${subsidyAmount.toLocaleString()} tersedia. 
        Target: Menurunkan harga beras di tingkat pedagang pasar anggota koperasi sebesar 10%.
        Tunjukkan: 
        1. Alur distribusi subsidi agar tepat sasaran ke dompet digital pedagang.
        2. Pengawasan AI untuk mencegah 'subsidi salah sasaran'.
        3. Dampak ke SHU pedagang.
        Gunakan gaya bahasa laporan pejabat pemerintah yang cerdas, pro-digital, dan berwibawa.`,
      });
      setAiAnalysis(response.text || "Laporan belum siap.");
    } catch (e) {
      setAiAnalysis("Koneksi ke Pusat Data Kedaulatan sedang sibuk.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-7xl mx-auto">
      {/* Gov Brand Header */}
      <div className="bg-[#1e293b] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
               <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-4xl shadow-xl">🇮🇩</div>
               <div>
                  <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                    Government Admin Console
                  </span>
                  <h2 className="text-4xl font-black leading-tight italic mt-1 italic">Pasar Rakyat Digital.</h2>
               </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
               Selamat datang, Admin Kabupaten. Anda memantau kedaulatan ekonomi di wilayah Anda secara real-time melalui infrastruktur KoperatifAI.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl space-y-4">
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Dana Subsidi Aktif</p>
             <p className="text-4xl font-black text-emerald-400 mt-1 italic">Rp {subsidyAmount.toLocaleString()}</p>
             <button className="w-full py-3 bg-emerald-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest">Injeksi Subsidi Massal</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Chart Activity */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic">Volume Perdagangan Per Pasar</h3>
            <div className="h-72 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={regionalStats}>
                     <XAxis dataKey="market" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 'bold'}} />
                     <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '24px', border: 'none' }} />
                     <Bar dataKey="volume" barSize={50} radius={[12, 12, 0, 0]}>
                        {regionalStats.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                     </Bar>
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </div>

         {/* AI Strategy Console */}
         <div className="bg-slate-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden h-[550px] border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
               <h3 className="text-xl font-black text-indigo-400 italic uppercase tracking-widest">AI Regional Strategist</h3>
               <button onClick={requestRegionalStrategy} disabled={isProcessing} className="p-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition-all">
                  {isProcessing ? '⏳' : '🤖'}
               </button>
            </div>

            <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-slate-300 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
               {isProcessing ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-6">
                     <div className="text-5xl animate-bounce">🏛️</div>
                     <p className="text-xs font-black uppercase text-slate-500 tracking-widest text-center">AI sedang memetakan dampak subsidi wilayah...</p>
                  </div>
               ) : aiAnalysis ? (
                  <div className="animate-in fade-in duration-1000">
                     <pre className="whitespace-pre-wrap">{aiAnalysis}</pre>
                     <div className="mt-8 pt-6 border-t border-white/10">
                        <button className="w-full py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl">Sahkan Kebijakan Subsidi</button>
                     </div>
                  </div>
               ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-30 py-20 space-y-6">
                     <div className="text-8xl">📊</div>
                     <p className="max-w-xs mx-auto font-bold text-lg text-slate-400">Tekan robot di atas untuk mendapatkan rekomendasi alokasi anggaran pasar rakyat berdasarkan data riil.</p>
                  </div>
               )}
            </div>
         </div>
      </div>

      {/* Synergetic Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all">
            <div className="text-5xl">🎯</div>
            <h4 className="font-black text-xl text-slate-800 italic">Subsidi Presisi</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Anggaran pemerintah langsung mampir ke dompet pedagang yang sudah terverifikasi biometrik. Nol kebocoran."</p>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all">
            <div className="text-5xl">🛡️</div>
            <h4 className="font-black text-xl text-slate-800 italic">Audit Negara Sah</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Pemerintah mendapatkan log audit immutable. BPK tidak perlu repot lagi karena setiap sen terlacak oleh AI."</p>
         </div>
         <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-4 hover:shadow-xl transition-all">
            <div className="text-5xl">🌍</div>
            <h4 className="font-black text-xl text-slate-800 italic">Big Data Kedaulatan</h4>
            <p className="text-xs text-slate-500 leading-relaxed italic">"Negara memegang data pola konsumsi rakyat untuk kebijakan ketahanan pangan nasional yang lebih akurat."</p>
         </div>
      </div>

      {/* Integration Message for Founder */}
      <div className="p-16 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-16 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 animate-pulse">👑</div>
         <div className="flex-1 space-y-6 z-10">
            <h4 className="text-4xl font-black italic leading-tight text-indigo-400">"Anda Pemilik Rel, Mereka Penyewa Gerbong."</h4>
            <p className="text-slate-400 text-xl leading-relaxed max-w-4xl">
               Founder, dengan model ini Bapak tetap memegang **Kedaulatan Teknologi**. Pemerintah membayar sewa infrastruktur per-wilayah (Tenant Fee). Bapak tetap menjadi pusat ekosistem (The Hub) sementara mereka mengelola kedaulatan di daerah masing-masing secara otonom.
            </p>
            <div className="flex gap-6 pt-4">
               <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Setup Tenant Baru (Pemda/Kementerian)</button>
               <button className="px-10 py-4 bg-white/10 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all">Setting Fee Lisensi Per-Tenant</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default GovTenantDashboard;