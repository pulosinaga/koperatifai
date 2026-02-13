
import React from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { AppView } from '../types.ts';

const DutaTaskCenter: React.FC = () => {
  const { navigate } = useAppContext();

  const flowSteps = [
    { s: 1, t: 'Misi KYC', d: 'Duta bertemu warga, validasi wajah & KTP.', i: '🎯' },
    { s: 2, t: 'Input Karakter', d: 'Berikan Saksi (Vouch) jujur lewat HP.', i: '🛡️' },
    { s: 3, t: 'Jemput Kas', d: 'Terima setoran tunai & setor ke bank.', i: '🏦' },
    { s: 4, t: 'Cair Jasa', d: 'Klaim upah setelah audit AI selesai.', i: '💰' }
  ];

  return (
    <div className="space-y-12 pb-20 max-w-6xl mx-auto">
      {/* SOP Header with Step Indicator */}
      <div className="bg-indigo-600 rounded-[3.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
         <div className="relative z-10 space-y-6">
            <div className="space-y-2">
               <h2 className="text-3xl font-black italic uppercase tracking-tighter leading-none">PANDUAN OPERASIONAL DUTA</h2>
               <p className="text-indigo-100 text-sm max-w-2xl">Bapak/Ibu Duta, ikuti alur 4 langkah ini untuk setiap pendaftaran anggota baru.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
               {flowSteps.map((step) => (
                  <div key={step.s} className="bg-white/10 p-5 rounded-3xl border border-white/10 flex flex-col items-center text-center space-y-3">
                     <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 font-black text-sm shadow-xl">{step.s}</span>
                     <h4 className="font-black text-[10px] uppercase tracking-[0.2em]">{step.t}</h4>
                     <p className="text-[9px] text-indigo-100 opacity-70 leading-tight">"{step.d}"</p>
                  </div>
               ))}
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <h3 className="text-xl font-black text-slate-800 italic uppercase px-4 tracking-widest">Tugas Utama Hari Ini</h3>
            
            {/* Step 1 & 2 Task Card */}
            <div 
               onClick={() => navigate(AppView.MEMBERSHIP_PROFILE)}
               className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex items-center justify-between gap-6"
            >
               <div className="flex gap-6 items-center">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform">🤳</div>
                  <div>
                     <p className="text-[10px] font-black text-indigo-600 uppercase mb-1">LANGKAH 1 & 2</p>
                     <h4 className="text-xl font-black text-slate-800">Verifikasi & Jaminan Karakter</h4>
                     <p className="text-xs text-slate-400">Gunakan Kamera Sakti untuk memvalidasi warga di lokasi.</p>
                  </div>
               </div>
               <div className="text-right hidden md:block">
                  <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase">Reward Aktif</span>
               </div>
            </div>

            {/* Step 3 Task Card */}
            <div 
               onClick={() => navigate(AppView.CASH_WITHDRAWAL)}
               className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex items-center justify-between gap-6"
            >
               <div className="flex gap-6 items-center">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform">🏦</div>
                  <div>
                     <p className="text-[10px] font-black text-indigo-600 uppercase mb-1">LANGKAH 3</p>
                     <h4 className="text-xl font-black text-slate-800">Penyetoran Kas Harian</h4>
                     <p className="text-xs text-slate-400">Input resi setoran bank agar plafon tugas Anda pulih.</p>
                  </div>
               </div>
            </div>

            {/* Step 4 Task Card */}
            <div 
               onClick={() => navigate(AppView.DUTA_PAYROLL_REPORT)}
               className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex items-center justify-between gap-6"
            >
               <div className="flex gap-6 items-center">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform">💰</div>
                  <div>
                     <p className="text-[10px] font-black text-indigo-600 uppercase mb-1">LANGKAH 4</p>
                     <h4 className="text-xl font-black text-slate-800">Klaim Upah Jasa (SHU Duta)</h4>
                     <p className="text-xs text-slate-400">Pindahkan saldo hasil kerja Anda ke tabungan pribadi.</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Sidebar Log for Duta */}
         <div className="space-y-6">
            <div className="bg-slate-900 rounded-[3.5rem] p-10 text-white space-y-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
               <h4 className="text-xl font-black italic text-indigo-400 uppercase tracking-widest">Batas Kas Aman</h4>
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase">
                     <span>Plafon di Tangan</span>
                     <span className="text-rose-400">Limit: Rp 5 Juta</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-emerald-500 w-[65%]" />
                  </div>
                  <p className="text-[9px] text-slate-500 italic leading-relaxed">
                     "Jika kas di tangan mencapai Rp 5 Juta, fitur pendaftaran baru akan terkunci sampai Bapak/Ibu setor ke Bank."
                  </p>
               </div>
               
               <div className="pt-6 border-t border-white/5 space-y-4 font-mono text-[9px] text-slate-400 uppercase">
                  <p className="flex justify-between"><span>[09:00]</span> <span>GPS Check Valid</span></p>
                  <p className="flex justify-between"><span>[10:15]</span> <span>Pendaftaran Pak Slamet</span></p>
                  <p className="flex justify-between"><span>[11:30]</span> <span>Setoran Ibu Siti</span></p>
               </div>
            </div>
            
            <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-[3rem] text-center">
               <p className="text-[10px] text-indigo-700 leading-relaxed font-bold italic">
                  "Duta adalah ujung tombak kejujuran. AI Sentinel memantau setiap kordinat pendaftaran Anda."
               </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DutaTaskCenter;
