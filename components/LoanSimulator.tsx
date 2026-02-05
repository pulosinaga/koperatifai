
import React, { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const LoanSimulator: React.FC = () => {
  const [amount, setAmount] = useState(10000000);
  const [tenure, setTenure] = useState(12);
  const [interest, setInterest] = useState(1.5); // Monthly Flat
  const [result, setResult] = useState({ monthly: 0, total: 0, totalInterest: 0 });
  const [bankResult, setBankResult] = useState({ monthly: 0, total: 0, totalInterest: 0, savings: 0 });

  const BANK_INTEREST_RATE = 3.5; // Estimasi bunga pinjaman tanpa agunan bank konvensional (Flat)

  useEffect(() => {
    const calculate = () => {
      // Perhitungan Koperasi
      const monthlyPrincipal = amount / tenure;
      const monthlyInterest = amount * (interest / 100);
      const monthlyPayment = monthlyPrincipal + monthlyInterest;
      const totalInterest = monthlyInterest * tenure;
      const totalPayment = monthlyPayment * tenure;
      setResult({ monthly: monthlyPayment, total: totalPayment, totalInterest });

      // Perhitungan Perbandingan Bank
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
    { name: 'Total Bunga', value: result.totalInterest, color: '#f43f5e' },
  ], [amount, result.totalInterest]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-8">
        <div className="w-20 h-20 bg-indigo-600 rounded-[2rem] flex items-center justify-center text-4xl shadow-lg text-white">🧮</div>
        <div>
          <h2 className="text-3xl font-black text-slate-800 italic">Simulator Pinjaman Adil</h2>
          <p className="text-slate-500 text-lg">Bandingkan transparansi bunga kami dengan bank konvensional.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Jumlah Pinjaman (Rp)</label>
                  <span className="text-xl font-black text-indigo-600">Rp {amount.toLocaleString('id-ID')}</span>
                </div>
                <input 
                  type="range" min="1000000" max="100000000" step="500000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Tenor (Bulan)</label>
                <div className="grid grid-cols-4 gap-3">
                  {[6, 12, 24, 36].map(t => (
                    <button
                      key={t}
                      onClick={() => setTenure(t)}
                      className={`py-4 rounded-2xl text-sm font-black transition-all ${
                        tenure === t ? 'bg-indigo-600 text-white shadow-xl scale-105' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                      }`}
                    >
                      {t} Bln
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Bunga KoperatifAI (%)</label>
                  <span className="text-lg font-black text-indigo-600">{interest}%</span>
                </div>
                <input 
                  type="range" min="0.5" max="3.0" step="0.1"
                  value={interest}
                  onChange={(e) => setInterest(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>
            </div>
          </div>

          <div className="bg-emerald-600 rounded-[3.5rem] p-10 text-white shadow-xl relative overflow-hidden group">
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🛡️</span>
                <h4 className="text-xl font-black italic uppercase tracking-tighter">Perbandingan Kesejahteraan</h4>
              </div>
              <div className="grid grid-cols-2 gap-8 border-b border-white/10 pb-6">
                <div>
                  <p className="text-[10px] font-black text-emerald-200 uppercase mb-1">Bank Konvensional</p>
                  <p className="text-lg font-bold opacity-60">Rp {bankResult.monthly.toLocaleString('id-ID', { maximumFractionDigits: 0 })}/bln</p>
                  <p className="text-[9px] text-emerald-200/50 mt-1">*Bunga 3.5% Flat</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-white uppercase mb-1">KoperatifAI</p>
                  <p className="text-2xl font-black">Rp {result.monthly.toLocaleString('id-ID', { maximumFractionDigits: 0 })}/bln</p>
                  <p className="text-[9px] text-emerald-200 mt-1">Bunga {interest}%</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <p className="text-sm font-bold">Dana Yang Berhasil Dihemat:</p>
                  <h3 className="text-4xl font-black text-white tracking-tighter mt-1">Rp {bankResult.savings.toLocaleString('id-ID', { maximumFractionDigits: 0 })}</h3>
                </div>
                <div className="bg-white/20 px-6 py-3 rounded-2xl border border-white/30 text-center animate-pulse">
                   <p className="text-[10px] font-black uppercase">Keuntungan</p>
                   <p className="text-xl font-black">+{((bankResult.savings / bankResult.total) * 100).toFixed(0)}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
           <div className="bg-slate-900 p-10 rounded-[4rem] text-white shadow-2xl relative overflow-hidden flex flex-col justify-center text-center">
              <p className="text-xs font-bold text-indigo-400 uppercase tracking-[0.2em] mb-2">Angsuran Bulanan Kami</p>
              <h3 className="text-5xl font-black text-white italic tracking-tighter">
                Rp {result.monthly.toLocaleString('id-ID', { maximumFractionDigits: 0 })}
              </h3>
              <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                 <div>
                   <p className="text-[10px] text-slate-500 uppercase font-black">Total Bayar</p>
                   <p className="text-lg font-bold">Rp {result.total.toLocaleString('id-ID', { maximumFractionDigits: 0 })}</p>
                 </div>
                 <div>
                   <p className="text-[10px] text-slate-500 uppercase font-black">Total Bunga</p>
                   <p className="text-lg font-bold text-rose-400">Rp {result.totalInterest.toLocaleString('id-ID', { maximumFractionDigits: 0 })}</p>
                 </div>
              </div>
           </div>

           <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm flex flex-col items-center">
              <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Struktur Pengembalian</h4>
              <div className="w-full h-48">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                       <Pie data={chartData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                          {chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                       </Pie>
                       <Tooltip formatter={(value: number) => `Rp ${value.toLocaleString('id-ID')}`} />
                    </PieChart>
                 </ResponsiveContainer>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default LoanSimulator;
