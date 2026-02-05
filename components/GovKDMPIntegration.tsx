
import React from 'react';

const GovKDMPIntegration: React.FC = () => {
  const integrationPoints = [
    {
      title: 'Reporting Gateway',
      desc: 'KoperatifAI mengirim data kesehatan koperasi (Pernyataan Mandiri) secara otomatis ke server kDMP tanpa admin perlu login manual.',
      icon: '📤'
    },
    {
      title: 'Marketplace Sync',
      desc: 'Produk anggota yang terdaftar di KoperatifAI Marketplace bisa dipromosikan ke katalog kDMP Nasional secara otomatis.',
      icon: '🏪'
    },
    {
      title: 'Identity Assurance',
      desc: 'Verifikasi NIK yang dilakukan KoperatifAI dapat divalidasi silang dengan sertifikat digital yang diterbitkan kDMP.',
      icon: '🆔'
    },
    {
      title: 'Standard API (SNAP)',
      desc: 'Infrastruktur kita menggunakan protokol SNAP yang diakui Bank Indonesia, memudahkan integrasi dengan platform kDMP.',
      icon: '🔗'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Hero Section */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-4 border-indigo-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/30">
              Regulatory Evolution
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Antisipasi & Sinergi kDMP: <br/>KoperatifAI Sebagai Standar Baru.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Pemerintah membangun <b>kDMP</b> sebagai fondasi. KoperatifAI adalah <b>Mesin Premium</b> yang memastikan anggota Anda mendapatkan manfaat maksimal dari ekosistem negara tanpa kehilangan privasi.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4 italic font-black text-indigo-400">SNAP</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">API Standards</p>
             <p className="text-sm text-indigo-300 mt-2 font-black uppercase">Ready for Sync</p>
          </div>
        </div>
      </div>

      {/* Integration Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {integrationPoints.map((p, i) => (
          <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
             <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                {p.icon}
             </div>
             <h4 className="text-xl font-black text-slate-800 leading-tight italic">{p.title}</h4>
             <p className="text-sm text-slate-500 mt-4 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Strategy Breakdown: Shield & Bridge */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm overflow-hidden relative">
         <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
         <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
            <div className="flex-1 space-y-6">
               <h3 className="text-3xl font-black text-slate-800">Strategi "Shield & Bridge"</h3>
               <p className="text-slate-500 text-lg leading-relaxed">
                  Bagaimana kita menghadapi standarisasi pemerintah tanpa menjadi "Koperasi Rata-rata"?
               </p>
               <div className="space-y-4">
                  <div className="p-6 bg-slate-900 rounded-3xl text-white border-l-8 border-indigo-500 shadow-xl">
                     <p className="text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-1">The Shield (Perisai)</p>
                     <p className="text-sm leading-relaxed">Data tabungan detil, profil psikografis AI, dan algoritma skor kredit internal tetap menjadi <b>Rahasia Dagang</b> KoperatifAI. Pemerintah hanya menerima hasil akhirnya.</p>
                  </div>
                  <div className="p-6 bg-indigo-50 rounded-3xl text-slate-800 border-l-8 border-indigo-600 shadow-md">
                     <p className="text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-1">The Bridge (Jembatan)</p>
                     <p className="text-sm leading-relaxed">Kita menyediakan modul API yang secara otomatis menerjemahkan bahasa sistem kita ke bahasa kDMP. Kita patuh, tapi kita tetap eksklusif.</p>
                  </div>
               </div>
            </div>
            <div className="w-full lg:w-96 aspect-square bg-slate-100 rounded-[4rem] flex flex-col items-center justify-center p-12 text-center space-y-4 border border-slate-200">
               <div className="text-7xl">🛠️</div>
               <h4 className="text-xl font-bold text-slate-800">Interoperabilitas</h4>
               <p className="text-xs text-slate-500 leading-relaxed italic">"KoperatifAI dirancang untuk bisa 'steker' di semua platform pemerintah."</p>
            </div>
         </div>
      </div>

      {/* Anticipation Message */}
      <div className="p-12 bg-indigo-600 border border-indigo-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white">
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl">🏛️</div>
         <h4 className="text-3xl font-black max-w-xl italic">"Pemerintah Membuka Jalan, Kita Membawa Mobilnya."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed">
            Antisipasi terbaik kita adalah dengan menjadi **Sistem Yang Paling Siap Berkolaborasi**. Saat kDMP resmi diwajibkan, anggota KoperatifAI tidak perlu panik melakukan migrasi data, karena sistem kita sudah sinkron sejak hari pertama.
         </p>
         <div className="flex gap-4">
            <button className="px-8 py-3 bg-white text-indigo-600 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-50 transition-all shadow-xl">Integrasi Roadmap 2025</button>
         </div>
      </div>

      {/* Competitive Edge Footer */}
      <div className="p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100 flex flex-col md:flex-row items-center gap-10">
         <div className="text-6xl">🚀</div>
         <div className="flex-1">
            <h4 className="text-2xl font-bold text-emerald-900 italic leading-tight">Keunggulan di Mata Pemerintah</h4>
            <p className="text-emerald-700/70 mt-2 leading-relaxed">
               Pemerintah akan lebih menyukai KoperatifAI dibanding sistem manual lainnya karena kita meminimalisir tugas pengawasan mereka. Kita memberikan <b>Data Bersih & Jujur</b> secara real-time, sesuatu yang merupakan "Mimpi Indah" bagi regulator negara.
            </p>
         </div>
      </div>
    </div>
  );
};

export default GovKDMPIntegration;
