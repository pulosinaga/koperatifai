import React, { useState } from 'react';

const MemberQRIS: React.FC = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [isSimulatingVoice, setIsSimulatingVoice] = useState(false);

  const startVoiceGuide = () => {
    setIsSimulatingVoice(true);
    // Simulasi suara panduan
    setTimeout(() => setIsSimulatingVoice(false), 3000);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-4xl mx-auto">
      <div className="text-center space-y-4">
         <h2 className="text-4xl font-black text-slate-800 italic tracking-tight uppercase">Cap Digital Anggota</h2>
         <p className="text-slate-500 text-lg">"Gampang seperti ambil foto saja!"</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
         {/* The Simplified UI for Gaptek */}
         <div className="w-full max-w-md bg-white rounded-[4rem] shadow-2xl overflow-hidden border-8 border-indigo-600 p-12 flex flex-col items-center space-y-10">
            {!showScanner ? (
               <div className="text-center space-y-10 animate-in zoom-in">
                  <div className="w-48 h-48 bg-indigo-50 rounded-[3rem] flex items-center justify-center text-8xl shadow-inner relative">
                     📸
                     <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white text-3xl shadow-lg animate-bounce">✓</div>
                  </div>
                  <div className="space-y-4">
                     <h3 className="text-3xl font-black text-slate-800">SAYA MAU BAYAR</h3>
                     <p className="text-slate-400 font-medium leading-relaxed">Ketuk tombol di bawah, lalu arahkan ke gambar kotak di warung.</p>
                  </div>
                  <button 
                    onClick={() => setShowScanner(true)}
                    className="w-full py-8 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xl shadow-[0_20px_50px_rgba(79,70,229,0.3)] hover:scale-105 transition-all"
                  >
                     BUKA KAMERA
                  </button>
               </div>
            ) : (
               <div className="w-full space-y-8 animate-in fade-in">
                  <div className="aspect-square w-full bg-slate-900 rounded-[3rem] relative flex flex-col items-center justify-center overflow-hidden border-4 border-slate-800 shadow-2xl">
                     <div className="absolute inset-0 bg-indigo-500/10 animate-pulse"></div>
                     <div className="w-48 h-48 border-4 border-indigo-500 rounded-[2rem] relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-indigo-400 animate-scan-y shadow-[0_0_20px_#818cf8]"></div>
                     </div>
                     <div className="absolute bottom-10 px-8 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-[10px] font-black uppercase tracking-widest">
                        {isSimulatingVoice ? '📢 "Posisikan gambar kotak di dalam garis"' : 'KAMERA AKTIF'}
                     </div>
                  </div>
                  
                  <button 
                    onClick={startVoiceGuide}
                    className="w-full py-4 bg-emerald-50 text-emerald-600 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 border border-emerald-100"
                  >
                     <span>📢</span> {isSimulatingVoice ? 'MENDENGARKAN PANDUAN...' : 'AKTIFKAN SUARA PANDUAN'}
                  </button>

                  <button 
                    onClick={() => setShowScanner(false)}
                    className="w-full text-slate-400 font-black uppercase text-[9px] tracking-widest hover:text-rose-500 transition-colors"
                  >
                     KEMBALI / BATAL
                  </button>
               </div>
            )}
         </div>

         {/* Explanation Sidebar */}
         <div className="flex-1 space-y-8">
            <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white space-y-6 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <h4 className="text-xl font-black italic text-indigo-400">Kenapa Sangat Mudah?</h4>
               <ul className="space-y-6">
                  {[
                    { t: 'Tanpa Ketik Nominal', d: 'AI akan membaca jumlah belanja dari kode warung secara otomatis.', i: '🤖' },
                    { t: 'Konfirmasi Suara', d: 'Sistem akan menyebutkan nama pemilik warung lewat speaker HP Anda.', i: '📢' },
                    { t: 'Langsung Masuk', d: 'Uang pindah antar anggota seketika, tanpa biaya potongan bank.', i: '⚡' }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                       <span className="text-2xl">{item.i}</span>
                       <div>
                          <h5 className="font-bold text-sm text-indigo-200">{item.t}</h5>
                          <p className="text-[11px] text-slate-400 leading-relaxed italic">"{item.d}"</p>
                       </div>
                    </li>
                  ))}
               </ul>
            </div>

            <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-[3rem] text-center">
               <p className="text-xs text-indigo-700 leading-relaxed italic font-bold">
                  "Duta: Saat mengajar warga, jangan sebut QRIS. Sebut saja 'Kamera Sakti'. Anggota hanya perlu buka kamera, uang terbayar, bonus SHU bertambah."
               </p>
            </div>
         </div>
      </div>
      
      <style>{`
        @keyframes scan-y {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scan-y {
          animation: scan-y 2s linear infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default MemberQRIS;