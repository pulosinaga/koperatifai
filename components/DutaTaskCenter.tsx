
import React from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { AppView } from '../types.ts';

const DutaTaskCenter: React.FC = () => {
  const { navigate } = useAppContext();

  const flowSteps = [
    // Fix: Using MEMBERSHIP_PROFILE for KYC to align with Sidebar and App routing
    { s: 1, t: 'KAMERA SAKTI', d: 'Misi KYC: Scan KTP & Wajah warga.', i: '🤳', view: AppView.MEMBERSHIP_PROFILE }, // Updated logic in DutaFieldVerification
    { s: 2, t: 'VOUCHING', d: 'Jaminan Karakter: Saksi integritas.', i: '🛡️', view: AppView.VOUCHING_SYSTEM },
    { s: 3, t: 'TARIK TUNAI', d: 'Bantu anggota cairkan saldo.', i: '🏧', view: AppView.CASH_WITHDRAWAL },
    { s: 4, t: 'KLAIM GAJI', d: 'Tarik upah jasa dari hasil kerja.', i: '💰', view: AppView.DUTA_PAYROLL_REPORT }
  ];

  return (
    <div className="space-y-12 pb-20 max-w-6xl mx-auto">
      {/* SOP Header with Step Indicator */}
      <div className="bg-indigo-600 rounded-[3.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
         <div className="relative z-10 space-y-6">
            <div className="space-y-2">
               <h2 className="text-3xl font-black italic uppercase tracking-tighter leading-none">TERMINAL TUGAS DUTA</h2>
               <p className="text-indigo-100 text-sm max-w-2xl">Bapak/Ibu Duta, berikut adalah 4 alur utama melayani kedaulatan anggota.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
               {flowSteps.map((step) => (
                  <button 
                    key={step.s}
                    // Fix: Change step.id to step.s as the property 'id' does not exist on the type
                    onClick={() => navigate(step.view as AppView)}
                    className="bg-white/10 p-5 rounded-3xl border border-white/10 flex flex-col items-center text-center space-y-3 hover:bg-white/20 transition-all"
                  >
                     <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 font-black text-sm shadow-xl">{step.i}</span>
                     <h4 className="font-black text-[10px] uppercase tracking-[0.2em]">{step.t}</h4>
                  </button>
               ))}
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <h3 className="text-xl font-black text-slate-800 italic uppercase px-4 tracking-widest">Alur Pelayanan Lapangan</h3>
            
            {/* Task 1 Card */}
            <div 
               // Fix: Correct navigation to MEMBERSHIP_PROFILE for KYC action
               onClick={() => navigate(AppView.MEMBERSHIP_PROFILE)} // Actually routes to DutaFieldVerification via logic in App.tsx
               className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex items-center justify-between gap-6"
            >
               <div className="flex gap-6 items-center">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform">🤳</div>
                  <div>
                     <p className="text-[10px] font-black text-indigo-600 uppercase mb-1">MISI UTAMA</p>
                     <h4 className="text-xl font-black text-slate-800">Kamera Sakti (KYC)</h4>
                     <p className="text-xs text-slate-400">Daftarkan warga & verifikasi identitas di lokasi.</p>
                  </div>
               </div>
            </div>

            {/* Task 3 Card */}
            <div 
               onClick={() => navigate(AppView.CASH_WITHDRAWAL)}
               className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex items-center justify-between gap-6"
            >
               <div className="flex gap-6 items-center">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform">🏧</div>
                  <div>
                     <p className="text-[10px] font-black text-indigo-600 uppercase mb-1">LAYANAN KAS</p>
                     <h4 className="text-xl font-black text-slate-800">Penarikan Tunai Aman</h4>
                     <p className="text-xs text-slate-400">Verifikasi OTP & Serahkan uang fisik ke anggota.</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Sidebar Log for Duta */}
         <div className="space-y-6">
            <div className="bg-slate-900 rounded-[3.5rem] p-10 text-white space-y-8 shadow-2xl relative overflow-hidden">
               <h4 className="text-xl font-black italic text-indigo-400 uppercase tracking-widest">Integritas Duta</h4>
               <p className="text-xs text-slate-500 italic">"Selalu sapa anggota dengan salam. Jelaskan bahwa Bapak hadir untuk membantu mereka bebas dari Pinjol."</p>
               <div className="pt-6 border-t border-white/5 space-y-4 font-mono text-[9px] text-slate-400 uppercase">
                  <p className="flex justify-between"><span>[JDIH]</span> <span>UU 25/1992 COMPLIANT</span></p>
                  <p className="flex justify-between"><span>[AI]</span> <span>SENTINEL GUARD ARMED</span></p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DutaTaskCenter;
