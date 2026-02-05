
import React, { useState } from 'react';
import { AppView, UserRole } from '../types';

interface SidebarProps {
  currentView: AppView;
  setView: (view: AppView) => void;
  role: UserRole;
  onLogout: () => void;
}

interface NavItem {
  id: AppView;
  label: string;
  icon: string;
  roles?: UserRole[];
}

interface NavCategory {
  label: string;
  icon: string;
  items: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView, role, onLogout }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Utama', 'Ekosistem Bisnis', 'Tata Kelola', 'Strategi']);

  const categories: NavCategory[] = [
    {
      label: 'Utama',
      icon: '🏠',
      items: [
        { id: AppView.DASHBOARD, label: 'Dashboard', icon: '📊' },
        { id: AppView.DIGITAL_PASSBOOK, label: 'Buku Digital', icon: '📖', roles: [UserRole.MEMBER, UserRole.LEADER] },
        { id: AppView.DIGITAL_PIGGYBANK, label: 'Celengan Digital', icon: '🪙', roles: [UserRole.MEMBER] },
        { id: AppView.NEWS_UPDATES, label: 'Berita & Info', icon: '📰' },
        { id: AppView.AI_ADVISOR, label: 'Asisten AI', icon: '🤖' },
        { id: AppView.SMART_EDUCATION, label: 'Smart Education', icon: '🎓', roles: [UserRole.MEMBER] },
        { id: AppView.COMMUNITY_FORUM, label: 'Forum Anggota', icon: '💬' },
      ],
    },
    {
      label: 'Ekosistem Bisnis',
      icon: '🛒',
      items: [
        { id: AppView.REMITTANCE, label: 'Kirim Uang', icon: '💸', roles: [UserRole.MEMBER] },
        { id: AppView.MEMBER_MARKETPLACE, label: 'Pasar Anggota', icon: '🛍️' },
        { id: AppView.MERCHANT_DASHBOARD, label: 'Dashboard Toko', icon: '🏪', roles: [UserRole.MEMBER, UserRole.BOARD, UserRole.FOUNDER] },
        { id: AppView.ELDER_IMPACT_HUB, label: 'Silver Economy', icon: '👵', roles: [UserRole.MEMBER] },
        { id: AppView.PRODUCTIVE_ELDER_DASHBOARD, label: 'Pensiun Produktif', icon: '🪴', roles: [UserRole.MEMBER] },
        { id: AppView.LEGACY_VAULT, label: 'Brankas Warisan', icon: '🗝️', roles: [UserRole.MEMBER] },
        { id: AppView.SMART_PROCUREMENT, label: 'Pengadaan Pintar', icon: '📦', roles: [UserRole.BOARD, UserRole.FOUNDER, UserRole.LEADER] },
        { id: AppView.BILL_PAYMENTS, label: 'Bayar Tagihan', icon: '⚡', roles: [UserRole.MEMBER] },
        { id: AppView.PENSION_FUND, label: 'Dana Pensiun', icon: '👴', roles: [UserRole.MEMBER, UserRole.BOARD] },
        { id: AppView.LOAN_SIMULATOR, label: 'Simulator Pinjaman', icon: '🧮', roles: [UserRole.MEMBER, UserRole.LEADER] },
        { id: AppView.AICreditCommittee, label: 'Komite Kredit AI', icon: '🧠', roles: [UserRole.BOARD, UserRole.AUDITOR] },
        { id: AppView.LOAN_WORKFLOW, label: 'Alur Pinjaman', icon: '🔄', roles: [UserRole.STAFF, UserRole.BOARD] },
        { id: AppView.MEMBER_QRIS, label: 'QRIS Pembayaran', icon: '🤳', roles: [UserRole.MEMBER] },
        { id: AppView.GLOBAL_SHU_SIMULATION, label: 'Simulasi SHU', icon: '💰' },
      ],
    },
    {
      label: 'Tata Kelola',
      icon: '⚖️',
      items: [
        { id: AppView.COOP_VS_BANK, label: 'Bukan Sekadar Bank', icon: '🏦', roles: [UserRole.FOUNDER, UserRole.MEMBER, UserRole.BOARD] },
        { id: AppView.ACCOUNTING, label: 'Pembukuan Real-time', icon: '📒', roles: [UserRole.BOARD, UserRole.STAFF, UserRole.AUDITOR] },
        { id: AppView.JDIH_REGULATIONS, label: 'Pojok Regulasi (JDIH)', icon: '🏛️' },
        { id: AppView.TRANSPARENCY_PROTOCOL, label: 'Anti-Korupsi AI', icon: '🛡️', roles: [UserRole.AUDITOR, UserRole.BOARD] },
        { id: AppView.CYBER_SECURITY_SHIELD, label: 'Perisai Cyber', icon: '🛡️', roles: [UserRole.FOUNDER, UserRole.AUDITOR] },
        { id: AppView.AUDIT_TRAIL, label: 'Jejak Audit AI', icon: '🕵️‍♂️', roles: [UserRole.AUDITOR, UserRole.FOUNDER] },
        { id: AppView.CAPITAL_SECURITY, label: 'Keamanan Modal', icon: '🛡️', roles: [UserRole.BOARD, UserRole.FOUNDER] },
        { id: AppView.AI_TREASURY, label: 'Manajemen Aset AI', icon: '💎', roles: [UserRole.BOARD, UserRole.FOUNDER] },
        { id: AppView.CRISIS_SIMULATOR, label: 'Simulasi Krisis', icon: '🆘', roles: [UserRole.FOUNDER, UserRole.BOARD] },
        { id: AppView.E_RAT, label: 'e-RAT (Voting)', icon: '🗳️' },
        { id: AppView.SYSTEM_HEALTH, label: 'Kesehatan Sistem', icon: '🛡️', roles: [UserRole.STAFF, UserRole.FOUNDER] },
      ],
    },
    {
      label: 'Strategi',
      icon: '🧠',
      items: [
        { id: AppView.DUTA_VETTING, label: 'Vetting Karakter', icon: '🕵️‍♀️', roles: [UserRole.FOUNDER, UserRole.BOARD] },
        { id: AppView.LEADER_LIQUIDITY, label: 'Likuiditas Duta', icon: '⚖️', roles: [UserRole.LEADER, UserRole.BOARD, UserRole.FOUNDER] },
        { id: AppView.BRANDING_IDENTITY, label: 'Identitas Visual', icon: '🎨', roles: [UserRole.FOUNDER] },
        { id: AppView.BUSINESS_PLAN, label: 'Rencana Bisnis & SHU', icon: '📈', roles: [UserRole.FOUNDER, UserRole.BOARD] },
        { id: AppView.PITCH_DECK, label: 'Pitch Deck Pionir', icon: '🎤', roles: [UserRole.FOUNDER] },
        { id: AppView.LAUNCH_ROADMAP, label: 'Roadmap 100 Hari', icon: '🚀', roles: [UserRole.FOUNDER] },
        { id: AppView.INVESTOR_PORTAL, label: 'Portal Investor', icon: '👔', roles: [UserRole.FOUNDER] },
        { id: AppView.MILLION_DOLLAR_ROADMAP, label: 'Roadmap $1M', icon: '🗺️', roles: [UserRole.FOUNDER] },
        { id: AppView.LEADER_COMPENSATION, label: 'Gaji Duta', icon: '💸', roles: [UserRole.LEADER, UserRole.BOARD] },
        { id: AppView.TECH_SETUP, label: 'Konfigurasi Teknis', icon: '⚙️', roles: [UserRole.STAFF, UserRole.FOUNDER] },
      ],
    },
  ];

  const toggleCategory = (label: string) => {
    if (isSidebarCollapsed) {
      setIsSidebarCollapsed(false);
      setExpandedCategories([label]);
      return;
    }
    setExpandedCategories(prev =>
      prev.includes(label) ? prev.filter(c => c !== label) : [...prev, label]
    );
  };

  return (
    <div 
      className={`bg-indigo-950 text-white h-screen flex flex-col shadow-xl transition-all duration-300 ease-in-out border-r border-slate-800 ${
        isSidebarCollapsed ? 'w-20' : 'w-72'
      }`}
    >
      <div className="p-6 flex items-center justify-between overflow-hidden">
        {!isSidebarCollapsed && (
          <div className="flex flex-col animate-in fade-in duration-500">
            <h1 className="text-xl font-bold tracking-tight flex items-center gap-2 truncate italic">
              <span className="text-indigo-400 text-2xl">◈</span> KoperatifAI
            </h1>
            <p className="text-[10px] text-indigo-300 uppercase tracking-widest mt-1">Digital Credit Union</p>
          </div>
        )}
        <button 
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="p-2 hover:bg-indigo-800 rounded-lg transition-colors ml-auto"
        >
          {isSidebarCollapsed ? '▶' : '◀'}
        </button>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-4 overflow-y-auto custom-scrollbar overflow-x-hidden">
        {categories.map((category) => {
          const visibleItems = category.items.filter(item => !item.roles || item.roles.includes(role));
          if (visibleItems.length === 0) return null;

          const isExpanded = expandedCategories.includes(category.label);
          const hasActiveChild = visibleItems.some(item => item.id === currentView);

          return (
            <div key={category.label} className="space-y-1">
              <button
                onClick={() => toggleCategory(category.label)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                  hasActiveChild && isSidebarCollapsed ? 'bg-indigo-800/50' : 'hover:bg-indigo-800/30'
                }`}
              >
                <span className="text-lg w-6 flex justify-center">{category.icon}</span>
                {!isSidebarCollapsed && (
                  <>
                    <span className="flex-1 text-left text-[10px] font-black text-indigo-300 uppercase tracking-[0.2em]">
                      {category.label}
                    </span>
                    <span className={`text-[10px] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </>
                )}
              </button>

              {(!isSidebarCollapsed && isExpanded) && (
                <div className="space-y-1 ml-2 animate-in slide-in-from-top-2 duration-200">
                  {visibleItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setView(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 text-sm ${
                        currentView === item.id
                          ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50 font-semibold italic'
                          : 'text-indigo-200 hover:bg-indigo-800 hover:text-white'
                      }`}
                    >
                      <span className="text-base">{item.icon}</span>
                      <span className="truncate">{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User Session Footer */}
      <div className="p-4 border-t border-indigo-900 bg-indigo-950/50">
         <div className={`flex items-center gap-3 ${isSidebarCollapsed ? 'justify-center' : ''}`}>
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-xl shadow-lg shrink-0">👤</div>
            {!isSidebarCollapsed && (
               <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold truncate">Budi Utama</p>
                  <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">{role}</p>
               </div>
            )}
         </div>
         {!isSidebarCollapsed && (
            <button 
              onClick={onLogout}
              className="mt-4 w-full py-2 bg-rose-500/10 text-rose-400 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all"
            >
               LOGOUT
            </button>
         )}
      </div>
    </div>
  );
};

export default Sidebar;
