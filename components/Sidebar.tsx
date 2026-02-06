
import React from 'react';
import { AppView, UserRole } from '../types';

interface SidebarProps {
  currentView: AppView;
  setView: (view: AppView) => void;
  role: UserRole;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView, role, onLogout }) => {
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
      label: 'Kedaulatan Nilai',
      icon: '🌙',
      items: [
        { id: AppView.SHARIA_GOVERNANCE, label: 'Kepatuhan Syariah', icon: '⚖️', roles: [UserRole.FOUNDER, UserRole.BOARD, UserRole.MEMBER] },
        { id: AppView.SPIRITUAL_JOURNEYS, label: 'Ziarah Rohani', icon: '⛪', roles: [UserRole.FOUNDER, UserRole.MEMBER] },
        { id: AppView.COMMUNITY_IMPACT, label: 'Dampak Sosial', icon: '🌱', roles: [UserRole.FOUNDER, UserRole.MEMBER] },
      ],
    },
    {
      label: 'Solidaritas Nasional',
      icon: '🤝',
      items: [
        { id: AppView.NATIONAL_SUMMIT, label: 'Silaturahmi Nasional', icon: '🏟️', roles: [UserRole.FOUNDER, UserRole.BOARD, UserRole.LEADER] },
        { id: AppView.COMMUNITY_FORUM, label: 'Forum Komunitas', icon: '🗣️', roles: [UserRole.FOUNDER, UserRole.MEMBER, UserRole.LEADER] },
      ],
    },
    {
      label: 'Duta Wilayah',
      icon: '🛵',
      items: [
        { id: AppView.DUTA_CONTRACT, label: 'Akad Kerja Duta', icon: '📜', roles: [UserRole.LEADER, UserRole.FOUNDER] },
        { id: AppView.DUTA_PERFORMANCE, label: 'Dashboard Duta', icon: '📈', roles: [UserRole.LEADER, UserRole.FOUNDER] },
      ],
    },
    {
      label: 'Founder Command',
      icon: '👑',
      items: [
        { id: AppView.GLOBAL_COMMAND_CENTER, label: 'Cockpit Utama', icon: '🛰️', roles: [UserRole.FOUNDER] },
        { id: AppView.IP_LICENSE_MONITOR, label: 'IP License', icon: '🔑', roles: [UserRole.FOUNDER] },
      ],
    },
  ];

  return (
    <aside className="w-72 bg-white border-r border-slate-200 flex flex-col h-full hidden lg:flex">
      <div className="p-8">
        <h1 className="text-2xl font-black text-slate-800 italic tracking-tight text-center lg:text-left">KoperatifAI</h1>
        <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mt-1 text-center lg:text-left">Digital Sovereign Coop</p>
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
                .filter(item => role === UserRole.FOUNDER || !item.roles || item.roles.includes(role))
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

      <div className="p-4 border-t border-slate-100 space-y-4">
        <div className="bg-slate-50 p-4 rounded-3xl flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-100 rounded-2xl flex items-center justify-center text-xl shadow-inner">
            {role === UserRole.FOUNDER ? '👑' : '👤'}
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-[10px] font-black text-slate-800 uppercase tracking-tighter truncate">{role}</p>
            <p className="text-[10px] text-slate-400 font-medium">Budi Utama</p>
          </div>
        </div>
        
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-rose-50 text-rose-600 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-rose-100 transition-all border border-rose-100"
        >
          <span>🚪</span>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
