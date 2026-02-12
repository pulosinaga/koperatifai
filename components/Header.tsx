import React from 'react';
import { AppView } from '../types.ts';
import { useAppContext } from '../contexts/AppContext.tsx';

const Header: React.FC = () => {
  const { currentView, goBack, user, isLiveDatabase, logout } = useAppContext();
  const isDashboard = currentView === AppView.DASHBOARD;

  const getHeaderTitle = () => {
    switch (currentView) {
      case AppView.DASHBOARD: return 'Portal Utama';
      case AppView.LOAN_SIMULATOR: return 'Simulasi Pinjaman';
      case AppView.VOUCHING_SYSTEM: return 'Jaminan Sosial';
      case AppView.DIGITAL_PASSBOOK: return 'Buku Tabungan';
      case AppView.MEMBER_MARKETPLACE: return 'Pasar Rakyat';
      case AppView.AI_ADVISOR: return 'Asisten AI';
      case AppView.MEMBERSHIP_PROFILE: return 'Profil Pemilik';
      case AppView.SHU_DISTRIBUTION: return 'Bagi Hasil (SHU)';
      case AppView.DEPLOYMENT_HUB: return 'Setup Sistem';
      case AppView.SMART_MOBILITY: return 'Mobilitas';
      case AppView.BILL_PAYMENTS: return 'Pembayaran';
      case AppView.SMART_EDUCATION: return 'Edukasi';
      case AppView.CASH_WITHDRAWAL: return 'Tarik Saldo';
      case AppView.DUTA_ECHOES: return 'Gema Rakyat';
      case AppView.DUTA_AWARDING: return 'Awarding Night';
      default: return 'KoperatifAI';
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 md:px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* Tombol Back Mobile & Desktop */}
        {!isDashboard && (
          <button 
            onClick={goBack}
            className="group flex items-center justify-center w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl transition-all hover:bg-indigo-600 hover:text-white active:scale-90 shadow-sm border border-indigo-100"
            title="Kembali"
          >
            <span className="text-xl font-bold">←</span>
          </button>
        )}
        
        <div className="flex flex-col">
           <h2 className="text-[10px] md:text-xs font-black text-indigo-600 uppercase tracking-[0.2em] leading-none mb-1">
             {isDashboard ? 'KoperatifAI' : 'Navigasi'}
           </h2>
           <h1 className="text-sm md:text-base font-black text-slate-800 uppercase tracking-tighter italic leading-none">
            {getHeaderTitle()}
           </h1>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-6">
        {/* Status Sentry - Hidden on very small screens to save space */}
        <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-slate-900 rounded-2xl border border-white/10 shadow-lg">
           <div className="relative">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
              <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full"></div>
           </div>
           <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">AI Sentinel</span>
        </div>

        {/* User Info & Quick Logout Mobile */}
        <div className="flex items-center gap-2">
           <div className="hidden md:flex flex-col items-end">
              <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.1em]">{user?.role}</span>
              <span className={`text-[8px] font-bold uppercase ${isLiveDatabase ? 'text-emerald-600' : 'text-amber-600'}`}>
                {isLiveDatabase ? 'Live DB' : 'Local Mode'}
              </span>
           </div>
           
           <div 
             onClick={() => !isDashboard && goBack()}
             className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-xl shadow-inner border border-indigo-200 cursor-pointer hover:scale-105 transition-transform"
           >
              👤
           </div>

           {/* Tombol Keluar Cepat khusus Mobile */}
           <button 
             onClick={logout}
             className="lg:hidden w-10 h-10 rounded-xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center text-xl hover:bg-rose-600 hover:text-white transition-all active:scale-90"
             title="Logout"
           >
             🚪
           </button>
        </div>
      </div>
    </header>
  );
};

export default Header;