
import React from 'react';
import { AppView, UserRole } from '../types';

interface SidebarProps {
  currentView: AppView;
  setView: (view: AppView) => void;
  role: UserRole;
}

const Sidebar: React.FC = SidebarProps => {
  const { currentView, setView, role } = SidebarProps;
  const menuItems = [
    {
      label: 'Utama',
      icon: '🏠',
      items: [
        { id: AppView.DASHBOARD, label: 'Dashboard', icon: '📊', roles: [UserRole.FOUNDER, UserRole.MEMBER, UserRole.BOARD, UserRole.STAFF, UserRole.LEADER, UserRole.AUDITOR] },
        { id: AppView.TRANSACTIONS, label: 'Transaksi', icon: '💸', roles: [UserRole.FOUNDER, UserRole.MEMBER, UserRole.BOARD, UserRole.STAFF] },
        { id: AppView.SHU_DISTRIBUTION, label: 'Sistem SHU', icon: '✨', roles: [UserRole.FOUNDER, UserRole.MEMBER, UserRole.BOARD] },
      ],
    },
    {
      label: 'Duta Wilayah',
      icon: '🛵',
      items: [
        { id: AppView.DUTA_SOP, label: 'Buku Saku Duta', icon: '📖', roles: [UserRole.FOUNDER, UserRole.LEADER, UserRole.BOARD] },
        { id: AppView.COMMUNITY_LEADERS, label: 'Duta Percontohan', icon: '🤝', roles: [UserRole.FOUNDER, UserRole.BOARD] },
        { id: AppView.LEADER_COMPENSATION, label: 'Reward & Jasa', icon: '💰', roles: [UserRole.FOUNDER, UserRole.LEADER] },
      ],
    },
    {
      label: 'Tata Kelola',
      icon: '⚖️',
      items: [
        { id: AppView.JDIH_REGULATIONS, label: 'Pojok Hukum AI', icon: '🏛️' },
        { id: AppView.COOP_HEALTH_CHECK, label: 'Audit KKP AI', icon: '🩺', roles: [UserRole.FOUNDER, UserRole.BOARD, UserRole.AUDITOR] },
        { id: AppView.E_RAT, label: 'RAT Digital', icon: '🗳️' },
      ],
    },
    {
      label: 'Founder Command',
      icon: '👑',
      items: [
        { id: AppView.FOUNDER_REPORT, label: 'Master Report', icon: '📜', roles: [UserRole.FOUNDER] },
        { id: AppView.AI_BOARDROOM, label: 'AI Boardroom', icon: '🔮', roles: [UserRole.FOUNDER] },
        { id: AppView.VALUATION_TRACKER, label: 'Valuation Monitor', icon: '📈', roles: [UserRole.FOUNDER] },
      ],
    },
  ];

  return (
    <aside className="w-72 bg-white border-r border-slate-200 flex flex-col h-full hidden lg:flex">
      <div className="p-8">
        <h1 className="text-2xl font-black text-slate-800 italic tracking-tight">KoperatifAI</h1>
        <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mt-1">Digital Sovereign Coop</p>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-8 custom-scrollbar">
        {menuItems.map((category, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex items-center gap-2 px-4">
              <span className="text-sm">{category.icon}</span>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{category.label}</p>
            </div>
            <div className="space-y-1">
              {category.items
                .filter(item => !item.roles || item.roles.includes(role))
                .map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setView(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                      currentView === item.id
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100'
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                    }`}
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </button>
                ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <div className="bg-slate-50 p-4 rounded-3xl flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-100 rounded-2xl flex items-center justify-center text-xl shadow-inner">👤</div>
          <div>
            <p className="text-xs font-bold text-slate-800 uppercase tracking-tighter">{role}</p>
            <p className="text-[10px] text-slate-400 font-medium">Budi Utama</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
