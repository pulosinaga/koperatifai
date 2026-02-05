
import React from 'react';

const LoanHistory: React.FC = () => {
  const activeLoan = {
    id: 'LN-2024-004',
    purpose: 'Modal Warung Bakso',
    total: 5000000,
    paid: 3250000,
    remaining: 1750000,
    tenure: 12,
    installment: 450000,
    progress: 65,
    installments: [
      { month: 'Januari', amount: 450000, status: 'Lunas', date: '15/01/2024' },
      { month: 'Februari', amount: 450000, status: 'Lunas', date: '15/02/2024' },
      { month: 'Maret', amount: 450000, status: 'Lunas', date: '15/03/2024' },
      { month: 'April', amount: 450000, status: 'Lunas', date: '15/04/2024' },
      { month: 'Mei', amount: 450000, status: 'Tertunda', date: '-' },
    ]
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      <div className="bg-indigo-600 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-black italic">Riwayat Pinjaman Produktif</h2>
          <p className="text-indigo-100 mt-2">Pantau kedisiplinan angsuran untuk menaikkan skor kredit Anda.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
           <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
              <div className="flex justify-between items-start">
                 <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ID Pinjaman: {activeLoan.id}</p>
                    <h3 className="text-2xl font-black text-slate-800">{activeLoan.purpose}</h3>
                 </div>
                 <span className="px-4 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase">Berjalan</span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 border-y border-slate-50 py-6">
                 <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Total Pinjaman</p>
                    <p className="text-sm font-black text-slate-800">Rp {activeLoan.total.toLocaleString('id-ID')}</p>
                 </div>
                 <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Sudah Dibayar</p>
                    <p className="text-sm font-black text-emerald-600">Rp {activeLoan.paid.toLocaleString('id-ID')}</p>
                 </div>
                 <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Sisa Hutang</p>
                    <p className="text-sm font-black text-rose-600">Rp {activeLoan.remaining.toLocaleString('id-ID')}</p>
                 </div>
              </div>

              <div className="space-y-2">
                 <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase">
                    <span>Progress Pelunasan</span>
                    <span>{activeLoan.progress}%</span>
                 </div>
                 <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 transition-all duration-1000" style={{ width: `${activeLoan.progress}%` }}></div>
                 </div>
              </div>
           </div>

           <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden">
              <table className="w-full text-left">
                 <thead>
                    <tr className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                       <th className="px-8 py-4">Bulan</th>
                       <th className="px-8 py-4">Nominal</th>
                       <th className="px-8 py-4">Tanggal</th>
                       <th className="px-8 py-4 text-right">Status</th>
                    </tr>
                 </thead>
                 <tbody className="text-sm divide-y divide-slate-50">
                    {activeLoan.installments.map((inst, i) => (
                       <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-8 py-4 font-bold text-slate-700">{inst.month}</td>
                          <td className="px-8 py-4 text-slate-500">Rp {inst.amount.toLocaleString('id-ID')}</td>
                          <td className="px-8 py-4 text-slate-400 font-mono text-xs">{inst.date}</td>
                          <td className="px-8 py-4 text-right">
                             <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase ${
                                inst.status === 'Lunas' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                             }`}>
                                {inst.status}
                             </span>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 p-8 rounded-[3rem] text-white shadow-xl">
              <h4 className="text-xl font-bold italic text-indigo-400 mb-4">Statistik Karakter</h4>
              <div className="space-y-6">
                 <div className="flex justify-between items-center">
                    <p className="text-xs text-slate-400">Skor Ketepatan</p>
                    <p className="font-bold text-emerald-400">98%</p>
                 </div>
                 <div className="flex justify-between items-center">
                    <p className="text-xs text-slate-400">Kepercayaan AI</p>
                    <p className="font-bold text-emerald-400">High</p>
                 </div>
                 <button className="w-full py-4 bg-indigo-600 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-indigo-700 shadow-lg">Naikkan Limit Pinjaman</button>
              </div>
           </div>

           <div className="p-8 bg-indigo-50 rounded-[3rem] border border-indigo-100 flex flex-col items-center text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h5 className="font-bold text-indigo-900">Member Teladan</h5>
              <p className="text-xs text-indigo-700/70 mt-2">Anda telah menyelesaikan 3 pinjaman tanpa pernah terlambat satu hari pun.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default LoanHistory;
