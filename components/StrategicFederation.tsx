
import React from 'react';

const StrategicFederation: React.FC = () => {
  const levels = [
    {
      name: 'WOCCU',
      scope: 'Global (Dunia)',
      desc: 'World Council of Credit Unions. Pusat kebijakan, lobi G20/PBB, dan standar keamanan finansial dunia.',
      icon: '🌐',
      loc: 'Madison, USA'
    },
    {
      name: 'ACCU',
      scope: 'Regional (Asia)',
      desc: 'Association of Asian Credit Unions. Pusat pelatihan teknologi dan pertukaran sistem antar negara Asia.',
      icon: '🌏',
      loc: 'Bangkok, Thailand'
    },
    {
      name: 'INKOPDIT',
      scope: 'Nasional (Indonesia)',
      desc: 'Induk Koperasi Kredit. Pelindung legal, penyedia dana stabilisasi nasional, dan regulator internal RI.',
      icon: '🇮🇩',
      loc: 'Jakarta, Indonesia'
    },
    {
      name: 'KOPERATIFAI',
      scope: 'Lokal / Digital',
      desc: 'Startup Anda. Ujung tombak teknologi yang melayani anggota secara langsung dengan efisiensi AI.',
      icon: '◈',
      loc: 'Awan (Cloud)'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/30 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/30">
              The Power of Networking
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Satu Lidi Mudah Patah, <br/>Satu Sapu Menguasai Dunia.</h2>
            <p className="text-indigo-100/70 text-lg leading-relaxed max-w-2xl">
              KoperatifAI tidak berdiri sendiri di tengah badai ekonomi. Kita adalah bagian dari jaringan <b>Credit Union Dunia</b> yang memiliki aset ribuan triliun rupiah.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🏛️</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Global Assets</p>
             <p className="text-2xl font-black text-indigo-400">$3.5 Trillion+</p>
             <p className="text-[9px] text-slate-500 mt-2 uppercase tracking-tighter">Under WOCCU Umbrella</p>
          </div>
        </div>
      </div>

      {/* Connection Map Visual */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm overflow-hidden relative">
         <div className="text-center max-w-xl mx-auto mb-16">
            <h3 className="text-3xl font-black text-slate-800 italic tracking-tight">Struktur Aliansi Strategis</h3>
            <p className="text-slate-500">Membangun kepercayaan anggota melalui legitimasi internasional.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {levels.map((level, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                 <div className="w-24 h-24 bg-slate-50 rounded-[2.5rem] border-2 border-slate-100 flex items-center justify-center text-4xl mb-6 shadow-sm group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 group-hover:-translate-y-2">
                    {level.icon}
                 </div>
                 <h4 className="text-xl font-black text-slate-800">{level.name}</h4>
                 <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mt-1">{level.scope}</p>
                 <p className="text-xs text-slate-400 mt-1 mb-4 font-medium italic">{level.loc}</p>
                 <p className="text-[11px] text-slate-500 leading-relaxed px-4">{level.desc}</p>
                 {i < levels.length - 1 && (
                   <div className="hidden lg:block absolute top-12 left-[100%] w-full h-0.5 bg-slate-100 -translate-x-12"></div>
                 )}
              </div>
            ))}
         </div>
      </div>

      {/* Security & Liquidity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-indigo-900 p-10 rounded-[3rem] text-white space-y-8 flex flex-col justify-center shadow-xl">
            <h3 className="text-2xl font-black italic">Kenapa Harus Bergabung?</h3>
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">💰</div>
                  <div>
                     <h5 className="font-bold">Interlending Fund (ILF)</h5>
                     <p className="text-xs text-indigo-200 mt-1">Jika KoperatifAI kekurangan dana tunai sementara, kita bisa meminjam dana dari <b>Inkopdit</b> dengan bunga sangat rendah. Likuiditas kita aman.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">🛡️</div>
                  <div>
                     <h5 className="font-bold">Dana Stabilisasi</h5>
                     <p className="text-xs text-indigo-200 mt-1">Federasi bertindak sebagai "Penyelamat" jika terjadi krisis ekonomi sistemik, memastikan tabungan anggota tidak hilang.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">🎓</div>
                  <div>
                     <h5 className="font-bold">Sertifikasi Global</h5>
                     <p className="text-xs text-indigo-200 mt-1">Anggota kita bisa mendapatkan sertifikat kompetensi finansial yang diakui oleh <b>ACCU</b> secara internasional.</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 flex flex-col justify-center space-y-6">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">🚀</div>
            <h3 className="text-2xl font-black text-slate-800 text-center">Inspirasi Gerakan</h3>
            <p className="text-slate-500 text-sm leading-relaxed text-center italic">
               "Credit Union (CU) di Indonesia bukan pemain baru. Gerakan ini sudah ada sejak 1970-an dan telah menyelamatkan jutaan rakyat. KoperatifAI hanyalah <b>Bentuk Digital</b> tercanggih dari gerakan mulia ini."
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
               <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-indigo-600 font-black text-lg">110M+</p>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Anggota CU Global</p>
               </div>
               <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-indigo-600 font-black text-lg">100k+</p>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Kantor CU Dunia</p>
               </div>
            </div>
         </div>
      </div>

      {/* Call to Action */}
      <div className="p-12 bg-indigo-600 border border-indigo-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white">
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl">🤝</div>
         <h4 className="text-3xl font-black max-w-xl italic">"Bekerjasama Tanpa Kehilangan Identitas."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed">
            Bergabung dengan federasi bukan berarti kita tunduk pada birokrasi lama. Kita bergabung untuk mendapatkan <b>Proteksi Hukum & Likuiditas</b>, sementara operasional harian tetap dikelola secara mandiri oleh AI KoperatifAI.
         </p>
         <div className="flex gap-4">
            <button className="px-10 py-4 bg-white text-indigo-600 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-50 transition-all shadow-xl">Pelajari Piagam Federasi</button>
         </div>
      </div>
    </div>
  );
};

export default StrategicFederation;
