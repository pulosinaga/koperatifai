
import React from 'react';
import { useAppContext } from '../contexts/AppContext.tsx';
import { AppView } from '../types.ts';

const DutaTaskCenter: React.FC = () => {
  const { navigate } = useAppContext();

  const flowSteps = [
    { s: 1, t: 'Pilih Misi', d: 'Buka daftar anggota baru yang butuh verifikasi atau penjemputan kas.', i: '🎯' },
    { s: 2, t: 'Aksi Lapangan', d: 'Kunjungi lokasi, lakukan Scan KTP & Wajah via Kamera Sakti.', i: '🛵' },
    { s: 3, t: 'Settlement Kas', d: 'Setor uang tunai harian ke Bank agar plafon trust Anda pulih.', i: '🏦' },
    { s: 4, t: 'Terima Upah', d: 'Klik klaim jasa di menu Payroll setelah AI memvalidasi log kerja.', i: '💰' }
  ];

  const activeMissions = [
    { id: 'M-12', name: 'Verifikasi: Budi Utama', type: 'KYC & VOUCH', loc: 'Desa Pasirhayo', bonus: 'Rp 5.000', view: AppView.MEMBERSHIP_PROFILE },
    { id: 'M-13', name: 'Jemput Kas: Warung Bu Siti', type: 'DEPOSIT', loc: 'Pasar Atas', bonus: 'Rp 3.000', view: AppView.DIGITAL_PASSBOOK },
    { id: 'M-14', name: 'Edukasi: Kelompok Tani', type: 'LITERASI', loc: 'Balai Desa', bonus: 'Rp 25.000', view: AppView.SMART_EDUCATION },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-6xl mx-auto">
      {/* SOP Header */}
      <div className="bg-indigo-600 rounded-[3.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
         <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-4">Pusat Komando Duta</h2>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {flowSteps.map((step) => (
               <div key={step.s} className="bg-white/10 p-4 rounded-2xl border border-white/10 flex flex-col items-center text-center space-y-2">
                  <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-indigo-600 font-black text-xs">{step.s}</span>
                  <h4 className="font-black text-[10px] uppercase">{step.t}</h4>
                  <p className="text-[9px] text-indigo-100 opacity-70 leading-tight">"{step.d}"</p>
               </div>
            ))}
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Live Mission Feed */}
         <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-black text-slate-800 italic uppercase px-4 tracking-widest">Daftar Tugas Aktif Hari Ini</h3>
            <div className="space-y-4">
               {activeMissions.map((mission) => (
                  <div key={mission.id} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex items-center justify-between gap-6">
                     <div className="flex gap-5 items-center">
                        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">📍</div>
                        <div>
                           <p className="text-[9px] font-black text-indigo-600 uppercase mb-1">{mission.type}</p>
                           <h4 className="text-xl font-black text-slate-800 leading-tight">{mission.name}</h4>
                           <p className="text-xs text-slate-400">{mission.loc}</p>
                        </div>
                     </div>
                     <div className="text-right space-y-4">
                        <p className="text-sm font-black text-emerald-600">{mission.bonus}</p>
                        <button 
                          onClick={() => navigate(mission.view)}
                          className="px-6 py-3 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg"
                        >
                           Kerjakan
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Stats Sidebar */}
         <div className="space-y-6">
            <div className="bg-slate-900 rounded-[3.5rem] p-10 text-white space-y-6 shadow-2xl">
               <h4 className="text-xl font-black italic text-indigo-400 uppercase tracking-widest">Kesehatan Plafon</h4>
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase">
                     <span>Batas Kas di Tangan</span>
                     <span className="text-rose-400">Rp 5.000.000</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-emerald-500 w-[65%]" />
                  </div>
                  <p className="text-[9px] text-slate-500 italic leading-relaxed">
                     "Jika kas mendekati limit, fitur penjemputan setoran akan terkunci sampai Anda setor ke bank."
                  </p>
               </div>
               <button 
                 onClick={() => navigate(AppView.CASH_WITHDRAWAL)}
                 className="w-full py-4 bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all"
               >
                  Input Resi Setor Bank
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DutaTaskCenter;
