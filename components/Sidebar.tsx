
import React from 'react';
import { AppView, UserRole } from '../types.ts';

interface SidebarProps {
  currentView: AppView;
  setView: (view: AppView) => void;
  role: UserRole;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView, role, onLogout }) => {
  const menuCategories = [
    {
      label: 'Utama',
      items: [
        { id: AppView.DASHBOARD, label: 'Pusat Komando', icon: '📊' },
        { id: AppView.DIGITAL_PASSBOOK, label: 'Buku Tabungan', icon: '📖' },
        { id: AppView.TRANSACTIONS, label: 'Riwayat Transaksi', icon: '💸' },
        { id: AppView.SHU_DISTRIBUTION, label: 'Bagi Hasil (SHU)', icon: '✨' },
      ]
    },
    {
      label: 'Layanan Finansial',
      items: [
        { id: AppView.LOAN_SIMULATOR, label: 'Simulasi Kredit', icon: '🧮' },
        { id: AppView.VOUCHING_SYSTEM, label: 'Jaminan Sosial', icon: '🤝' },
        { id: AppView.LOAN_HISTORY, label: 'Status Pinjaman', icon: '📜' },
        { id: AppView.LOAN_READINESS, label: 'Kesiapan Modal', icon: '📈' },
      ]
    },
    {
      label: 'Niaga & Ekonomi',
      items: [
        { id: AppView.MEMBER_MARKETPLACE, label: 'Pasar Rakyat', icon: '🛒' },
        { id: AppView.MERCHANT_DASHBOARD, label: 'Toko Saya', icon: '🏪' },
        { id: AppView.SMART_PROCUREMENT, label: 'Grosir Kolektif', icon: '📦' },
        { id: AppView.ARISAN_DIGITAL, label: 'Arisan Pintar', icon: '🌀' },
        { id: AppView.BILL_PAYMENTS, label: 'Bayar Tagihan', icon: '⚡' },
      ]
    },
    {
      label: 'Proteksi & Edukasi',
      items: [
        { id: AppView.MEMBER_HEALTH_SHIELD, label: 'Perisai Sehat', icon: '🏥' },
        { id: AppView.PERSONAL_GOLD, label: 'Tabungan Emas', icon: '📀' },
        { id: AppView.PENSION_FUND, label: 'Dana Pensiun', icon: '👴' },
        { id: AppView.SMART_EDUCATION, label: 'Academy AI', icon: '🎓' },
        { id: AppView.AI_ADVISOR, label: 'Tanya AI', icon: '🤖' },
      ]
    }
  ];

  if (role === UserRole.FOUNDER) {
    menuCategories.push({
      label: 'Founder Control',
      items: [
        { id: AppView.GLOBAL_COMMAND_CENTER, label: 'Global Cockpit', icon: '🛰️' },
        { id: AppView.STRATEGIC_PROFIT_CALCULATOR, label: 'Kalkulator Profit', icon: '🧮' },
        { id: AppView.SYSTEM_HEALTH, label: 'Audit Sistem', icon: '🩺' },
        { id: AppView.DEPLOYMENT_HUB, label: 'Domain Sync', icon: '🌐' },
      ]
    });
  }

  return (
    <aside className="w-72 bg-white border-r border-slate-200 flex flex-col h-full hidden lg:flex shadow-xl z-50">
      <div className="p-8">
        <h1 className="text-2xl font-black text-indigo-600 italic tracking-tighter">KoperatifAI</h1>
        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Sovereign Financial Hub</p>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-8 custom-scrollbar">
        {menuCategories.map((cat, idx) => (
          <div key={idx} className="space-y-2">
            <p className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{cat.label}</p>
            <div className="space-y-1">
              {cat.items.map((item) => (
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
          className="bg-slate-50 p-4 rounded-[2rem] flex items-center gap-3 cursor-pointer hover:bg-indigo-50 transition-all border border-transparent hover:border-indigo-100"
        >
          <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
            {role === UserRole.FOUNDER ? '👑' : '👤'}
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-[10px] font-black text-slate-800 uppercase truncate">{role}</p>
            <p className="text-[10px] text-slate-400 font-medium">Budi Utama</p>
          </div>
        </div>
        
        <button
          onClick={onLogout}
          className="w-full py-4 bg-rose-50 text-rose-600 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-all border border-rose-100"
        >
          Keluar
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
