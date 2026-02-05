
import React, { useState, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const GlobalSHUSimulation: React.FC = () => {
  const [memberCount, setMemberCount] = useState(1248);
  const [avgTransactionValue, setAvgTransactionValue] = useState(50000);
  const [transactionsPerMonth, setTransactionsPerMonth] = useState(4);

  // Constants for calculation
  const platformFee = 1000; // Rp 1.000 per marketplace transaction
  const qrisFeePercent = 0.004; // 0.4%
  const loanInterestMargin = 0.006; // 0.6% net margin after expenses

  // Calculations
  const marketplaceRevenue = memberCount * transactionsPerMonth * platformFee;
  const qrisRevenue = memberCount * (avgTransactionValue * 2) * qrisFeePercent; // Assume 2 scans per month
  const loanRevenue = (memberCount * 2000000) * loanInterestMargin; // Assume avg loan 2jt per member

  const totalGrossRevenue = marketplaceRevenue + qrisRevenue + loanRevenue;
  const operationalExpenses = totalGrossRevenue * 0.2; // 20% for AI, Servers, Gaji
  const netSHU = totalGrossRevenue - operationalExpenses;

  // Distribution based on Cooperative Law (example)
  const distributionData = [
    { name: 'Cadangan Koperasi (25%)', value: netSHU * 0.25, color: '#4338ca' },
    { name: 'Jasa Anggota (40%)', value: netSHU * 0.40, color: '#10b981' },
    { name: 'Dana Pendidikan (10%)', value: netSHU * 0.10, color: '#f59e0b' },
    { name: 'Dana Sosial (10%)', value: netSHU * 0.10, color: '#ef4444' },
    { name: 'Gaji Pengurus (15%)', value: netSHU * 0.15, color: '#6366f1' },
  ];

  // User's Individual Estimation (Budi)
  // Logic: User gets a share of 'Jasa Anggota' based on their participation
  const userParticipationRatio = 1 / memberCount; 
  const userEstimatedSHU = (netSHU * 0.40) * userParticipationRatio;

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Header */}
      <div className="bg-indigo-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Profit Sharing Intelligence
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Transparansi SHU: <br/>Setiap Rupiah Kembali Ke Anda.</h2>
            <p className="text-indigo-200 text-lg leading-relaxed max-w-2xl">
              Gunakan simulator ini untuk melihat bagaimana ekosistem kita menciptakan kekayaan bersama tanpa memeras rakyat.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Total Potensi SHU / Bulan</p>
             <p className="text-4xl font-black text-emerald-400 mt-2">Rp {netSHU.toLocaleString('id-ID', { maximumFractionDigits: 0 })}</p>
             <div className="mt-6 p-4 bg-white/5 rounded-2xl">
                <p className="text-[10px] text-slate-400 uppercase font-black">Estimasi Bagian Anda</p>
                <p className="text-2xl font-black text-white">Rp {userEstimatedSHU.toLocaleString('id-ID', { maximumFractionDigits: 0 })}</p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Controls Section */}
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8 h-fit">
            <h3 className="text-xl font-black text-slate-800 italic">Scaling Simulator</h3>
            
            <div className="space-y-4">
               <label className="flex justify-between text-xs font-black text-slate-400 uppercase">
                  <span>Jumlah Anggota</span>
                  <span className="text-indigo-600">{memberCount.toLocaleString()}</span>
               </label>
               <input 
                type="range" min="100" max="50000" step="100" value={memberCount} 
                onChange={(e) => setMemberCount(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
               />
            </div>

            <div className="space-y-4">
               <label className="flex justify-between text-xs font-black text-slate-400 uppercase">
                  <span>Belanja per Bulan (Rp)</span>
                  <span className="text-indigo-600">{avgTransactionValue.toLocaleString()}</span>
               </label>
               <input 
                type="range" min="10000" max="1000000" step="10000" value={avgTransactionValue} 
                onChange={(e) => setAvgTransactionValue(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
               />
            </div>

            <div className="space-y-4">
               <label className="flex justify-between text-xs font-black text-slate-400 uppercase">
                  <span>Frekuensi Transaksi</span>
                  <span className="text-indigo-600">{transactionsPerMonth}x</span>
               </label>
               <input 
                type="range" min="1" max="20" step="1" value={transactionsPerMonth} 
                onChange={(e) => setTransactionsPerMonth(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
               />
            </div>

            <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
               <p className="text-[10px] text-indigo-700 leading-relaxed italic">
                 "Semakin banyak anggota belanja di Pasar Koperasi & menggunakan QRIS kita, semakin besar SHU yang diterima semua orang."
               </p>
            </div>
         </div>

         {/* Distribution Chart */}
         <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col">
            <h3 className="text-2xl font-black text-slate-800 mb-8">Alokasi Distribusi Sesuai UU</h3>
            <div className="flex-1 flex flex-col md:flex-row items-center gap-8">
               <div className="w-full md:w-1/2 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                     <PieChart>
                        <Pie
                           data={distributionData}
                           cx="50%"
                           cy="50%"
                           innerRadius={60}
                           outerRadius={80}
                           paddingAngle={5}
                           dataKey="value"
                        >
                           {distributionData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                           ))}
                        </Pie>
                        <Tooltip 
                           contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                           formatter={(value: number) => `Rp ${value.toLocaleString('id-ID', { maximumFractionDigits: 0 })}`}
                        />
                     </PieChart>
                  </ResponsiveContainer>
               </div>
               <div className="flex-1 space-y-4">
                  {distributionData.map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                       <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                          <span className="text-slate-600 font-medium">{item.name}</span>
                       </div>
                       <span className="font-black text-slate-800 italic">Rp {item.value.toLocaleString('id-ID', { maximumFractionDigits: 0 })}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {/* Revenue Source Breakdown */}
      <div className="bg-slate-900 rounded-[4rem] p-12 text-white space-y-8 shadow-xl">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black italic text-indigo-400">Darimana Uang Berasal?</h3>
            <p className="text-slate-500">Membongkar model bisnis sirkular KoperatifAI.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 space-y-4">
               <div className="text-4xl">🛒</div>
               <h4 className="font-bold text-lg">Platform Fee Marketplace</h4>
               <p className="text-3xl font-black text-indigo-300">Rp {marketplaceRevenue.toLocaleString('id-ID')}</p>
               <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Rp 1.000 x Vol. Transaksi</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 space-y-4">
               <div className="text-4xl">🤳</div>
               <h4 className="font-bold text-lg">Merchant QRIS Fee</h4>
               <p className="text-3xl font-black text-emerald-400">Rp {qrisRevenue.toLocaleString('id-ID', { maximumFractionDigits: 0 })}</p>
               <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">0.4% per transaksi fisik</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 space-y-4">
               <div className="text-4xl">💰</div>
               <h4 className="font-bold text-lg">Spread Jasa Pinjaman</h4>
               <p className="text-3xl font-black text-amber-400">Rp {loanRevenue.toLocaleString('id-ID', { maximumFractionDigits: 0 })}</p>
               <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Margin 0.6% dari Putaran Modal</p>
            </div>
         </div>
      </div>

      {/* Founder Motivation */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8">
         <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-5xl">⚖️</div>
         <h4 className="text-3xl font-black text-slate-800 max-w-xl italic">"Bukan Eksploitasi, Tapi Kolaborasi."</h4>
         <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
            Inilah rahasia mengapa sistem ini bisa menghasilkan uang. Kita tidak mengambil profit besar dari satu orang (seperti bank), tapi kita mengambil <b>Nilai Sangat Kecil (Micro-value)</b> dari aktivitas ekonomi ribuan orang setiap detiknya.
         </p>
         <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all shadow-xl">Kunci Target SHU Tahun Ini</button>
      </div>
    </div>
  );
};

export default GlobalSHUSimulation;
