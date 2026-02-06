
import React from 'react';

const ManagerSelectionGuide: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Hero */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Cooperative Law Enforcement
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Penentuan Pengurus: <br/>Mandat Anggota, Kekuatan Lembaga.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               Berdasarkan UU No. 25/1992, Founder tidak menunjuk bos, tetapi memfasilitasi Anggota memilih pemimpin mereka sendiri secara demokratis.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">👔</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Aturan Pemilihan</p>
             <p className="text-xl font-black text-emerald-400 mt-1">SATU ORANG SATU SUARA</p>
             <p className="text-[9px] text-slate-500 mt-2 uppercase tracking-tighter">Bukan Satu Saham Satu Suara</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-2xl font-black text-slate-800 italic">Langkah Konstitusional</h3>
            <div className="space-y-6">
               {[
                 { t: 'Penyusunan Kriteria', d: 'Founder merumuskan syarat pengurus (misal: integritas AI Score > 850).', icon: '📝' },
                 { t: 'Pendaftaran Calon', d: 'Anggota mendaftarkan diri atau dicalonkan oleh minimal 10 anggota lain.', icon: '🆔' },
                 { t: 'Verifikasi Independen', d: 'Dewan Pengawas & AI mengaudit latar belakang keuangan calon.', icon: '🕵️' },
                 { t: 'Pemungutan Suara (e-RAT)', d: 'Pemilihan dilakukan secara digital di aplikasi dengan hasil yang imutabel.', icon: '🗳️' }
               ].map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                     <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 font-black shrink-0 shadow-sm border border-indigo-100">{i+1}</div>
                     <div>
                        <h5 className="font-bold text-slate-800">{step.t}</h5>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{step.d}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         <div className="bg-indigo-900 p-10 rounded-[3rem] text-white flex flex-col justify-center space-y-8 shadow-xl">
            <h3 className="text-2xl font-black italic">Struktur Baku Pengurus</h3>
            <div className="space-y-4">
               {[
                 { t: 'Ketua (Chairman)', d: 'Memimpin operasional dan menjaga visi strategis founder.', icon: '🥇' },
                 { t: 'Sekretaris', d: 'Mengelola administrasi, keanggotaan, dan kepatuhan data.', icon: '📋' },
                 { t: 'Bendahara', d: 'Mengelola likuiditas dan otorisasi perbankan.', icon: '💰' },
               ].map((p, i) => (
                 <div key={i} className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-all">
                    <div className="text-3xl shrink-0">{p.icon}</div>
                    <div>
                       <h5 className="font-bold text-white text-sm uppercase tracking-widest">{p.t}</h5>
                       <p className="text-xs text-indigo-200 mt-1">{p.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>

      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8">
         <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-5xl">⚖️</div>
         <h4 className="text-3xl font-black text-slate-800 max-w-xl italic leading-tight">"Pengurus adalah Pelayan Anggota."</h4>
         <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
            Meskipun Anda adalah Founder, secara hukum Anda "menyerahkan" pengelolaan kepada pengurus yang dipilih. Anda dapat tetap menjaga kontrol melalui **Kontrak IP (Intellectual Property)** di mana koperasi wajib menggunakan teknologi KoperatifAI milik Anda.
         </p>
         <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Buka Draf Pencalonan Pengurus</button>
      </div>
    </div>
  );
};

export default ManagerSelectionGuide;
