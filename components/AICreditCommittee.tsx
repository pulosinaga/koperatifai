
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
    { subject: 'Vouching', A: 100, fullMark: 100 },
    { subject: 'History', A: 90, fullMark: 100 },
  ];

  const runAnalysis = () => {
    setIsAnalyzing(true);
    setDecision('IDLE');
    setAnalysisLogs([]);
    
    const logs = [
      "Mengambil data simpanan 6 bulan terakhir...",
      "Memeriksa integritas 3 Saksi Digital (Pionir verified)...",
      "Menghitung volume transaksi di Marketplace...",
      "Validasi poin Smart Education (Module 1-5 Completed)...",
      "Menganalisis rasio hutang vs modal kolektif wilayah...",
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
              Automated Credit Approval
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Komite Kredit AI: <br/>Adil, Cepat, & Objektif.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              Keputusan pinjaman modal usaha kini diambil berdasarkan **Karakter Terukur**, bukan kedekatan dengan pengurus.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🧠</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Decision Time</p>
             <p className="text-3xl font-black text-emerald-400 mt-1 italic">&lt; 10 Detik</p>
             <p className="text-[9px] text-slate-500 mt-2 uppercase tracking-tighter">Zero Corruption Risk</p>
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

               <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Tujuan Penggunaan</label>
                  <select className="w-full p-4 bg-slate-50 rounded-2xl text-sm font-bold border-none outline-none focus:ring-2 focus:ring-indigo-600">
                     <option>Stok Barang Dagangan (Retail)</option>
                     <option>Pembelian Alat Produksi (UMKM)</option>
                     <option>Renovasi Tempat Usaha</option>
                     <option>Biaya Pendidikan (Social Support)</option>
                  </select>
               </div>

               <div className="p-6 bg-indigo-50 rounded-3xl border border-indigo-100">
                  <p className="text-xs text-indigo-900 leading-relaxed font-medium">
                    "AI akan melakukan audit otomatis terhadap simpanan Anda dan 3 penjamin Anda sebelum memberikan keputusan."
                  </p>
               </div>

               <button 
                  onClick={runAnalysis}
                  disabled={isAnalyzing}
                  className={`w-full py-5 rounded-[2rem] font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 ${
                    isAnalyzing ? 'bg-slate-200 text-slate-400' : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
               >
                  {isAnalyzing ? 'Sedang Menganalisis...' : 'Kirim Ke Komite AI →'}
               </button>
            </div>
         </div>

         {/* AI Analysis View */}
         <div className="bg-slate-900 p-10 rounded-[4rem] shadow-2xl flex flex-col items-center justify-center overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
            
            {decision === 'IDLE' && !isAnalyzing ? (
               <div className="text-center space-y-6 relative z-10">
                  <div className="text-7xl opacity-20">📡</div>
                  <p className="text-slate-500 font-bold italic">Menunggu Pengajuan...</p>
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
                  <div className="w-32 h-32 bg-emerald-500 rounded-full mx-auto flex items-center justify-center text-6xl shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)]">✨</div>
                  <div className="space-y-2">
                     <h4 className="text-3xl font-black italic text-emerald-400">DISETUJUI!</h4>
                     <p className="text-slate-400">Pinjaman modal Anda dinyatakan **Aman** oleh sistem AI.</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/10 space-y-4">
                     <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-500">Margin Bunga:</span>
                        <span className="font-black text-white">0.9% (Promo Pionir)</span>
                     </div>
                     <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-500">Reputasi Cashback:</span>
                        <span className="font-black text-emerald-400">+5% dari total Jasa</span>
                     </div>
                  </div>
                  <button className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl">Tanda Tangan Akad Digital</button>
               </div>
            ) : null}
         </div>
      </div>

      {/* Philosophy of AI Neutrality */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-5xl shrink-0">⚖️</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-slate-800">Kenapa Menyingkirkan Manusia dari Keputusan?</h4>
            <p className="text-slate-500 text-lg leading-relaxed italic">
               "Korupsi di koperasi sering terjadi karena komite kredit menyetujui pinjaman teman atau kerabat tanpa dasar data (Nepotisme). AI tidak memiliki teman dan tidak bisa disogok. Ia hanya peduli pada satu hal: **Kejujuran Anggota** yang terbukti dari datanya."
            </p>
         </div>
      </div>

      {/* Legal & Tech Context */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="p-8 bg-slate-900 rounded-[3rem] text-white space-y-4 shadow-xl">
            <h5 className="font-bold text-indigo-400 uppercase text-[10px] tracking-widest">Digital Governance Check</h5>
            <ul className="space-y-4">
               <li className="flex gap-4">
                  <span className="text-emerald-500">🔒</span>
                  <p className="text-xs text-slate-400">Keputusan AI dicatat di Ledger Kriptografi yang tidak bisa diubah.</p>
               </li>
               <li className="flex gap-4">
                  <span className="text-emerald-500">🔓</span>
                  <p className="text-xs text-slate-400">Anggota berhak mengajukan banding (Appeal) jika keputusan AI dirasa keliru.</p>
               </li>
            </ul>
         </div>
         <div className="p-8 bg-white border border-slate-100 rounded-[3rem] shadow-sm flex flex-col justify-center text-center">
            <div className="text-4xl mb-4">✍️</div>
            <h5 className="font-bold text-slate-800">Smart Contract Legalitas</h5>
            <p className="text-[10px] text-slate-500 mt-2">
               Draf perjanjian dibuat otomatis sesuai UU Perkoperasian & dijamin oleh sertifikat digital. Sah sebagai bukti hukum di pengadilan RI.
            </p>
         </div>
      </div>
    </div>
  );
};

export default AICreditCommittee;
