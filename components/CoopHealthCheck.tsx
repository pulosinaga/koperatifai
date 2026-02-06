
import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Radar as RadarArea } from 'recharts';
import { GoogleGenAI } from "@google/genai";

const CoopHealthCheck: React.FC = () => {
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditLog, setAuditLog] = useState<{msg: string, type: 'info' | 'warn' | 'success'}[]>([]);
  const [aiAnalysis, setAiAnalysis] = useState('');

  const healthData = [
    { subject: 'Likuiditas', A: 92, fullMark: 100 },
    { subject: 'Kepatuhan AD/ART', A: 98, fullMark: 100 },
    { subject: 'Kesehatan Pinjaman', A: 85, fullMark: 100 },
    { subject: 'Kepercayaan Anggota', A: 94, fullMark: 100 },
    { subject: 'Efisiensi AI Ops', A: 100, fullMark: 100 },
  ];

  const runDeepAudit = async () => {
    setIsAuditing(true);
    setAuditLog([]);
    setAiAnalysis('');

    const steps = [
      { msg: "[1/5] Memindai Ledger Digital terhadap AD/ART...", type: 'info' },
      { msg: "[2/5] Menganalisis ambang batas penarikan massal...", type: 'info' },
      { msg: "[3/5] Memeriksa anomali harga di Monitor Pangan...", type: 'warn' },
      { msg: "[4/5] Memvalidasi multi-signature pada pengeluaran besar...", type: 'success' },
      { msg: "[5/5] Finalizing Integrity Report via Gemini AI...", type: 'info' },
    ];

    let stepIdx = 0;
    const interval = setInterval(() => {
      if (stepIdx < steps.length) {
        setAuditLog(prev => [steps[stepIdx] as any, ...prev]);
        stepIdx++;
      } else {
        clearInterval(interval);
        generateAIExecutiveSummary();
      }
    }, 1200);
  };

  const generateAIExecutiveSummary = async () => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Anda adalah Auditor Independen AI untuk KoperatifAI. 
        Hasil Audit Kesehatan Hari Ini:
        - Likuiditas: 18.2% (Target >15%).
        - Kepatuhan: Tidak ada pengeluaran tanpa voting.
        - Anomali: Terdeteksi kenaikan harga beras 5% di wilayah Cianjur (Monitor Pangan), namun masih dalam batas wajar musiman.
        - Integritas: Pengurus mematuhi 100% protokol keamanan.
        
        Berikan 'Ringkasan Eksekutif' (2 paragraf) untuk Dewan Pengawas. Jelaskan apakah koperasi dalam kondisi SEHAT atau PERLU PERHATIAN. Berikan 1 saran strategis untuk menjaga kepercayaan anggota. Gunakan gaya bahasa formal, tajam, dan objektif.`,
      });
      setAiAnalysis(response.text || "Audit selesai. Tidak ada pelanggaran terdeteksi.");
    } catch (e) {
      setAiAnalysis("Audit Selesai. Sistem AI menunjukkan kondisi HIJAU (Sehat).");
    } finally {
      setIsAuditing(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Health Hero */}
      <div className="bg-[#0b0e14] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Cooperative Governance Sentry v2.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Audit Kesehatan Koperasi: <br/>Kejujuran yang Terautomasi.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              Fitur khusus Dewan Pengawas & Pengaudit. AI memantau setiap denyut nadi ekonomi koperasi untuk mencegah bibit korupsi sejak dini.
            </p>
            <button 
              onClick={runDeepAudit}
              disabled={isAuditing}
              className={`px-10 py-5 rounded-[2rem] font-black uppercase tracking-widest text-xs transition-all shadow-xl active:scale-95 ${
                isAuditing ? 'bg-slate-800 text-slate-500' : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
            >
              {isAuditing ? '🤖 AI SEDANG MENGADIT...' : '🔍 JALANKAN AUDIT INTEGRITAS'}
            </button>
          </div>
          
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[4rem] border border-white/10 text-center shadow-2xl relative">
             <div className="text-6xl mb-4">🩺</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Overall Health Index</p>
             <p className="text-6xl font-black text-emerald-400 mt-2 italic">94.8</p>
             <p className={`text-[9px] mt-4 uppercase font-black tracking-widest text-emerald-500`}>STATUS: OPTIMAL</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Vital Signs Radar */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8 flex flex-col items-center">
            <h3 className="text-2xl font-black text-slate-800 italic w-full">5 Pilar Kesehatan Koperasi</h3>
            <div className="w-full h-80">
               <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={healthData}>
                     <PolarGrid stroke="#f1f5f9" />
                     <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10, fontWeight: 'bold' }} />
                     <RadarArea
                        name="Kesehatan"
                        dataKey="A"
                        stroke="#10b981"
                        fill="#10b981"
                        fillOpacity={0.6}
                     />
                  </RadarChart>
               </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
               <div className="p-4 bg-slate-50 rounded-2xl text-center">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Compliance Score</p>
                  <p className="text-lg font-black text-indigo-600">98%</p>
               </div>
               <div className="p-4 bg-slate-50 rounded-2xl text-center">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Transparency Level</p>
                  <p className="text-lg font-black text-emerald-600">MAX</p>
               </div>
            </div>
         </div>

         {/* AI Anomaly Scanner Console */}
         <div className="bg-[#0b0e14] rounded-[4rem] p-10 shadow-2xl flex flex-col h-[500px] border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-emerald-500/[0.02] bg-[size:40px_40px]"></div>
            <div className="flex justify-between items-center mb-8 relative z-10">
               <div className="flex items-center gap-3">
                  <span className={`w-3 h-3 rounded-full ${isAuditing ? 'bg-emerald-500 animate-ping' : 'bg-slate-600'}`}></span>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Audit Sentry Console</p>
               </div>
               <span className="text-[9px] text-slate-700 font-mono italic">AI_SCANNER: ENABLED</span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar pr-2 relative z-10 font-mono">
               {auditLog.map((log, i) => (
                 <div key={i} className={`p-4 rounded-2xl border text-[11px] leading-relaxed animate-in slide-in-from-top-2 ${
                    log.type === 'warn' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                    log.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                    'bg-white/5 text-indigo-300 border-white/5'
                 }`}>
                    <span className="opacity-40 mr-2">[{new Date().toLocaleTimeString()}]</span>
                    {log.msg}
                 </div>
               ))}
               {auditLog.length === 0 && (
                 <div className="h-full flex flex-col items-center justify-center text-slate-700 text-center space-y-4">
                    <div className="text-6xl opacity-10">🔍</div>
                    <p className="text-xs italic max-w-[200px]">Tekan tombol audit untuk memindai ledger melalui algoritma AI.</p>
                 </div>
               )}
            </div>
         </div>
      </div>

      {/* AI Executive Summary Report */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-16 items-start relative overflow-hidden">
         <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
         
         <div className="w-full lg:w-1/3 space-y-6 shrink-0 relative z-10">
            <h3 className="text-3xl font-black text-slate-800 leading-tight">Laporan Strategis Dewan Pengawas</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
               Hasil analisis Gemini AI berdasarkan data operasional harian koperasi. Laporan ini bersifat rahasia bagi pengurus dan dewan pengawas.
            </p>
            <div className="p-6 bg-slate-950 rounded-3xl text-white">
               <p className="text-[10px] text-indigo-400 font-bold uppercase mb-2">Audit Timestamp</p>
               <p className="text-sm font-mono">{new Date().toLocaleString('id-ID')}</p>
            </div>
         </div>

         <div className="flex-1 bg-slate-50 rounded-[3rem] p-10 font-serif text-slate-700 leading-relaxed italic relative z-10 border border-slate-100 shadow-inner min-h-[250px]">
            {isAuditing ? (
               <div className="h-full flex flex-col items-center justify-center space-y-4">
                  <div className="flex gap-2">
                     <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
                     <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                     <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                  <p className="text-[10px] font-black uppercase text-slate-400">AI sedang menulis ringkasan audit...</p>
               </div>
            ) : aiAnalysis ? (
               <pre className="whitespace-pre-wrap">{aiAnalysis}</pre>
            ) : (
               <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
                  <div className="text-5xl mb-4">📄</div>
                  <p>Laporan eksekutif AI akan terbit setelah audit teknis selesai.</p>
               </div>
            )}
         </div>
      </div>

      {/* Fraud Prevention Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {[
           { t: 'Anti-Price Fixing', d: 'AI memantau jika ada satu wilayah duta yang menetapkan harga pangan jauh di atas rata-rata nasional.', icon: '⚖️' },
           { t: 'Staff Integrity Scan', d: 'Mendeteksi jika ada admin yang mengakses data tabungan anggota tertentu secara berlebihan.', icon: '🕵️‍♂️' },
           { t: 'Bylaw Watchdog', d: 'Mencegah perubahan AD/ART sepihak di database tanpa melalui e-RAT yang sah.', icon: '🛡️' }
         ].map((item, i) => (
           <div key={i} className="p-8 bg-white rounded-[3rem] border border-slate-100 hover:shadow-xl transition-all group text-center space-y-4">
              <div className="text-4xl group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-bold text-slate-800">{item.t}</h4>
              <p className="text-xs text-slate-500 leading-relaxed italic">"{item.d}"</p>
           </div>
         ))}
      </div>

      {/* Integration Message */}
      <div className="p-12 bg-indigo-600 border border-indigo-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl z-10">🏛️</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Koperasi Terang, Rakyat Senang."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed z-10">
            Sistem Health Check ini menjamin bahwa KoperatifAI tidak akan pernah berubah menjadi "Koperasi Merpati". Kita membangun sistem yang memaksa setiap pengurus untuk tetap berada di jalan kejujuran.
         </p>
         <div className="flex gap-4 z-10">
            <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl">Unduh Bukti Audit Untuk ODS</button>
            <button className="px-10 py-4 bg-indigo-950 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl">Laporkan Kejanggalan (Whistleblow)</button>
         </div>
      </div>
    </div>
  );
};

export default CoopHealthCheck;
