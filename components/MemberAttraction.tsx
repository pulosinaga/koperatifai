
import React from 'react';

const MemberAttraction: React.FC = () => {
  const magnets = [
    {
      title: 'Bukan Nasabah, Tapi Pemilik',
      desc: 'Di bank Anda adalah angka. Di sini, Anda punya hak suara dan memiliki aset koperasi secara proporsional.',
      icon: '👑',
      tag: 'Status'
    },
    {
      title: 'Bagi Hasil (SHU) Nyata',
      desc: 'Keuntungan dari bunga pinjaman tidak lari ke pemegang saham luar, tapi kembali ke kantong Anda.',
      icon: '💰',
      tag: 'Profit'
    },
    {
      title: 'Pinjaman Berbasis Karakter',
      desc: 'AI kami melihat kerajinan Anda menabung, bukan sekadar jaminan sertifikat tanah.',
      icon: '🤝',
      tag: 'Akses'
    },
    {
      title: 'Transparansi Radikal',
      desc: 'Lihat aliran uang koperasi secara real-time. Tidak ada yang disembunyikan pengurus.',
      icon: '💎',
      tag: 'Trust'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-5xl font-black text-slate-800 tracking-tight leading-tight">
          Mengapa Orang Akan <span className="text-indigo-600">Berbondong-bondong</span> Bergabung?
        </h2>
        <p className="text-slate-500 text-xl mt-6">
          KoperatifAI menyelesaikan masalah kepercayaan dan birokrasi yang selama ini menghambat ekonomi rakyat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {magnets.map((m, i) => (
          <div key={i} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group">
            <div className="flex justify-between items-start mb-8">
              <div className="text-6xl group-hover:scale-110 transition-transform">{m.icon}</div>
              <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                {m.tag}
              </span>
            </div>
            <h3 className="text-2xl font-black text-slate-800 leading-tight">{m.title}</h3>
            <p className="text-slate-500 mt-4 leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-indigo-900 rounded-[4rem] p-12 lg:p-20 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <h3 className="text-4xl font-black leading-tight italic">"Koperasi Digital adalah Senjata Baru Usaha Kecil."</h3>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">✨</div>
                <div>
                   <h5 className="font-bold text-xl">Magnet Millennial & Gen Z</h5>
                   <p className="text-indigo-200/70 text-sm mt-1">Mereka menyukai kemudahan digital, tapi membenci sistem perbankan yang kaku. Kita adalah titik temu yang sempurna.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">🚀</div>
                <div>
                   <h5 className="font-bold text-xl">Skalabilitas Eksponensial</h5>
                   <p className="text-indigo-200/70 text-sm mt-1">Satu desa bisa mengajak desa tetangga hanya dalam satu klik link referral, tanpa perlu membangun kantor cabang fisik.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-96 bg-emerald-500 p-10 rounded-[3rem] text-indigo-950 shadow-2xl rotate-2">
             <p className="text-xs font-black uppercase tracking-widest mb-2 opacity-70">Impact Goal</p>
             <h4 className="text-3xl font-black leading-tight mb-6">Target: 1 Juta Anggota Merdeka Finansial</h4>
             <p className="text-sm font-bold leading-relaxed mb-8">Setiap 1 anggota baru berarti modal tambahan bagi 10 usaha mikro di komunitas kita.</p>
             <button className="w-full py-4 bg-indigo-950 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-black transition-colors">
                Gabung Gerakan Ini
             </button>
          </div>
        </div>
      </div>

      <div className="p-12 bg-white border border-slate-100 rounded-[3.5rem] shadow-sm flex flex-col items-center text-center">
         <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-4xl mb-6 text-emerald-600">⚖️</div>
         <h4 className="text-2xl font-black text-slate-800">Daya Tarik Paling Emosional?</h4>
         <p className="text-slate-500 mt-4 max-w-2xl text-lg leading-relaxed italic">
            "Orang akan bergabung karena mereka merasa **Dihargai**. Di sini, penabung kecil dan peminjam kecil duduk di meja yang sama sebagai pemilik. Teknologi hanyalah cara agar kejujuran ini bisa berjalan otomatis."
         </p>
      </div>
    </div>
  );
};

export default MemberAttraction;
