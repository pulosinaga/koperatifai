
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const SHUDistribution: React.FC = () => {
  const surplusTotal = 75000000; // Contoh total surplus bulan ini
  
  const distributionRules = [
    { name: 'Cadangan Koperasi', percent: 25, value: surplusTotal * 0.25, color: '#334155', desc: 'Dana abadi untuk penguatan modal & antisipasi risiko sistemik.' },
    { name: 'Jasa Usaha (Aktif)', percent: 40, value: surplusTotal * 0.40, color: '#10b981', desc: 'Bagi hasil berdasarkan seberapa sering Anda belanja di marketplace.' },
    { name: 'Jasa Modal (Saham)', percent: 20, value: surplusTotal * 0.20, color: '#6366f1', desc: 'Bagi hasil berdasarkan jumlah Simpanan Wajib & Pokok Anda.' },
    { name: 'Dana Pendidikan', percent: 5, value: surplusTotal * 0.05, color: '#f59e0b', desc: 'Digunakan untuk pelatihan anggota & biaya operasional AI Advisor.' },
    { name: 'Dana Sosial & Duta', percent: 10, value: surplusTotal * 0.10, color: '#ef4444', desc: 'Santunan duka (Daskop) & jasa pengabdian Duta wilayah.' }
  ];

  const userShare = {
    modal: 12500,
    usaha: 45000,
    total: 57500
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* SHU Header */}
      <div className="bg-indigo-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Equity & Surplus Ledger v4.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Kedaulatan Laba: <br/>Adil, Otomatis, & Terbuka.</h2>
            <p className="text-indigo-200 text-lg leading-relaxed max-w-2xl font-medium">
               Di KoperatifAI, laba bukan untuk segelintir elit, tapi kembali kepada Anda sebagai pemilik sah ekosistem.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Total SHU Kolektif Bulan Ini</p>
             <p className="text-4xl font-black text-emerald-400 mt-2 italic">Rp {surplusTotal.toLocaleString('id-ID')}</p>
             <p className="text-[9px] text-slate-500 mt-4 uppercase font-black">Masa Buku: Pebruari 2026</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Chart & Rule Table */}
         <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
            <h3 className="text-2xl font-black text-slate-800 italic">Alokasi Berdasarkan UU 25/1992</h3>
            <div className="h-64 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                     <Pie
                        data={distributionRules}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                     >
                        {distributionRules.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                     </Pie>
                     <Tooltip 
                        contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                        formatter={(val: number) => `Rp ${val.toLocaleString()}`}
                     />
                  </PieChart>
               </ResponsiveContainer>
            </div>
            
            <div className="space-y-4">
               {distributionRules.map((rule, i) => (
                 <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:border-indigo-200 transition-all">
                    <div className="w-3 h-3 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: rule.color }}></div>
                    <div className="flex-1">
                       <div className="flex justify-between items-center mb-1">
                          <h5 className="font-bold text-slate-800 text-sm">{rule.name}</h5>
                          <span className="text-xs font-black text-indigo-600">{rule.percent}%</span>
                       </div>
                       <p className="text-[10px] text-slate-500 leading-relaxed italic">"{rule.desc}"</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Personal SHU Breakdown */}
         <div className="space-y-8">
            <div className="bg-slate-900 p-10 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <h3 className="text-xl font-black italic text-indigo-400 uppercase tracking-widest">Estimasi Bagian Anda</h3>
               
               <div className="mt-8 space-y-6">
                  <div className="flex justify-between items-end border-b border-white/5 pb-4">
                     <div>
                        <p className="text-[10px] text-slate-500 uppercase font-black">Jasa Modal (Saham Anda)</p>
                        <p className="text-sm font-medium">Berdasarkan SP & SW</p>
                     </div>
                     <p className="text-xl font-black text-indigo-300">+ Rp {userShare.modal.toLocaleString()}</p>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/5 pb-4">
                     <div>
                        <p className="text-[10px] text-slate-500 uppercase font-black">Jasa Usaha (Keaktifan)</p>
                        <p className="text-sm font-medium">Belanja Marketplace & PPOB</p>
                     </div>
                     <p className="text-xl font-black text-emerald-400">+ Rp {userShare.usaha.toLocaleString()}</p>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                     <p className="text-xs font-black uppercase text-slate-400">Total Akumulasi SHU</p>
                     <p className="text-3xl font-black text-white italic">Rp {userShare.total.toLocaleString()}</p>
                  </div>
               </div>

               <div className="mt-10 p-6 bg-white/5 rounded-3xl border border-white/10">
                  <p className="text-[10px] text-indigo-200 leading-relaxed italic">
                     "Semakin banyak Anda belanja dari sesama anggota, semakin besar bagian laba yang kembali ke kantong Anda sendiri. Inilah Ekonomi Tanpa Eksploitasi."
                  </p>
               </div>
            </div>

            <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-[3rem] flex flex-col items-center text-center space-y-4">
               <div className="text-4xl">⚖️</div>
               <h4 className="font-bold text-indigo-900 italic">Audit Algoritma SHU</h4>
               <p className="text-[10px] text-indigo-700/70 leading-relaxed">
                  "Pembagian SHU dilakukan oleh AI Treasury secara otomatis setiap hari. Anda bisa mengaudit setiap rupiah masuk dan keluar melalui Ledger Transparansi."
               </p>
               <button className="px-6 py-2 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg">Cek Ledger Audit</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default SHUDistribution;
