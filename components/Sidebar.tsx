
import React, { useState } from 'react';
import { AppView } from '../types';

interface SidebarProps {
  currentView: AppView;
  setView: (view: AppView) => void;
}

interface NavItem {
  id: AppView;
  label: string;
  icon: string;
}

interface NavCategory {
  label: string;
  icon: string;
  items: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Utama', 'Ekosistem Bisnis', 'Tata Kelola', 'Strategi']);

  const categories: NavCategory[] = [
    {
      label: 'Utama',
      icon: '🏠',
      items: [
        { id: AppView.DASHBOARD, label: 'Dashboard', icon: '📊' },
        { id: AppView.DIGITAL_PIGGYBANK, label: 'Celengan Digital', icon: '🪙' },
        { id: AppView.NEWS_UPDATES, label: 'Berita & Info', icon: '📰' },
        { id: AppView.LOAN_HISTORY, label: 'Riwayat Pinjaman', icon: '📜' },
        { id: AppView.AI_ADVISOR, label: 'Asisten AI', icon: '🤖' },
        { id: AppView.SMART_EDUCATION, label: 'Smart Education', icon: '🎓' },
        { id: AppView.COMMUNITY_FORUM, label: 'Forum Anggota', icon: '💬' },
      ],
    },
    {
      label: 'Ekosistem Bisnis',
      icon: '🛒',
      items: [
        { id: AppView.MEMBER_MARKETPLACE, label: 'Pasar Anggota', icon: '🛍️' },
        { id: AppView.MERCHANT_DASHBOARD, label: 'Dashboard Toko', icon: '🏪' },
        { id: AppView.LOAN_SIMULATOR, label: 'Simulator Pinjaman', icon: '🧮' },
        { id: AppView.LOAN_WORKFLOW, label: 'Alur Pinjaman', icon: '🔄' },
        { id: AppView.MEMBER_QRIS, label: 'QRIS Pembayaran', icon: '🤳' },
        { id: AppView.GLOBAL_SHU_SIMULATION, label: 'Simulasi SHU', icon: '💰' },
      ],
    },
    {
      label: 'Tata Kelola',
      icon: '⚖️',
      items: [
        { id: AppView.AUDIT_TRAIL, label: 'Jejak Audit AI', icon: '🕵️‍♂️' },
        { id: AppView.CAPITAL_SECURITY, label: 'Keamanan Modal', icon: '🛡️' },
        { id: AppView.SECURITY_PROTOCOL, label: 'Protokol Keamanan', icon: '🛡️' },
        { id: AppView.AI_TREASURY, label: 'Manajemen Aset AI', icon: '💎' },
        { id: AppView.CRISIS_SIMULATOR, label: 'Simulasi Krisis', icon: '🆘' },
        { id: AppView.AI_CREDIT_SCORING, label: 'AI Credit Scoring', icon: '🧠' },
        { id: AppView.FRAUD_DETECTION, label: 'Deteksi Fraud', icon: '🛡️' },
        { id: AppView.E_RAT, label: 'e-RAT (Voting)', icon: '🗳️' },
        { id: AppView.VALUATION_TRACKER, label: 'Live Valuation', icon: '📈' },
        { id: AppView.SYSTEM_HEALTH, label: 'Kesehatan Sistem', icon: '🛡️' },
      ],
    },
    {
      label: 'Strategi',
      icon: '🧠',
      items: [
        { id: AppView.PIONEER_MANAGEMENT, label: 'Kelompok Pionir', icon: '🥇' },
        { id: AppView.MARKET_PENETRATION, label: 'Penetrasi Wilayah', icon: '🗺️' },
        { id: AppView.DAILY_OPERATIONS, label: 'Pelaksanaan Harian', icon: '📅' },
        { id: AppView.FIELD_TRANSACTIONS, label: 'Transaksi Lapangan', icon: '🛵' },
        { id: AppView.DUTA_SETTLEMENT, label: 'Setoran Kas Duta', icon: '🏦' },
        { id: AppView.INCLUSION_STRATEGY, label: 'Strategi Inklusi', icon: '🤝' },
        { id: AppView.FOUNDER_PLAYBOOK, label: 'Founder Playbook', icon: '📓' },
        { id: AppView.DUTA_ESTABLISHMENT, label: 'Syarat Duta Wilayah', icon: '🚩' },
        { id: AppView.LEADER_OPERATIONS, label: 'Sistem Kerja Duta', icon: '💼' },
        { id: AppView.LEADER_COMPENSATION, label: 'Simulasi Gaji Duta', icon: '💸' },
        { id: AppView.TECH_PROCESS, label: 'Proses Teknis', icon: '⚡' },
        { id: AppView.PROMOTION_KIT, label: 'Kit Promosi', icon: '🚀' },
        { id: AppView.COMMUNITY_LEADERS, label: 'Peta Duta', icon: '🤝' },
        { id: AppView.TECH_SETUP, label: 'Konfigurasi Teknis', icon: '⚙️' },
        { id: AppView.MILLION_DOLLAR_ROADMAP, label: 'Roadmap $1M', icon: '🗺️' },
      ],
    },
    {
      label: 'Sertifikasi',
      icon: '🏆',
      items: [
        { id: AppView.MEMBERSHIP_CERTIFICATE, label: 'Sertifikat Saham', icon: '📜' },
        { id: AppView.MEMBERSHIP_PROFILE, label: 'Profil Pemilik', icon: '👤' },
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
          const isExpanded = expandedCategories.includes(category.label);
          const hasActiveChild = category.items.some(item => item.id === currentView);

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
                  {category.items.map((item) => (
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
    </div>
  );
};

export default Sidebar;
