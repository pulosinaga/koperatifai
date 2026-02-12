import React, { useState, useEffect } from 'react';
import { AppView } from '../types.ts';
import { useAppContext } from '../contexts/AppContext.tsx';

const Header: React.FC = () => {
  const { currentView, goBack, user, isLiveDatabase, logout } = useAppContext();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hours = time.getHours();
    if (hours >= 4 && hours < 11) return "Selamat Pagi";
    if (hours >= 11 && hours < 15) return "Selamat Siang";
    if (hours >= 15 && hours < 18.5) return "Selamat Sore";
    return "Selamat Malam";
  };

  const formatDate = () => {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    return `${days[time.getDay()]}, ${time.getDate()} ${months[time.getMonth()]} ${time.getFullYear()}`;
  };

  const getHeaderTitle = () => {
    switch (currentView) {
      case AppView.DASHBOARD: return 'Portal Utama';
      case AppView.AI_ADVISOR: return 'Asisten AI';
      case AppView.DIGITAL_PASSBOOK: return 'Buku Tabungan';
      case AppView.MEMBER_MARKETPLACE: return 'Pasar Rakyat';
      case AppView.MEMBERSHIP_PROFILE: return 'Profil Pemilik';
      default: return 'KoperatifAI';
    }
  };

  return (
    <header className="sticky top-0 z-[110] w-full bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 md:px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {currentView !== AppView.DASHBOARD ? (
          <button onClick={goBack} className="w-10 h-10 bg-indigo-600 text-white rounded-xl shadow-lg flex items-center justify-center font-bold">←</button>
        ) : (
          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-black">◈</div>
        )}
        
        <div className="flex flex-col">
           <h2 className="text-[10px] font-black text-indigo-600 uppercase tracking-widest leading-none mb-1">
             {getGreeting()} • {time.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
           </h2>
           <h1 className="text-sm font-black text-slate-800 uppercase tracking-tighter italic leading-none">
            {getHeaderTitle()}
           </h1>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden lg:flex flex-col items-end">
           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{formatDate()}</span>
           <span className="text-[9px] font-black text-indigo-600 uppercase">{user?.role}</span>
        </div>
        
        <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center text-lg border border-indigo-200">
           👤
        </div>

        <button onClick={logout} className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center text-lg hover:bg-rose-600 hover:text-white transition-all">
          🚪
        </button>
      </div>
    </header>
  );
};

export default Header;
