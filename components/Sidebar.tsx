import React from 'react';
import { AppView, UserRole } from '../types.ts';
import { useAppContext } from '../contexts/AppContext.tsx';

const Sidebar: React.FC = () => {
  const { currentView, navigate, user, logout } = useAppContext();
  const role = user?.role || UserRole.MEMBER;

  const getMenuCategories = () => {
    const common = [
      { id: AppView.DASHBOARD, label: 'Portal Utama', icon: '📊' },
      { id: AppView.ARISAN_DIGITAL, label: 'Smart Arisan', icon: '🌀' },
      { id: AppView.ASSET_AUCTION, label: 'Lelang Rakyat', icon: '🔨' },
      { id: AppView.WALLET_INTEGRATION, label: 'Bayar di Toko', icon: '🛒' },
    ];

    const finance = [
      { id: AppView.DIGITAL_PASSBOOK, label: 'Buku Tabungan', icon: '📖' },
      { id: AppView.LOAN_SIMULATOR, label: 'Simulasi Pinjaman', icon: '🧮' },
      { id: AppView.MEMBER_MARKETPLACE, label: 'Pasar Rakyat', icon: '🧺' },
      { id: AppView.MEMBER_QRIS, label: 'QRIS Bayar', icon: '🤳' },
    ];

    const menu = [
      { label: 'Utama', items: common },
      { label: 'Layanan', items: finance },
    ];

    if (role === UserRole.FOUNDER) {
      menu.push({
        label: 'Founder Controls',
        items: [
          { id: AppView.REVENUE_CENTER, label: 'Royalty Vault', icon: '💎' },
          { id: AppView.GLOBAL_COMMAND_CENTER, label: 'Global Cockpit', icon: '🛰️' },
          { id: AppView.STRATEGIC_PROFIT_CALCULATOR, label: 'National Commander', icon: '🦅' },
          { id: AppView.DEPLOYMENT_HUB, label: 'Sharing Hub', icon: '⚙️' },
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
                  onClick={() => navigate(item.id as AppView)}
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
        <button onClick={logout} className="w-full py-4 bg-rose-50 text-rose-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-all border border-rose-100 active:scale-95">LOGOUT</button>
      </div>
    </aside>
  );
};

export default Sidebar;