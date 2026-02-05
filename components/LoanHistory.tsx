
import React from 'react';

const LoanHistory: React.FC = () => {
  const activeLoan = {
    id: 'LN-2026-004',
    purpose: 'Modal Warung Bakso',
    total: 5000000,
    paid: 3250000,
    remaining: 1750000,
    tenure: 12,
    installment: 450000,
    progress: 65,
    installments: [
      { month: 'Oktober', amount: 450000, status: 'Lunas', date: '15/10/2025' },
      { month: 'November', amount: 450000, status: 'Lunas', date: '15/11/2025' },
      { month: 'Desember', amount: 450000, status: 'Lunas', date: '15/12/2025' },
      { month: 'Januari', amount: 450000, status: 'Lunas', date: '15/01/2026' },
      { month: 'Pebruari', amount: 450000, status: 'Tertunda', date: '-' },
    ]
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      <div className="bg-indigo-600 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-black italic">Riwayat Pinjaman Produktif</h2>
          <p className="text-indigo-100 mt-2">Status per 05 Pebruari 2026. Pantau kedisiplinan angsuran Anda.</p>
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
        </div>
      </div>
    </div>
  );
};

export default LoanHistory;
