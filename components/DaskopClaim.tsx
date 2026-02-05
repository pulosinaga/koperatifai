
import React, { useState } from 'react';

const DaskopClaim: React.FC = () => {
  const [claimStep, setClaimStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const startClaim = () => {
    setIsProcessing(true);
    setClaimStep(1);
    setTimeout(() => setClaimStep(2), 2000);
    setTimeout(() => setClaimStep(3), 4000);
    setTimeout(() => {
      setClaimStep(4);
      setIsProcessing(false);
    }, 6000);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      {/* Header */}
      <div className="bg-slate-950 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-rose-500/20 text-rose-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-rose-500/20">
              Social Solidarity Protocol
            </span>
            <h2 className="text-4xl font-black leading-tight">Daskop Digital: <br/>Hadir Saat Dibutuhkan.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Kami memahami bahwa saat duka, waktu sangatlah berharga. KoperatifAI memastikan dana santunan cair <b>dalam hitungan jam</b>, bukan minggu.
            </p>
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 text-center">
             <div className="text-5xl mb-4">🤝</div>
             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Dana Sosial Standby</p>
             <p className="text-3xl font-black">Rp 125.400.000</p>
             <p className="text-[10px] text-emerald-400 mt-2">Ready to Disburse via API</p>
          </div>
        </div>
      </div>

      {/* Claim Simulation */}
      <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-12">
         <div className="text-center space-y-2">
            <h3 className="text-2xl font-black text-slate-800">Alur Klaim Otomatis</h3>
            <p className="text-slate-500 text-sm">Bagaimana teknologi mempercepat solidaritas kita.</p>
         </div>

         <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {[
              { label: 'Upload Berkas', icon: '📸', desc: 'Scan Surat Kematian', step: 1 },
              { label: 'AI Verification', icon: '🧠', desc: 'Validasi Dokumen Instan', step: 2 },
              { label: 'Bank API Push', icon: '⚡', desc: 'Disbursement Otomatis', step: 3 }
            ].map((s, i) => (
              <div key={i} className={`flex-1 text-center space-y-4 transition-all duration-500 ${claimStep >= s.step ? 'scale-110 opacity-100' : 'opacity-30 grayscale'}`}>
                 <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-3xl mx-auto shadow-sm border ${claimStep >= s.step ? 'bg-indigo-50 border-indigo-200' : 'bg-slate-50 border-slate-100'}`}>
                    {s.icon}
                 </div>
                 <div>
                    <p className="text-sm font-bold text-slate-800">{s.label}</p>
                    <p className="text-[10px] text-slate-400">{s.desc}</p>
                 </div>
              </div>
            ))}
         </div>

         <div className="flex justify-center pt-6">
            {claimStep === 0 ? (
               <button 
                onClick={startClaim}
                className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-indigo-700 transition-all"
               >
                 Mulai Simulasi Klaim
               </button>
            ) : claimStep === 4 ? (
               <div className="text-center space-y-4 animate-in zoom-in">
                  <div className="bg-emerald-50 text-emerald-700 px-8 py-4 rounded-3xl border border-emerald-100 font-bold">
                    ✅ Rp 15.000.000 Berhasil Ditransfer ke Ahli Waris!
                  </div>
                  <button onClick={() => setClaimStep(0)} className="text-xs text-slate-400 underline">Ulangi Simulasi</button>
               </div>
            ) : (
               <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-indigo-600 rounded-full animate-ping"></div>
                  <p className="text-sm font-black text-indigo-600 uppercase">Sistem sedang memproses...</p>
               </div>
            )}
         </div>
      </div>

      {/* Philosophy of Daskop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-white p-10 rounded-[3rem] border border-slate-100 space-y-6">
            <h3 className="text-2xl font-black text-slate-800">Kenapa Daskop Kita Berbeda?</h3>
            <div className="space-y-4">
               {[
                 { t: 'Kecepatan Cahaya', d: 'Saat bank masih tutup di hari libur, sistem API kita tetap bisa mengirim dana santunan 24/7.', icon: '🕒' },
                 { t: 'Bebas Birokrasi', d: 'Ahli waris tidak perlu datang ke kantor. Cukup upload foto dokumen dari HP.', icon: '📱' },
                 { t: 'Zero Human Error', d: 'AI memastikan dana tidak salah sasaran dan jumlahnya tepat sesuai hak anggota.', icon: '🎯' }
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

         <div className="bg-rose-900 p-10 rounded-[3rem] text-white flex flex-col justify-center text-center space-y-6">
            <div className="text-5xl">🕊️</div>
            <h3 className="text-2xl font-black leading-tight">"Uang Anggota Kembali ke Keluarga Anggota."</h3>
            <p className="text-rose-100 text-sm leading-relaxed">
               Di KoperatifAI, Daskop bukan biaya, tapi **tabungan solidaritas**. Setiap rupiah iuran sosial Anda adalah payung bagi anggota lain, dan payung bagi Anda sendiri saat hujan datang.
            </p>
            <div className="pt-4 border-t border-rose-500/30">
               <p className="text-[10px] font-bold uppercase tracking-widest text-rose-300">Prinsip Ke-5 Koperasi</p>
               <p className="text-xs font-bold">Pendidikan, Pelatihan, & Informasi</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DaskopClaim;
