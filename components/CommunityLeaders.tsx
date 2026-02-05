
import React from 'react';

const CommunityLeaders: React.FC = () => {
  const regions = [
    { name: 'Jawa Barat', leaders: 12, members: 450, growth: '+12%', color: 'bg-indigo-500' },
    { name: 'Jawa Timur', leaders: 8, members: 320, growth: '+8%', color: 'bg-emerald-500' },
    { name: 'Sumatera Utara', leaders: 5, members: 180, growth: '+15%', color: 'bg-rose-500' },
    { name: 'Sulawesi Selatan', leaders: 3, members: 95, growth: '+20%', color: 'bg-amber-500' },
  ];

  const benefits = [
    { t: 'Override Commission', d: 'Dapatkan 0.1% dari setiap transaksi marketplace di wilayah Anda.', icon: '💸' },
    { t: 'Management Training', d: 'Akses eksklusif ke kurikulum tata kelola koperasi standar internasional.', icon: '🎓' },
    { t: 'Special SHU Pool', d: 'Alokasi 5% SHU Koperasi khusus untuk Duta Komunitas berprestasi.', icon: '💎' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-[#0f172a] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Regional Empowerment Protocol
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Duta Komunitas: <br/>Ujung Tombak Kepercayaan.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Teknologi kami menjangkau sinyal, tapi **Duta kami menjangkau hati**. Jadilah perwakilan resmi KoperatifAI di daerah Anda.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🤝</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Total Duta Nasional</p>
             <p className="text-3xl font-black text-emerald-400 mt-1">128 Tokoh</p>
             <button className="mt-6 w-full py-3 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-indigo-700 transition-all">Daftar Jadi Duta</button>
          </div>
        </div>
      </div>

      {/* Regional Mapping */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
         <div className="text-center space-y-2">
            <h3 className="text-2xl font-black text-slate-800 italic">Peta Kekuatan Regional</h3>
            <p className="text-slate-500 text-sm">Distribusi pertumbuhan anggota berdasarkan kepemimpinan Duta di lapangan.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((r, i) => (
               <div key={i} className="p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                  <div className={`w-3 h-3 rounded-full mb-4 ${r.color} animate-pulse`}></div>
                  <h4 className="font-black text-slate-800">{r.name}</h4>
                  <div className="mt-4 space-y-2">
                     <p className="text-[10px] font-bold text-slate-400 uppercase">Duta: <span className="text-slate-800">{r.leaders}</span></p>
                     <p className="text-[10px] font-bold text-slate-400 uppercase">Anggota: <span className="text-slate-800">{r.members}</span></p>
                     <p className="text-[10px] font-black text-emerald-600 uppercase mt-2">Growth: {r.growth}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Why Become a Leader? */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-indigo-900 p-10 rounded-[3rem] text-white space-y-8 flex flex-col justify-center">
            <h3 className="text-2xl font-black italic">Keuntungan Menjadi Duta</h3>
            <div className="space-y-6">
               {benefits.map((b, i) => (
                 <div key={i} className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-all">
                    <div className="text-3xl shrink-0">{b.icon}</div>
                    <div>
                       <h5 className="font-bold text-white text-sm">{b.t}</h5>
                       <p className="text-[10px] text-indigo-200 mt-1 leading-relaxed">{b.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 flex flex-col justify-center space-y-6">
            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center text-4xl mx-auto">🛡️</div>
            <h4 className="text-2xl font-black text-slate-800 text-center italic">"Verifikator Manusia, Integritas Digital."</h4>
            <p className="text-slate-500 text-sm leading-relaxed text-center px-6">
               Duta Komunitas adalah mata dan telinga AI di dunia nyata. Mereka memastikan setiap pinjaman modal usaha benar-benar digunakan untuk usaha yang produktif, bukan fiktif.
            </p>
            <div className="pt-4 border-t border-slate-50">
               <p className="text-[10px] font-black text-slate-400 uppercase text-center mb-2">Syarat Menjadi Duta:</p>
               <ul className="text-[10px] text-slate-500 space-y-1 px-8 list-disc">
                  <li>Anggota Platinum aktif minimal 6 bulan.</li>
                  <li>Memiliki minimal 20 referral aktif di bawahnya.</li>
                  <li>Lulus uji kepatuhan etik & literasi finansial AI.</li>
               </ul>
            </div>
         </div>
      </div>

      {/* Founder Message */}
      <div className="p-12 bg-indigo-600 border border-indigo-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white">
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl">🏛️</div>
         <h4 className="text-3xl font-black max-w-xl italic">"Bukan Cabang Fisik, Tapi Jaringan Manusia."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed">
            Kita tidak butuh membangun ruko di setiap kecamatan. Kita hanya butuh **1 Tokoh Masyarakat** yang jujur di setiap desa untuk mengaktifkan ribuan orang. Inilah rahasia pertumbuhan eksponensial KoperatifAI.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-600 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-50 transition-all shadow-xl">Buka Panduan Duta Daerah</button>
      </div>
    </div>
  );
};

export default CommunityLeaders;
