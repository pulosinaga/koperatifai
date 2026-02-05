
import React from 'react';

const TrustTransparency: React.FC = () => {
  const managementRules = [
    { title: 'Gaji Pengurus', desc: 'Ditentukan & disetujui oleh Anggota dalam RAT. Tidak ada bonus rahasia.', icon: '💸' },
    { title: 'Audit Eksternal', desc: 'Laporan keuangan diaudit oleh akuntan publik independen setiap tahun.', icon: '🔍' },
    { title: 'Batas Pengeluaran', desc: 'Setiap pengeluaran di atas Rp 50jt wajib melalui e-Voting anggota.', icon: '⚖️' },
    { title: 'Tanpa Biaya Admin', desc: 'Biaya operasional diambil dari surplus jasa, bukan memotong saldo tabungan.', icon: '🛡️' }
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500 pb-20">
      <div className="bg-indigo-600 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-black leading-tight">Siapa yang Mengelola Uang Anda?</h2>
          <p className="text-indigo-100 mt-4 text-lg max-w-2xl leading-relaxed">
            Di KoperatifAI, pengurus adalah <strong>karyawan</strong> yang Anda sewa. Pemilik sebenarnya adalah Anda dan ribuan anggota lainnya.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {managementRules.map((rule, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex gap-6 items-start hover:shadow-lg transition-all">
            <div className="text-4xl">{rule.icon}</div>
            <div>
              <h4 className="font-black text-slate-800 text-xl">{rule.title}</h4>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">{rule.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-[3rem] p-10 text-white overflow-hidden relative">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-bold">Laporan Alokasi Surplus (SHU)</h3>
            <p className="text-slate-400 text-sm">Kemana perginya keuntungan koperasi kita? Semuanya kembali ke komunitas.</p>
            <div className="space-y-4">
               {[
                 { label: 'Cadangan Koperasi', percent: 25, color: 'bg-indigo-500' },
                 { label: 'Jasa Simpanan (Bonus Anggota)', percent: 40, color: 'bg-emerald-500' },
                 { label: 'Dana Sosial & Pendidikan', percent: 15, color: 'bg-amber-500' },
                 { label: 'Operasional & Gaji', percent: 20, color: 'bg-rose-500' },
               ].map((item, idx) => (
                 <div key={idx} className="space-y-1.5">
                   <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                     <span>{item.label}</span>
                     <span>{item.percent}%</span>
                   </div>
                   <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                     <div className={`h-full ${item.color}`} style={{ width: `${item.percent}%` }}></div>
                   </div>
                 </div>
               ))}
            </div>
          </div>
          <div className="w-full lg:w-72 aspect-square bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center p-8 text-center">
             <div className="text-6xl mb-4">📢</div>
             <p className="font-bold text-lg leading-tight italic">"Satu Anggota, Satu Suara. Bukan Satu Saham, Satu Suara."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustTransparency;
