
import React from 'react';

const GovSynergy: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Hero Section */}
      <div className="bg-emerald-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              The Synergy Strategy
            </span>
            <h2 className="text-4xl font-black mt-4 leading-tight">Pemerintah Sudah Memikirkan, <br/>Tapi Anda Mengeksekusinya.</h2>
            <p className="text-emerald-100 mt-4 text-lg leading-relaxed max-w-2xl">
              Negara punya regulasi, tapi startup punya <b>kecepatan</b>. KoperatifAI adalah jembatan yang membawa visi pemerintah ke ponsel setiap rakyat.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white p-10 rounded-[2.5rem] shadow-2xl text-slate-800 text-center">
             <div className="text-5xl mb-4">🤝</div>
             <p className="text-xs font-bold text-slate-400 uppercase">Status Hubungan</p>
             <p className="text-xl font-black text-indigo-600">Saling Melengkapi</p>
             <p className="text-[10px] text-slate-500 mt-2">Bukan Kompetitor Pemerintah.</p>
          </div>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 space-y-6">
            <h3 className="text-2xl font-black text-slate-800">Inisiatif Pemerintah</h3>
            <div className="space-y-4">
               {[
                 { t: 'Portal ODS (Online Data System)', d: 'Fokus pada database besar dan laporan pajak. Sangat kaku untuk anggota.', icon: '📑' },
                 { t: 'Target Inklusi Keuangan', d: 'Target 90%, tapi kesulitan menjangkau "Underbanked" di akar rumput.', icon: '🎯' },
                 { t: 'Subsidi Modal (LPDB)', d: 'Dana tersedia triliunan, tapi sulit disalurkan karena akuntansi koperasi manual.', icon: '💰' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                       <p className="text-sm font-bold text-slate-800">{item.t}</p>
                       <p className="text-[10px] text-slate-500 mt-1">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-indigo-600 p-10 rounded-[3rem] text-white space-y-6 shadow-xl">
            <h3 className="text-2xl font-black italic">Solusi KoperatifAI (Startup)</h3>
            <div className="space-y-4">
               {[
                 { t: 'AI Personal Advisor', d: 'Mendampingi anggota 24/7. Sesuatu yang birokrasi tidak mungkin lakukan.', icon: '🤖' },
                 { t: 'Real-time Transparency', d: 'Anggota bisa cek saldo detik ini juga. ODS pemerintah hanya update bulanan/tahunan.', icon: '⚡' },
                 { t: 'Automated Compliance', d: 'Sistem Anda secara otomatis lapor ke ODS pemerintah. Mempermudah tugas negara.', icon: '✅' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 p-5 bg-white/10 rounded-2xl border border-white/10">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                       <p className="text-sm font-bold text-white">{item.t}</p>
                       <p className="text-[10px] text-indigo-200 mt-1">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* Why they need us */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800 tracking-tight">Kenapa Pemerintah "Butuh" Anda?</h3>
            <p className="text-slate-500">Membangun sistem seperti ini dari dalam birokrasi butuh waktu bertahun-tahun.</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-4">
               <div className="text-3xl">🧩</div>
               <h4 className="font-bold text-slate-800">Menambal Celah Data</h4>
               <p className="text-xs text-slate-500 leading-relaxed">Pemerintah butuh data ekonomi rakyat yang akurat untuk kebijakan. Sistem AI Anda menyajikannya secara otomatis (Dashboard Pemerintah).</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-4">
               <div className="text-3xl">🚀</div>
               <h4 className="font-bold text-slate-800">Kecepatan Inovasi</h4>
               <p className="text-xs text-slate-500 leading-relaxed">Anda bisa update fitur setiap minggu. Pemerintah butuh 1 tahun anggaran hanya untuk mengubah 1 tombol di website mereka.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 space-y-4">
               <div className="text-3xl">🛡️</div>
               <h4 className="font-bold text-slate-800">Zero Corruption Risk</h4>
               <p className="text-xs text-slate-500 leading-relaxed">Negara sering rugi karena korupsi dana hibah. Dengan sistem AI Anda, setiap rupiah bisa dilacak oleh audit algoritma.</p>
            </div>
         </div>
      </div>

      {/* Synergetic Relationship */}
      <div className="p-12 bg-slate-900 border border-slate-800 rounded-[3.5rem] shadow-sm flex flex-col items-center text-center space-y-8">
         <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-5xl text-white">🇮🇩</div>
         <h4 className="text-3xl font-black text-white max-w-xl italic">"Anda Adalah Partner Strategis Negara."</h4>
         <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            Alih-alih bersaing, posisikan KoperatifAI sebagai <b>Standard Operating System</b> (OS) bagi koperasi modern Indonesia. Negara yang menyediakan "Regulasi", Anda yang menyediakan "Teknologi".
         </p>
         <div className="flex justify-center gap-4">
            <div className="px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-black uppercase text-emerald-400 tracking-widest">Digitalisasi Nasional</div>
            <div className="px-6 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[10px] font-black uppercase text-indigo-400 tracking-widest">Kedaulatan Rakyat</div>
         </div>
      </div>
    </div>
  );
};

export default GovSynergy;
