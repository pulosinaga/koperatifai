
import React, { useState } from 'react';

const MemberQRIS: React.FC = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const simulatePayment = () => {
     setShowScanner(false);
     setIsSuccess(true);
     // Suara Simulasi
     const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3');
     audio.play().catch(() => {});
  };

  return (
    <div className="space-y-12 pb-24 max-w-4xl mx-auto">
      <div className="text-center space-y-4">
         <h2 className="text-4xl font-black text-slate-800 italic uppercase">Kamera Sakti Bayar</h2>
         <p className="text-slate-500 text-lg italic">"Arahkan ke gambar kotak di warung, belanja jadi gampang!"</p>
      </div>

      <div className="flex flex-col items-center">
         <div className="w-full max-w-md bg-white rounded-[4rem] shadow-2xl overflow-hidden border-8 border-indigo-600 p-10 flex flex-col items-center space-y-10 relative">
            {!showScanner && !isSuccess ? (
               <div className="text-center space-y-10 animate-in zoom-in">
                  <div className="w-48 h-48 bg-indigo-50 rounded-[3rem] flex items-center justify-center text-8xl shadow-inner mx-auto">📸</div>
                  <div className="space-y-3 px-6">
                     <h3 className="text-3xl font-black text-slate-800 uppercase italic">SAYA MAU BELANJA</h3>
                     <p className="text-slate-400 text-sm font-medium italic">"Gunakan saldo koperasi untuk rezeki tetangga."</p>
                  </div>
                  <button 
                    onClick={() => setShowScanner(true)}
                    className="w-full py-8 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase text-xl shadow-xl hover:scale-105 transition-all"
                  >
                     BUKA KAMERA
                  </button>
               </div>
            ) : showScanner ? (
               <div className="w-full space-y-8 animate-in fade-in">
                  <div className="aspect-square w-full bg-slate-900 rounded-[3rem] relative flex items-center justify-center border-4 border-slate-800 overflow-hidden">
                     <div className="w-48 h-48 border-4 border-indigo-500 rounded-[2rem] relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-indigo-400 animate-scan-y shadow-[0_0_20px_#818cf8]"></div>
                     </div>
                  </div>
                  <button 
                    onClick={simulatePayment}
                    className="w-full py-6 bg-emerald-600 text-white rounded-2xl font-black uppercase text-xs"
                  >
                     SIMULASI BIDIK KOTAK (QRIS)
                  </button>
                  <button onClick={() => setShowScanner(false)} className="w-full text-slate-400 font-black uppercase text-[10px] hover:text-rose-600">BATAL</button>
               </div>
            ) : (
               <div className="text-center space-y-8 animate-in zoom-in">
                  <div className="w-32 h-32 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-5xl mx-auto shadow-lg animate-bounce">✓</div>
                  <div>
                     <h4 className="text-3xl font-black text-slate-800 italic uppercase">Lunas, Pak!</h4>
                     <p className="text-slate-400 text-xs mt-2 italic">Saldo terpotong, rezeki warung lancar.</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 text-center space-y-1">
                     <p className="text-[10px] font-black text-slate-400 uppercase">Cashback SHU Anda:</p>
                     <p className="text-lg font-black text-indigo-600">+ Rp 250</p>
                  </div>
                  <button onClick={() => setIsSuccess(false)} className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs">KEMBALI</button>
               </div>
            )}
         </div>

         {/* INFOGRAPHIC FLOW */}
         <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
            {[
               { s: 'BIDIK', d: 'Duta: Ajarkan warga arahkan kamera ke kode QR warung.', i: '📸' },
               { s: 'INPUT', d: 'Masukkan jumlah uang yang harus dibayar ke kasir.', i: '⌨️' },
               { s: 'DIVIDEN', d: 'Setiap belanja, sebagian biaya admin kembali ke Bapak/Ibu.', i: '💰' },
            ].map((step, i) => (
               <div key={i} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center gap-3">
                  <span className="text-4xl mb-2">{step.i}</span>
                  <h5 className="font-black text-xs text-indigo-600 uppercase tracking-widest">{step.s}</h5>
                  <p className="text-[10px] text-slate-400 italic">"{step.d}"</p>
               </div>
            ))}
         </div>
      </div>
      
      <style>{`
        @keyframes scan-y { 0% { top: 0; } 100% { top: 100%; } }
        .animate-scan-y { animation: scan-y 2s linear infinite alternate; }
      `}</style>
    </div>
  );
};

export default MemberQRIS;
