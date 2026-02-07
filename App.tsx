
import React, { useState, useEffect } from 'react';
import { AppView, UserRole } from './types.ts';
import Sidebar from './components/Sidebar.tsx';
import Dashboard from './components/Dashboard.tsx';
import LoginScreen from './components/LoginScreen.tsx';
import Header from './components/Header.tsx';
import TransactionHistory from './components/TransactionHistory.tsx';
import LoanSimulator from './components/LoanSimulator.tsx';
import LoanHistory from './components/LoanHistory.tsx';
import AIAdvisor from './components/AIAdvisor.tsx';
import Membership from './components/Membership.tsx';
import { supabase } from './services/supabaseClient.ts';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentRole, setCurrentRole] = useState<UserRole | null>(null);
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [isDbConnected, setIsDbConnected] = useState(false);
  const [viewHistory, setViewHistory] = useState<AppView[]>([]);

  // Periksa koneksi Supabase saat startup
  useEffect(() => {
    const checkConn = async () => {
      try {
        const { data, error } = await supabase.from('profiles').select('count', { count: 'exact', head: true });
        if (!error) setIsDbConnected(true);
      } catch (e) {
        console.warn("Supabase not configured yet. Running in offline/mock mode.");
      }
    };
    checkConn();
  }, []);

  const handleLogin = (role: UserRole) => {
    setCurrentRole(role);
    setIsLoggedIn(true);
    setCurrentView(AppView.DASHBOARD);
  };

  const handleLogout = () => {
    if (confirm("Keluar dari sistem aman KoperatifAI?")) {
      setIsLoggedIn(false);
      setCurrentRole(null);
      setCurrentView(AppView.DASHBOARD);
    }
  };

  const handleSetView = (newView: AppView) => {
    if (newView !== currentView) {
      setViewHistory(prev => [...prev, currentView]);
      setCurrentView(newView);
    }
  };

  const handleBack = () => {
    if (viewHistory.length > 0) {
      const prevView = viewHistory[viewHistory.length - 1];
      setViewHistory(prev => prev.slice(0, -1));
      setCurrentView(prevView);
    }
  };

  const renderContent = () => {
    if (!isLoggedIn) return <LoginScreen onLogin={handleLogin} />;

    switch (currentView) {
      case AppView.DASHBOARD: return <Dashboard setView={handleSetView} role={currentRole!} />;
      case AppView.TRANSACTIONS: return <TransactionHistory />;
      case AppView.LOAN_SIMULATOR: return <LoanSimulator />;
      case AppView.LOAN_HISTORY: return <LoanHistory />;
      case AppView.AI_ADVISOR: return <AIAdvisor />;
      case AppView.MEMBERSHIP_PROFILE: return <Membership />;
      default: return <Dashboard setView={handleSetView} role={currentRole!} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row overflow-hidden font-sans">
      {isLoggedIn && currentRole && (
        <Sidebar currentView={currentView} setView={handleSetView} role={currentRole} onLogout={handleLogout} />
      )}
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {isLoggedIn && currentRole && (
          <div className="relative">
            <Header 
              currentView={currentView} 
              onBack={handleBack} 
              role={currentRole} 
              onLogout={handleLogout} 
            />
            {/* Database Sync Badge */}
            <div className="absolute top-full right-8 mt-2">
               <div className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border flex items-center gap-1.5 shadow-sm transition-all ${
                 isDbConnected ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 'bg-amber-50 border-amber-100 text-amber-600'
               }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isDbConnected ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></span>
                  {isDbConnected ? 'Supabase Synced' : 'Offline Mode (Local)'}
               </div>
            </div>
          </div>
        )}
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto h-full">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
