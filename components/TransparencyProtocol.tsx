
import React from 'react';

const TransparencyProtocol: React.FC = () => {
  const securityFeatures = [
    { 
      title: 'Multi-Signature Auth', 
      desc: 'Pengeluaran > Rp 50jt butuh otorisasi Ketua, Bendahara, & Validasi AI Auditor secara bersamaan.', 
      icon: '🔑',
      status: 'ACTIVE'
    },
    { 
      title: 'Immutable Ledger', 
      desc: 'Setiap transaksi disimpan di database terenkripsi yang mustahil diedit atau dihapus oleh pengurus sekalipun.', 
      icon: '⛓️',
      status: 'ACTIVE'
    },
    { 
      title: 'Real-time Proof of Reserves', 
      desc: 'Anggota bisa melihat sinkronisasi saldo bank koperasi vs total kewajiban simpanan anggota detik demi detik.', 
      icon: '🏛️',
      status: 'LIVE'
    },
    { 
      title: 'AI Management Audit', 
      desc: 'AI memantau perilaku pengurus. Setiap aktivitas ganjil akan membunyikan alarm ke seluruh HP anggota.', 
      icon: '🤖',
      status: 'MONITORING'
    },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Transparency Header */}
      <div className="bg-indigo-950 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Anti-Embezzlement Protocol v4.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Kami Tidak Meminta Kepercayaan. <br/>Kami Menyediakan Bukti.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              KoperatifAI dirancang dengan filosofi **"Trust, but Verify"**. Sistem kami menjamin pengurus tidak bisa membawa lari uang Anda melalui teknologi audit otomatis.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="w-20 h-20 bg-emerald-500 rounded-full mx-auto flex items-center justify-center text-4xl mb-4 animate-pulse">🛡️</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Integritas Pengelola</p>
             <p className="text-5xl font-black text-emerald-400 mt-2">100%</p>
             <div className="mt-6 px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
                AI SENTRY: PROTECTING FUNDS
             </div>
          </div>
        </div>
      </div>

      {/* Proof of Reserves Section */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800 italic">Proof of Reserves (Bukti Saldo Riil)</h3>
            <p className="text-slate-500">Transparansi radikal antara sistem koperasi dan rekening bank penampung.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 bg-indigo-50 rounded-[3rem] border border-indigo-100 space-y-4">
               <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Total Kewajiban Anggota</p>
               <p className="text-4xl font-black text-indigo-900 tracking-tighter">Rp 12.450.000.000</p>
               <p className="text-xs text-indigo-700 italic">"Jumlah seluruh tabungan anggota di dalam database aplikasi."</p>
            </div>
            <div className="p-8 bg-emerald-50 rounded-[3rem] border border-emerald-100 space-y-4">
               <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Total Kas Riil (Bank Partner)</p>
               <p className="text-4xl font-black text-emerald-900 tracking-tighter">Rp 12.450.125.000</p>
               <p className="text-xs text-emerald-700 italic">"Saldo aktual di rekening Escrow Bank Mandiri/BCA Koperasi."</p>
            </div>
         </div>

         <div className="p-6 bg-slate-900 rounded-3xl flex items-center justify-between">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 font-black">✓</div>
               <p className="text-sm font-bold text-white uppercase italic tracking-widest">Status Sinkronisasi: 100% MATCHED</p>
            </div>
            <span className="text-[9px] text-slate-500 font-mono">Last Verify: 2m ago via API Snapshot</span>
         </div>
      </div>

      {/* Embezzlement Shield Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {securityFeatures.map((f, i) => (
           <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex justify-between items-start mb-6">
                 <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">{f.icon}</div>
                 <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[8px] font-black uppercase">{f.status}</span>
              </div>
              <h4 className="font-bold text-slate-800 text-lg leading-tight mb-3">{f.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed italic">"{f.desc}"</p>
           </div>
         ))}
      </div>

      {/* Management Integrity Monitoring */}
      <div className="bg-slate-900 rounded-[4rem] p-12 text-white overflow-hidden relative shadow-xl">
         <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
         <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
               <h3 className="text-3xl font-black italic text-indigo-400">AI Management Sentry</h3>
               <p className="text-slate-400 text-lg leading-relaxed">
                  "Siapa yang mengawasi pengawas?" AI kami memonitor setiap klik pengurus di dashboard admin.
               </p>
               <div className="space-y-4">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex gap-4 items-center">
                     <span className="text-2xl">🚫</span>
                     <p className="text-sm text-slate-300"><b>Akses Ilegal:</b> Jika pengurus login dari luar koordinat GPS kantor atau jam kerja tanpa izin, AI otomatis memblokir akses finansial.</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex gap-4 items-center">
                     <span className="text-2xl">🕵️‍♂️</span>
                     <p className="text-sm text-slate-300"><b>Audit Otomatis:</b> Setiap sen yang keluar harus memiliki draf persetujuan e-RAT yang sudah di-hash secara digital.</p>
                  </div>
               </div>
            </div>
            <div className="w-full lg:w-96 p-10 bg-indigo-600 rounded-[3rem] text-center shadow-2xl rotate-3">
               <div className="text-5xl mb-4">👮‍♂️</div>
               <h4 className="text-xl font-bold">Zero Trust for Admins.</h4>
               <p className="text-xs text-indigo-100 mt-4 leading-relaxed italic">
                  "Uang anggota aman bukan karena pengurusnya baik, tapi karena sistemnya tidak mengizinkan pengurus menjadi jahat."
               </p>
            </div>
         </div>
      </div>

      {/* Call to Action for Member Security */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8">
         <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-5xl">🏛️</div>
         <h4 className="text-3xl font-black text-slate-800 max-w-xl italic">"Buku Besar Kami Adalah Milik Publik."</h4>
         <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
            Anda berhak mengunduh **Laporan Audit Independen** setiap 3 bulan yang dihasilkan oleh AI kami. KoperatifAI adalah institusi paling jujur karena kita tidak memiliki rahasia di depan pemiliknya (Anda).
         </p>
         <div className="flex gap-4">
            <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-700 shadow-xl transition-all">Lihat Live Ledger Wilayah</button>
            <button className="px-10 py-4 bg-white text-indigo-600 border border-indigo-100 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-50 transition-all">Tanya AI Tentang Keamanan Kas</button>
         </div>
      </div>
    </div>
  );
};

export default TransparencyProtocol;
