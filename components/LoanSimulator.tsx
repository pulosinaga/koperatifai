
import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const LoanSimulator: React.FC = () => {
  const [amount, setAmount] = useState(10000000);
  const [tenure, setTenure] = useState(12);
  const [interest, setInterest] = useState(1.2); // Jasa Bulanan Flat
  const [result, setResult] = useState({ monthly: 0, total: 0, totalInterest: 0 });
  const [bankResult, setBankResult] = useState({ monthly: 0, total: 0, totalInterest: 0, savings: 0 });

  const BANK_INTEREST_RATE = 3.5; // Estimasi bunga bank konvensional (flat)

  useEffect(() => {
    const calculate = () => {
      // Kalkulasi Koperasi
      const monthlyPrincipal = amount / tenure;
      const monthlyInterest = amount * (interest / 100);
      const monthlyPayment = monthlyPrincipal + monthlyInterest;
      const totalInterest = monthlyInterest * tenure;
      const totalPayment = monthlyPayment * tenure;
      setResult({ monthly: monthlyPayment, total: totalPayment, totalInterest });

      // Kalkulasi Perbandingan Bank
      const bankMonthlyInterest = amount * (BANK_INTEREST_RATE / 100);
      const bankMonthlyPayment = monthlyPrincipal + bankMonthlyInterest;
      const bankTotalInterest = bankMonthlyInterest * tenure;
      const bankTotalPayment = bankMonthlyPayment * tenure;
      const savings = bankTotalPayment - totalPayment;
      
      setBankResult({ 
        monthly: bankMonthlyPayment, 
        total: bankTotalPayment, 
        totalInterest: bankTotalInterest,
        savings: savings
      });
    };
    calculate();
  }, [amount, tenure, interest]);

  const chartData = useMemo(() => [
    { name: 'Pokok Pinjaman', value: amount, color: '#4f46e5' },
    { name: 'Total Jasa Koperasi', value: result.totalInterest, color: '#f43f5e' },
  ], [amount, result.totalInterest]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Hero Header */}
      <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
        <div className="w-20 h-20 bg-indigo-600 rounded-[2rem] flex items-center justify-center text-4xl shadow-xl text-white shrink-0 z-10">🧮</div>
        <div className="z-10 text-center md:text-left">
          <h2 className="text-3xl font-black text-slate-800 italic tracking-tight">Simulator Pinjaman Adil</h2>
          <p className="text-slate-500 text-lg leading-relaxed mt-1">Transparansi penuh untuk kedaulatan finansial Anda.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Controls */}
        <div className="space-y-8">
          <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <div className="space-y-10">
              {/* Amount Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Jumlah Pinjaman</label>
                  <span className="text-2xl font-black text-indigo-600 font-mono">Rp {amount.toLocaleString('id-ID')}</span>
                </div>
                <input 
                  type="range" min="1000000" max="100000000" step="500000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[10px] font-bold text-slate-300 uppercase">
                  <span>1 Juta</span>
                  <span>100 Juta</span>
                </div>
              </div>

              {/* Tenure Selection */}
              <div className="space-y-4">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Tenor (Bulan)</label>
                <div className="grid grid-cols-4 gap-3">
                  {[6, 12, 24, 36].map(t => (
                    <button
                      key={t}
                      onClick={() => setTenure(t)}
                      className={`py-4 rounded-2xl text-sm font-black transition-all ${
                        tenure === t ? 'bg-indigo-600 text-white shadow-xl scale-105 ring-4 ring-indigo-50' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                      }`}
                    >
                      {t} Bln
                    </button>
                  ))}
                </div>
              </div>

              {/* Interest Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Jasa Layanan (%)</label>
                  <span className="text-xl font-black text-indigo-600 font-mono">{interest}% <span className="text-[10px] text-slate-400 font-bold">/ Bln</span></span>
                </div>
                <input 
                  type="range" min="0.5" max="3.0" step="0.1"
                  value={interest}
                  onChange={(e) => setInterest(Number(e.target.value))}
                  className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
                />
                <p className="text-[9px] text-slate-400 italic font-medium">*Nilai jasa ditentukan oleh Skor Integritas AI Anda.</p>
              </div>
            </div>
          </div>

          {/* Comparison Shield */}
          <div className="bg-emerald-600 rounded-[3.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl">🛡️</div>
                <h4 className="text-xl font-black italic uppercase tracking-tighter">Perisai Ekonomi Koperasi</h4>
              </div>
              <div className="grid grid-cols-2 gap-8 border-b border-white/10 pb-6">
                <div>
                  <p className="text-[10px] font-black text-emerald-200 uppercase mb-1 opacity-60">Bank Konvensional</p>
                  <p className="text-lg font-bold opacity-60">Rp {bankResult.monthly.toLocaleString('id-ID', { maximumFractionDigits: 0 })}/bln</p>
                  <p className="text-[9px] text-emerald-200/50 mt-1">*Bunga Flat 3.5%</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-white uppercase mb-1">KoperatifAI (Adil)</p>
                  <p className="text-3xl font-black">Rp {result.monthly.toLocaleString('id-ID', { maximumFractionDigits: 0 })}/bln</p>
                  <p className="text-[9px] text-emerald-200 mt-1">Iuran Jasa {interest}%</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest text-[10px]">Total Dana Yang Dihemat:</p>
                  <h3 className="text-4xl font-black text-white tracking-tighter mt-1">Rp {bankResult.savings.toLocaleString('id-ID', { maximumFractionDigits: 0 })}</h3>
                </div>
                <div className="bg-white p-4 rounded-3xl text-emerald-600 text-center shadow-lg transform -rotate-3 hover:rotate-0 transition-transform">
                   <p className="text-[9px] font-black uppercase tracking-widest leading-none mb-1">Surplus<br/>Keadilan</p>
                   <p className="text-2xl font-black">+{((bankResult.savings / bankResult.total) * 100).toFixed(0)}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Sidebar */}
        <div className="space-y-8">
           <div className="bg-slate-900 p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden flex flex-col justify-center text-center">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>
              <p className="text-xs font-black text-indigo-400 uppercase tracking-[0.3em] mb-4">Angsuran Bulanan</p>
              <h3 className="text-6xl font-black text-white italic tracking-tighter">
                Rp {result.monthly.toLocaleString('id-ID', { maximumFractionDigits: 0 })}
              </h3>
              <div className="mt-12 pt-10 border-t border-white/5 grid grid-cols-2 gap-8 text-left">
                 <div>
                   <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Total Kembali</p>
                   <p className="text-xl font-black">Rp {result.total.toLocaleString('id-ID', { maximumFractionDigits: 0 })}</p>
                 </div>
                 <div>
                   <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Total Jasa (Fee)</p>
                   <p className="text-xl font-black text-indigo-400">Rp {result.totalInterest.toLocaleString('id-ID', { maximumFractionDigits: 0 })}</p>
                 </div>
              </div>
              <button className="w-full mt-12 py-6 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all active:scale-95 group">
                 AJUKAN PINJAMAN PRODUKTIF 
                 <span className="ml-2 group-hover:translate-x-2 transition-transform inline-block">→</span>
              </button>
           </div>

           <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col items-center">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">Struktur Pengembalian Modal</h4>
              <div className="w-full h-56">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                       <Pie data={chartData} innerRadius={65} outerRadius={85} paddingAngle={8} dataKey="value">
                          {chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />)}
                       </Pie>
                       <Tooltip 
                        contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontWeight: 'bold' }}
                        formatter={(value: number) => `Rp ${value.toLocaleString('id-ID')}`} 
                       />
                    </PieChart>
                 </ResponsiveContainer>
              </div>
              <div className="flex gap-8 mt-6">
                 <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">Pokok Modal</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">Iuran Jasa</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default LoanSimulator;
