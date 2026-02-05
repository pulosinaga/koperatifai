
import React, { useState } from 'react';

const SavingsGrowth: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'types' | 'flow' | 'calculator'>('types');

  const savingsTypes = [
    {
      title: 'Simpanan Pokok',
      amount: 'Rp 100.000',
      frequency: 'Sekali (Bisa Cicil)',
      desc: 'Tiket Kepemilikan. Bukti sah Anda adalah pemilik sah KoperatifAI. Menjamin 1 hak suara dalam rapat.',
      icon: '🎫',
      color: 'bg-indigo-50 text-indigo-600',
      status: 'Equity / Sertifikat Saham'
    },
    {
      title: 'Simpanan Wajib',
      amount: 'Rp 20.000',
      frequency: 'Setiap Bulan',
      desc: 'Iuran Kemandirian. Membangun modal kerja kolektif yang bisa Anda pinjam kembali untuk modal usaha.',
      icon: '📈',
      color: 'bg-emerald-50 text-emerald-600',
      status: 'Equity / Modal Usaha'
    },
    {
      title: 'Simpanan Sukarela',
      amount: 'Mulai Rp 1.000',
      frequency: 'Setiap Saat',
      desc: 'Dompet Likuid. Bebas ditabung dan bebas ditarik kapan saja via HP tanpa birokrasi kantor.',
      icon: '🪙',
      color: 'bg-amber-50 text-amber-600',
      status: 'Liquid / Dana Darurat'
    }
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="px-4 py-1.5 bg-white/10 text-emerald-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Inclusive Financial Structure
            </span>
            <h2 className="text-4xl font-black mt-4 leading-tight">Simpanan Kerakyatan. <br/>Membangun Kekuatan Kolektif.</h2>
            <p className="text-emerald-100/70 mt-4 text-lg leading-relaxed max-w-xl">
              Kami membuang syarat nominal besar yang memberatkan. Di sini, niat baik Anda lebih berharga daripada jumlah saldo Anda.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 text-center min-w-[280px]">
             <p className="text-xs font-bold uppercase text-emerald-300 tracking-widest mb-1">Status Likuiditas</p>
             <p className="text-4xl font-black text-white">BEBAS TARIK</p>
             <div className="mt-4 flex justify-between items-center text-[10px] font-bold text-emerald-200">
               <span>SP: Rp 100rb</span>
               <span className="w-1 h-1 bg-emerald-400 rounded-full"></span>
               <span>SW: Rp 20rb</span>
             </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex justify-center">
        <div className="bg-white p-1 rounded-2xl border border-slate-100 shadow-sm inline-flex">
          {[
            { id: 'types', label: 'Jenis Simpanan', icon: '💎' },
            { id: 'flow', label: 'Alur Dana AI', icon: '🔄' },
            { id: 'calculator', label: 'Simulasi SHU', icon: '🧮' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                activeTab === tab.id ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <span>{tab.icon}</span> {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'types' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {savingsTypes.map((type, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl ${type.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                  {type.icon}
                </div>
                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{type.status}</span>
                <h4 className="text-xl font-bold text-slate-800 mt-1">{type.title}</h4>
                <p className="text-xs text-slate-500 mt-3 leading-relaxed">{type.desc}</p>
                <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-end">
                   <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase">Nominal</p>
                      <p className="font-black text-slate-800">{type.amount}</p>
                   </div>
                   <div className="text-right">
                      <p className="text-[9px] font-bold text-slate-400 uppercase">Sifat</p>
                      <p className="text-[11px] font-black text-indigo-600 uppercase italic">
                         {type.title === 'Simpanan Sukarela' ? 'BEBAS TARIK' : 'MODAL INTI'}
                      </p>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'flow' && (
        <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-2xl font-black text-slate-800">Bagaimana Simpanan Anda Bekerja?</h3>
            <p className="text-slate-500 text-sm mt-2">KoperatifAI menghubungkan niat baik Anda dengan kebutuhan modal anggota lain secara otomatis.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
             <div className="text-center space-y-4 flex-1">
                <div className="w-24 h-24 bg-indigo-50 rounded-3xl flex items-center justify-center text-4xl mx-auto border border-indigo-100">💰</div>
                <p className="font-bold text-slate-800 text-sm">Anda Menabung</p>
                <p className="text-[10px] text-slate-400">Setoran Pokok, Wajib, Sukarela</p>
             </div>
             <div className="hidden md:block text-slate-200 text-4xl animate-pulse">→</div>
             <div className="text-center space-y-4 flex-1 p-8 bg-slate-900 rounded-[2.5rem] text-white ring-8 ring-slate-50">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">🧠</div>
                <p className="font-bold text-sm">AI Community Ledger</p>
                <p className="text-[10px] text-slate-400">Analisis Risiko & Alokasi Modal</p>
             </div>
             <div className="hidden md:block text-slate-200 text-4xl animate-pulse">→</div>
             <div className="text-center space-y-4 flex-1">
                <div className="w-24 h-24 bg-emerald-50 rounded-3xl flex items-center justify-center text-4xl mx-auto border border-emerald-100">🚜</div>
                <p className="font-bold text-slate-800 text-sm">Modal Usaha Anggota</p>
                <p className="text-[10px] text-slate-400">Pinjaman Produktif & Berbunga Adil</p>
             </div>
          </div>

          <div className="mt-16 p-8 bg-emerald-50 rounded-3xl border border-emerald-100 flex flex-col md:flex-row items-center gap-8">
             <div className="text-5xl">✨</div>
             <div className="flex-1">
                <h4 className="font-bold text-emerald-900">Siklus Kebaikan (SHU)</h4>
                <p className="text-sm text-emerald-700/70 mt-1">
                   Bunga yang dibayar oleh peminjam (sesama anggota) tidak lari ke bank, melainkan masuk ke kas koperasi, lalu dibagikan kembali kepada Anda sebagai **Sisa Hasil Usaha (SHU)** di akhir tahun.
                </p>
             </div>
          </div>
        </div>
      )}

      {/* Comparison Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-900 rounded-[3rem] p-10 text-white">
           <h3 className="text-2xl font-black mb-6">Bank vs KoperatifAI</h3>
           <div className="space-y-4">
              <div className="flex justify-between items-center py-4 border-b border-white/10">
                 <p className="text-slate-400 text-sm">Status Anda</p>
                 <div className="text-right">
                    <p className="text-xs text-rose-400 italic">Bank: Nasabah</p>
                    <p className="text-sm font-bold text-emerald-400">CU: Pemilik (Owner)</p>
                 </div>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-white/10">
                 <p className="text-slate-400 text-sm">Biaya Admin</p>
                 <div className="text-right">
                    <p className="text-xs text-rose-400 italic">Bank: Rp 15rb/bln</p>
                    <p className="text-sm font-bold text-emerald-400">CU: Rp 0 (Gratis)</p>
                 </div>
              </div>
              <div className="flex justify-between items-center py-4">
                 <p className="text-slate-400 text-sm">Pembagian Laba</p>
                 <div className="text-right">
                    <p className="text-xs text-rose-400 italic">Bank: Untuk Direksi</p>
                    <p className="text-sm font-bold text-emerald-400">CU: Untuk Anggota</p>
                 </div>
              </div>
           </div>
        </div>

        <div className="bg-white p-10 rounded-[3rem] border border-slate-100 flex flex-col justify-center items-center text-center space-y-6">
           <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center text-4xl">🪴</div>
           <h4 className="text-2xl font-black text-slate-800">Menabung Receh = Menanam Keajaiban</h4>
           <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
             Simpanan sukarela adalah bukti bahwa Anda mempercayai komunitas. AI akan memberikan poin reputasi tambahan bagi mereka yang konsisten mengisi celengan digitalnya.
           </p>
           <button className="px-8 py-3 bg-amber-500 text-white rounded-2xl font-bold shadow-lg shadow-amber-100 hover:bg-amber-600 transition-all">Isi Celengan Digital Sekarang</button>
        </div>
      </div>
    </div>
  );
};

export default SavingsGrowth;
