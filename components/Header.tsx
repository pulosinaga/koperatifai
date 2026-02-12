import React, { useState, useEffect } from 'react';
import { AppView } from '../types.ts';
import { useAppContext } from '../contexts/AppContext.tsx';

const Header: React.FC = () => {
  const { currentView, goBack, user, logout } = useAppContext();
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
      case AppView.AI_ADVISOR: return 'Asisten Strategis AI';
      case AppView.DIGITAL_PASSBOOK: return 'Buku Tabungan';
      case AppView.DEPLOYMENT_HUB: return 'Sharing Hub';
      case AppView.NOTIFICATION_CENTER: return 'Pusat Amanah';
      default: return 'KoperatifAI';
    }
  };

  return (
    <header className="sticky top-0 z-[110] w-full bg-[#020617] text-white border-b-4 border-indigo-600 px-4 md:px-8 py-4 flex items-center justify-between shadow-2xl">
      <div className="flex items-center gap-5">
        {currentView !== AppView.DASHBOARD ? (
          <button onClick={goBack} className="w-12 h-12 bg-indigo-600 text-white rounded-2xl shadow-lg flex items-center justify-center font-bold hover:bg-indigo-500 transition-all">←</button>
        ) : (
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black shadow-lg">◈</div>
        )}
        
        <div className="flex flex-col">
           <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></span>
              <h2 className="text-sm font-black text-emerald-400 uppercase tracking-[0.2em] leading-none">
                {getGreeting()} • {time.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </h2>
           </div>
           <h1 className="text-lg font-black text-white uppercase tracking-tighter italic mt-1 leading-none">
             {formatDate()}
           </h1>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden lg:flex flex-col items-end">
           <span className="text-[12px] font-black text-indigo-400 uppercase tracking-widest">{getHeaderTitle()}</span>
           <span className="text-[10px] font-black text-slate-500 uppercase">{user?.role}</span>
        </div>
        
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 rounded-2xl bg-indigo-600/20 flex items-center justify-center text-xl border border-indigo-500/30">
              👤
           </div>
           <button onClick={logout} className="w-10 h-10 rounded-2xl bg-rose-600/20 text-rose-500 border border-rose-500/30 flex items-center justify-center text-xl hover:bg-rose-600 hover:text-white transition-all shadow-lg">
             🚪
           </button>
        </div>
      </div>
    </header>
  );
};

export default Header;