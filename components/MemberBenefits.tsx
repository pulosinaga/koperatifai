
import React from 'react';

const MemberBenefits: React.FC = () => {
  const coreBenefits = [
    { title: 'SHU (Sisa Hasil Usaha)', desc: 'Keuntungan koperasi dibagikan kembali ke anggota. Anda adalah pemilik, bukan sekadar nasabah.', icon: '💰', color: 'bg-emerald-50 text-emerald-600' },
    { title: 'Bunga Pinjaman Rendah', desc: 'Karena tidak mengejar profit untuk pemegang saham luar, bunga pinjaman kita jauh lebih adil.', icon: '⚖️', color: 'bg-blue-50 text-blue-600' },
    { title: 'Pendampingan AI 24/7', desc: 'Akses gratis ke asisten keuangan pintar untuk membantu Anda mengelola anggaran keluarga.', icon: '🤖', color: 'bg-indigo-50 text-indigo-600' },
    { title: 'Solidaritas Sosial', desc: 'Simpanan Anda membantu modal usaha anggota lain di komunitas kita. Saling menguatkan.', icon: '🤝', color: 'bg-rose-50 text-rose-600' }
  ];

  const comparison = [
    { feature: 'Biaya Admin Bulanan', bank: 'Rp 15rb - 25rb', coop: 'Nol / Sangat Kecil' },
    { feature: 'Status Anda', bank: 'Nasabah (Konsumen)', coop: 'Pemilik (Owner)' },
    { feature: 'Pembagian Profit', bank: 'Untuk Pemilik Bank', coop: 'Dibagi ke Seluruh Anggota' },
    { feature: 'Akses Pinjaman', bank: 'Sangat Sulit (Collateral)', coop: 'Berdasarkan Karakter & Keaktifan' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-4xl font-black text-slate-800 tracking-tight">Kenapa KoperatifAI Lebih Menguntungkan?</h2>
        <p className="text-slate-500 text-lg leading-relaxed">
          Kami memangkas biaya gedung mewah dan birokrasi perbankan yang mahal, lalu mengembalikan penghematan itu kepada Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {coreBenefits.map((benefit, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className={`w-14 h-14 rounded-2xl ${benefit.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
              {benefit.icon}
            </div>
            <h4 className="font-bold text-slate-800 text-xl leading-tight">{benefit.title}</h4>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">{benefit.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        
        <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
          <div className="flex-1 space-y-8">
            <h3 className="text-3xl font-black leading-tight">Perbandingan Kejujuran</h3>
            <p className="text-slate-400">Lihat bagaimana sistem koperasi kita mengungguli perbankan konvensional dalam hal keberpihakan pada ekonomi rakyat.</p>
            
            <div className="space-y-4">
               {comparison.map((item, idx) => (
                 <div key={idx} className="grid grid-cols-2 gap-4 border-b border-white/10 pb-4">
                    <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest">{item.feature}</div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                       <div className="text-slate-500 italic">Bank: {item.bank}</div>
                       <div className="text-emerald-400 font-bold">Koperatif: {item.coop}</div>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 p-10 text-center">
             <div className="text-5xl mb-6">🏆</div>
             <h4 className="text-xl font-bold mb-2">Manfaat Terbesar:</h4>
             <p className="text-4xl font-black text-emerald-400">Kepemilikan</p>
             <p className="text-slate-400 text-sm mt-4 leading-relaxed">
               Di sini, Anda punya hak untuk bertanya kemana uang Anda pergi dan hak untuk menentukan masa depan koperasi melalui voting digital.
             </p>
             <button className="mt-8 w-full py-4 bg-indigo-600 rounded-2xl font-bold hover:bg-indigo-700 transition-all">
               Daftar Sekarang
             </button>
          </div>
        </div>
      </div>

      <div className="p-10 bg-indigo-50 rounded-[3rem] flex flex-col md:flex-row items-center gap-10">
         <div className="text-6xl animate-bounce">💡</div>
         <div className="flex-1">
            <h4 className="text-2xl font-bold text-indigo-900">Ingatlah ini:</h4>
            <p className="text-indigo-700/70 mt-2 leading-relaxed">
               "Koperasi bukan tempat untuk meminjam uang, tapi tempat untuk <strong>membangun kedaulatan finansial bersama</strong>. Kami memulai kecil, tapi dengan sistem yang paling jujur dan transparan di Indonesia."
            </p>
         </div>
      </div>
    </div>
  );
};

export default MemberBenefits;
