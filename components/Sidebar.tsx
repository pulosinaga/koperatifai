
import React from 'react';
import { AppView, UserRole } from '../types.ts';
import { useAppContext } from '../contexts/AppContext.tsx';

const Sidebar: React.FC = () => {
  const { currentView, navigate, user, logout } = useAppContext();
  const role = user?.role || UserRole.MEMBER;

  const getMenuCategories = () => {
    const menu: { label: string, items: { id: AppView, label: string, icon: string }[] }[] = [
      { 
        label: 'Ekosistem', 
        items: [
          { id: AppView.DASHBOARD, label: 'Portal Utama', icon: '📊' },
          { id: AppView.HIERARCHY_VISUALIZER, label: 'Struktur Organisasi', icon: '🌳' },
        ]
      }
    ];

    if (role === UserRole.LEADER || role === UserRole.LEADER_PROVINCE || role === UserRole.FOUNDER) {
      menu.push({
        label: 'Otoritas Duta',
        items: [
          { id: AppView.DUTA_TASK_CENTER, label: 'Pusat Tugas (SOP)', icon: '📋' },
          { id: AppView.MEMBERSHIP_PROFILE, label: 'Kamera Sakti (KYC)', icon: '🤳' },
          { id: AppView.DUTA_PAYROLL_REPORT, label: 'Klaim Upah AI', icon: '💰' },
          { id: AppView.NATIONAL_COMMAND_CENTER, label: 'Peta Wilayah', icon: '🗺️' },
        ]
      });
    }

    if (role === UserRole.MEMBER || role === UserRole.FOUNDER) {
      menu.push({
        label: 'Misi Kedaulatan',
        items: [
          { id: AppView.MEMBER_TASK_CENTER, label: 'Misi Saya', icon: '🎯' },
          { id: AppView.DIGITAL_PASSBOOK, label: 'Buku Tabungan', icon: '📖' },
          { id: AppView.MEMBER_MARKETPLACE, label: 'Pasar Rakyat', icon: '🧺' },
          { id: AppView.LOAN_SIMULATOR, label: 'Simulator Kredit', icon: '🧮' },
          { id: AppView.MEMBER_QRIS, label: 'Kamera Bayar', icon: '🤳' },
        ]
      });
    }

    if (role === UserRole.FOUNDER) {
      menu.push({
        label: 'Sovereign Control',
        items: [
          { id: AppView.MONETIZATION_IDEAS, label: 'Ide Cuan', icon: '🚀' },
          { id: AppView.REVENUE_CENTER, label: 'Royalty Vault', icon: '💎' },
          { id: AppView.GLOBAL_COMMAND_CENTER, label: 'Executive Cockpit', icon: '🛰️' },
          { id: AppView.DEPLOYMENT_HUB, label: 'Sharing Hub', icon: '⚙️' },
        ]
      });
    }

    return menu;
  };

  return (
    <aside className="w-72 bg-white border-r border-slate-200 flex flex-col h-full shadow-2xl z-50 overflow-hidden">
      <div className="p-8 shrink-0 bg-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg font-black">◈</div>
          <h1 className="text-xl font-black text-slate-800 tracking-tighter italic leading-none">KoperatifAI</h1>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-8 overflow-y-auto custom-scrollbar">
        {getMenuCategories().map((cat, idx) => (
          <div key={idx} className="space-y-2">
            <p className="px-4 text-[9px] font-black text-slate-400 uppercase tracking-widest">{cat.label}</p>
            <div className="space-y-1">
              {cat.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                    currentView === item.id ? 'bg-indigo-600 text-white shadow-lg scale-[1.02]' : 'text-slate-500 hover:bg-slate-50'
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

      <div className="p-4 border-t border-slate-100 shrink-0 bg-white">
        <div className="bg-slate-50 p-4 rounded-2xl mb-4 border border-slate-100">
          <p className="text-[8px] font-black text-slate-400 uppercase">Login Sebagai:</p>
          <p className="text-[10px] font-bold text-slate-800 truncate">{user?.name}</p>
          <p className="text-[8px] font-medium text-indigo-600 uppercase mt-1">{role}</p>
        </div>
        <button onClick={logout} className="w-full py-4 bg-rose-50 text-rose-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-all border border-rose-100">KELUAR</button>
      </div>
    </aside>
  );
};

export default Sidebar;
