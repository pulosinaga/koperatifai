
import React from 'react';

const AntidotePinjol: React.FC = () => {
  const comparisons = [
    {
      feature: 'Tujuan Dana',
      pinjol: 'Profit Maksimal untuk Pemilik App',
      koperatif: 'Kesejahteraan Anggota (Pemilik)',
      icon: '🎯'
    },
    {
      feature: 'Suku Bunga',
      pinjol: '0.4% - 0.8% Per Hari (Mencekik)',
      koperatif: '1.0% - 1.5% Per Bulan (Adil)',
      icon: '💸'
    },
    {
      feature: 'Metode Penagihan',
      pinjol: 'Teror Kontak & Intimidasi Digital',
      koperatif: 'Pendampingan AI & Solusi Kekeluargaan',
      icon: '🛡️'
    },
    {
      feature: 'Transparansi',
      pinjol: 'Biaya Tersembunyi di Awal',
      koperatif: 'Real-time Ledger & Tanpa Biaya Admin',
      icon: '💎'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Hero Section */}
      <div className="bg-rose-950 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-rose-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-600/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-rose-600/30 text-rose-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-rose-600/30">
              Antidote Strategy
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Penawar Racun Pinjaman Online: <br/>KoperatifAI Adalah Benteng Anda.</h2>
            <p className="text-rose-100 text-lg leading-relaxed max-w-2xl">
              Pinjol adalah lintah darat modern. KoperatifAI hadir bukan untuk meniru mereka, tapi untuk menghancurkan dominasi mereka melalui **Solidaritas Digital**.
            </p>
          </div>
          <div className="w-full lg:w-72 bg-white p-8 rounded-[2.5rem] shadow-2xl text-rose-900 text-center flex flex-col items-center">
             <div className="text-6xl mb-4">🚫</div>
             <p className="text-xs font-black uppercase tracking-widest text-rose-400">Status Ancaman</p>
             <p className="text-xl font-black mt-1">Zero Pinjol Zone</p>
          </div>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {comparisons.map((c, i) => (
           <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex items-center gap-4 mb-8">
                 <div className="text-4xl group-hover:scale-110 transition-transform">{c.icon}</div>
                 <h4 className="text-xl font-black text-slate-800 uppercase tracking-tighter">{c.feature}</h4>
              </div>
              <div className="space-y-4">
                 <div className="p-5 bg-rose-50 rounded-2xl border border-rose-100">
                    <p className="text-[10px] font-black text-rose-600 uppercase mb-1">Pinjol (Predator)</p>
                    <p className="text-sm font-medium text-rose-900">{c.pinjol}</p>
                 </div>
                 <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <p className="text-[10px] font-black text-emerald-600 uppercase mb-1">KoperatifAI (Pelindung)</p>
                    <p className="text-sm font-black text-emerald-900">{c.koperatif}</p>
                 </div>
              </div>
           </div>
         ))}
      </div>

      {/* Debt Shield Feature */}
      <div className="bg-slate-900 rounded-[4rem] p-12 text-white overflow-hidden relative">
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
         <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-6">
               <h3 className="text-3xl font-black leading-tight italic">Fitur "Debt Shield" (Perisai Hutang)</h3>
               <p className="text-slate-400 text-lg leading-relaxed">
                  Jika AI kami mendeteksi anggota yang mulai kesulitan finansial (melalui data simpanan), sistem akan menawarkan **Dana Darurat Koperasi** dengan bunga rendah untuk melunasi hutang Pinjol mereka sebelum membengkak.
               </p>
               <div className="flex gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex-1">
                     <p className="text-indigo-400 text-[10px] font-black uppercase">Fungsi Utama</p>
                     <p className="text-sm font-bold mt-1 text-white">Consolidation</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex-1">
                     <p className="text-indigo-400 text-[10px] font-black uppercase">Dampak Sosial</p>
                     <p className="text-sm font-bold mt-1 text-white">Mental Health</p>
                  </div>
               </div>
            </div>
            <div className="w-full lg:w-80 bg-indigo-600 p-10 rounded-[3rem] text-center shadow-2xl rotate-3">
               <div className="text-5xl mb-4">🛡️</div>
               <h4 className="text-xl font-bold">Safe Exit Strategy</h4>
               <p className="text-sm text-indigo-100 mt-4 leading-relaxed italic">"Jangan biarkan satu anggota pun jatuh ke tangan predator."</p>
            </div>
         </div>
      </div>

      {/* The Antidote Logic */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center text-5xl shrink-0">🧪</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-slate-800">Kenapa Pinjol Takut pada Koperasi?</h4>
            <p className="text-slate-500 text-lg leading-relaxed">
               Pinjol hanya bisa hidup di tempat yang **individualis**. Saat rakyat bersatu dalam koperasi, kekuatan tawar kita menjadi terlalu kuat bagi mereka. Kita tidak bersaing dengan Pinjol; kita **menghapus kebutuhan** akan Pinjol.
            </p>
         </div>
      </div>

      {/* Final Message */}
      <div className="p-12 bg-rose-900 border border-rose-800 rounded-[3.5rem] shadow-sm flex flex-col items-center text-center space-y-8">
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl text-rose-900">✊</div>
         <h4 className="text-3xl font-black text-white max-w-xl italic">"Berdiri di Atas Kaki Sendiri, Bukan di Atas Belas Kasihan Pinjol."</h4>
         <p className="text-rose-200 max-w-2xl text-lg leading-relaxed">
            KoperatifAI dirancang sebagai **Antivirus** bagi ekonomi rakyat Indonesia. Dengan menabung di sini, Anda tidak hanya menyelamatkan diri sendiri, tapi juga memutus rantai kemiskinan anggota lain.
         </p>
         <button className="px-10 py-4 bg-white text-rose-900 rounded-2xl font-black uppercase tracking-widest hover:shadow-2xl transition-all">Laporkan Ancaman Pinjol</button>
      </div>
    </div>
  );
};

export default AntidotePinjol;
