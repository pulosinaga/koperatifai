import React, { useState, useMemo } from 'react';
import { AreaChart, Area, XAxis, ResponsiveContainer, Tooltip } from 'recharts';

const MemberBenefitSimulator: React.FC = () => {
  const [dailySavings, setDailySavings] = useState(2000);
  const [monthlySpend, setMonthlySpend] = useState(500000);

  const projectionData = useMemo(() => {
    const data = [];
    let balance = 0;
    for (let i = 1; i <= 12; i++) {
      balance += (dailySavings * 30) + (monthlySpend * 0.02); // Savings + Small SHU est
      data.push({ month: `Bln ${i}`, val: balance });
    }
    return data;
  }, [dailySavings, monthlySpend]);

  const yearTotal = projectionData[11].val;
  const loanLimit = yearTotal * 3;

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <header className="space-y-1 text-center">
        <h2 className="text-4xl font-black text-slate-800 italic uppercase tracking-tight">Kalkulator Kesejahteraan.</h2>
        <p className="text-slate-500 font-medium">Duta: Gunakan layar ini untuk menunjukkan bukti kemakmuran kepada warga.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Input Controls */}
         <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <div className="space-y-6">
               <div className="space-y-3">
                  <div className="flex justify-between items-center">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nabung Receh Harian</label>
                     <span className="text-xl font-black text-indigo-600">Rp {dailySavings.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" min="1000" max="20000" step="1000" value={dailySavings}
                    onChange={(e) => setDailySavings(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-full appearance-none accent-indigo-600"
                  />
               </div>
               <div className="space-y-3">
                  <div className="flex justify-between items-center">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Belanja di Pasar Koperasi / Bln</label>
                     <span className="text-xl font-black text-indigo-600">Rp {monthlySpend.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" min="100000" max="5000000" step="100000" value={monthlySpend}
                    onChange={(e) => setMonthlySpend(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-full appearance-none accent-indigo-600"
                  />
               </div>
            </div>

            <div className="p-8 bg-indigo-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
               <p className="text-[10px] font-black text-indigo-300 uppercase mb-2">Total Tabungan & SHU 1 Tahun</p>
               <h4 className="text-5xl font-black italic tracking-tighter text-emerald-400">Rp {yearTotal.toLocaleString('id-ID')}</h4>
               <p className="text-[10px] text-indigo-200 mt-4 leading-relaxed italic">"Pak, uang ini murni milik Bapak. Bisa ditarik buat bayar sekolah anak."</p>
            </div>
         </div>

         {/* Impact Visual */}
         <div className="space-y-8">
            <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm flex-1">
               <h3 className="text-xl font-black text-slate-800 italic mb-6">Pertumbuhan Aset Bapak/Ibu</h3>
               <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={projectionData}>
                        <XAxis dataKey="month" hide />
                        <Tooltip />
                        <Area type="monotone" dataKey="val" stroke="#6366f1" fill="#6366f1" fillOpacity={0.1} strokeWidth={4} />
                     </AreaChart>
                  </ResponsiveContainer>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
               <div className="bg-emerald-50 p-8 rounded-[3rem] border border-emerald-100 text-center space-y-2">
                  <p className="text-[10px] font-black text-emerald-600 uppercase">Limit Pinjaman</p>
                  <h4 className="text-xl font-black text-emerald-900">Rp {loanLimit.toLocaleString()}</h4>
                  <p className="text-[8px] text-emerald-600 font-bold uppercase">Tanpa Jaminan Tanah</p>
               </div>
               <div className="bg-amber-50 p-8 rounded-[3rem] border border-amber-100 text-center space-y-2">
                  <p className="text-[10px] font-black text-amber-600 uppercase">Perisai Duka</p>
                  <h4 className="text-xl font-black text-amber-900">Rp 15.000.000</h4>
                  <p className="text-[8px] text-amber-600 font-bold uppercase">Santunan Ahli Waris</p>
               </div>
            </div>

            <div className="p-8 bg-slate-900 rounded-[3rem] text-center">
               <h4 className="text-xl font-black text-white italic">"Pak, di Bank biasa Bapak adalah NASABAH. Di sini, Bapak adalah BOS nya."</h4>
            </div>
         </div>
      </div>
    </div>
  );
};

export default MemberBenefitSimulator;