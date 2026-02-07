
import React from 'react';
import { AppView, UserRole } from '../types';

interface HeaderProps {
  currentView: AppView;
  onBack: () => void;
  role: UserRole;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onBack, role, onLogout }) => {
  const isDashboard = currentView === AppView.DASHBOARD;

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {!isDashboard ? (
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl text-xs font-black uppercase tracking-widest transition-all active:scale-95"
            title="Kembali ke halaman sebelumnya"
          >
            <span className="text-lg">←</span> Kembali
          </button>
        ) : (
          <div className="lg:hidden">
             <h1 className="text-xl font-black text-slate-800 italic">KoperatifAI</h1>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex flex-col items-end mr-2">
           <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{role}</span>
           <span className="text-[10px] text-slate-400 font-medium">Sistem Online</span>
        </div>
        
        <button 
          onClick={onLogout}
          className="px-5 py-2 bg-rose-50 text-rose-600 border border-rose-100 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-all active:scale-95 flex items-center gap-2"
        >
          <span>🚪</span> Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
