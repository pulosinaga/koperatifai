
import React, { useState, useMemo } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const AICreditScoring: React.FC = () => {
  const [savingsFreq, setSavingsFreq] = useState(85);
  const [marketplaceVol, setMarketplaceVol] = useState(60);
  const [eduPoints, setEduPoints] = useState(90);
  const [vouchCount, setVouchCount] = useState(40);
  const [repaymentLog, setRepaymentLog] = useState(100);

  const calculateScore = () => {
    const total = (savingsFreq + marketplaceVol + eduPoints + vouchCount + repaymentLog) / 5;
    return Math.round(total * 10); // Scale to 1000
  };

  const currentScore = calculateScore();

  const data = useMemo(() => [
    { subject: 'Savings Freq', A: savingsFreq, fullMark: 100 },
    { subject: 'Marketplace', A: marketplaceVol, fullMark: 100 },
    { subject: 'Literacy', A: eduPoints, fullMark: 100 },
    { subject: 'Vouching', A: vouchCount, fullMark: 100 },
    { subject: 'Repayment', A: repaymentLog, fullMark: 100 },
  ], [savingsFreq, marketplaceVol, eduPoints, vouchCount, repaymentLog]);

  const getRiskStatus = () => {
    if (currentScore > 850) return { label: 'PRIME', color: 'text-emerald-500', bg: 'bg-emerald-500/10' };
    if (currentScore > 650) return { label: 'HEALTHY', color: 'text-indigo-400', bg: 'bg-indigo-400/10' };
    return { label: 'CAUTION', color: 'text-rose-500', bg: 'bg-rose-500/10' };
  };

  const status = getRiskStatus();

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Deep Tech Header */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Scoring Intelligence Protocol
            </span>
            <h2 className="text-4xl font-black leading-tight italic">AI Credit Scoring: <br/>Menilai Karakter di Balik Angka.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Kami tidak butuh BI Checking. AI kami memantau **Integritas Digital** Anda melalui 5 pilar perilaku ekonomi dalam ekosistem KoperatifAI.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl relative">
             <div className="absolute -top-4 -right-4 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center animate-pulse">🧠</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">KoperatifAI Score</p>
             <p className="text-6xl font-black text-white mt-2">{currentScore}</p>
             <div className={`mt-6 px-6 py-2 rounded-full ${status.bg} ${status.color} font-black text-xs uppercase tracking-[0.2em] border border-current/20`}>
                {status.label}
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Simulation Controls */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic">Simulator Perilaku</h3>
            <p className="text-sm text-slate-500">Geser parameter untuk melihat bagaimana AI memproses risiko.</p>
            
            <div className="space-y-6">
               {[
                 { label: 'Kedisiplinan Menabung', val: savingsFreq, set: setSavingsFreq, icon: '💰' },
                 { label: 'Aktivitas Marketplace', val: marketplaceVol, set: setMarketplaceVol, icon: '🛒' },
                 { label: 'Poin Literasi (Edu)', val: eduPoints, set: setEduPoints, icon: '🎓' },
                 { label: 'Jumlah Saksi (Vouch)', val: vouchCount, set: setVouchCount, icon: '🤝' },
                 { label: 'Log Angsuran Tepat Waktu', val: repaymentLog, set: setRepaymentLog, icon: '⚡' },
               ].map((item, i) => (
                 <div key={i} className="space-y-3">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase">
                       <span className="flex items-center gap-2"><span>{item.icon}</span> {item.label}</span>
                       <span className="text-indigo-600">{item.val}%</span>
                    </div>
                    <input 
                      type="range" min="0" max="100" value={item.val} 
                      onChange={(e) => item.set(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                    />
                 </div>
               ))}
            </div>
         </div>

         {/* Radar Visualization */}
         <div className="bg-slate-900 p-10 rounded-[4rem] shadow-xl flex flex-col items-center justify-center overflow-hidden">
            <h3 className="text-xl font-black text-indigo-400 mb-8 uppercase tracking-widest italic">Psychographic Analysis</h3>
            <div className="w-full h-80">
               <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                     <PolarGrid stroke="#ffffff20" />
                     <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 'bold' }} />
                     <PolarRadiusAxis angle={30} domain={[0, 100]} hide />
                     <Radar
                        name="Member Profile"
                        dataKey="A"
                        stroke="#6366f1"
                        fill="#6366f1"
                        fillOpacity={0.6}
                     />
                  </RadarChart>
               </ResponsiveContainer>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 w-full">
               <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <p className="text-[10px] text-slate-500 uppercase font-black">Loan Limit (Est)</p>
                  <p className="text-lg font-bold text-white">Rp {(currentScore * 100000).toLocaleString('id-ID')}</p>
               </div>
               <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <p className="text-[10px] text-slate-500 uppercase font-black">Confidence Level</p>
                  <p className="text-lg font-bold text-emerald-400">98.4%</p>
               </div>
            </div>
         </div>
      </div>

      {/* Philosophy of Fairness */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1 space-y-8">
               <h3 className="text-3xl font-black text-slate-800">Bagaimana AI Membedakan Anggota?</h3>
               <div className="space-y-6">
                  <div className="p-8 bg-emerald-50 rounded-[3rem] border border-emerald-100 group">
                     <h4 className="text-xl font-bold text-emerald-900 flex items-center gap-3">
                        <span className="text-2xl">💎</span> Tipe: "The Community Pillar"
                     </h4>
                     <p className="text-sm text-emerald-700 mt-3 leading-relaxed italic">
                        "Menabung rutin meski nominal kecil, aktif belanja produk teman di marketplace, dan selalu menyelesaikan modul edukasi."
                     </p>
                     <p className="text-xs font-black text-emerald-600 mt-4 uppercase">Keputusan AI: PRIORITAS PINJAMAN & BUNGA RENDAH.</p>
                  </div>

                  <div className="p-8 bg-rose-50 rounded-[3rem] border border-rose-100">
                     <h4 className="text-xl font-bold text-rose-900 flex items-center gap-3">
                        <span className="text-2xl">⚠️</span> Tipe: "The Opportunist"
                     </h4>
                     <p className="text-sm text-rose-700 mt-3 leading-relaxed italic">
                        "Hanya aktif saat ingin meminjam dana, tidak pernah menabung simpanan wajib, dan tidak memiliki penjamin (Vouch) dari anggota lama."
                     </p>
                     <p className="text-xs font-black text-rose-600 mt-4 uppercase">Keputusan AI: LIMIT TERBATAS & WAJIB PENDAMPINGAN.</p>
                  </div>
               </div>
            </div>
            <div className="w-full lg:w-80 space-y-6">
               <div className="bg-indigo-600 p-8 rounded-[3rem] text-white shadow-2xl rotate-2">
                  <div className="text-5xl mb-4">⚖️</div>
                  <h4 className="font-bold text-lg leading-tight">Inilah Keadilan Sosial yang Sebenarnya.</h4>
                  <p className="text-xs text-indigo-100 mt-4 leading-relaxed">
                     Di bank, si kaya dapat bunga rendah. Di KoperatifAI, si **Jujur & Rajin** yang dapat bunga rendah.
                  </p>
               </div>
               <div className="p-8 bg-slate-900 rounded-[3rem] text-white shadow-xl -rotate-1">
                  <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-4">Integrity Log</p>
                  <ul className="space-y-3">
                     <li className="flex gap-2 text-[10px]"><span>✅</span> Data Anti-Manipulation</li>
                     <li className="flex gap-2 text-[10px]"><span>✅</span> Zero Bias Algorithm</li>
                     <li className="flex gap-2 text-[10px]"><span>✅</span> Privacy First Storage</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>

      {/* Final Call to Action */}
      <div className="p-12 bg-indigo-950 border border-indigo-900 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-5xl shadow-xl z-10">🛡️</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"AI Kami Tidak Mengenal Kolusi & Nepotisme."</h4>
         <p className="text-indigo-200 max-w-2xl text-lg leading-relaxed z-10">
            Sistem scoring ini melindungi dana Anda. Ia memastikan bahwa modal yang dikumpulkan oleh seluruh anggota hanya disalurkan kepada mereka yang benar-benar **Berintegritas**.
         </p>
         <div className="flex gap-4 z-10">
            <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl">Audit Algoritma AI</button>
         </div>
      </div>
    </div>
  );
};

export default AICreditScoring;
