
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Module {
  id: number;
  title: string;
  points: number;
  limitBonus: number;
  desc: string;
  status: 'locked' | 'available' | 'completed';
  content: string[];
}

const SmartEducation: React.FC = () => {
  const [activeModule, setActiveModule] = useState<Module | null>(null);
  const [step, setStep] = useState(0);
  const [userPoints, setUserPoints] = useState(450);
  const [loanLimit, setLoanLimit] = useState(10000000);
  const [completedModules, setCompletedModules] = useState<number[]>([]);

  const modules: Module[] = [
    { 
      id: 1, 
      title: 'Kedaulatan Kas Keluarga', 
      points: 100, 
      limitBonus: 500000, 
      desc: 'Pelajari cara memisahkan uang dapur dan modal usaha anggota koperasi.',
      status: completedModules.includes(1) ? 'completed' : 'available',
      content: [
        "Uang Koperasi bukan uang pengurus, tapi tabungan masa depanmu.",
        "Pisahkan rekening bank pribadi dan saldo sukarela di KoperatifAI.",
        "Gunakan fitur 'Celengan Digital' untuk menabung sisa uang belanja harian.",
        "AI kami akan memantau kedisiplinanmu dan menaikkan skor kepercayaanmu."
      ]
    },
    { 
      id: 2, 
      title: 'Strategi Anti-Pinjol', 
      points: 150, 
      limitBonus: 1000000, 
      desc: 'Kenapa Pinjol memeras rakyat dan bagaimana Koperasi melindungimu.',
      status: completedModules.includes(2) ? 'completed' : (completedModules.includes(1) ? 'available' : 'locked'),
      content: [
        "Bunga Pinjol dihitung harian, bunga Koperasi dihitung bulanan secara adil.",
        "Hutang konsumtif (beli barang mewah) adalah racun kedaulatanmu.",
        "Gunakan pinjaman produktif hanya untuk menambah modal warung atau tani.",
        "Jika terlanjur terjebak Pinjol, ajukan program 'Debt Shield' di KoperatifAI."
      ]
    },
    { 
      id: 3, 
      title: 'Pemerataan Kekayaan (SHU)', 
      points: 200, 
      limitBonus: 2000000, 
      desc: 'Memahami cara kerja bagi hasil kolektif yang jujur.',
      status: completedModules.includes(3) ? 'completed' : (completedModules.includes(2) ? 'available' : 'locked'),
      content: [
        "SHU adalah keuntungan yang dikembalikan kepadamu sebagai pemilik.",
        "Setiap belanja di marketplace anggota menambah porsi SHU-mu.",
        "Koperasi adalah senjata melawan sistem ekonomi yang memihak segelintir orang.",
        "Menjadi anggota koperasi berarti menjadi merdeka secara finansial."
      ]
    }
  ];

  const startModule = (m: Module) => {
    if (m.status === 'locked') return;
    setActiveModule(m);
    setStep(0);
  };

  const nextStep = () => {
    if (activeModule && step < activeModule.content.length - 1) {
      setStep(step + 1);
    } else {
      finishModule();
    }
  };

  const finishModule = () => {
    if (activeModule && !completedModules.includes(activeModule.id)) {
      setCompletedModules([...completedModules, activeModule.id]);
      setUserPoints(userPoints + activeModule.points);
      setLoanLimit(loanLimit + activeModule.limitBonus);
    }
    setActiveModule(null);
    setStep(0);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Education Header */}
      <div className="bg-indigo-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              AI Smart Academy v2.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Ilmu Adalah Modal Utama. <br/>Belajar & Naikkan Valuasimu.</h2>
            <p className="text-indigo-200 text-lg leading-relaxed max-w-2xl">
              Kami tidak hanya meminjamkan uang. Kami mencetak **Wirausaha Rakyat** yang cerdas. Selesaikan modul untuk membuktikan kualitas karaktermu.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 space-y-6 shadow-2xl">
             <div className="text-center">
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Intelektual Poin</p>
                <p className="text-4xl font-black text-indigo-400 mt-1">{userPoints} XP</p>
             </div>
             <div className="h-px bg-white/10"></div>
             <div className="text-center">
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Limit Pinjaman Terbuka</p>
                <p className="text-2xl font-black text-emerald-400 mt-1">Rp {loanLimit.toLocaleString('id-ID')}</p>
             </div>
          </div>
        </div>
      </div>

      {activeModule ? (
        <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl space-y-12 animate-in zoom-in duration-300 min-h-[500px] flex flex-col">
           <div className="flex justify-between items-center border-b border-slate-50 pb-8">
              <div>
                 <h3 className="text-2xl font-black text-slate-800 italic">{activeModule.title}</h3>
                 <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Langkah {step + 1} dari {activeModule.content.length}</p>
              </div>
              <div className="h-2 w-48 bg-slate-100 rounded-full overflow-hidden">
                 <div 
                    className="h-full bg-indigo-600 transition-all duration-500" 
                    style={{ width: `${((step + 1) / activeModule.content.length) * 100}%` }}
                 ></div>
              </div>
           </div>

           <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 max-w-2xl mx-auto">
              <div className="text-7xl animate-bounce">🎓</div>
              <p className="text-2xl font-medium text-slate-700 leading-relaxed font-serif italic">
                 "{activeModule.content[step]}"
              </p>
           </div>

           <div className="flex justify-between items-center pt-8 border-t border-slate-50">
              <button 
                onClick={() => setActiveModule(null)}
                className="text-sm font-bold text-slate-400 hover:text-slate-600 uppercase tracking-widest"
              >
                Tutup Modul
              </button>
              <button 
                onClick={nextStep}
                className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-700 shadow-xl transition-all active:scale-95"
              >
                 {step === activeModule.content.length - 1 ? 'Selesaikan Pelajaran ✨' : 'Lanjut Materi →'}
              </button>
           </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {modules.map((m) => (
             <div 
              key={m.id} 
              className={`p-8 rounded-[3rem] border transition-all flex flex-col ${
                m.status === 'completed' 
                  ? 'bg-emerald-50 border-emerald-100' 
                  : m.status === 'locked' 
                    ? 'bg-slate-50 border-slate-100 opacity-60' 
                    : 'bg-white border-slate-100 hover:shadow-2xl hover:-translate-y-2'
              }`}
             >
                <div className="flex justify-between items-start mb-6">
                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl ${
                     m.status === 'completed' ? 'bg-emerald-500 text-white' : 'bg-slate-100'
                   }`}>
                      {m.status === 'completed' ? '✅' : (m.status === 'locked' ? '🔒' : '📖')}
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] font-black text-indigo-600 uppercase">+{m.points} XP</p>
                      <p className="text-[10px] font-black text-emerald-600 uppercase">Limit +{m.limitBonus / 1000}k</p>
                   </div>
                </div>
                <h4 className="text-xl font-black text-slate-800 leading-tight mb-2">{m.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-8 flex-1 italic">"{m.desc}"</p>
                
                <button 
                  onClick={() => startModule(m)}
                  disabled={m.status === 'locked'}
                  className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all ${
                    m.status === 'completed' 
                      ? 'bg-white text-emerald-600 border border-emerald-200' 
                      : m.status === 'locked'
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        : 'bg-indigo-600 text-white shadow-lg hover:bg-indigo-700'
                  }`}
                >
                   {m.status === 'completed' ? 'Sertifikat Terbit' : (m.status === 'locked' ? 'Prasyarat Belum Ada' : 'Mulai Belajar')}
                </button>
             </div>
           ))}
        </div>
      )}

      {/* Strategy Pillar */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-5xl shrink-0 border-4 border-indigo-100">⚖️</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-slate-800 italic leading-tight">Filosofi Kredit Berbasis Ilmu</h4>
            <p className="text-slate-500 text-lg leading-relaxed">
               "Di KoperatifAI, kami tidak menilai kelayakanmu hanya dari harta. Kami menilai dari kemauanmu untuk belajar. Anggota yang teredukasi adalah anggota dengan risiko gagal bayar terendah. Itulah Keadilan Digital."
            </p>
         </div>
      </div>
    </div>
  );
};

export default SmartEducation;
