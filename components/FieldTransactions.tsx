
import React from 'react';

const FieldTransactions: React.FC = () => {
  const fieldSteps = [
    {
      title: 'Kunjungan Duta',
      desc: 'Duta Wilayah mendatangi lokasi anggota (warung/rumah). Menggunakan identitas resmi & tablet KoperatifAI.',
      icon: '🛵',
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      title: 'Serah Terima Kas',
      desc: 'Anggota menyerahkan uang tunai (misal Rp 2.000). Duta menghitung uang di depan anggota secara transparan.',
      icon: '🤝',
      color: 'bg-amber-50 text-amber-600'
    },
    {
      title: 'Input Assisted AI',
      desc: 'Duta menginput nominal & ID Anggota. Duta wajib menunjukkan layar konfirmasi kepada anggota untuk dicek kembali.',
      icon: '📱',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'SMS Resi Instan',
      desc: 'Sistem mengirim SMS bukti setoran ke HP anggota detik itu juga. SMS ini adalah kuitansi sah dari koperasi.',
      icon: '✉️',
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: 'Reputasi Naik',
      desc: 'AI langsung mencatat poin kedisiplinan. Skor kredit anggota otomatis naik karena rajin menabung receh.',
      icon: '📈',
      color: 'bg-rose-50 text-rose-600'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="bg-indigo-600 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-800">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Field Operations Framework
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Setoran Jemput Bola: <br/>Mudah bagi Rakyat, Aman bagi Semua.</h2>
            <p className="text-indigo-100 text-lg leading-relaxed max-w-2xl font-medium">
              Kami membawa sistem "Banker Pribadi" ke depan pintu Anda. Anggota tidak perlu repot ke kantor, Duta kami yang datang melayani.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white p-10 rounded-[3rem] shadow-2xl text-center">
             <div className="text-7xl mb-4">🛵</div>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Metode Transaksi</p>
             <p className="text-2xl font-black text-indigo-600 mt-1 italic">TRUST-BASED CASH</p>
             <p className="text-[9px] text-slate-400 mt-2 uppercase">Verified by AI SMS Engine</p>
          </div>
        </div>
      </div>

      {/* Visual Step Timeline */}
      <div className="space-y-10">
         <h3 className="text-3xl font-black text-slate-800 italic text-center">Bagaimana Proses Berjalan?</h3>
         <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
               {fieldSteps.map((step, i) => (
                 <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center">
                    <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                       {step.icon}
                    </div>
                    <h4 className="text-lg font-black text-slate-800 leading-tight">{step.title}</h4>
                    <p className="text-[11px] text-slate-500 mt-4 leading-relaxed flex-1">"{step.desc}"</p>
                    <div className="mt-6 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center font-black text-xs text-slate-300">
                       {i + 1}
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* Security Features for Field Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-slate-900 p-10 rounded-[3rem] text-white space-y-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl"></div>
            <h3 className="text-2xl font-black italic text-indigo-400">Protokol Keamanan Duta</h3>
            <p className="text-sm text-slate-400">Menjaga uang anggota tetap aman meskipun di tangan manusia.</p>
            
            <div className="space-y-4">
               {[
                 { t: 'Daily Cash Limit', d: 'Duta hanya bisa memegang kas maksimal Rp 5 Juta. Selebihnya harus segera disetor ke Bank Koperasi.', icon: '🔒' },
                 { t: 'Geofencing Audit', d: 'AI mencatat lokasi transaksi. Duta tidak bisa input setoran jika posisinya jauh dari alamat anggota.', icon: '📍' },
                 { t: 'One-Time-Password (OTP)', d: 'Untuk penarikan dana, anggota harus memberikan kode OTP ke Duta. Duta tidak bisa menarik saldo anggota sepihak.', icon: '🔑' },
               ].map((s, i) => (
                 <div key={i} className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-2xl">{s.icon}</div>
                    <div className="flex-1">
                       <p className="text-sm font-bold">{s.t}</p>
                       <p className="text-[10px] text-slate-500 uppercase mt-1 leading-relaxed">{s.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center space-y-8">
            <div className="text-center space-y-2">
               <h3 className="text-2xl font-black text-slate-800 italic">"SMS adalah Kuitansi Anda."</h3>
               <p className="text-slate-500 text-sm italic">"Kami tidak ingin anggota kehilangan bukti karena kertas kuitansi basah atau hilang."</p>
            </div>
            
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-200 relative">
               <div className="absolute -top-3 -right-3 bg-indigo-600 text-white p-2 rounded-xl shadow-lg">✉️</div>
               <p className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">Contoh SMS Konfirmasi:</p>
               <div className="bg-white p-6 rounded-2xl border border-slate-100 font-mono text-xs text-slate-700 leading-relaxed shadow-inner">
                  "Terima kasih Bpk/Ibu. Setoran Rp 2.000 ke Celengan Digital tgl 12/06/24 jam 10:20 WIB via Duta Pak Joni (D-042) BERHASIL. Saldo baru Anda: Rp 154.000. Simpan pesan ini."
               </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 flex items-center gap-4">
               <div className="text-4xl">✅</div>
               <p className="text-xs text-emerald-800 font-bold leading-relaxed">
                  "Sistem ini memastikan kejujuran Duta. Jika anggota tidak menerima SMS, artinya Duta belum menginput uang tersebut ke sistem."
               </p>
            </div>
         </div>
      </div>

      {/* Trust Building Call to Action */}
      <div className="p-12 bg-indigo-950 border border-indigo-900 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-5xl shadow-xl z-10">🏛️</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Sistem Modern, Hati Komunitas."</h4>
         <p className="text-indigo-200 max-w-2xl text-lg leading-relaxed z-10">
            KoperatifAI menghubungkan teknologi bank tercanggih dengan kehangatan silaturahmi tetangga. Inilah cara kita membangun ekonomi rakyat yang **Berdaulat & Terlindungi.**
         </p>
         <button className="px-10 py-4 bg-white text-indigo-950 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Daftar Sebagai Anggota Pionir
         </button>
      </div>
    </div>
  );
};

export default FieldTransactions;
