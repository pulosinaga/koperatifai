
import React, { useState } from 'react';

const LoanDisbursement: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(0);

  const startSimulation = () => {
    setIsProcessing(true);
    setStep(1);
    
    setTimeout(() => setStep(2), 2000);
    setTimeout(() => setStep(3), 4000);
    setTimeout(() => {
      setStep(4);
      setIsProcessing(false);
    }, 6000);
  };

  const reset = () => {
    setIsProcessing(false);
    setStep(0);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Hero Section */}
      <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/30 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Automated API Disbursement
            </span>
            <h2 className="text-4xl font-black leading-tight">Pencairan Dana Tanpa Harus Antre di Bank.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Kami menggunakan teknologi <b>API Corporate Banking</b>. Begitu pinjaman disetujui, sistem kami mengirim instruksi ke bank untuk mentransfer dana dari Escrow ke rekening anggota secara otomatis.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-indigo-600/10 rounded-[2.5rem] border border-white/10 p-8 text-center flex flex-col justify-center items-center shadow-2xl">
             <div className="text-6xl mb-4">🏦</div>
             <p className="text-xs font-bold text-indigo-300 uppercase">Jarak Fisik ke Bank</p>
             <p className="text-4xl font-black text-white mt-1">0 Meter</p>
             <p className="text-[10px] text-slate-500 mt-2">Semua dikendalikan via Dashboard Digital.</p>
          </div>
        </div>
      </div>

      {/* Simulation Box */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-10">
         <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-black text-slate-800">Simulasi Aliran Dana Digital</h3>
            <p className="text-slate-500 text-sm mt-2">Lihat bagaimana data bekerja menggantikan langkah kaki pengurus.</p>
         </div>

         <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
            <div className={`flex-1 flex flex-col items-center transition-all duration-500 ${step >= 1 ? 'scale-110' : 'opacity-40 grayscale'}`}>
               <div className="w-20 h-20 bg-indigo-100 rounded-3xl flex items-center justify-center text-3xl mb-4 shadow-sm border border-indigo-200">📋</div>
               <h4 className="text-xs font-bold text-slate-800">Approval Pengurus</h4>
               <p className="text-[10px] text-slate-400 mt-1">Klik di Dashboard</p>
            </div>
            <div className={`text-indigo-200 text-3xl hidden md:block transition-all ${step >= 1 ? 'opacity-100' : 'opacity-20'}`}>➔</div>
            
            <div className={`flex-1 flex flex-col items-center transition-all duration-500 ${step >= 2 ? 'scale-110' : 'opacity-40 grayscale'}`}>
               <div className="w-24 h-24 bg-slate-900 rounded-[2rem] flex items-center justify-center text-4xl mb-4 shadow-xl ring-8 ring-slate-50">⚡</div>
               <h4 className="text-xs font-bold text-slate-800 uppercase tracking-tighter">Bank API Call</h4>
               <p className="text-[10px] text-indigo-600 font-bold mt-1">Handshake Secure</p>
            </div>
            <div className={`text-indigo-200 text-3xl hidden md:block transition-all ${step >= 2 ? 'opacity-100' : 'opacity-20'}`}>➔</div>

            <div className={`flex-1 flex flex-col items-center transition-all duration-500 ${step >= 3 ? 'scale-110' : 'opacity-40 grayscale'}`}>
               <div className="w-20 h-20 bg-emerald-100 rounded-3xl flex items-center justify-center text-3xl mb-4 shadow-sm border border-emerald-200">📱</div>
               <h4 className="text-xs font-bold text-slate-800">Uang Diterima</h4>
               <p className="text-[10px] text-emerald-600 font-bold mt-1">Real-time Transfer</p>
            </div>
         </div>

         <div className="flex justify-center pt-10">
            {step === 0 ? (
               <button 
                onClick={startSimulation}
                className="px-12 py-5 bg-indigo-600 text-white rounded-3xl font-black uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95"
               >
                  Simulasikan Pencairan Sekarang
               </button>
            ) : step === 4 ? (
               <div className="text-center space-y-4">
                  <div className="px-8 py-3 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm flex items-center gap-2">
                    ✅ Pencairan Selesai dalam 6 Detik!
                  </div>
                  <button onClick={reset} className="text-xs font-bold text-slate-400 hover:text-indigo-600 underline">Ulangi Simulasi</button>
               </div>
            ) : (
               <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-indigo-600 rounded-full animate-ping"></span>
                  <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest animate-pulse">Menghubungi Server Bank...</span>
               </div>
            )}
         </div>
      </div>

      {/* Tech Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-2xl font-black text-slate-800">Kenapa Harus API?</h3>
            <div className="space-y-4">
               {[
                 { t: 'Efisiensi Waktu', d: 'Pencairan dana yang dulu butuh 1-2 hari kerja kini selesai dalam hitungan detik.', icon: '⏳' },
                 { t: 'Tanpa Kesalahan Input', d: 'Nomor rekening dan nominal diambil langsung dari database, tidak ada typo manual.', icon: '🎯' },
                 { t: 'Otorisasi Ganda Digital', d: 'Pengurus memberikan persetujuan via OTP/Biometrik dari mana saja (rumah/kantor).', icon: '🔑' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-xl shrink-0">{item.icon}</div>
                    <div>
                       <p className="text-sm font-bold text-slate-800">{item.t}</p>
                       <p className="text-[10px] text-slate-500 leading-relaxed">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-indigo-600 p-10 rounded-[3rem] text-white space-y-8 flex flex-col justify-center">
            <h3 className="text-2xl font-black italic">"Kami menghemat langkah kaki pengurus untuk menjadi langkah pertumbuhan koperasi."</h3>
            <div className="p-8 bg-white/10 rounded-2xl border border-white/10">
               <h4 className="font-bold text-indigo-200 uppercase text-[10px] tracking-widest mb-4">Governance Check</h4>
               <ul className="space-y-3">
                  <li className="flex gap-2 items-center text-xs"><span>✅</span> Limit harian per pengurus</li>
                  <li className="flex gap-2 items-center text-xs"><span>✅</span> Log audit bank tidak bisa dihapus</li>
                  <li className="flex gap-2 items-center text-xs"><span>✅</span> Notifikasi otomatis ke Dewan Pengawas</li>
               </ul>
            </div>
         </div>
      </div>

      {/* Footer Info */}
      <div className="p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100 flex flex-col md:flex-row items-center gap-10">
         <div className="text-6xl">🤖</div>
         <div className="flex-1">
            <h4 className="text-2xl font-bold text-emerald-900 leading-tight">AI Financial Guardian</h4>
            <p className="text-emerald-700/70 mt-2 leading-relaxed">
               Sistem AI kami melakukan pengecekan terakhir (Final Risk Assessment) tepat sebelum API bank dipanggil. Jika ada pola transaksi yang mencurigakan (misal: pencairan ke rekening pengurus sendiri), sistem akan **MEMBLOKIR** otomatis dan memberi peringatan ke seluruh anggota.
            </p>
         </div>
      </div>
    </div>
  );
};

export default LoanDisbursement;
