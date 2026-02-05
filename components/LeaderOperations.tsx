
import React from 'react';

const LeaderOperations: React.FC = () => {
  const workflow = [
    {
      title: 'Penerimaan Tugas AI',
      desc: 'AI memberikan daftar tugas harian: 5 verifikasi anggota baru & 2 pendampingan merchant.',
      icon: '📱',
      tech: 'AI Task Scheduler'
    },
    {
      title: 'Verifikasi Lapangan',
      desc: 'Duta mengunjungi lokasi anggota. Melakukan interview singkat & validasi aset via aplikasi.',
      icon: '🛵',
      tech: 'Geolocation Validation'
    },
    {
      title: 'Submit Vouching',
      desc: 'Duta memberikan rekomendasi (Trust Score). Data langsung tersinkron ke skor kredit AI.',
      icon: '🛡️',
      tech: 'Decentralized Identity'
    },
    {
      title: 'Forum Komunitas',
      desc: 'Mengadakan edukasi mingguan. Mensosialisasikan manfaat SHU & cara bebas pinjol.',
      icon: '🗣️',
      tech: 'Community Engagement'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Operations Header */}
      <div className="bg-indigo-950 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Representative Operational Manual
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Sistem Kerja Duta: <br/>Kearifan Lokal x Kecepatan AI.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Kami tidak butuh kantor cabang. Kami butuh **Manusia** yang diperkuat oleh **Intelegensi**. Inilah alur kerja Duta KoperatifAI di seluruh Indonesia.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">💼</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Operational Style</p>
             <p className="text-xl font-black text-emerald-400 mt-1">LEAN & MOBILE</p>
             <p className="text-[9px] text-slate-500 mt-2 uppercase tracking-tighter">Powered by Personal Smartphone</p>
          </div>
        </div>
      </div>

      {/* Workflow Visualization */}
      <div className="space-y-8">
         <h3 className="text-2xl font-black text-slate-800 italic text-center">Alur Kerja Harian Duta</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((item, i) => (
               <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
                  <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                     {item.icon}
                  </div>
                  <h4 className="font-black text-slate-800 leading-tight mb-3">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6 flex-1 italic">"{item.desc}"</p>
                  <div className="pt-4 border-t border-slate-50">
                     <p className="text-[8px] font-black text-indigo-400 uppercase tracking-widest">System Interface:</p>
                     <p className="text-[10px] font-bold text-slate-400 mt-1">{item.tech}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* The Compensation Strategy Logic */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic">Mengapa Kami Tidak Memberi Gaji Tetap?</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
               Gaji tetap tradisional menciptakan beban **Fixed Cost** yang besar bagi koperasi. Kami ingin menjaga agar koperasi tetap lincah. Sebagai gantinya, kami memberikan <b>Profit-Sharing</b> yang jauh lebih besar bagi Duta yang aktif.
            </p>
            <div className="space-y-4">
               {[
                 { t: 'Keadilan Hasil', d: 'Semakin rajin Duta membina anggota, semakin besar pendapatan pasifnya.', icon: '⚖️' },
                 { t: 'Keberlanjutan Dana', d: 'Kompensasi dibayar dari Surplus Jasa, memastikan koperasi tidak pernah defisit.', icon: '🌊' },
                 { t: 'Kemandirian Finansial', d: 'Duta adalah pemilik bisnis wilayahnya sendiri di bawah bendera KoperatifAI.', icon: '🚀' }
               ].map((f, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                     <div className="text-2xl shrink-0">{f.icon}</div>
                     <div>
                        <h5 className="font-bold text-slate-800 text-sm">{f.t}</h5>
                        <p className="text-xs text-slate-500 mt-1">{f.d}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         <div className="bg-indigo-900 p-10 rounded-[3rem] text-white space-y-8 flex flex-col justify-center shadow-xl">
            <h3 className="text-2xl font-black italic">Mekanisme Penggajian Otomatis</h3>
            <p className="text-sm text-indigo-100">
               Lupakan sistem slip gaji manual. AI Treasury kami menghitung hak Anda setiap detik berdasarkan aktivitas riil di lapangan.
            </p>
            <div className="space-y-6">
               <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                  <h5 className="text-emerald-400 font-bold text-sm mb-2 uppercase">Real-time Calculation</h5>
                  <p className="text-xs text-slate-400">Setiap ada transaksi marketplace di wilayah Anda, saldo "Jasa Duta" Anda bertambah secara otomatis dan bisa ditarik kapan saja.</p>
               </div>
               <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                  <h5 className="text-indigo-300 font-bold text-sm mb-2 uppercase">Transparent Ledger</h5>
                  <p className="text-xs text-slate-400">Anda memiliki dashboard khusus yang merinci darimana setiap rupiah pendapatan Anda berasal. Adil bagi Duta, adil bagi Anggota.</p>
               </div>
            </div>
            <div className="text-center">
               <span className="px-6 py-2 bg-emerald-500 text-indigo-950 rounded-full font-black uppercase text-[10px] tracking-widest">Inovasi HR v4.0</span>
            </div>
         </div>
      </div>

      {/* Leadership Call to Action */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8">
         <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-5xl">👔</div>
         <h4 className="text-3xl font-black text-slate-800 max-w-xl italic">"Pemimpin Adalah Pelayan Terdepan."</h4>
         <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
            Sistem kerja Duta dirancang untuk menciptakan **Pribadi yang Berdaulat**. Anda tidak diperintah oleh atasan, Anda dipandu oleh Visi dan dibantu oleh AI untuk menyejahterakan rakyat di sekeliling Anda.
         </p>
         <div className="flex gap-4">
            <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Tinjau Pakta Integritas Duta</button>
         </div>
      </div>
    </div>
  );
};

export default LeaderOperations;
