import React from 'react';

const DutaSOP: React.FC = () => {
  const sections = [
    {
      title: 'Tugas Utama Lapangan',
      icon: '📋',
      items: [
        { t: 'Verifikasi Identitas 4-Lapis', d: 'Wajib validasi e-KTP, Biometrik Wajah, Lokasi GPS, dan Jaminan Karakter 10 Saksi.' },
        { t: 'Edukasi Literasi Mingguan', d: 'Membantu anggota memahami cara kerja bunga mikro 0.9% dan SHU kolektif.' },
        { t: 'Settlement Kas Harian', d: 'Menyetor kas tunai yang terkumpul ke Bank Koperasi maksimal 24 jam.' },
        { t: 'Pendampingan Produk', d: 'Membantu pedagang pasar lokal mengunggah produk ke Marketplace Rakyat.' }
      ]
    },
    {
      title: 'Hak & Kompensasi (Reward)',
      icon: '💎',
      items: [
        { t: 'Regional Revenue Share', d: 'Mendapat 0.1% dari setiap transaksi marketplace & PPOB di wilayah binaan.' },
        { t: 'Jasa Pembinaan Bulanan', d: 'Upah tetap Rp 3.000 per anggota aktif sebagai biaya operasional lapangan.' },
        { t: 'Bonus Integritas (NPL 0%)', d: 'Reward khusus jika seluruh peminjam di wilayah Anda membayar tepat waktu.' },
        { t: 'Sertifikasi Pimpinan', d: 'Akses ke pelatihan manajemen koperasi standar global (WOCCU).' }
      ]
    },
    {
      title: 'Kode Etik & Larangan',
      icon: '🛡️',
      items: [
        { t: 'Zero Interest Surcharge', d: 'Dilarang memungut biaya tambahan apapun di luar sistem aplikasi.' },
        { t: 'Kerahasiaan Data', d: 'Dilarang keras menyalin atau menyebarkan data pribadi anggota.' },
        { t: 'Otoritas Multi-Sig', d: 'Pencairan dana besar wajib mendapatkan persetujuan AI Auditor dan Founder.' }
      ]
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      <header className="space-y-1">
        <h2 className="text-3xl font-black text-slate-800 italic uppercase tracking-tight">Manual Operasional Duta.</h2>
        <p className="text-slate-500 font-medium">Panduan integritas & kemakmuran bagi pimpinan wilayah.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {sections.map((section, i) => (
           <div key={i} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-4xl mb-8 shadow-xl text-white group-hover:scale-110 transition-transform">
                 {section.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-8 italic">{section.title}</h3>
              <div className="space-y-6 flex-1">
                 {section.items.map((item, idx) => (
                   <div key={idx} className="space-y-1">
                      <h5 className="font-black text-[10px] text-indigo-600 uppercase tracking-widest">{item.t}</h5>
                      <p className="text-xs text-slate-500 leading-relaxed italic">"{item.d}"</p>
                   </div>
                 ))}
              </div>
           </div>
         ))}
      </div>

      {/* Duta Oath */}
      <div className="p-12 bg-slate-900 rounded-[4rem] text-white flex flex-col md:flex-row items-center gap-16 shadow-2xl relative overflow-hidden border border-white/5">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 opacity-30">🤝</div>
         <div className="space-y-6 z-10">
            <h4 className="text-3xl font-black italic text-emerald-400">Pakta Integritas Digital</h4>
            <p className="text-slate-400 text-lg leading-relaxed max-w-4xl font-serif">
               "Saya berjanji menjaga amanah setiap rupiah rakyat. Saya memahami bahwa kejujuran saya adalah aset bagi kesejahteraan keluarga saya dan kemerdekaan ekonomi komunitas saya."
            </p>
            <div className="flex gap-6">
               <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[9px] shadow-xl hover:bg-indigo-700 transition-all">Sahkan Pakta via Biometrik</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DutaSOP;