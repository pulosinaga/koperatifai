
import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const AICreditCommittee: React.FC = () => {
  const [amount, setAmount] = useState(5000000);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [decision, setDecision] = useState<'IDLE' | 'APPROVED' | 'REJECTED' | 'REVIEW'>('IDLE');
  const [analysisLogs, setAnalysisLogs] = useState<string[]>([]);

  const radarData = [
    { subject: 'Savings', A: 85, fullMark: 100 },
    { subject: 'Pasar', A: 70, fullMark: 100 },
    { subject: 'Literasi', A: 95, fullMark: 100 },
    { subject: 'Social (10)', A: 100, fullMark: 100 },
    { subject: 'History', A: 90, fullMark: 100 },
  ];

  const runAnalysis = () => {
    setIsAnalyzing(true);
    setDecision('IDLE');
    setAnalysisLogs([]);
    
    const logs = [
      "Mengambil data simpanan 6 bulan terakhir...",
      "Memeriksa Integritas 'Lingkaran Sepuluh' (10 Saksi Digital)...",
      "Validasi Reputasi kolektif 10 penjamin (Status: Platinum)...",
      "Menganalisis rasio hutang vs jaminan moral kolektif 10 orang...",
      "Menghitung volume transaksi di Marketplace...",
      "Validasi poin Smart Education (Module 1-5 Completed)...",
      "Finalizing Risk Score via Gemini Engine..."
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < logs.length) {
        setAnalysisLogs(prev => [...prev, logs[i]]);
        i++;
      } else {
        clearInterval(interval);
        setIsAnalyzing(false);
        setDecision('APPROVED');
      }
    }, 1000);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Committee Header */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Decentralized Social Underwriting
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Komite Kredit AI: <br/>Analisis 10 Pilar Jaminan.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              Keputusan pinjaman kini didasarkan pada kekuatan **Solidaritas 10 Orang**. AI memvalidasi riwayat ekonomi seluruh penjamin Anda.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🧩</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Guarantee Strength</p>
             <p className="text-3xl font-black text-emerald-400 mt-1 italic">MAXIMUM (10/10)</p>
             <p className="text-[9px] text-slate-500 mt-2 uppercase tracking-tighter italic">Secured by Social Capital</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Loan Request Form */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic">Pengajuan Modal Mikro</h3>
            
            <div className="space-y-6">
               <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Jumlah Pinjaman (Rp)</label>
                  <input 
                     type="range" min="1000000" max="25000000" step="500000"
                     value={amount}
                     onChange={(e) => setAmount(Number(e.target.value))}
                     className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
                  />
                  <p className="text-2xl font-black text-indigo-600 mt-4 italic">Rp {amount.toLocaleString('id-ID')}</p>
               </div>

               <div className="p-6 bg-indigo-50 rounded-3xl border border-indigo-100">
                  <div className="flex gap-4 items-center">
                     <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">🤝</div>
                     <p className="text-xs text-indigo-900 leading-relaxed font-bold">
                       "10 Orang Penjamin Anda terdeteksi Aktif & Patuh. Ini meningkatkan peluang persetujuan hingga 98%."
                     </p>
                  </div>
               </div>

               <button 
                  onClick={runAnalysis}
                  disabled={isAnalyzing}
                  className={`w-full py-5 rounded-[2rem] font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 ${
                    isAnalyzing ? 'bg-slate-200 text-slate-400' : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
               >
                  {isAnalyzing ? 'Sedang Memeriksa 10 Saksi...' : 'Kirim Ke Komite AI →'}
               </button>
            </div>
         </div>

         {/* AI Analysis View */}
         <div className="bg-slate-900 p-10 rounded-[4rem] shadow-2xl flex flex-col items-center justify-center overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
            
            {decision === 'IDLE' && !isAnalyzing ? (
               <div className="text-center space-y-6 relative z-10">
                  <div className="text-7xl opacity-20">📡</div>
                  <p className="text-slate-500 font-bold italic">Menunggu Validasi Kolektif 10 Orang...</p>
               </div>
            ) : isAnalyzing ? (
               <div className="w-full space-y-8 relative z-10">
                  <div className="h-64 w-full">
                     <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                           <PolarGrid stroke="#ffffff20" />
                           <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 'bold' }} />
                           <Radar name="Member" dataKey="A" stroke="#6366f1" fill="#6366f1" fillOpacity={0.6} />
                        </RadarChart>
                     </ResponsiveContainer>
                  </div>
                  <div className="space-y-2 font-mono">
                     {analysisLogs.map((log, i) => (
                        <p key={i} className="text-[10px] text-emerald-400 animate-in slide-in-from-left duration-300">
                           {`> ${log}`}
                        </p>
                     ))}
                     <div className="w-4 h-4 bg-indigo-500 rounded-full animate-ping ml-auto"></div>
                  </div>
               </div>
            ) : decision === 'APPROVED' ? (
               <div className="text-center space-y-8 animate-in zoom-in duration-500 relative z-10">
                  <div className="w-32 h-32 bg-emerald-500 rounded-full mx-auto flex items-center justify-center text-6xl shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)]">🏛️</div>
                  <div className="space-y-2">
                     <h4 className="text-3xl font-black italic text-emerald-400">MODAL CAIR!</h4>
                     <p className="text-slate-400">Dijamin oleh **10 Saksi Digital** berprestasi.</p>
                  </div>
                  <button className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl">Tanda Tangan Akad Kolektif</button>
               </div>
            ) : null}
         </div>
      </div>
    </div>
  );
};

export default AICreditCommittee;
