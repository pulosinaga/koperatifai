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
      case AppView.WALLET_INTEGRATION: return 'Bayar di Toko';
      default: return 'KoperatifAI';
    }
  };

  return (
    <header className="sticky top-0 z-[110] w-full bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 md:px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* Tombol Back: Tampil jika bukan di Dashboard */}
        {!isDashboard ? (
          <button 
            onClick={goBack}
            className="flex items-center justify-center w-10 h-10 bg-indigo-600 text-white rounded-xl transition-all hover:bg-indigo-700 active:scale-90 shadow-lg border border-indigo-500 z-50"
            title="Kembali"
          >
            <span className="text-xl font-bold">←</span>
          </button>
        ) : (
          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-black">◈</div>
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

      <div className="flex items-center gap-2 md:gap-4">
        {/* Status Sentry */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-900 rounded-xl border border-white/10 shadow-md">
           <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></div>
           <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest">Active</span>
        </div>

        {/* User Profile Info */}
        <div className="flex items-center gap-2">
           <div className="hidden md:flex flex-col items-end">
              <span className="text-[9px] font-black text-indigo-600 uppercase tracking-[0.1em]">{user?.role}</span>
              <span className={`text-[7px] font-bold uppercase ${isLiveDatabase ? 'text-emerald-600' : 'text-amber-600'}`}>
                {isLiveDatabase ? 'Live DB' : 'Local'}
              </span>
           </div>
           
           <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center text-lg shadow-inner border border-indigo-200">
              👤
           </div>

           {/* Tombol Logout: Selalu terlihat di Header untuk kemudahan akses Founder */}
           <button 
             onClick={logout}
             className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center text-lg hover:bg-rose-600 hover:text-white transition-all active:scale-90 shadow-sm"
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