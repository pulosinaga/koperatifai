import React from 'react';
import { AppView } from '../types.ts';
import { useAppContext } from '../contexts/AppContext.tsx';

const Header: React.FC = () => {
  const { currentView, goBack, user, isLiveDatabase } = useAppContext();
  const isDashboard = currentView === AppView.DASHBOARD;

  const getHeaderTitle = () => {
    switch (currentView) {
      case AppView.DASHBOARD: return 'Pusat Komando';
      case AppView.LOAN_SIMULATOR: return 'Simulasi Pinjaman';
      case AppView.VOUCHING_SYSTEM: return 'Jaminan Sosial';
      case AppView.DIGITAL_PASSBOOK: return 'Buku Tabungan Digital';
      case AppView.MEMBER_MARKETPLACE: return 'Pasar Rakyat';
      case AppView.AI_ADVISOR: return 'Asisten AI';
      case AppView.MEMBERSHIP_PROFILE: return 'Profil Pemilik';
      case AppView.SHU_DISTRIBUTION: return 'Bagi Hasil (SHU)';
      case AppView.DEPLOYMENT_HUB: return 'Setup Database (Supabase)';
      case AppView.SMART_MOBILITY: return 'Mobilitas Pintar';
      case AppView.BILL_PAYMENTS: return 'Pembayaran & Proteksi';
      case AppView.SMART_EDUCATION: return 'Edukasi & Edu-Pay';
      case AppView.CASH_WITHDRAWAL: return 'Penarikan Likuiditas';
      default: return 'KoperatifAI';
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {!isDashboard && (
          <button 
            onClick={goBack}
            className="group flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-2xl text-xs font-black uppercase tracking-widest transition-all hover:bg-indigo-600 hover:text-white active:scale-95 shadow-sm"
          >
            <span className="text-lg transition-transform group-hover:-translate-x-1">←</span> 
            Kembali
          </button>
        )}
        <div className={isDashboard ? "lg:hidden" : ""}>
           <h2 className="text-sm font-black text-slate-800 uppercase tracking-tighter italic">
            {getHeaderTitle()}
           </h2>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* AI Sentry Indicator */}
        <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-slate-900 rounded-2xl border border-white/10 shadow-lg">
           <div className="relative">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
              <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full"></div>
           </div>
           <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">AI Sentinel Active</span>
        </div>

        <div className="hidden md:flex flex-col items-end">
           <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">{user?.role}</span>
           <span className={`text-[9px] font-bold uppercase ${isLiveDatabase ? 'text-emerald-600' : 'text-amber-600'}`}>
             {isLiveDatabase ? 'Live DB Active' : 'Local Mock Mode'}
           </span>
        </div>
        
        <div className="w-10 h-10 rounded-2xl bg-indigo-100 flex items-center justify-center text-xl shadow-inner border border-indigo-200">
           👤
        </div>
      </div>
    </header>
  );
};

export default Header;