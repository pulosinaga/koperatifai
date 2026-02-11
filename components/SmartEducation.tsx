import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { useAppContext } from '../contexts/AppContext.tsx';
import { supabase } from '../services/supabaseClient.ts';

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
  const { user, isLiveDatabase, refreshProfile } = useAppContext();
  const [activeTab, setActiveTab] = useState<'LITERACY' | 'EDUPAY'>('EDUPAY');
  
  // Literacy States
  const [activeModule, setActiveModule] = useState<Module | null>(null);
  const [step, setStep] = useState(0);
  const [userPoints, setUserPoints] = useState(450);
  const [loanLimit, setLoanLimit] = useState(10000000);
  const [completedModules, setCompletedModules] = useState<number[]>([]);

  // EduPay States
  const [univName, setUnivName] = useState('Universitas Indonesia (UI)');
  const [nim, setNim] = useState('');
  const [uktAmount, setUktAmount] = useState<number | ''>(5000000);
  const [isPaying, setIsPaying] = useState(false);
  const [paySuccess, setPaySuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'SALDO' | 'PINJAMAN'>('SALDO');
  
  const [aiEduAdvice, setAiEduAdvice] = useState('');
  const [isAiThinking, setIsAiThinking] = useState(false);

  const voluntaryBalance = user?.balances?.voluntary || 15400000;

  const modules: Module[] = [
    { 
      id: 1, 
      title: 'Kedaulatan Kas Keluarga', 
      points: 100, 
      limitBonus: 500000, 
      desc: 'Pelajari cara memisahkan uang dapur dan modal usaha.',
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
        "Gunakan pinjaman produktif hanya untuk menambah modal warung atau tani."
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

  const handleEduPayment = async () => {
    if (!nim || !uktAmount) {
      alert("Mohon lengkapi NIM dan Nominal UKT.");
      return;
    }

    if (paymentMethod === 'SALDO' && voluntaryBalance < uktAmount) {
      alert("Saldo Sukarela Anda tidak mencukupi.");
      return;
    }

    setIsPaying(true);
    try {
      if (isLiveDatabase && user && supabase && paymentMethod === 'SALDO') {
         const newBalance = voluntaryBalance - Number(uktAmount);
         await supabase.from('balances').update({ voluntary: newBalance }).eq('user_id', user.id);
         await supabase.from('transactions').insert({
            user_id: user.id,
            type: 'withdrawal',
            description: `Edu-Pay: UKT ${univName} (${nim})`,
            amount: Number(uktAmount),
            status: 'completed'
         });
         await refreshProfile();
      }
      setTimeout(() => {
        setIsPaying(false);
        setPaySuccess(true);
      }, 2000);
    } catch (e: any) {
      alert("Gagal memproses pembayaran pendidikan.");
      setIsPaying(false);
    }
  };

  const askAiEducation = async () => {
    setIsAiThinking(true);
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Buatkan 1 paragraf nasihat bijak dari AI Koperasi untuk orang tua yang menggunakan fitur 'Direct Loan Disbursement' (Pinjaman langsung transfer ke Universitas) untuk membayar UKT anaknya sebesar Rp 5.000.000. 
        Jelaskan manfaat fitur ini: 
        1. Bunga rendah karena untuk pendidikan. 
        2. Uang tidak mampir ke rekening orang tua agar aman dari pengeluaran konsumtif.
        Gunakan nada bahasa kekeluargaan yang membanggakan perjuangan orang tua.`,
      });
      setAiEduAdvice(response.text || "Nasihat AI tidak tersedia.");
    } catch (e) {
      setAiEduAdvice("Jalur AI sedang sibuk. Tetap semangat menyekolahkan anak-anak kita!");
    } finally {
      setIsAiThinking(false);
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* Education Header */}
      <div className="bg-[#0f172a] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-500/20 text-emerald-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
              Smart Education Hub v2.0
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Edukasi & Masa Depan. <br/>Membangun Generasi Merdeka.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl font-medium">
              KoperatifAI hadir untuk memastikan literasi finansial Anda meningkat, dan pendidikan anak-anak Anda tidak pernah terputus karena kendala biaya.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 space-y-6 shadow-2xl">
             <div className="text-center">
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Intelektual Poin</p>
                <p className="text-4xl font-black text-indigo-400 mt-1 italic">{userPoints} XP</p>
             </div>
             <div className="h-px bg-white/10"></div>
             <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase">
                <span>Status Literasi</span>
                <span className="text-emerald-400 px-2 py-1 bg-emerald-400/10 rounded">EXCELLENT</span>
             </div>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="flex justify-center">
        <div className="bg-white p-1.5 rounded-[2rem] border border-slate-100 shadow-sm inline-flex">
          <button
            onClick={() => setActiveTab('EDUPAY')}
            className={`px-8 py-4 rounded-3xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-3 ${
              activeTab === 'EDUPAY' ? 'bg-indigo-600 text-white shadow-xl' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <span>🎓</span> Edu-Pay (Bayar UKT)
          </button>
          <button
            onClick={() => setActiveTab('LITERACY')}
            className={`px-8 py-4 rounded-3xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-3 ${
              activeTab === 'LITERACY' ? 'bg-slate-900 text-emerald-400 shadow-xl' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <span>🧠</span> Akademi Anggota
          </button>
        </div>
      </div>

      {activeTab === 'EDUPAY' && (
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-in slide-in-from-left duration-300">
            {/* Payment Form */}
            <div className="bg-white p-10 rounded-[4rem] border border-slate-100 shadow-xl space-y-8">
               <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-black text-slate-800 italic">Gateway Pembayaran Pendidikan</h3>
                  <div className="flex items-center gap-2">
                     <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                     <span className="text-[8px] font-black text-slate-400 uppercase">University API Synced</span>
                  </div>
               </div>

               <div className="space-y-5">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Institusi / Universitas</label>
                     <select 
                        value={univName}
                        onChange={(e) => setUnivName(e.target.value)}
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-sm outline-none focus:border-indigo-500 transition-colors"
                     >
                        <option>Universitas Indonesia (UI)</option>
                        <option>Institut Teknologi Bandung (ITB)</option>
                        <option>Universitas Gadjah Mada (UGM)</option>
                        <option>Universitas Padjadjaran (UNPAD)</option>
                        <option>Universitas Diponegoro (UNPAD)</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">NIM / Nomor Induk Siswa</label>
                     <input 
                        type="text" 
                        value={nim}
                        onChange={(e) => setNim(e.target.value)}
                        placeholder="Masukkan Nomor Pembayaran..."
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-sm outline-none focus:border-indigo-500 transition-colors"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Nominal Tagihan (Rp)</label>
                     <input 
                        type="number" 
                        value={uktAmount}
                        onChange={(e) => setUktAmount(Number(e.target.value))}
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-black text-2xl text-indigo-600 outline-none focus:border-indigo-500 transition-colors"
                     />
                  </div>
               </div>

               <div className="pt-4 border-t border-slate-100 space-y-4">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pilih Sumber Dana</p>
                  <div className="grid grid-cols-2 gap-4">
                     <button 
                        onClick={() => setPaymentMethod('SALDO')}
                        className={`p-4 rounded-2xl border-2 flex flex-col items-center text-center transition-all ${
                           paymentMethod === 'SALDO' ? 'bg-indigo-50 border-indigo-600 shadow-md scale-105' : 'bg-white border-slate-100 hover:border-indigo-200'
                        }`}
                     >
                        <span className="text-2xl mb-2">🪙</span>
                        <span className="text-xs font-black text-slate-800">Saldo Sukarela</span>
                        <span className="text-[9px] text-slate-500 mt-1">Tersedia: Rp {voluntaryBalance.toLocaleString('id-ID')}</span>
                     </button>
                     <button 
                        onClick={() => setPaymentMethod('PINJAMAN')}
                        className={`p-4 rounded-2xl border-2 flex flex-col items-center text-center transition-all ${
                           paymentMethod === 'PINJAMAN' ? 'bg-emerald-50 border-emerald-500 shadow-md scale-105' : 'bg-white border-slate-100 hover:border-emerald-200'
                        }`}
                     >
                        <span className="text-2xl mb-2">🏛️</span>
                        <span className="text-xs font-black text-slate-800">Pinjaman UKT</span>
                        <span className="text-[9px] text-emerald-600 font-bold mt-1 uppercase">Direct to Univ (0.5%)</span>
                     </button>
                  </div>
               </div>

               <button 
                  onClick={handleEduPayment}
                  disabled={isPaying || paySuccess}
                  className="w-full py-5 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-black transition-all active:scale-95 disabled:opacity-50"
               >
                  {isPaying ? 'MEMPROSES GATEWAY...' : paySuccess ? '✓ PEMBAYARAN BERHASIL' : 'EKSEKUSI PEMBAYARAN PENDIDIKAN'}
               </button>
            </div>

            {/* AI Advisor Panel for Education */}
            <div className="bg-indigo-900 rounded-[4rem] p-10 shadow-2xl flex flex-col relative overflow-hidden border border-white/5">
               <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[100px]"></div>
               <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
                  <h3 className="text-xl font-black text-indigo-300 italic uppercase tracking-widest">AI Education Planner</h3>
                  <button onClick={askAiEducation} disabled={isAiThinking} className="p-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-500 transition-all">
                     {isAiThinking ? '⏳' : '🤖'}
                  </button>
               </div>

               {paySuccess && (
                  <div className="mb-6 p-6 bg-emerald-500/20 rounded-3xl border border-emerald-500/30 text-center animate-in zoom-in relative z-10">
                     <p className="text-4xl mb-2">🎓</p>
                     <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Transaksi Berhasil</p>
                     <p className="text-sm font-bold text-white mt-1">Uang Kuliah Rp {Number(uktAmount).toLocaleString('id-ID')} telah diterima oleh {univName}.</p>
                  </div>
               )}

               <div className="flex-1 bg-white/5 rounded-[2.5rem] p-8 overflow-y-auto custom-scrollbar font-serif text-sm text-indigo-100 leading-relaxed italic relative z-10 border border-white/5 shadow-inner">
                  {isAiThinking ? (
                     <div className="h-full flex flex-col items-center justify-center space-y-6">
                        <div className="text-5xl animate-bounce">📚</div>
                        <p className="text-[10px] font-black uppercase text-indigo-300 tracking-[0.3em] text-center">AI IS STRUCTURING THE EDUCATION ADVICE...</p>
                     </div>
                  ) : aiEduAdvice ? (
                     <div className="animate-in fade-in duration-1000">
                        <pre className="whitespace-pre-wrap">{aiEduAdvice}</pre>
                     </div>
                  ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center opacity-40 space-y-6">
                        <div className="text-7xl">💡</div>
                        <p className="font-bold text-sm">Klik ikon robot untuk mengetahui rahasia keamanan fitur "Direct Disbursement" Pinjaman UKT.</p>
                     </div>
                  )}
               </div>

               <div className="mt-8 grid grid-cols-2 gap-4 relative z-10">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                     <p className="text-[8px] font-black text-emerald-400 uppercase tracking-widest">Sistem Pinjaman UKT</p>
                     <p className="text-xs font-bold text-white mt-1">100% Bebas Penyelewengan</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                     <p className="text-[8px] font-black text-emerald-400 uppercase tracking-widest">Cashback Admin (SHU)</p>
                     <p className="text-xs font-bold text-white mt-1">Kembali ke Komunitas</p>
                  </div>
               </div>
            </div>
         </div>
      )}

      {activeTab === 'LITERACY' && (
         <div className="animate-in slide-in-from-right duration-300">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {modules.map((m) => (
                   <div 
                    key={m.id} 
                    className={`p-10 rounded-[3.5rem] border-2 transition-all flex flex-col ${
                      m.status === 'completed' 
                        ? 'bg-emerald-50 border-emerald-100' 
                        : m.status === 'locked' 
                          ? 'bg-slate-50 border-slate-100 opacity-60' 
                          : 'bg-white border-slate-100 hover:shadow-2xl hover:-translate-y-2'
                    }`}
                   >
                      <div className="flex justify-between items-start mb-8">
                         <div className={`w-16 h-16 rounded-[2rem] flex items-center justify-center text-4xl shadow-inner ${
                           m.status === 'completed' ? 'bg-emerald-500 text-white' : 'bg-slate-100'
                         }`}>
                            {m.status === 'completed' ? '✅' : (m.status === 'locked' ? '🔒' : '📖')}
                         </div>
                         <div className="text-right">
                            <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">+{m.points} XP</p>
                            <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mt-1">Limit +{m.limitBonus / 1000}k</p>
                         </div>
                      </div>
                      <h4 className="text-2xl font-black text-slate-800 leading-tight mb-4 italic">{m.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed mb-10 flex-1">"{m.desc}"</p>
                      
                      <button 
                        onClick={() => startModule(m)}
                        disabled={m.status === 'locked'}
                        className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${
                          m.status === 'completed' 
                            ? 'bg-white text-emerald-600 border border-emerald-200' 
                            : m.status === 'locked'
                              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                              : 'bg-slate-900 text-white shadow-xl hover:bg-black'
                        }`}
                      >
                         {m.status === 'completed' ? 'Sertifikat Terbit' : (m.status === 'locked' ? 'Prasyarat Belum Ada' : 'Mulai Belajar')}
                      </button>
                   </div>
                 ))}
              </div>
            )}
         </div>
      )}
    </div>
  );
};

export default SmartEducation;