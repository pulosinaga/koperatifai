
import React from 'react';

const CommunityImpact: React.FC = () => {
  const impacts = [
    {
      category: 'Lingkungan Ekonomi',
      title: 'Sirklulasi Kekayaan Lokal',
      desc: 'Mencegah aliran uang keluar ke bank pusat atau investor asing. Setiap rupiah jasa pinjaman kembali ke anggota sebagai SHU.',
      icon: '💸',
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      category: 'Lingkungan Sosial',
      title: 'Jaring Pengaman Komunitas',
      desc: 'Melalui DASKOP, kita membangun solidaritas di mana anggota yang beruntung melindungi anggota yang tertimpa musibah.',
      icon: '🤝',
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      category: 'Lingkungan Ekologis',
      title: 'Koperasi Tanpa Kertas',
      desc: 'Operasi 100% digital menghemat jutaan lembar kertas per tahun dan mengurangi emisi karbon dari perjalanan fisik ke kantor.',
      icon: '🌿',
      color: 'bg-teal-50 text-teal-600'
    },
    {
      category: 'Lingkungan Digital',
      title: 'Literasi Keuangan Masa Depan',
      desc: 'Mendidik masyarakat tentang teknologi AI dan manajemen keuangan modern agar tidak lagi terjebak tipuan digital.',
      icon: '🧠',
      color: 'bg-amber-50 text-amber-600'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Hero Header */}
      <div className="bg-emerald-950 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Environment & Social Contribution
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Tumbuh Bersama Komunitas, <br/>Menjaga Ekosistem Kehidupan.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              KoperatifAI tidak hidup di ruang hampa. Keberhasilan kita diukur dari seberapa sehat ekonomi, sosial, dan alam di sekitar kita.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🌱</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Impact Factor</p>
             <p className="text-2xl font-black text-emerald-400 mt-1">POSITIVE</p>
             <p className="text-[9px] text-slate-500 mt-2 uppercase">Sustainability Protocol Active</p>
          </div>
        </div>
      </div>

      {/* Impact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {impacts.map((imp, i) => (
          <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
             <div className={`w-16 h-16 ${imp.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                {imp.icon}
             </div>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{imp.category}</p>
             <h4 className="text-lg font-black text-slate-800 leading-tight">{imp.title}</h4>
             <p className="text-xs text-slate-500 mt-4 leading-relaxed flex-1">{imp.desc}</p>
          </div>
        ))}
      </div>

      {/* Circular Economy Visualization */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm overflow-hidden relative">
         <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>
         <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
            <div className="flex-1 space-y-6">
               <h3 className="text-3xl font-black text-slate-800 italic">Ekonomi Sirkular Koperasi</h3>
               <p className="text-slate-500 text-lg leading-relaxed italic">
                  "Uang yang berputar di dalam komunitas adalah pupuk bagi kesejahteraan lokal."
               </p>
               <div className="space-y-4">
                  <div className="flex gap-4 p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
                     <span className="text-2xl">🔄</span>
                     <p className="text-sm text-emerald-800 font-medium leading-relaxed">
                        Bunga pinjaman anggota tidak menjadi bonus bankir di Jakarta atau New York, melainkan menjadi penambah saldo tabungan anggota lain di lingkungan Anda.
                     </p>
                  </div>
                  <div className="flex gap-4 p-5 bg-teal-50 rounded-2xl border border-teal-100">
                     <span className="text-2xl">🌳</span>
                     <p className="text-sm text-teal-800 font-medium leading-relaxed">
                        Dengan meniadakan kantor fisik mewah, kita menghemat konsumsi energi secara masif. Kantor kita ada di saku anggota (ponsel), yang ditenagai oleh efisiensi digital.
                     </p>
                  </div>
               </div>
            </div>
            <div className="w-full lg:w-96 aspect-square bg-slate-900 rounded-[4rem] flex flex-col items-center justify-center p-12 text-center space-y-4 shadow-2xl">
               <div className="text-7xl animate-spin-slow">♻️</div>
               <h4 className="text-xl font-bold text-emerald-400 uppercase tracking-widest">Eco-Financial Cycle</h4>
               <p className="text-xs text-slate-400 leading-relaxed italic">"Kesejahteraan yang tidak merusak lingkungan."</p>
            </div>
         </div>
      </div>

      {/* Commitment Section */}
      <div className="p-12 bg-emerald-600 border border-emerald-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white">
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl">🌍</div>
         <h4 className="text-3xl font-black max-w-xl italic">"Bekerja Untuk Hari Ini, Menjaga Untuk Masa Depan."</h4>
         <p className="text-emerald-100 max-w-2xl text-lg leading-relaxed">
            KoperatifAI adalah kontribusi kita untuk lingkungan yang lebih adil. Kita mengganti eksploitasi dengan kolaborasi, dan polusi birokrasi dengan efisiensi AI.
         </p>
         <div className="flex gap-4">
            <button className="px-10 py-4 bg-white text-emerald-600 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-emerald-50 transition-all shadow-xl">Lihat Laporan Dampak Tahunan</button>
         </div>
      </div>
    </div>
  );
};

export default CommunityImpact;
