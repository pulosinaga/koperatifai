
import React from 'react';

const NewsAndUpdates: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      tag: 'PERTUMBUHAN',
      title: 'Tembus 1.200 Anggota Aktif di Bulan Pebruari 2026!',
      desc: 'Kepercayaan anggota terus meningkat. Total dana kolektif kini telah mencapai Rp 12,4 Miliar. Terima kasih atas partisipasi seluruh anggota.',
      date: '05 Pebruari 2026',
      icon: '🚀',
      image: 'bg-emerald-500'
    },
    {
      id: 2,
      tag: 'KEBIJAKAN',
      title: 'Penurunan Bunga Pinjaman Mikro: Hanya 0.9% Flat.',
      desc: 'Sesuai kesepakatan e-RAT, AI Treasury memutuskan untuk menurunkan bunga pinjaman modal usaha guna memicu kebangkitan UMKM di ekosistem kita.',
      date: '02 Pebruari 2026',
      icon: '📉',
      image: 'bg-indigo-500'
    },
    {
      id: 3,
      tag: 'COMMUNITY',
      title: 'Kisah Sukses: Pak Budi & Warung Bakso Berbasis QRIS.',
      desc: 'Bagaimana integrasi QRIS KoperatifAI membantu Pak Budi meningkatkan omzet hingga 40% dalam 3 bulan terakhir melalui data stok AI.',
      date: '28 Januari 2026',
      icon: '🍜',
      image: 'bg-amber-500'
    },
    {
      id: 4,
      tag: 'SYSTEM',
      title: 'Peningkatan Keamanan: Sentinel AI Guard 4.0.',
      desc: 'Audit otomatis kini 2x lebih cepat mendeteksi anomali transaksi. Dana Anda kini dilindungi oleh protokol enkripsi terbaru yang diakui global.',
      date: '15 Januari 2026',
      icon: '🛡️',
      image: 'bg-rose-500'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Header News */}
      <div className="bg-indigo-950 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/30 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/30">
              Cooperative Bulletin
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Berita & Perkembangan <br/>KoperatifAI Nasional.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Lihat bagaimana setiap rupiah tabungan Anda bekerja membangun ekonomi rakyat secara nyata dan transparan.
            </p>
          </div>
          <div className="w-full lg:w-72 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-5xl mb-4">📰</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Update Terakhir</p>
             <p className="text-xl font-black text-indigo-400">Pebruari 2026</p>
          </div>
        </div>
      </div>

      {/* Feature Growth Report */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {[
           { label: 'Total Anggota', value: '1,248', change: '+15%', icon: '👥' },
           { label: 'Dana Terkelola', value: 'Rp 12.4M', change: '+8%', icon: '💰' },
           { label: 'Valuasi Entitas', value: '$1.05M', change: '+22%', icon: '📈' },
         ].map((stat, i) => (
           <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex items-center justify-between group hover:shadow-xl transition-all">
              <div className="space-y-1">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                 <h4 className="text-2xl font-black text-slate-800 tracking-tighter">{stat.value}</h4>
                 <p className="text-[10px] font-bold text-emerald-600">{stat.change} vs Jan 2026</p>
              </div>
              <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">{stat.icon}</div>
           </div>
         ))}
      </div>

      {/* Main News Feed */}
      <div className="space-y-8">
         <h3 className="text-2xl font-black text-slate-800 italic">Kabar Utama Komunitas</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsItems.map((item) => (
               <div key={item.id} className="bg-white rounded-[3.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className={`h-48 ${item.image} flex items-center justify-center text-7xl relative overflow-hidden`}>
                     <div className="absolute top-0 left-0 w-full h-full bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <span className="relative z-10 group-hover:scale-125 transition-transform duration-500">{item.icon}</span>
                     <div className="absolute top-6 left-6 px-3 py-1 bg-white rounded-full text-[9px] font-black uppercase tracking-widest text-slate-800 shadow-xl">
                        {item.tag}
                     </div>
                  </div>
                  <div className="p-10 flex-1 flex flex-col space-y-4">
                     <div className="space-y-2">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">{item.date}</p>
                        <h4 className="text-xl font-black text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                     </div>
                     <p className="text-sm text-slate-500 leading-relaxed flex-1 italic line-clamp-3">"{item.desc}"</p>
                     <div className="pt-6 border-t border-slate-50">
                        <button className="text-xs font-black text-indigo-600 uppercase tracking-widest hover:underline flex items-center gap-2">
                           Baca Selengkapnya <span className="text-lg">→</span>
                        </button>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Community Roadmap Banner */}
      <div className="p-12 bg-slate-900 border border-slate-800 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-12 text-white overflow-hidden relative">
         <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
         <div className="text-7xl shrink-0">📍</div>
         <div className="flex-1 space-y-4 relative z-10">
            <h4 className="text-3xl font-black italic">Misi Selanjutnya: "Peta Inklusi 1 Juta Rakyat"</h4>
            <p className="text-slate-400 text-lg leading-relaxed">
               Bulan depan (Maret 2026), KoperatifAI akan meluncurkan fitur **Saksi Digital 2.0** yang memungkinkan verifikasi anggota baru melalui panggilan video AI terenkripsi. Persiapkan diri Anda untuk menyambut gelombang anggota baru!
            </p>
            <div className="flex gap-4 pt-4">
               <button className="px-8 py-3 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg hover:bg-indigo-700 transition-all">Lihat Roadmap Detail</button>
               <button className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all">Kirim Ide Fitur</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default NewsAndUpdates;
