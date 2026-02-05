
import React from 'react';

const CommunityMobilization: React.FC = () => {
  const strategies = [
    {
      title: 'Digital Referral Machine',
      desc: 'Sistem bagi hasil untuk anggota yang berhasil mengajak orang lain bergabung (Member-Get-Member).',
      icon: '🔗',
      benefit: 'Pertumbuhan Organik'
    },
    {
      title: 'QR Hubs (Warung & Komunitas)',
      desc: 'Cukup tempel stiker QR di warung-warung anggota. Warung tersebut menjadi "Cabang Virtual" Anda.',
      icon: '🏪',
      benefit: 'Akses 0 Rupiah'
    },
    {
      title: 'AI Education Bot',
      desc: 'AI menyebarkan konten edukasi finansial ke grup WA anggota untuk membangun literasi dan minat.',
      icon: '🎓',
      benefit: 'Literasi Massal'
    },
    {
      title: 'Mobile Field Agents',
      desc: 'Staf lapangan menggunakan tablet/HP untuk jemput bola tanpa butuh meja kantor.',
      icon: '🛵',
      benefit: 'Sangat Fleksibel'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      <div className="bg-indigo-600 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-black leading-tight">Uang Anda Seharusnya <br/>Menjadi Rumah, Bukan Kantor.</h2>
          <p className="text-indigo-100 mt-4 text-lg max-w-2xl">
            Biaya sewa ruko dan listrik kantor perbankan bisa mencapai ratusan juta per tahun. Di KoperatifAI, dana tersebut dialihkan menjadi **Keuntungan Bagi Hasil (SHU)** untuk Anda.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center space-y-6">
           <h3 className="text-2xl font-black text-slate-800">Kenapa Virtual Lebih Kuat?</h3>
           <div className="space-y-4">
              <div className="flex gap-4">
                 <div className="w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center text-rose-600 font-bold shrink-0">✕</div>
                 <div>
                    <p className="font-bold text-slate-800">Model Bank Lama</p>
                    <p className="text-sm text-slate-500">Anggota harus antre di kantor, jam operasional terbatas (08:00 - 15:00).</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 font-bold shrink-0">✓</div>
                 <div>
                    <p className="font-bold text-slate-800">Model KoperatifAI</p>
                    <p className="text-sm text-slate-500">Aplikasi adalah kantornya. Transaksi jam 2 pagi dari kasur? Bisa.</p>
                 </div>
              </div>
           </div>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-10 text-white flex flex-col justify-center text-center space-y-4">
           <p className="text-xs font-black text-indigo-400 uppercase tracking-widest">Saving Opportunity</p>
           <h4 className="text-5xl font-black">75%</h4>
           <p className="text-slate-400 text-sm">Penghematan biaya operasional dibanding koperasi fisik tradisional.</p>
           <div className="pt-4">
              <span className="px-6 py-2 bg-indigo-500/20 rounded-full text-[10px] font-black uppercase border border-indigo-500/30">Lari ke SHU Anggota</span>
           </div>
        </div>
      </div>

      <div className="space-y-8">
         <h3 className="text-2xl font-black text-slate-800 text-center">Strategi Mobilisasi Anggota</h3>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategies.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
                 <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                 <h4 className="font-bold text-slate-800 text-lg leading-tight mb-2">{s.title}</h4>
                 <p className="text-xs text-slate-500 leading-relaxed mb-6 flex-1">{s.desc}</p>
                 <div className="text-[10px] font-black text-indigo-600 uppercase tracking-widest pt-4 border-t border-slate-50">
                    {s.benefit}
                 </div>
              </div>
            ))}
         </div>
      </div>

      <div className="bg-indigo-50 p-12 rounded-[4rem] border border-indigo-100 flex flex-col lg:flex-row items-center gap-12">
         <div className="flex-1 space-y-6">
            <h4 className="text-3xl font-black text-indigo-950">"Kedaulatan dalam Genggaman."</h4>
            <p className="text-indigo-700/70 leading-relaxed">
               Mobilisasi dimulai dari **Cerita Keberhasilan**. Ketika satu anggota pedagang pasar mendapatkan SHU Rp 2 juta di akhir tahun hanya karena rajin menabung, seluruh pasar akan bertanya: *"Gimana caranya?"* Saat itulah link referral bekerja.
            </p>
            <div className="flex gap-4">
               <button className="px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-200">Unduh Kit Sosialisasi</button>
               <button className="px-6 py-3 bg-white text-indigo-600 rounded-2xl font-bold border border-indigo-200">Lihat Peta Referral</button>
            </div>
         </div>
         <div className="w-full lg:w-80 bg-white p-8 rounded-[2.5rem] shadow-xl border border-indigo-100 text-center relative rotate-2">
            <div className="absolute -top-4 -right-4 bg-emerald-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg animate-bounce">NEW</div>
            <p className="text-xs font-black text-slate-400 uppercase mb-4">Mockup Staf Lini Depan</p>
            <div className="space-y-3">
               <div className="h-12 w-full bg-slate-100 rounded-xl flex items-center px-4 gap-3">
                  <span className="text-xl">📱</span>
                  <div className="h-2 w-24 bg-slate-200 rounded-full"></div>
               </div>
               <div className="h-12 w-full bg-slate-100 rounded-xl flex items-center px-4 gap-3">
                  <span className="text-xl">💳</span>
                  <div className="h-2 w-32 bg-slate-200 rounded-full"></div>
               </div>
               <div className="h-12 w-full bg-indigo-600 rounded-xl flex items-center justify-center gap-2">
                  <span className="text-white text-xs font-bold uppercase tracking-widest">Approve Member</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default CommunityMobilization;
