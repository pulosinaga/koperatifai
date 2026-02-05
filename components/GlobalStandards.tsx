
import React from 'react';

const GlobalStandards: React.FC = () => {
  const principles = [
    {
      title: 'Struktur Demokratis',
      desc: 'Setiap anggota memiliki hak suara yang sama tanpa memandang jumlah simpanan. KoperatifAI mendukung e-Voting transparan.',
      icon: '⚖️'
    },
    {
      title: 'Kepemilikan Anggota',
      desc: 'Modal koperasi berasal dari anggota dan dikelola untuk kepentingan anggota, bukan pemegang saham eksternal.',
      icon: '🏛️'
    },
    {
      title: 'Edukasi Finansial',
      desc: 'CU global wajib mengedukasi anggotanya. AI Advisor kami adalah perpanjangan digital dari nilai ini.',
      icon: '🎓'
    },
    {
      title: 'Tanggung Jawab Sosial',
      desc: 'Sisa Hasil Usaha (SHU) dikembalikan ke komunitas untuk meningkatkan kesejahteraan kolektif.',
      icon: '🌍'
    }
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="bg-indigo-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="px-4 py-1.5 bg-indigo-500/30 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              International Compliance
            </span>
            <h2 className="text-4xl font-black mt-4 leading-tight">Standar Credit Union Global</h2>
            <p className="text-indigo-200 mt-4 text-lg leading-relaxed max-w-xl">
              KoperatifAI mengadopsi prinsip yang ditetapkan oleh <strong>World Council of Credit Unions (WOCCU)</strong>. Kita bukan sekadar aplikasi pinjol, kita adalah komunitas finansial modern.
            </p>
          </div>
          <div className="w-48 h-48 bg-white/10 backdrop-blur-2xl rounded-3xl flex items-center justify-center text-8xl shadow-2xl border border-white/20">
            🌎
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {principles.map((p, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-3xl mb-6">
              {p.icon}
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-2">{p.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
           <div className="text-5xl">🇺🇸 🇪🇺 🇨🇦</div>
           <div>
              <h4 className="font-bold text-emerald-900">Adopsi Global</h4>
              <p className="text-emerald-700 text-sm">Model ini telah sukses di AS (Navy Federal), Jerman (Raiffeisen), dan Kanada (Desjardins).</p>
           </div>
        </div>
        <div className="text-right">
           <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Total Aset CU Global</p>
           <p className="text-2xl font-black text-emerald-900">$3.5 Triliun+</p>
        </div>
      </div>
    </div>
  );
};

export default GlobalStandards;
