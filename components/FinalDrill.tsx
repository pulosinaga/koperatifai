
import React, { useState } from 'react';
import { UserRole } from '../types';

interface DrillStep {
  role: UserRole;
  title: string;
  action: string;
  outcome: string;
  description: string;
  icon: string;
  color: string;
}

const drillSteps: DrillStep[] = [
  {
    role: UserRole.MEMBER,
    title: "Anggota: Disiplin Harian",
    action: "Nabung Receh & Vouching",
    outcome: "Reputasi +5, Saldo Sukarela +Rp 2.000",
    description: "Budi Utama menabung Rp 2.000 sisa parkir ke Celengan Digital. Ia juga membagikan link Vouching ke 10 tetangganya untuk membuka limit pinjaman.",
    icon: "🪙",
    color: "bg-indigo-600"
  },
  {
    role: UserRole.MEMBER,
    title: "Anggota: Ekonomi Sirkular",
    action: "Belanja di Marketplace",
    outcome: "SHU Est. +Rp 50, Seller Profit +Rp 10.000",
    description: "Budi membeli Beras Organik dari Ibu Rahma (sesama anggota) menggunakan saldo sukarela. Uang tidak keluar sistem, melainkan memutar ekonomi komunitas.",
    icon: "🛒",
    color: "bg-emerald-600"
  },
  {
    role: UserRole.LEADER,
    title: "Duta: Verifikasi Lapangan",
    action: "Audit Karakter & Lokasi",
    outcome: "Trust Score 98%, Limit Pinjaman Terbuka",
    description: "Duta Joni mengunjungi warung Budi. AI memverifikasi GPS & Wajah Budi. Joni memberikan 'Vouch' final sebagai jaminan moral pimpinan lokal.",
    icon: "🛵",
    color: "bg-amber-500"
  },
  {
    role: UserRole.BOARD,
    title: "Pengurus: Otorisasi Modal",
    action: "Approve via AI Recommendation",
    outcome: "Likuiditas Terjaga, Modal Rp 2jt Cair",
    description: "Board menerima notifikasi: Budi layak pinjam Rp 2jt untuk ekspansi stok lele. Board menyetujui, AI memanggil API Bank untuk transfer instan.",
    icon: "👔",
    color: "bg-indigo-900"
  },
  {
    role: UserRole.AUDITOR,
    title: "Pengawas: Integritas Ledger",
    action: "Verify Immutable Record",
    outcome: "Zero Fraud Detected, Hash Valid",
    description: "Auditor memeriksa buku besar. Setiap sen yang keluar ke Budi memiliki tanda tangan digital Board & hash voting e-RAT yang sah.",
    icon: "⚖️",
    color: "bg-slate-700"
  },
  {
    role: UserRole.MEMBER,
    title: "Anggota: Panen Hasil",
    action: "Terima SHU & Manfaat",
    outcome: "Saldo Dividen +Rp 15.000, Usaha Maju",
    description: "Budi membayar angsuran tepat waktu. Di akhir periode, surplus operasional dikembalikan ke Budi sebagai SHU. Siklus Keadilan Selesai.",
    icon: "✨",
    color: "bg-purple-600"
  }
];

const FinalDrill: React.FC = () => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [drillActive, setDrillActive] = useState(false);

  const nextStep = () => {
    if (currentStepIdx < drillSteps.length - 1) {
      setCurrentStepIdx(prev => prev + 1);
    } else {
      setDrillActive(false);
    }
  };

  const startDrill = () => {
    setCurrentStepIdx(0);
    setDrillActive(true);
  };

  const currentStep = drillSteps[currentStepIdx];

  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-7xl mx-auto">
      {/* Drill Hero */}
      <div className="bg-[#020617] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl border-b-8 border-indigo-600">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">
              Operational Stress Test & Simulator
            </span>
            <h2 className="text-5xl font-black leading-tight italic">The Final Drill: <br/>Simulasi Arsitektur Utuh.</h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl font-medium">
               Lihat bagaimana sistem KoperatifAI bekerja secara harmonis antar-role untuk menciptakan kesejahteraan yang tak terpatahkan.
            </p>
            {!drillActive && (
               <button 
                onClick={startDrill}
                className="px-12 py-5 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-2xl hover:bg-indigo-700 transition-all transform active:scale-95 flex items-center gap-3"
               >
                 🏁 MULAI SIMULASI OPERASIONAL
               </button>
            )}
          </div>
          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-xl p-10 rounded-[4rem] border border-white/10 text-center shadow-2xl">
             <div className="flex justify-center -space-x-4 mb-6">
                {['👤', '🛵', '👔', '⚖️'].map((icon, idx) => (
                  <div key={idx} className="w-12 h-12 rounded-full bg-indigo-600 border-4 border-[#020617] flex items-center justify-center text-xl shadow-lg">{icon}</div>
                ))}
             </div>
             <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Active Roles Tested</p>
             <p className="text-4xl font-black text-emerald-400 mt-2 italic">100% Sync</p>
          </div>
        </div>
      </div>

      {drillActive && (
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-in zoom-in duration-500">
            {/* Simulation Viewport (Mimics Phone UI) */}
            <div className="flex flex-col items-center">
               <div className="w-full max-w-[320px] aspect-[9/18] bg-slate-900 rounded-[3.5rem] border-[10px] border-slate-800 shadow-2xl relative overflow-hidden flex flex-col">
                  {/* Status Bar */}
                  <div className="h-10 bg-black flex justify-between items-center px-8">
                     <span className="text-[10px] text-white font-bold">10:45</span>
                     <div className="flex gap-1.5">
                        <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                     </div>
                  </div>

                  {/* App Role Mockup */}
                  <div className="flex-1 bg-slate-50 flex flex-col">
                     <div className={`${currentStep.color} p-6 text-white shrink-0`}>
                        <div className="flex justify-between items-center">
                           <p className="text-[8px] font-black uppercase opacity-60">View Mode: {currentStep.role}</p>
                           <span className="text-lg">{currentStep.icon}</span>
                        </div>
                        <h4 className="text-sm font-black mt-2 leading-tight uppercase tracking-widest">{currentStep.title}</h4>
                     </div>
                     <div className="p-6 space-y-6 flex-1 flex flex-col justify-center text-center">
                        <div className="w-20 h-20 bg-indigo-50 rounded-2xl mx-auto flex items-center justify-center text-4xl shadow-inner border border-indigo-100">
                           {currentStep.icon}
                        </div>
                        <div className="space-y-2">
                           <p className="text-xs font-black text-slate-800 uppercase tracking-tighter">{currentStep.action}</p>
                           <p className="text-[10px] text-slate-400 italic leading-relaxed px-4">"{currentStep.description}"</p>
                        </div>
                        <div className="pt-4 mt-auto">
                           <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                              <p className="text-[8px] font-black text-emerald-600 uppercase">Impact:</p>
                              <p className="text-[9px] font-bold text-emerald-800">{currentStep.outcome}</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="h-6 bg-slate-50 flex justify-center items-center">
                     <div className="w-24 h-1 bg-slate-300 rounded-full"></div>
                  </div>
               </div>
               <p className="text-[10px] text-slate-400 mt-4 font-black uppercase tracking-widest italic">Mockup Interface: {currentStep.role}</p>
            </div>

            {/* Drill Instructions & Controls */}
            <div className="lg:col-span-2 space-y-8">
               <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm space-y-8">
                  <div className="flex justify-between items-center border-b border-slate-50 pb-6">
                     <h3 className="text-3xl font-black text-slate-800 italic">Tahapan Simulasi</h3>
                     <span className="text-xs font-black text-indigo-600">Langkah {currentStepIdx + 1} dari {drillSteps.length}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     <div className="space-y-6">
                        <div className="space-y-1">
                           <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Apa Yang Terjadi?</p>
                           <p className="text-xl font-bold text-slate-800 leading-relaxed italic">"{currentStep.description}"</p>
                        </div>
                        <div className="p-6 bg-slate-900 rounded-3xl text-white">
                           <p className="text-[10px] font-black uppercase text-indigo-400 mb-2">Internal Logic (AI Decision):</p>
                           <ul className="space-y-2 text-[11px] text-slate-400">
                              <li className="flex gap-2"><span>✔</span> Validating Identity Hashes...</li>
                              <li className="flex gap-2"><span>✔</span> Checking Liquidity Pools...</li>
                              <li className="flex gap-2"><span>✔</span> Updating Multi-sig Ledger...</li>
                           </ul>
                        </div>
                     </div>
                     <div className="flex flex-col justify-center space-y-6">
                        <div className="p-8 bg-emerald-50 rounded-[3rem] border-2 border-emerald-100 flex flex-col items-center text-center">
                           <p className="text-[10px] font-black text-emerald-600 uppercase mb-2">Outcome Milestone:</p>
                           <h4 className="text-lg font-black text-emerald-900 leading-tight">{currentStep.outcome}</h4>
                        </div>
                        <button 
                           onClick={nextStep}
                           className="w-full py-6 bg-indigo-600 text-white rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-4 group"
                        >
                           {currentStepIdx === drillSteps.length - 1 ? 'SELESAIKAN DRILL' : 'LANJUT KE TAHAP BERIKUTNYA'}
                           <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </button>
                     </div>
                  </div>
               </div>

               {/* Timeline Overview */}
               <div className="flex justify-between items-center px-10">
                  {drillSteps.map((_, i) => (
                    <div key={i} className="flex items-center flex-1 last:flex-none">
                       <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-xs transition-all duration-500 ${
                         currentStepIdx === i ? 'bg-indigo-600 text-white ring-4 ring-indigo-100 scale-125' : 
                         currentStepIdx > i ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-400'
                       }`}>
                          {currentStepIdx > i ? '✓' : i + 1}
                       </div>
                       {i < drillSteps.length - 1 && (
                         <div className={`h-1 flex-1 mx-2 rounded-full transition-all duration-500 ${
                           currentStepIdx > i ? 'bg-emerald-500' : 'bg-slate-100'
                         }`}></div>
                       )}
                    </div>
                  ))}
               </div>
            </div>
         </div>
      )}

      {!drillActive && currentStepIdx === drillSteps.length - 1 && (
        <div className="p-16 bg-emerald-600 rounded-[4rem] text-white text-center space-y-8 animate-in zoom-in duration-700 shadow-2xl">
           <div className="text-9xl mb-4">🏆</div>
           <h3 className="text-5xl font-black italic uppercase">Drill Operasional Selesai!</h3>
           <p className="text-emerald-100 text-xl max-w-2xl mx-auto leading-relaxed">
              Founder, Anda baru saja memvalidasi seluruh siklus hidup KoperatifAI. Dari setoran receh hingga pembagian dividen, sistem terbukti stabil, transparan, dan berpihak pada rakyat.
           </p>
           <div className="pt-8 flex justify-center gap-6">
              <button onClick={startDrill} className="px-10 py-5 bg-white text-emerald-700 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Ulangi Simulasi</button>
              <button className="px-10 py-5 bg-emerald-950 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">Ekspor Hasil Audit Drill</button>
           </div>
        </div>
      )}

      {/* Philosophy Callout */}
      <div className="p-12 bg-white border border-slate-100 rounded-[4rem] shadow-sm flex flex-col md:flex-row items-center gap-12">
         <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-5xl shrink-0">🤖</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-slate-800 italic leading-tight">"Uang Hanya Alat, Teknologi Adalah Pengawal, Komunitas Adalah Jiwa."</h4>
            <p className="text-slate-500 text-lg leading-relaxed italic">
               "Drill operasional ini membuktikan bahwa dengan KoperatifAI, kita tidak lagi mengandalkan 'Niat Baik' individu pengurus saja, tapi kita mengandalkan **Kejujuran Algoritma** yang dipantau oleh solidaritas anggota."
            </p>
         </div>
      </div>
    </div>
  );
};

export default FinalDrill;
