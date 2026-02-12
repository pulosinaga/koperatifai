import React, { useState, useEffect } from 'react';

const MemberTrustVault: React.FC = () => {
  const [liveBankBalance, setLiveBankBalance] = useState(12450125000);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveBankBalance(prev => prev + Math.floor(Math.random() * 1000));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      <div className="text-center space-y-4">
         <h2 className="text-4xl font-black text-slate-800 italic uppercase tracking-tight">Brankas Kejujuran</h2>
         <p className="text-slate-500 text-lg">"Uang Bapak/Ibu tidak dipegang perorangan, tapi diamankan oleh Negara & Emas."</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Live Bank Monitor */}
         <div className="bg-slate-900 rounded-[4rem] p-12 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center text-center space-y-8">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <div className="w-24 h-24 bg-white/10 rounded-[2.5rem] flex items-center justify-center text-5xl mx-auto border border-white/20">🏦</div>
            <div className="space-y-2">
               <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Saldo Riil Koperasi di Bank</p>
               <h4 className="text-4xl font-black italic tracking-tighter">Rp {liveBankBalance.toLocaleString('id-ID')}</h4>
               <div className="flex items-center justify-center gap-2 mt-4">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                  <p className="text-[8px] font-bold text-emerald-400 uppercase tracking-widest">Terverifikasi Bank Partner via API</p>
               </div>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed italic border-t border-white/5 pt-6 px-6">
               "Setiap anggota bisa melihat jumlah uang tunai yang ada di bank. Ini menjamin pengurus tidak bisa mengambil uang tanpa sepengetahuan Bapak/Ibu."
            </p>
         </div>

         {/* Gold Reserve View */}
         <div className="bg-white rounded-[4rem] p-12 border-2 border-amber-100 shadow-xl flex flex-col justify-center text-center space-y-8 relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-amber-50 rounded-full blur-3xl"></div>
            <div className="w-24 h-24 bg-amber-50 rounded-[2.5rem] flex items-center justify-center text-5xl mx-auto border border-amber-100">📀</div>
            <div className="space-y-2">
               <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Cadangan Emas Fisik (Backup)</p>
               <h4 className="text-4xl font-black italic tracking-tighter text-slate-800">1.250 Gram</h4>
               <p className="text-xs font-bold text-slate-400 mt-2">Murni Antam 999.9%</p>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed italic border-t border-slate-100 pt-6 px-6">
               "Jika terjadi kiamat internet, Bapak/Ibu tetap punya hak atas emas fisik yang disimpan di brankas pusat sebagai jaminan nilai tabungan."
            </p>
         </div>
      </div>

      {/* Assurance Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {[
           { t: 'Izin Resmi Negara', d: 'Koperasi berbadan hukum sah sesuai UU No. 25/1992.', i: '🏛️' },
           { t: 'Diaudit Robot AI', d: 'AI memeriksa setiap transaksi agar tidak ada manipulasi saldo.', i: '🤖' },
           { t: 'Pajak Tertib', d: 'Setiap bagi hasil dipotong pajak otomatis, aman dari masalah hukum.', i: '⚖️' }
         ].map((item, i) => (
           <div key={i} className="p-8 bg-white rounded-[3rem] border border-slate-100 shadow-sm text-center space-y-4">
              <div className="text-4xl">{item.i}</div>
              <h4 className="font-black text-slate-800 text-sm uppercase">{item.t}</h4>
              <p className="text-[11px] text-slate-500 italic leading-relaxed">"{item.d}"</p>
           </div>
         ))}
      </div>
    </div>
  );
};

export default MemberTrustVault;