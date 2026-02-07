
import React from 'react';
import { AppView, UserRole } from '../types.ts';

interface SidebarProps {
  currentView: AppView;
  setView: (view: AppView) => void;
  role: UserRole;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView, role, onLogout }) => {
  const menuItems = [
    {
      label: 'Portal Utama',
      icon: '🏠',
      items: [
        { id: AppView.DASHBOARD, label: 'Dashboard', icon: '📊', roles: [UserRole.FOUNDER, UserRole.MEMBER, UserRole.BOARD, UserRole.STAFF, UserRole.LEADER, UserRole.AUDITOR] },
        { id: AppView.DIGITAL_PASSBOOK, label: 'Buku Digital', icon: '📖', roles: [UserRole.MEMBER, UserRole.FOUNDER] },
        { id: AppView.TRANSACTIONS, label: 'Riwayat Transaksi', icon: '💸', roles: [UserRole.FOUNDER, UserRole.MEMBER, UserRole.BOARD, UserRole.STAFF] },
        { id: AppView.SHU_DISTRIBUTION, label: 'Bagi Hasil (SHU)', icon: '✨', roles: [UserRole.FOUNDER, UserRole.MEMBER, UserRole.BOARD] },
      ],
    },
    {
      label: 'Layanan Finansial',
      icon: '💳',
      items: [
        { id: AppView.LOAN_SIMULATOR, label: 'Simulasi Pinjaman', icon: '🧮', roles: [UserRole.MEMBER, UserRole.FOUNDER] },
        { id: AppView.VOUCHING_SYSTEM, label: 'Jaminan Sosial', icon: '🤝', roles: [UserRole.MEMBER, UserRole.FOUNDER] },
        { id: AppView.LOAN_HISTORY, label: 'Status Pinjaman', icon: '📜', roles: [UserRole.MEMBER, UserRole.FOUNDER, UserRole.BOARD] },
        { id: AppView.LOAN_READINESS, label: 'Kesiapan Kredit', icon: '📈', roles: [UserRole.MEMBER, UserRole.FOUNDER] },
        { id: AppView.AI_CREDIT_COMMITTEE, label: 'Komite AI', icon: '🧠', roles: [UserRole.BOARD, UserRole.FOUNDER] },
      ],
    },
    {
      label: 'Ekonomi Anggota',
      icon: '🚀',
      items: [
        { id: AppView.MEMBER_MARKETPLACE, label: 'Pasar Rakyat', icon: '🛒', roles: [UserRole.MEMBER, UserRole.FOUNDER] },
        { id: AppView.MERCHANT_DASHBOARD, label: 'Toko Saya', icon: '🏪', roles: [UserRole.MEMBER, UserRole.FOUNDER] },
        { id: AppView.MEMBER_QRIS, label: 'QRIS Statis', icon: '🤳', roles: [UserRole.MEMBER, UserRole.FOUNDER] },
        { id: AppView.SMART_PROCUREMENT, label: 'Grosir Kolektif', icon: '📦', roles: [UserRole.MEMBER, UserRole.FOUNDER] },
        { id: AppView.ARISAN_DIGITAL, label: 'Arisan Digital', icon: '🌀', roles: [UserRole.MEMBER, UserRole.FOUNDER] },
        { id: AppView.BILL_PAYMENTS, label: 'Bayar Tagihan', icon: '⚡', roles: [UserRole.MEMBER, UserRole.FOUNDER] },
      ],
    },
    {
      label: 'Proteksi & Edukasi',
      icon: '🛡️',
      items: [
        { id: AppView.MEMBER_HEALTH_SHIELD, label: 'Perisai Sehat', icon: '🏥', roles: [UserRole.MEMBER, UserRole.FOUNDER] },
        { id: AppView.PERSONAL_GOLD, label: 'Tabungan Emas', icon: '📀', roles: [UserRole.MEMBER, UserRole.FOUNDER] },
        { id: AppView.PENSION_FUND, label: 'Dana Pensiun', icon: '👴', roles: [UserRole.MEMBER, UserRole.FOUNDER] },
        { id: AppView.DASKOP_CLAIM, label: 'Klaim Santunan', icon: '🕊️', roles: [UserRole.MEMBER, UserRole.FOUNDER] },
        { id: AppView.SMART_EDUCATION, label: 'Smart Academy', icon: '🎓', roles: [UserRole.MEMBER, UserRole.FOUNDER] },
        { id: AppView.AI_ADVISOR, label: 'Tanya AI', icon: '🤖', roles: [UserRole.MEMBER, UserRole.FOUNDER] },
      ],
    },
    {
      label: 'Founder Control',
      icon: '👑',
      items: [
        { id: AppView.GLOBAL_COMMAND_CENTER, label: 'Global Cockpit', icon: '🛰️', roles: [UserRole.FOUNDER] },
        { id: AppView.STRATEGIC_PROFIT_CALCULATOR, label: 'Kalkulator Profit', icon: '🧮', roles: [UserRole.FOUNDER] },
        { id: AppView.ACCOUNTING, label: 'Laporan Akuntansi', icon: '📖', roles: [UserRole.FOUNDER, UserRole.AUDITOR, UserRole.BOARD] },
        { id: AppView.SYSTEM_HEALTH, label: 'Kesehatan Sistem', icon: '🩺', roles: [UserRole.FOUNDER, UserRole.AUDITOR] },
        { id: AppView.DEPLOYMENT_HUB, label: 'Sync Domain', icon: '🌐', roles: [UserRole.FOUNDER] },
      ],
    },
  ];

  return (
    <aside className="w-72 bg-white border-r border-slate-200 flex flex-col h-full hidden lg:flex shadow-xl shadow-slate-200/50 z-50">
      <div className="p-8">
        <h1 className="text-2xl font-black text-slate-800 italic tracking-tight">KoperatifAI</h1>
        <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mt-1">Sovereign Financial Hub</p>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-8 custom-scrollbar">
        {menuItems.map((category, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex items-center gap-2 px-4 opacity-40">
              <span className="text-sm">{category.icon}</span>
              <p className="text-[9px] font-black text-slate-900 uppercase tracking-[0.2em]">{category.label}</p>
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
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-[1.02]'
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
          onClick={() => setView(AppView.MEMBERSHIP_PROFILE)}
          className="bg-slate-50 p-4 rounded-3xl flex items-center gap-3 cursor-pointer hover:bg-indigo-50 transition-all border border-transparent hover:border-indigo-100"
        >
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
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-rose-50 text-rose-600 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-all border border-rose-100 group"
        >
          🚪 Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
