
import React from 'react';

const SafetyProtection: React.FC = () => {
  const protections = [
    {
      title: 'Pinjaman Dianggap Lunas',
      desc: 'Jika anggota meninggal dunia, sisa pinjaman produktif akan diputihkan/dilunasi oleh dana perlindungan bersama.',
      icon: '🕊️',
      type: 'LPA (Life Protection Asset)'
    },
    {
      title: 'Santunan Dana Duka',
      desc: 'Ahli waris menerima pengembalian seluruh simpanan ditambah santunan duka berdasarkan masa keanggotaan.',
      icon: '🕯️',
      type: 'LPI (Life Protection Insurance)'
    },
    {
      title: 'Ahli Waris Terdaftar',
      desc: 'Sistem mencatat secara digital ahli waris yang sah untuk menjamin dana sampai ke tangan yang tepat.',
      icon: '📜',
      type: 'Legal Continuity'
    },
    {
      title: 'Audit Pengawas Real-time',
      desc: 'Sistem dipantau oleh dewan pengawas dan AI untuk mencegah penyalahgunaan dana oleh pengurus.',
      icon: '🛡️',
      type: 'Security Layer'
    }
  ];

  const fundSources = [
    {
      name: 'Iuran Sosial Bulanan',
      amount: 'Rp 10.000',
      frequency: 'per bulan',
      desc: 'Kontribusi kolektif anggota untuk memupuk dana duka bersama.',
      icon: '🤝'
    },
    {
      name: 'Cadangan Risiko (LPA)',
      amount: '1% - 2%',
      frequency: 'dari jasa pinjaman',
      desc: 'Bunga yang dibayar peminjam disisihkan khusus untuk cadangan pelunasan pinjaman macet/duka.',
      icon: '📈'
    },
    {
      name: 'Re-Asuransi Koperasi',
      amount: 'Pooling',
      frequency: 'Nasional',
      desc: 'Koperasi kita menyetor ke Federasi Nasional (LPA) untuk membagi risiko ke jutaan anggota CU lain.',
      icon: '🌍'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Header Section */}
      <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-3xl">
          <span className="px-4 py-1.5 bg-indigo-500/30 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
            Solidarity Math
          </span>
          <h2 className="text-4xl font-black mt-4 leading-tight">Rahasia Iuran Rp 10.000</h2>
          <p className="text-slate-400 mt-4 text-lg leading-relaxed">
            Mungkin Anda bertanya: <i>"Bagaimana uang kecil bisa menutupi hutang besar?"</i> Jawabannya adalah <b>Gotong Royong Sistematis.</b>
          </p>
        </div>
      </div>

      {/* The Logic Breakdown */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
         <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-black text-slate-800">Siapa Yang Menanggung Pelunasan?</h3>
            <p className="text-slate-500 text-sm mt-2">Tiga lapis perlindungan yang memastikan sisa hutang anggota duka tidak menjadi beban keluarga.</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-indigo-50 rounded-[2.5rem] border border-indigo-100 flex flex-col items-center text-center">
               <div className="text-4xl mb-4">👥</div>
               <h4 className="font-bold text-indigo-900">1. Kekuatan Massa</h4>
               <p className="text-xs text-indigo-700/70 mt-2">Jika 1.000 anggota membayar Rp 10rb, terkumpul <b>Rp 10jt/bulan</b>. Secara statistik, tidak setiap bulan ada anggota yang wafat, sehingga dana ini terus berakumulasi menjadi gunung dana sosial.</p>
            </div>
            <div className="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 flex flex-col items-center text-center">
               <div className="text-4xl mb-4">🛡️</div>
               <h4 className="font-bold text-emerald-900">2. Dana Cadangan (LPA)</h4>
               <p className="text-xs text-emerald-700/70 mt-2">Koperasi menyisihkan sebagian keuntungan dari bunga pinjaman ke "Dana Perlindungan Pinjaman". Dana ini bertindak sebagai asuransi internal yang khusus melunasi hutang anggota duka.</p>
            </div>
            <div className="p-8 bg-amber-50 rounded-[2.5rem] border border-amber-100 flex flex-col items-center text-center">
               <div className="text-4xl mb-4">🤝</div>
               <h4 className="font-bold text-amber-900">3. Jaringan Federasi</h4>
               <p className="text-xs text-amber-700/70 mt-2">KoperatifAI tidak berdiri sendiri. Kita menyetor premi ke Federasi Nasional. Jika terjadi musibah besar, Federasi (yang memegang dana ribuan koperasi) yang akan menalangi pelunasannya.</p>
            </div>
         </div>
      </div>

      {/* Sources Table */}
      <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-black text-slate-800">Struktur Dana Perlindungan</h3>
          <p className="text-slate-500 text-sm mt-2">DASKOP adalah dana gotong-royong yang dikelola secara profesional.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fundSources.map((source, idx) => (
            <div key={idx} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{source.icon}</div>
              <h4 className="font-bold text-slate-800 leading-tight">{source.name}</h4>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-indigo-600 font-black text-xl">{source.amount}</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">{source.frequency}</span>
              </div>
              <p className="text-xs text-slate-500 mt-4 leading-relaxed">{source.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Solvency Guard */}
      <div className="bg-indigo-600 p-12 rounded-[4rem] text-white flex flex-col md:flex-row items-center gap-12">
         <div className="text-7xl">📊</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-3xl font-black italic">"AI Memastikan Kas Sosial Tetap Sehat."</h4>
            <p className="text-indigo-100 leading-relaxed">
               Setiap hari, AI kami menghitung <b>Rasio Solvabilitas</b>. Jika jumlah anggota meningkat, AI akan menyarankan apakah santunan duka bisa dinaikkan atau iuran sosial bisa dikurangi tanpa mengancam keamanan dana. Ini adalah keadilan yang dipandu data.
            </p>
         </div>
      </div>

      <div className="p-12 bg-white border border-slate-100 rounded-[3.5rem] shadow-sm flex flex-col items-center text-center">
         <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center text-4xl mb-6 text-rose-600">⚖️</div>
         <h4 className="text-2xl font-black text-slate-800">Kenapa Ini Jauh Lebih Murah Dari Asuransi Bank?</h4>
         <p className="text-slate-500 mt-4 max-w-2xl text-lg leading-relaxed italic">
            "Asuransi bank mengambil untung besar untuk pemilik saham. Daskop Koperasi **tidak mengambil untung**. Seluruh iuran Anda dikembalikan dalam bentuk santunan atau pelunasan hutang. Itulah kenapa iuran Rp 10rb sudah sangat cukup."
         </p>
      </div>
    </div>
  );
};

export default SafetyProtection;
