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
        { t: 'Offline Transaction Entry', d: 'Mencatat setoran anggota tanpa internet; wajib mencetak struk fisik sebagai bukti sah.' }
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
      title: 'Protokol Keberlanjutan',
      icon: '🕊️',
      items: [
        { t: 'Legacy Membership Link', d: 'Ahli waris wajib menjadi anggota; komisi pengabdian 12 bulan akan ditransfer ke akun mereka.' },
        { t: 'Dana Duka Pimpinan', d: 'Santunan kematian khusus Duta sebesar 5x limit plafon kas harian mereka.' },
        { t: 'Auto-Migration System', d: 'Anggota di wilayah Duta yang non-aktif akan dilayani otomatis oleh Digital Hub pusat.' },
        { t: 'Penunjukan Suksesor', d: 'Duta berhak merekomendasikan keluarga sebagai pengganti untuk menjaga estafet kepemimpinan.' }
      ]
    }
  ];

  const equipment = [
    { name: 'Sovereign Smartphone', desc: 'HP dengan baterai besar & fitur Offline-Sync untuk area tanpa sinyal.', icon: '📱' },
    { name: 'Bluetooth Thermal Printer', desc: 'Wajib dibawa untuk memberikan bukti setoran fisik secara instan (Kertas Karbon Digital).', icon: '🖨️' },
    { name: 'Solar Power Bank', desc: 'Pengisi daya mandiri untuk ketahanan operasional di daerah pegunungan.', icon: '☀️' },
    { name: 'Official Apparel', desc: 'Seragam KoperatifAI sebagai identitas kewibawaan di desa.', icon: '👕' }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-7xl mx-auto">
      <header className="space-y-1">
        <h2 className="text-3xl font-black text-slate-800 italic uppercase tracking-tight">Manual Operasional Duta.</h2>
        <p className="text-slate-500 font-medium">Panduan integritas, keberlanjutan, & kemakmuran bagi pimpinan wilayah.</p>
      </header>

      {/* Main SOP Grid */}
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

      {/* Equipment Checklist */}
      <div className="space-y-8">
         <div className="flex justify-between items-end px-4">
            <h3 className="text-xl font-black text-slate-800 italic uppercase tracking-widest">Kelengkapan "Papua Ready"</h3>
            <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded">OFFLINE-SYNC READY</span>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100 flex flex-col items-center text-center space-y-4 group hover:bg-white hover:border-indigo-600 transition-all">
                 <div className="text-4xl group-hover:scale-125 transition-transform">{item.icon}</div>
                 <h4 className="font-bold text-slate-800 text-sm">{item.name}</h4>
                 <p className="text-[10px] text-slate-500 leading-relaxed italic">"{item.desc}"</p>
              </div>
            ))}
         </div>
      </div>

      {/* Duta Oath */}
      <div className="p-12 bg-slate-900 rounded-[4rem] text-white flex flex-col md:flex-row items-center gap-16 shadow-2xl relative overflow-hidden border border-white/5">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 opacity-30">🤝</div>
         <div className="space-y-6 z-10">
            <h4 className="text-3xl font-black italic text-emerald-400">Pakta Integritas & Keberlanjutan Keluarga</h4>
            <p className="text-slate-400 text-lg leading-relaxed max-w-4xl font-serif">
               "Saya berjanji menjaga amanah setiap rupiah rakyat. Saya memahami bahwa jika saya tidak lagi mampu bertugas, sistem akan melindungi keluarga saya melalui jalur keanggotaan waris agar kemakmuran tetap mengalir ke rumah kami."
            </p>
            <div className="flex gap-6">
               <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[9px] shadow-xl hover:bg-indigo-700 transition-all">Sahkan Pakta & Aktivasi Offline Mode</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DutaSOP;