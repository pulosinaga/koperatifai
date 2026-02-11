import React from 'react';
import { AppView, UserRole } from '../types.js';

const Sidebar = ({ currentView, setView, role, onLogout }) => {
  const menuItems = [
    { id: AppView.DASHBOARD, label: 'Dashboard', icon: '📊' },
    { id: AppView.DIGITAL_PASSBOOK, label: 'Buku Digital', icon: '📖' },
    { id: AppView.MEMBER_MARKETPLACE, label: 'Pasar Anggota', icon: '🛒' },
    { id: AppView.SMART_MOBILITY, label: 'Mobilitas Pintar', icon: '🚗' },
    { id: AppView.LOAN_SIMULATOR, label: 'Simulasi Kredit', icon: '🧮' },
    { id: AppView.AI_ADVISOR, label: 'Tanya AI', icon: '🤖' },
    { id: AppView.DEPLOYMENT_HUB, label: 'Domain Sync', icon: '🌐' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-full hidden lg:flex">
      <div className="p-6">
        <h1 className="text-xl font-bold text-indigo-600 italic">KoperatifAI</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
              currentView === item.id ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            <span>{item.icon}</span> {item.label}
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-100">
        <button onClick={onLogout} className="w-full py-3 bg-rose-50 text-rose-600 rounded-xl text-xs font-bold">LOGOUT</button>
      </div>
    </aside>
  );
};

export default Sidebar;