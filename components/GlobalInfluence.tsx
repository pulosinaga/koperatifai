
import React from 'react';

const GlobalInfluence: React.FC = () => {
  const events = [
    {
      title: 'WOCCU World Conference',
      desc: 'Mempresentasikan "AI-Powered Credit Union" sebagai standar keamanan dana anggota global.',
      location: 'Vancouver, Canada',
      status: 'Annual Target',
      icon: '🏟️'
    },
    {
      title: 'G20 Financial Inclusion',
      desc: 'Membuktikan bagaimana KoperatifAI menghapus kesenjangan finansial di negara berkembang.',
      location: 'Bali / Global',
      status: 'Strategic Partnership',
      icon: '🇮🇩'
    },
    {
      title: 'UN Social Impact Summit',
      desc: 'Diskusi panel tentang teknologi sebagai alat redistribusi kekayaan yang adil (SDGs 1 & 10).',
      location: 'New York, USA',
      status: 'Mission Goal',
      icon: '🇺🇳'
    },
    {
      title: 'World Economic Forum',
      desc: 'Berbagi visi tentang "The Rise of Social Unicorns" menggantikan model kapitalisme lama.',
      location: 'Davos, Switzerland',
      status: 'Thought Leadership',
      icon: '🏔️'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Hero Section */}
      <div className="bg-[#0f172a] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Global Thought Leadership
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Dari Desa Indonesia, <br/>Menginspirasi Podium Dunia.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Dunia lapar akan solusi yang menggabungkan **Hati** (Solidaritas) dan **Otak** (AI). KoperatifAI adalah jawaban yang mereka cari.
            </p>
          </div>
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <div className="text-6xl mb-4">🎤</div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Speaker Status</p>
             <p className="text-xl font-black text-indigo-400">Global Visionary</p>
             <p className="text-[9px] text-slate-500 mt-2 uppercase">Impact Ambassador</p>
          </div>
        </div>
      </div>

      {/* Global Speaking Roadmap */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {events.map((e, i) => (
          <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
             <div className="w-20 h-20 bg-slate-50 rounded-[2.5rem] flex items-center justify-center text-4xl mb-6 shadow-sm group-hover:bg-indigo-900 group-hover:text-white transition-all duration-500">
                {e.icon}
             </div>
             <h4 className="text-lg font-black text-slate-800 leading-tight">{e.title}</h4>
             <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mt-1">{e.location}</p>
             <p className="text-xs text-slate-400 mt-2 font-bold uppercase">{e.status}</p>
             <p className="text-[11px] text-slate-500 mt-4 leading-relaxed flex-1">{e.desc}</p>
          </div>
        ))}
      </div>

      {/* Content Assets Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-indigo-950 p-10 rounded-[3rem] text-white space-y-8 flex flex-col justify-center shadow-xl">
            <h3 className="text-2xl font-black italic">Aset Intelektual Anda</h3>
            <p className="text-indigo-200/70 text-sm">Panggung dunia butuh data, bukan hanya kata. AI kita menyiapkan segalanya.</p>
            <div className="space-y-4">
               <div className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-3xl">📝</div>
                  <div>
                     <h5 className="font-bold">Automated Whitepapers</h5>
                     <p className="text-xs text-indigo-200 mt-1">Sistem menghasilkan laporan ilmiah tentang bagaimana AI mengurangi risiko kredit pada masyarakat miskin.</p>
                  </div>
               </div>
               <div className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-3xl">🎙️</div>
                  <div>
                     <h5 className="font-bold">Diplomacy AI Assistant</h5>
                     <p className="text-xs text-indigo-200 mt-1">Asisten AI yang membantu Anda menyusun pidato dalam 10 bahasa untuk forum berbeda.</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 flex flex-col justify-center space-y-8">
            <div className="text-center space-y-2">
               <h3 className="text-2xl font-black text-slate-800 italic">"The Social Tech Vision"</h3>
               <p className="text-slate-500 text-sm italic">"Kita tidak menjual produk, kita menjual harapan yang terukur."</p>
            </div>
            <div className="p-8 bg-slate-900 rounded-3xl text-white">
               <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-black uppercase text-indigo-400 tracking-widest">Key Quote for Davos</span>
                  <div className="flex gap-1">
                     <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                     <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                  </div>
               </div>
               <p className="text-lg font-serif italic text-indigo-100 leading-relaxed">
                  "The future of finance isn't just about faster transactions; it's about deeper connections. We use AI not to replace humans, but to protect the solidarity that makes us human."
               </p>
            </div>
         </div>
      </div>

      {/* Call to Action */}
      <div className="p-12 bg-indigo-900 border border-indigo-800 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white">
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl">🕊️</div>
         <h4 className="text-3xl font-black max-w-xl italic">"Jadilah Suara Bagi Mereka Yang Tak Terdengar."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed">
            Keberhasilan KoperatifAI di lapangan adalah tiket Anda untuk mengubah kebijakan ekonomi dunia. Saat Anda bicara, Anda membawa aspirasi jutaan anggota koperasi di belakang Anda.
         </p>
         <div className="flex gap-4">
            <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all shadow-xl">Draf Pidato Global Pertama Anda</button>
         </div>
      </div>
    </div>
  );
};

export default GlobalInfluence;
