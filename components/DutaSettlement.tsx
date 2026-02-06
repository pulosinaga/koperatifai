
import React, { useState } from 'react';

const DutaSettlement: React.FC = () => {
  const [cashInHand, setCashInHand] = useState(2450000);
  const [cashLimit] = useState(3000000);
  const [isSettling, setIsSettling] = useState(false);
  const [step, setStep] = useState(0);

  const startSettlement = () => {
    setIsSettling(true);
    setStep(1);
    // Simulation logic
    setTimeout(() => setStep(2), 2000);
    setTimeout(() => setStep(3), 4000);
    setTimeout(() => {
       setStep(4);
       setCashInHand(0);
       setIsSettling(false);
    }, 6000);
  };

  const limitPercentage = (cashInHand / cashLimit) * 100;

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Header Duta Wallet */}
      <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/30 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Cash-to-Cloud Settlement
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Pelunasan Kas Duta: <br/>Kunci Likuiditas Koperasi.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Uang tunai yang Anda kumpulkan dari anggota harus segera masuk ke **Kas Utama (Bank)** agar AI bisa memutarnya kembali menjadi SHU.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white p-10 rounded-[3rem] shadow-2xl text-center">
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Kas di Kantong Duta</p>
             <p className={`text-4xl font-black mt-2 italic transition-colors ${limitPercentage > 80 ? 'text-rose-600' : 'text-slate-800'}`}>
                Rp {cashInHand.toLocaleString('id-ID')}
             </p>
             <div className="mt-6 space-y-2">
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                   <span>Batas Kas Aman</span>
                   <span>{limitPercentage.toFixed(0)}%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                   <div 
                    className={`h-full transition-all duration-1000 ${limitPercentage > 80 ? 'bg-rose-500' : 'bg-indigo-600'}`} 
                    style={{ width: `${limitPercentage}%` }}
                   ></div>
                </div>
             </div>
             {limitPercentage > 80 && (
                <p className="text-[9px] text-rose-500 font-bold mt-2 uppercase animate-pulse">⚠️ Segera Setor Ke Bank!</p>
             )}
          </div>
        </div>
      </div>

      {/* The Settlement Process Simulator */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-2">
            <h3 className="text-3xl font-black text-slate-800 italic">Bagaimana Cara Menyetor?</h3>
            <p className="text-slate-500">Proses transparansi dari kantong ke sistem digital.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Kumpulkan Total', desc: 'Duta menghitung total cash harian.', icon: '💰', s: 1 },
              { title: 'Setor Tunai', desc: 'Setor ke ATM/Agen Bank via VA Duta.', icon: '🏦', s: 2 },
              { title: 'Scan Resi AI', desc: 'AI memvalidasi bukti setoran bank.', icon: '📸', s: 3 },
              { title: 'Saldo Terhapus', desc: 'Limit Duta kembali ke Nol.', icon: '✅', s: 4 }
            ].map((item, i) => (
              <div key={i} className={`text-center space-y-4 transition-all duration-500 ${step >= item.s ? 'scale-110 opacity-100' : 'opacity-30 grayscale'}`}>
                 <div className={`w-20 h-20 rounded-[2rem] mx-auto flex items-center justify-center text-3xl shadow-sm border ${step >= item.s ? 'bg-indigo-50 border-indigo-200' : 'bg-slate-50 border-slate-100'}`}>
                    {item.icon}
                 </div>
                 <div>
                    <h5 className="font-bold text-slate-800 text-sm">{item.title}</h5>
                    <p className="text-[10px] text-slate-400 mt-1">{item.desc}</p>
                 </div>
              </div>
            ))}
         </div>

         <div className="flex justify-center pt-6">
            {!isSettling && cashInHand > 0 ? (
               <button 
                onClick={startSettlement}
                className="px-12 py-5 bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-widest shadow-xl hover:bg-indigo-700 transition-all active:scale-95"
               >
                  Mulai Setoran Kolektif (Settlement)
               </button>
            ) : isSettling ? (
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-xl animate-spin">🌀</div>
                  <p className="text-sm font-black text-indigo-600 uppercase tracking-widest">AI Sedang Memvalidasi Resi...</p>
               </div>
            ) : (
               <div className="bg-emerald-50 text-emerald-700 px-8 py-4 rounded-3xl border border-emerald-100 font-bold flex items-center gap-3 animate-in zoom-in">
                  <span>✅</span> Semua Kas Sudah Disetor & Aman di Bank Koperasi.
               </div>
            )}
         </div>
      </div>

      {/* Safety Mechanisms */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-slate-900 p-10 rounded-[3rem] text-white space-y-8 shadow-xl">
            <h3 className="text-2xl font-black italic text-indigo-400">Benteng Keamanan Kas Duta</h3>
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="text-2xl">🔒</div>
                  <div>
                     <h5 className="font-bold">Sistem "Kill-Switch"</h5>
                     <p className="text-xs text-slate-400 mt-1">Jika Duta tidak melakukan settlement dalam 24 jam setelah limit tercapai, akun dinonaktifkan sementara dan AI mengirim notifikasi ke Pengawas Wilayah.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="text-2xl">📷</div>
                  <div>
                     <h5 className="font-bold">Vision Verification</h5>
                     <p className="text-xs text-slate-400 mt-1">Bukan sekadar foto resi. AI mendeteksi nomor transaksi bank dan mencocokkannya dengan database bank secara real-time.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                     <h5 className="font-bold">GPS Audit</h5>
                     <p className="text-xs text-slate-400 mt-1">Lokasi penyetoran (ATM/Agen) dicocokkan dengan data GPS saat resi diupload untuk mencegah manipulasi data.</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-black text-slate-800">Kenapa Duta Bersedia Repot Setor?</h3>
            <div className="space-y-4">
               <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                  <p className="text-xs text-indigo-800 leading-relaxed font-bold italic">
                     "Semakin cepat Duta setor, semakin cepat dana tersedia untuk dipinjamkan kembali. Duta mendapat porsi dari putaran uang tersebut (Jasa Duta)."
                  </p>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-2xl text-center">
                     <p className="text-[10px] text-slate-400 font-bold uppercase">Reputasi Duta</p>
                     <p className="text-lg font-black text-emerald-600">PREMIUM</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl text-center">
                     <p className="text-[10px] text-slate-400 font-bold uppercase">Speed Score</p>
                     <p className="text-lg font-black text-indigo-600">FAST</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Integration Message for Founder */}
      <div className="p-12 bg-indigo-600 border border-indigo-500 rounded-[4rem] shadow-sm flex flex-col items-center text-center space-y-8 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-xl z-10">🏛️</div>
         <h4 className="text-3xl font-black max-w-xl italic z-10">"Uang Fisik Adalah Beban, Uang Digital Adalah Tenaga."</h4>
         <p className="text-indigo-100 max-w-2xl text-lg leading-relaxed z-10">
            Sistem Settlement ini memastikan koperasi Anda memiliki <b>Arus Kas Sehat</b>. Uang anggota tidak mengendap sia-sia di tas Duta, melainkan aktif bekerja di rekening bank koperasi setiap harinya.
         </p>
         <button className="px-10 py-4 bg-white text-indigo-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-100 transition-all shadow-xl z-10">
            Aktifkan Integrasi API Bank Settlement
         </button>
      </div>
    </div>
  );
};

export default DutaSettlement;
