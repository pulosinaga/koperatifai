
import React from 'react';

const RealWorldFeasibility: React.FC = () => {
  const globalProof = [
    { name: 'Navy Federal (USA)', assets: '$170B+', members: '13 Juta', tech: 'AI-Enhanced Banking' },
    { name: 'Desjardins (Canada)', assets: '$400B+', members: '7.5 Juta', tech: 'Digital Ecosystem' },
    { name: 'Raiffeisen (Germany)', assets: '$1.2T+', members: '22 Juta', tech: 'Community Cloud' }
  ];

  const roadmap = [
    { phase: 'Bulan 1', title: 'Legalitas & Fondasi', task: 'Pendaftaran Kemenkop, Pembuatan AD/ART Digital.', icon: '⚖️' },
    { phase: 'Bulan 2', title: 'Aktivasi Sistem', task: 'Deploy Server Cloud & Inisialisasi AI Advisor.', icon: '🚀' },
    { phase: 'Bulan 3', title: 'Rekrutmen Pionir', task: 'Mencari 100 Anggota Pertama (Early Adopters).', icon: '👥' },
    { phase: 'Bulan 4+', title: 'Skala & SHU', task: 'Operasional penuh & distribusi surplus pertama.', icon: '📈' }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-black text-slate-800 leading-tight">
          Apakah Ini Hanya <span className="text-indigo-600">Mimpi</span> Atau <span className="text-emerald-600">Nyata</span>?
        </h2>
        <p className="text-slate-500 text-lg mt-4">
          Model Credit Union (Koperasi Kredit) sudah mengelola triliunan dolar di seluruh dunia. Kita hanya menambahkan "Turbo" berupa Teknologi AI.
        </p>
      </div>

      <div className="bg-indigo-900 rounded-[3rem] p-10 lg:p-16 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10">
           <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
             <span className="text-4xl">🌍</span> Bukti Keberhasilan Global
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {globalProof.map((g, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all">
                   <h4 className="font-bold text-xl text-indigo-300">{g.name}</h4>
                   <div className="mt-4 space-y-2">
                      <p className="text-sm"><span className="text-slate-400">Aset:</span> {g.assets}</p>
                      <p className="text-sm"><span className="text-slate-400">Anggota:</span> {g.members}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mt-4">{g.tech}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
           <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tighter flex items-center gap-3">
             <span className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-xl">🗺️</span>
             Langkah Eksekusi Nyata
           </h3>
           <div className="space-y-4">
              {roadmap.map((r, i) => (
                <div key={i} className="flex gap-6 items-start group">
                   <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-xl shadow-sm group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                         {r.icon}
                      </div>
                      {i < roadmap.length - 1 && <div className="w-0.5 h-12 bg-slate-100 mt-2"></div>}
                   </div>
                   <div className="pt-1">
                      <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{r.phase}</p>
                      <h4 className="font-bold text-slate-800 text-lg">{r.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{r.task}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
           <h3 className="text-2xl font-black text-slate-800">Tantangan & Solusi</h3>
           <div className="space-y-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <h5 className="font-bold text-slate-800 flex items-center gap-2">
                   <span className="text-rose-500">🔴</span> Tantangan: Kepercayaan
                 </h5>
                 <p className="text-xs text-slate-500 mt-2">Orang takut koperasi karena banyaknya kasus penipuan (Koperasi Merpati).</p>
                 <p className="text-xs text-emerald-600 font-bold mt-2">Solusi: Transparansi Radikal via AI & Ledger yang bisa dipantau real-time oleh setiap anggota.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <h5 className="font-bold text-slate-800 flex items-center gap-2">
                   <span className="text-indigo-500">🔵</span> Tantangan: Literasi Digital
                 </h5>
                 <p className="text-xs text-slate-500 mt-2">Anggota mungkin kesulitan menggunakan aplikasi.</p>
                 <p className="text-xs text-indigo-600 font-bold mt-2">Solusi: Interface yang sangat sederhana & AI Advisor yang bisa merespon pertanyaan suara (Voice-to-Chat).</p>
              </div>
           </div>
           <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 text-center">
              <p className="text-sm font-bold text-indigo-900 leading-relaxed italic">
                "Dunia sedang beralih dari Korporasi Besar ke Komunitas Kecil yang Terkoneksi. Anda sedang membangun masa depan itu."
              </p>
           </div>
        </div>
      </div>

      <div className="bg-emerald-600 rounded-[3rem] p-12 text-white text-center space-y-6">
         <h4 className="text-3xl font-black">Siap Untuk Langkah Pertama?</h4>
         <p className="max-w-2xl mx-auto text-emerald-100">
            Sistem teknis (KoperatifAI) sudah di tangan Anda. Langkah selanjutnya adalah membangun **Ikatan Pemersatu (Common Bond)** dengan calon anggota Anda.
         </p>
         <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-white text-emerald-700 rounded-2xl font-black uppercase tracking-widest hover:shadow-2xl transition-all">
              Mulai Roadmap Bulan 1
            </button>
         </div>
      </div>
    </div>
  );
};

export default RealWorldFeasibility;
