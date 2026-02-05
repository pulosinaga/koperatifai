
import React, { useState } from 'react';

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
      title: 'Dasar Cashflow Keluarga', 
      points: 100, 
      limitBonus: 500000, 
      desc: 'Pelajari cara memisahkan uang dapur dan modal usaha.',
      status: completedModules.includes(1) ? 'completed' : 'available',
      content: [
        "Langkah pertama dalam kedaulatan finansial adalah Pencatatan.",
        "Pisahkan rekening bank untuk belanja harian dan tabungan wajib koperasi.",
        "Ingat rumus: Pemasukan - Tabungan = Belanja. Jangan sebaliknya.",
        "AI KoperatifAI bisa membantumu memantau pengeluaran via riwayat transaksi QRIS."
      ]
    },
    { 
      id: 2, 
      title: 'Menghindari Jebakan Hutang', 
      points: 150, 
      limitBonus: 1000000, 
      desc: 'Kenapa Pinjol itu berbahaya dan bagaimana koperasi melindungimu.',
      status: completedModules.includes(2) ? 'completed' : (completedModules.includes(1) ? 'available' : 'locked'),
      content: [
        "Hutang Konsumtif adalah hutang yang nilainya turun (misal: beli gadget terbaru dengan cicilan).",
        "Hutang Produktif adalah hutang untuk modal usaha yang menghasilkan profit.",
        "Bunga Pinjol harian bisa mencapai 0.8%. Koperasi hanya 1.5% per bulan.",
        "Jika terlanjur terjebak, gunakan fitur Debt Shield di KoperatifAI."
      ]
    },
    { 
      id: 3, 
      title: 'Investasi Masa Depan Anak', 
      points: 200, 
      limitBonus: 2000000, 
      desc: 'Strategi menabung simpanan sukarela untuk pendidikan.',
      status: completedModules.includes(3) ? 'completed' : (completedModules.includes(2) ? 'available' : 'locked'),
      content: [
        "Inflasi pendidikan naik 10-15% per tahun.",
        "Simpanan sukarela di koperasi memberikan imbal hasil SHU yang lebih tinggi dari deposito bank.",
        "Gunakan auto-debet harian (misal Rp 10.000) untuk hasil jangka panjang.",
        "Konsultasikan portofolio pendidikanmu dengan AI Advisor kami."
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
      <div className="bg-indigo-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Gamified Financial Literacy
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Ilmu adalah Modal Utama. <br/>Belajar & Naikkan Limit Anda.</h2>
            <p className="text-indigo-200 text-lg leading-relaxed max-w-2xl">
              Kami percaya anggota yang cerdas secara finansial adalah aset terbesar koperasi. Selesaikan modul untuk membuktikan kredibilitas Anda.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 space-y-6 shadow-2xl">
             <div className="text-center">
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Poin Literasi Saya</p>
                <p className="text-4xl font-black text-indigo-400 mt-1">{userPoints}</p>
             </div>
             <div className="h-px bg-white/10"></div>
             <div className="text-center">
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Limit Pinjaman Saat Ini</p>
                <p className="text-2xl font-black text-emerald-400 mt-1">Rp {loanLimit.toLocaleString('id-ID')}</p>
             </div>
          </div>
        </div>
      </div>

      {activeModule ? (
        /* Active Module Learning View */
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
              <div className="text-7xl animate-bounce">💡</div>
              <p className="text-2xl font-medium text-slate-700 leading-relaxed font-serif italic">
                 "{activeModule.content[step]}"
              </p>
           </div>

           <div className="flex justify-between items-center pt-8 border-t border-slate-50">
              <button 
                onClick={() => setActiveModule(null)}
                className="text-sm font-bold text-slate-400 hover:text-slate-600 uppercase tracking-widest"
              >
                Keluar
              </button>
              <button 
                onClick={nextStep}
                className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-700 shadow-xl transition-all active:scale-95"
              >
                 {step === activeModule.content.length - 1 ? 'Selesaikan Modul ✨' : 'Lanjut →'}
              </button>
           </div>
        </div>
      ) : (
        /* Module List View */
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
                      <p className="text-[10px] font-black text-indigo-600 uppercase">+{m.points} Poin</p>
                      <p className="text-[10px] font-black text-emerald-600 uppercase">Limit +{m.limitBonus / 1000}k</p>
                   </div>
                </div>
                <h4 className="text-xl font-black text-slate-800 leading-tight mb-2">{m.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-8 flex-1">{m.desc}</p>
                
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
                   {m.status === 'completed' ? 'Sudah Selesai' : (m.status === 'locked' ? 'Modul Terkunci' : 'Mulai Belajar')}
                </button>
             </div>
           ))}
        </div>
      )}

      {/* Gamification Explanation */}
      <div className="bg-slate-900 rounded-[4rem] p-12 text-white space-y-10 shadow-xl overflow-hidden relative">
         <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black italic text-indigo-400">Filosofi Kredit Berbasis Ilmu</h3>
            <p className="text-slate-500">Kenapa edukasi bisa menaikkan limit pinjaman Anda?</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: 'Mitigasi Risiko AI', d: 'Data kami membuktikan bahwa anggota yang teredukasi memiliki rasio gagal bayar 70% lebih rendah.', icon: '🛡️' },
              { t: 'Pemberdayaan Nyata', d: 'Koperasi tidak hanya memberi ikan (modal), tapi juga mengajarkan cara memancing (literasi).', icon: '🎣' },
              { t: 'Keadilan Algoritma', d: 'Skor kredit tidak hanya dilihat dari kekayaan, tapi dari kemauan untuk berkembang.', icon: '⚖️' }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/10 space-y-4">
                 <div className="text-4xl">{item.icon}</div>
                 <h4 className="font-bold text-lg">{item.t}</h4>
                 <p className="text-xs text-slate-400 leading-relaxed">{item.d}</p>
              </div>
            ))}
         </div>
      </div>

      {/* Motivation Callout */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8">
         <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-5xl">🎓</div>
         <h4 className="text-3xl font-black text-slate-800 max-w-xl italic">"Jadilah Pemilik Yang Berpengetahuan."</h4>
         <p className="text-slate-500 max-w-2xl text-lg leading-relaxed">
            KoperatifAI adalah milik Anda. Semakin pandai pemiliknya, semakin jaya perusahaannya. Teruslah belajar untuk membangun imperium ekonomi kita.
         </p>
         <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl">Lihat Kurikulum Lanjutan</button>
      </div>
    </div>
  );
};

export default SmartEducation;
