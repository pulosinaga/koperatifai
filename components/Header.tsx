import React from 'react';
import { AppView } from '../types.ts';
import { useAppContext } from '../contexts/AppContext.tsx';

const Header: React.FC = () => {
  const { currentView, goBack, user, logout, isLiveDatabase } = useAppContext();
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

      <div className="flex items-center gap-4">
        <div className="hidden md:flex flex-col items-end mr-2">
           <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">{user?.role}</span>
           
           {/* Smart Database Indicator */}
           <span className="flex items-center gap-1.5" title={isLiveDatabase ? "Connected to Supabase" : "Running on Mock Data Failsafe"}>
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isLiveDatabase ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
              <span className={`text-[9px] font-bold uppercase ${isLiveDatabase ? 'text-emerald-600' : 'text-amber-600'}`}>
                {isLiveDatabase ? 'Live DB Active' : 'Local Mock Mode'}
              </span>
           </span>
        </div>
        
        <button 
          onClick={logout}
          className="p-2.5 bg-rose-50 text-rose-600 border border-rose-100 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-all active:scale-95 flex items-center gap-2 group"
          title="Keluar dari Aplikasi"
        >
          <span className="text-lg group-hover:rotate-12 transition-transform">🚪</span>
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Header;