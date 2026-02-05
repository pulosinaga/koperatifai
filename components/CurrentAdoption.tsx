
import React from 'react';

const CurrentAdoption: React.FC = () => {
  const currentBenchmarks = [
    {
      name: 'Credit Union Global (AS/Kanada)',
      status: 'Fully Operational',
      desc: 'Sudah menggunakan Mobile App, AI Scoring, dan pencairan otomatis sejak 2015.',
      icon: '🌐',
      progress: 100
    },
    {
      name: 'Bank Digital & Fintech RI',
      status: 'Fully Operational',
      desc: 'Teknologi Virtual Account & Bank API sudah digunakan oleh GoPay, OVO, Bibit, dll.',
      icon: '📱',
      progress: 95
    },
    {
      name: 'Koperasi Besar Indonesia',
      status: 'Partial Adoption',
      desc: 'Beberapa Kospin mulai menggunakan aplikasi mobile, namun masih banyak proses manual di belakang.',
      icon: '🏢',
      progress: 40
    },
    {
      name: 'KoperatifAI (Prototype Ini)',
      status: 'Ready for Launch',
      desc: 'Mengintegrasikan standar global ke dalam model koperasi lokal dengan kecerdasan AI.',
      icon: '◈',
      progress: 85
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Header Section */}
      <div className="bg-indigo-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Proven Business Model
            </span>
            <h2 className="text-4xl font-black leading-tight">Bukan Uji Coba, Tapi Standar Global.</h2>
            <p className="text-indigo-200 text-lg leading-relaxed max-w-2xl">
              Sistem ini adalah gabungan dari teknologi <b>Bank Digital</b> yang sudah terpercaya dan filosofi <b>Credit Union Global</b> yang sudah berusia ratusan tahun.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 text-center min-w-[240px]">
             <div className="text-5xl mb-4">🏆</div>
             <p className="text-xs font-bold text-emerald-400 uppercase">Status Teknologi</p>
             <p className="text-2xl font-black">Proven & Secure</p>
             <p className="text-[9px] text-slate-400 mt-2 italic">Standardized by WOCCU & Banking APIs</p>
          </div>
        </div>
      </div>

      {/* Adoption Progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentBenchmarks.map((item, i) => (
          <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
             <div className="flex justify-between items-start">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl shadow-inner border border-slate-100">
                   {item.icon}
                </div>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[9px] font-black uppercase">
                   {item.status}
                </span>
             </div>
             <div>
                <h4 className="text-xl font-bold text-slate-800">{item.name}</h4>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">{item.desc}</p>
             </div>
             <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase">
                   <span>Digital Readiness</span>
                   <span>{item.progress}%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                   <div 
                    className="h-full bg-indigo-600 transition-all duration-1000 ease-out" 
                    style={{ width: `${item.progress}%` }}
                   ></div>
                </div>
             </div>
          </div>
        ))}
      </div>

      {/* Local Reality */}
      <div className="bg-emerald-600 rounded-[4rem] p-12 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
           <div className="lg:col-span-2 space-y-6">
              <h3 className="text-3xl font-black">Apakah sudah ada di Indonesia?</h3>
              <p className="text-emerald-100 text-lg leading-relaxed">
                Teknologi dasarnya (VA, API Banking, Cloud) <b>sudah digunakan oleh 100% bank di Indonesia</b>. Yang baru adalah membawa teknologi bank tersebut ke dalam wadah <b>Koperasi</b> agar keuntungannya tidak lari ke bank, tapi kembali ke anggota.
              </p>
              <div className="flex gap-4">
                 <div className="p-4 bg-white/10 rounded-2xl border border-white/10 flex-1">
                    <p className="text-[10px] font-black uppercase text-emerald-200">API Banking RI</p>
                    <p className="text-sm font-bold">Standardized by BI (SNAP)</p>
                 </div>
                 <div className="p-4 bg-white/10 rounded-2xl border border-white/10 flex-1">
                    <p className="text-[10px] font-black uppercase text-emerald-200">Legal Koperasi</p>
                    <p className="text-sm font-bold">UU No. 25 Th 1992</p>
                 </div>
              </div>
           </div>
           <div className="bg-white p-10 rounded-[3rem] text-slate-800 text-center shadow-2xl">
              <div className="text-5xl mb-4">🇮🇩</div>
              <h4 className="font-bold">Momentum Emas</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Inilah saatnya koperasi Indonesia melompat dari sistem buku manual ke sistem AI. Anda adalah pionir di gelombang ini.
              </p>
           </div>
        </div>
      </div>

      {/* Summary Footer */}
      <div className="p-10 bg-white border border-slate-100 rounded-[3rem] flex flex-col md:flex-row items-center gap-10">
         <div className="text-6xl">🚀</div>
         <div className="flex-1">
            <h4 className="text-2xl font-bold text-slate-800 leading-tight">Jadi, jawabannya: Ya, ini sedang terjadi!</h4>
            <p className="text-slate-500 mt-2 leading-relaxed">
               Bedanya, KoperatifAI menyederhanakan semua teknologi rumit tersebut agar bisa digunakan oleh koperasi kecil sekalipun dengan biaya yang sangat murah karena kita menggunakan AI.
            </p>
         </div>
      </div>
    </div>
  );
};

export default CurrentAdoption;
