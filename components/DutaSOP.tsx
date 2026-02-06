
import React from 'react';

const DutaSOP: React.FC = () => {
  const sections = [
    {
      title: 'Kewajiban & Tugas Utama',
      icon: '📋',
      items: [
        { t: 'Verifikasi Identitas', d: 'Melakukan visit fisik & validasi e-KTP untuk memastikan anggota baru bukan fiktif.' },
        { t: 'Edukasi Literasi', d: 'Membantu anggota memahami fitur Celengan Digital & Manajemen Hutang.' },
        { t: 'Settlement Kas', d: 'Wajib menyetor kas tunai ke Bank Koperasi maksimal 24 jam setelah limit tercapai.' },
        { t: 'Pendampingan Merchant', d: 'Membantu pedagang pasar lokal mengunggah produk ke Marketplace.' }
      ]
    },
    {
      title: 'Hak & Kompensasi',
      icon: '💎',
      items: [
        { t: 'Regional Revenue Share', d: 'Dapatkan 0.1% dari setiap transaksi marketplace & PPOB di wilayah Anda.' },
        { t: 'Bonus NPL 0%', d: 'Reward bulanan jika seluruh anggota di bawah binaan Anda membayar angsuran tepat waktu.' },
        { t: 'Sertifikasi Pimpinan', d: 'Akses gratis ke kursus Manajemen Keuangan tingkat internasional.' },
        { t: 'Priority Support', d: 'Jalur komunikasi khusus (Hotline) dengan Board & AI Admin.' }
      ]
    },
    {
      title: 'Tanggung Jawab Hukum',
      icon: '🛡️',
      items: [
        { t: 'Jaminan Karakter', d: 'Duta bertanggung jawab secara moral atas integritas anggota yang di-vouching.' },
        { t: 'Kerahasiaan Data', d: 'Dilarang keras menyebarkan data tabungan atau NIK anggota ke pihak ketiga.' },
        { t: 'Pelaporan Berkala', d: 'Wajib mengunggah "Laporan Mata Rakyat" (Log Visitasi) melalui aplikasi setiap minggu.' }
      ]
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* SOP Header */}
      <div className="bg-[#0f172a] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Community Leadership Handbook v2.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Buku Saku Duta Wilayah: <br/>Panduan Integritas & Kemakmuran.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               Duta adalah wajah KoperatifAI di lapangan. Integritas Anda adalah nyawa bagi kepercayaan rakyat.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white p-8 rounded-[3rem] shadow-2xl text-center flex flex-col items-center">
             <div className="text-6xl mb-4">👔</div>
             <h4 className="font-black text-indigo-900 italic text-xl leading-tight">"Leader is the <br/>Ultimate Servant."</h4>
             <p className="text-[10px] text-slate-400 mt-4 uppercase font-bold">Standard Operations Authorized</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {sections.map((section, i) => (
           <div key={i} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl mb-8 shadow-inner group-hover:bg-indigo-600 group-hover:text-white transition-all">
                 {section.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-8 italic">{section.title}</h3>
              <div className="space-y-6 flex-1">
                 {section.items.map((item, idx) => (
                   <div key={idx} className="space-y-1">
                      <h5 className="font-black text-xs text-indigo-600 uppercase tracking-tighter">{item.t}</h5>
                      <p className="text-xs text-slate-500 leading-relaxed italic">"{item.d}"</p>
                   </div>
                 ))}
              </div>
           </div>
         ))}
      </div>

      {/* Duta Code of Ethics */}
      <div className="p-12 bg-slate-900 rounded-[4rem] text-white flex flex-col md:flex-row items-center gap-16 shadow-2xl relative overflow-hidden border border-white/5">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] bg-[size:30px_30px]"></div>
         <div className="text-8xl shrink-0 z-10 opacity-30">🛡️</div>
         <div className="space-y-6 z-10">
            <h4 className="text-3xl font-black italic text-emerald-400">Pakta Integritas Duta Digital</h4>
            <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
               "Saya berjanji menjaga amanah setiap rupiah yang dititipkan anggota. Saya memahami bahwa teknologi AI memantau setiap langkah saya, dan kejujuran saya adalah aset bagi kesejahteraan keluarga saya dan komunitas saya."
            </p>
            <div className="flex gap-6">
               <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all">Tanda Tangani Pakta Digital</button>
               <button className="px-10 py-4 bg-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-xs border border-white/10 hover:bg-white/20 transition-all">Download PDF SOP</button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DutaSOP;
