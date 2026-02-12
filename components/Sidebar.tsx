import React from 'react';
import { AppView, UserRole } from '../types.ts';
import { useAppContext } from '../contexts/AppContext.tsx';

const Sidebar: React.FC = () => {
  const { currentView, navigate, user, logout } = useAppContext();
  const role = user?.role || UserRole.MEMBER;

  const getMenuCategories = () => {
    const common = [
      { id: AppView.DASHBOARD, label: 'Portal Utama', icon: '📊' },
      { id: AppView.DIGITAL_PASSBOOK, label: 'Buku Tabungan', icon: '📖' },
      { id: AppView.AI_ADVISOR, label: 'Asisten AI', icon: '🤖' },
    ];

    const finance = [
      { id: AppView.CASH_WITHDRAWAL, label: 'Tarik Saldo', icon: '🏧' },
      { id: AppView.LOAN_SIMULATOR, label: 'Simulasi Pinjaman', icon: '🧮' },
    ];

    const menu = [
      { label: 'Utama', items: common },
      { label: 'Layanan', items: finance },
    ];

    if (role === UserRole.GOVERNMENT) {
      menu.push({
        label: 'Otoritas Negara',
        items: [
          { id: AppView.GOV_TENANT_DASHBOARD, label: 'Command Center', icon: '🇮🇩' },
          { id: AppView.GOV_PASAR_RAKYAT_BRIDGE, label: 'Jembatan Pasar', icon: '🌉' },
        ]
      });
    }

    if (role === UserRole.LEADER) {
      menu.push({
        label: 'Area Duta',
        items: [
          { id: AppView.SERVICE_JOURNEY_GUIDE, label: 'Peta Layanan', icon: '🗺️' },
          { id: AppView.MEMBER_BENEFIT_SIMULATOR, label: 'Simulasi Manfaat', icon: '⚖️' },
          { id: AppView.VILLAGE_SOCIAL_BUDGET, label: 'Anggaran Desa', icon: '🏦' },
          { id: AppView.REVENUE_CENTER, label: 'Kinerja Wilayah', icon: '🛵' },
        ]
      });
    }

    if (role === UserRole.FOUNDER) {
      menu.push({
        label: 'Sinergi Negara',
        items: [
          { id: AppView.GOV_PASAR_RAKYAT_BRIDGE, label: 'Jembatan Pasar', icon: '🇮🇩' },
          { id: AppView.TERRITORY_COMMAND, label: 'Peta Komando', icon: '📍' },
        ]
      });
    }

    return menu;
  };

  return (
    <aside className="w-72 bg-white border-r border-slate-200 flex flex-col h-full hidden lg:flex shadow-2xl z-50">
      <div className="p-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg shadow-indigo-200 font-black">◈</div>
          <div>
            <h1 className="text-xl font-black text-slate-800 tracking-tighter italic leading-none">KoperatifAI</h1>
            <p className="text-[8px] font-black text-indigo-500 uppercase tracking-widest mt-1">Sovereign Ecosystem</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-8 custom-scrollbar">
        {getMenuCategories().map((cat, idx) => (
          <div key={idx} className="space-y-2">
            <p className="px-4 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">{cat.label}</p>
            <div className="space-y-1">
              {cat.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                    currentView === item.id
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 scale-[1.02]'
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100 space-y-4">
        <div 
          onClick={() => navigate(AppView.MEMBERSHIP_PROFILE)}
          className="bg-slate-50 p-4 rounded-[2rem] flex items-center gap-3 cursor-pointer hover:bg-indigo-50 transition-all border border-transparent hover:border-indigo-100 group"
        >
          <div className="w-10 h-10 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 text-xl shadow-inner group-hover:scale-110 transition-transform">👤</div>
          <div className="flex-1 overflow-hidden">
            <p className="text-[9px] font-black text-slate-800 uppercase truncate italic tracking-tighter">{role}</p>
            <p className="text-[10px] text-slate-400 font-bold truncate">{user?.name || 'Loading...'}</p>
          </div>
        </div>
        <button onClick={logout} className="w-full py-4 bg-rose-50 text-rose-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-all border border-rose-100 active:scale-95">LOGOUT</button>
      </div>
    </aside>
  );
};

export default Sidebar;