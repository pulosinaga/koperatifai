
import React from 'react';

const InclusionStrategy: React.FC = () => {
  const inclusivePillars = [
    {
      title: 'Modal Tanpa Sekat',
      desc: 'Simpanan Pokok hanya Rp 100rb. Bisa dicicil 4x agar tidak memberatkan buruh harian.',
      icon: '🔓',
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: 'Micro-Savings (Tabungan Receh)',
      desc: 'Setoran harian mulai Rp 1.000 via Duta Wilayah. Kami menampung koin yang bank tolak.',
      icon: '🪙',
      color: 'bg-amber-50 text-amber-600'
    },
    {
      title: 'Trust-Based Vouching',
      desc: 'Jika tidak punya slip gaji, 3 tetangga yang sudah anggota bisa menjamin karakter Anda secara digital.',
      icon: '🤝',
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      title: 'Assisted Digitalization',
      desc: 'Duta membantu anggota yang tidak punya smartphone canggih untuk tetap bisa bertransaksi.',
      icon: '🛵',
      color: 'bg-rose-50 text-rose-600'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Hero Header */}
      <div className="bg-emerald-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-emerald-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              The Inclusion Manifesto
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Ekonomi Tanpa Batas: <br/>Membangun Tangga Bagi Yang Terpinggirkan.</h2>
            <p className="text-emerald-100/70 text-lg leading-relaxed max-w-2xl">
              Kami tidak menunggu rakyat kecil menjadi "layak bank". Kami membangun sistem yang **melayakkan mereka** melalui kejujuran dan solidaritas komunitas.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🌱</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Entry Barrier Status</p>
             <p className="text-3xl font-black text-emerald-400 mt-1">OPEN FOR ALL</p>
             <p className="text-[9px] text-slate-500 mt-2 uppercase">Minimum Deposit: Rp 1.000</p>
          </div>
        </div>
      </div>

      {/* Strategy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {inclusivePillars.map((p, i) => (
          <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
             <div className={`w-16 h-16 ${p.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                {p.icon}
             </div>
             <h4 className="text-xl font-black text-slate-800 leading-tight">{p.title}</h4>
             <p className="text-sm text-slate-500 mt-4 leading-relaxed flex-1 italic">"{p.desc}"</p>
          </div>
        ))}
      </div>

      {/* The Power of Micro-Aggregration */}
      <div className="bg-slate-900 rounded-[4rem] p-12 text-white overflow-hidden relative shadow-xl">
         <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
         <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-6">
               <h3 className="text-3xl font-black italic">Keajaiban "Satu Ribu Rupiah"</h3>
               <p className="text-slate-400 text-lg leading-relaxed">
                  Bagi orang kaya, Rp 1.000 tidak berarti. Bagi rakyat kecil, Rp 1.000 adalah benih kemandirian.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                     <p className="text-indigo-400 font-bold text-xs uppercase mb-2">Skala Komunitas</p>
                     <p className="text-2xl font-black text-white">10.000 Anggota</p>
                     <p className="text-[10px] text-slate-500 mt-1">Hanya dengan Rp 1.000 / hari</p>
                  </div>
                  <div className="p-6 bg-emerald-500/10 rounded-3xl border border-emerald-500/20">
                     <p className="text-emerald-400 font-bold text-xs uppercase mb-2">Modal Terkumpul</p>
                     <p className="text-2xl font-black text-emerald-400">Rp 3.6 Miliar / Thn</p>
                     <p className="text-[10px] text-slate-500 mt-1">Uang yang dulunya terbuang, kini jadi modal usaha.</p>
                  </div>
               </div>
            </div>
            <div className="w-full lg:w-96 p-10 bg-indigo-600 rounded-[4rem] text-center shadow-2xl transform -rotate-2">
               <div className="text-6xl mb-4">💰</div>
               <h4 className="text-xl font-bold">"Rakyat adalah Banker bagi dirinya sendiri."</h4>
               <p className="text-xs text-indigo-100 mt-4 leading-relaxed italic">Inilah esensi sejati ekonomi sirkular KoperatifAI.</p>
            </div>
         </div>
      </div>

      {/* Inclusion Roadmap */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800 tracking-tight italic">Misi: Keluar dari Garis Kemiskinan</h3>
            <p className="text-slate-500">Bagaimana anggota naik kelas secara finansial.</p>
         </div>
         <div className="flex flex-col md:flex-row gap-6">
            {[
              { t: 'Level 1: Survival', d: 'Belajar disiplin menabung Rp 1.000 harian & masuk perlindungan DASKOP.', icon: '🛡️' },
              { t: 'Level 2: Stability', d: 'Mendapat pinjaman produktif pertama (Rp 1-2jt) untuk modal dagang kecil.', icon: '⚖️' },
              { t: 'Level 3: Sovereignty', d: 'Usaha berkembang, simpanan wajib meningkat, dan mulai mendapat SHU tetap.', icon: '🏰' }
            ].map((step, i) => (
              <div key={i} className="flex-1 p-8 bg-slate-50 rounded-[3rem] border border-slate-100 text-center space-y-4 hover:bg-emerald-50 hover:border-emerald-100 transition-all">
                 <div className="text-4xl">{step.icon}</div>
                 <h5 className="font-black text-slate-800">{step.t}</h5>
                 <p className="text-xs text-slate-500 leading-relaxed italic">"{step.d}"</p>
              </div>
            ))}
         </div>
      </div>

      {/* Final Call to Action */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8">
         <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-5xl text-emerald-600">🏛️</div>
         <h4 className="text-3xl font-black text-slate-800 max-w-xl italic">"Beri Mereka Pintu, Mereka Akan Masuk Sendiri."</h4>
         <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
            KoperatifAI tidak dibangun untuk melayani yang sudah kaya. Kita dibangun untuk melayani mereka yang selama ini **Ditolak oleh Sistem**. Strategi inklusi ini adalah janji kita kepada rakyat Indonesia.
         </p>
         <button className="px-12 py-4 bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-emerald-700 transition-all shadow-xl">Unduh Dokumen Strategi Inklusi</button>
      </div>
    </div>
  );
};

export default InclusionStrategy;
