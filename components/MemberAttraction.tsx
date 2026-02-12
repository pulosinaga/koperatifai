import React from 'react';

const MemberAttraction: React.FC = () => {
  const magnets = [
    {
      title: 'Bukan Nasabah, Tapi Pemilik',
      desc: 'Di bank Anda adalah angka. Di sini, Anda punya hak suara dan memiliki aset koperasi secara proporsional. Anda adalah BOS-nya.',
      icon: '👑',
      tag: 'Status'
    },
    {
      title: 'Bagi Hasil (SHU) Nyata',
      desc: 'Keuntungan dari bunga pinjaman tidak lari ke pemilik bank besar di Jakarta, tapi kembali ke kantong Bapak/Ibu di desa.',
      icon: '💰',
      tag: 'Profit'
    },
    {
      title: 'Pinjaman Tanpa Sertifikat',
      desc: 'AI kami melihat kejujuran Bapak/Ibu menabung receh, bukan sekadar jaminan tanah. Kejujuran adalah modal di sini.',
      icon: '🤝',
      tag: 'Akses'
    },
    {
      title: 'Struk Fisik Seketika',
      desc: 'Meskipun di tengah hutan tanpa sinyal, printer Bluetooth kami memberikan bukti sah setoran Anda di tempat.',
      icon: '🖨️',
      tag: 'Keamanan'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-4xl font-black text-slate-800 tracking-tight leading-tight italic uppercase">
          Materi <span className="text-indigo-600">Lidah Sakti</span> Duta.
        </h2>
        <p className="text-slate-500 text-lg font-medium">
          Cara menjelaskan visi KoperatifAI agar warga langsung jatuh cinta dan merasa memiliki.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {magnets.map((m, i) => (
          <div key={i} className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group">
            <div className="flex justify-between items-start mb-8">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">{m.icon}</div>
              <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                Poin: {m.tag}
              </span>
            </div>
            <h3 className="text-2xl font-black text-slate-800 leading-tight italic">{m.title}</h3>
            <p className="text-slate-500 mt-4 leading-relaxed font-serif italic text-sm">"{m.desc}"</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-20 text-white overflow-hidden relative shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <h3 className="text-4xl font-black leading-tight italic text-indigo-400">Strategi "Warung Talk"</h3>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 text-xl">👂</div>
                <div>
                   <h5 className="font-bold text-xl text-emerald-400">Dengar Dulu Keluhannya</h5>
                   <p className="text-indigo-100 text-sm mt-1">Tanyakan: "Susah tidak pinjam modal di bank?" atau "Kesal tidak saldo bank dipotong admin terus?".</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 text-xl">📢</div>
                <div>
                   <h5 className="font-bold text-xl text-emerald-400">Berikan Solusi "Keluarga"</h5>
                   <p className="text-indigo-100 text-sm mt-1">Gunakan kata "Kita" dan "Bersama". Katakan: "Daripada uang lari ke orang kaya, mending kita kumpulkan di sini buat anak sekolah kita sendiri."</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-96 bg-emerald-500 p-10 rounded-[3rem] text-indigo-950 shadow-2xl rotate-2">
             <p className="text-xs font-black uppercase tracking-widest mb-2 opacity-70">Ritual Penutup</p>
             <h4 className="text-3xl font-black leading-tight mb-6 italic">Cetak & Foto.</h4>
             <p className="text-sm font-bold leading-relaxed mb-8">Setelah setoran Rp 10.000 pertama, **WAJIB** cetak struk dan foto bersama Duta. Kirim ke grup WA desa agar yang lain ikut.</p>
             <button className="w-full py-4 bg-indigo-950 text-white rounded-2xl font-black uppercase tracking-widest text-[10px]">Siapkan Kamera & Printer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberAttraction;