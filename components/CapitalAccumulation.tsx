
import React from 'react';

const CapitalAccumulation: React.FC = () => {
  const targetModal = 500000000; // Target Skala Nasional
  const currentModal = 45000000; // Modal yang sudah terkumpul (misal)
  const progress = (currentModal / targetModal) * 100;
  
  const levels = [
    { name: 'Skala Kabupaten', target: 50000000, icon: '🏘️' },
    { name: 'Skala Provinsi', target: 150000000, icon: '🏙️' },
    { name: 'Skala Nasional', target: 500000000, icon: '🇮🇩' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      <div className="bg-[#0f172a] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Cooperative Bootstrapping Engine
            </span>
            <h2 className="text-4xl font-black leading-tight italic font-serif">Brankas Modal Kolektif.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
               Bapak Founder, modal besar bukan didapat dari investor asing, tapi dari patungan rakyat. Lihat progres kemandirian modal kita di sini.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 text-center shadow-2xl">
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Total Modal Terkumpul</p>
             <p className="text-4xl font-black text-emerald-400 mt-2 italic">Rp {currentModal.toLocaleString('id-ID')}</p>
             <div className="mt-6 space-y-2">
                <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest">
                   <span>Progres ke Skala Nasional</span>
                   <span>{progress.toFixed(1)}%</span>
                </div>
                <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 shadow-inner">
                   <div className="h-full bg-indigo-500 shadow-[0_0_15px_#6366f1]" style={{ width: `${progress}%` }}></div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {levels.map((lvl, i) => {
          const isUnlocked = currentModal >= lvl.target;
          return (
            <div key={i} className={`p-8 rounded-[3rem] border-2 transition-all group ${isUnlocked ? 'bg-white border-emerald-500 shadow-xl' : 'bg-slate-50 border-slate-100 opacity-60'}`}>
              <div className="text-5xl mb-6">{isUnlocked ? '✅' : lvl.icon}</div>
              <h4 className={`text-xl font-black ${isUnlocked ? 'text-slate-800' : 'text-slate-400'}`}>{lvl.name}</h4>
              <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mt-2">Target: Rp {lvl.target.toLocaleString()}</p>
              <div className="mt-6">
                 {isUnlocked ? (
                   <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[8px] font-black uppercase tracking-widest italic">Legalitas Siap</span>
                 ) : (
                   <p className="text-[9px] text-slate-400 italic font-medium">Sisa: Rp {(lvl.target - currentModal).toLocaleString()} lagi</p>
                 )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-5xl shrink-0">🏛️</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-slate-800 italic leading-tight">Solusi "Crowdfund" Modal Awal:</h4>
            <p className="text-slate-500 leading-relaxed italic">
               Bapak tidak perlu keluar 500 juta sendirian. Cukup kumpulkan 1.000 anggota pionir yang menabung <b>Simpanan Pokok Rp 500.000</b>. Uang tersebut akan terkumpul 500 juta dan langsung Bapak bawa ke Notaris sebagai modal setoran. Rakyat membiayai kedaulatan mereka sendiri.
            </p>
         </div>
      </div>
    </div>
  );
};

export default CapitalAccumulation;
