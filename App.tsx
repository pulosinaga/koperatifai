
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
import SHUDistribution from './components/SHUDistribution.tsx';
import DigitalPassbook from './components/DigitalPassbook.tsx';
import VouchingSystem from './components/VouchingSystem.tsx';
import LoanReadiness from './components/LoanReadiness.tsx';
import AICreditCommittee from './components/AICreditCommittee.tsx';
import MemberMarketplace from './components/MemberMarketplace.tsx';
import MerchantDashboard from './components/MerchantDashboard.tsx';
import ArisanDigital from './components/ArisanDigital.tsx';
import SmartProcurement from './components/SmartProcurement.tsx';
import BillPayments from './components/BillPayments.tsx';
import MemberQRIS from './components/MemberQRIS.tsx';
import MemberHealthShield from './components/MemberHealthShield.tsx';
import PersonalGoldSavings from './components/PersonalGoldSavings.tsx';
import PensionFund from './components/PensionFund.tsx';
import DaskopClaim from './components/DaskopClaim.tsx';
import SmartEducation from './components/SmartEducation.tsx';
import GlobalCommandCenter from './components/GlobalCommandCenter.tsx';
import StrategicProfitCalculator from './components/StrategicProfitCalculator.tsx';
import EcosystemRevenue from './components/EcosystemRevenue.tsx';
import DeploymentHub from './components/DeploymentHub.tsx';
import SystemHealth from './components/SystemHealth.tsx';
import AccountingReports from './components/AccountingReports.tsx';
import { supabase } from './services/supabaseClient.ts';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentRole, setCurrentRole] = useState<UserRole | null>(null);
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [dbStatus, setDbStatus] = useState<'CONNECTING' | 'SYNCED' | 'OFFLINE'>('CONNECTING');
  const [viewHistory, setViewHistory] = useState<AppView[]>([]);

  useEffect(() => {
    const checkConn = async () => {
      if (!supabase) { setDbStatus('OFFLINE'); return; }
      try {
        const { error } = await supabase.from('profiles').select('id', { count: 'exact', head: true });
        setDbStatus(error ? 'OFFLINE' : 'SYNCED');
      } catch (e) { setDbStatus('OFFLINE'); }
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
      case AppView.SHU_DISTRIBUTION: return <SHUDistribution />;
      case AppView.DIGITAL_PASSBOOK: return <DigitalPassbook />;
      case AppView.LOAN_SIMULATOR: return <LoanSimulator />;
      case AppView.VOUCHING_SYSTEM: return <VouchingSystem />;
      case AppView.LOAN_HISTORY: return <LoanHistory />;
      case AppView.LOAN_READINESS: return <LoanReadiness />;
      case AppView.AI_CREDIT_COMMITTEE: return <AICreditCommittee />;
      case AppView.MEMBER_MARKETPLACE: return <MemberMarketplace />;
      case AppView.MERCHANT_DASHBOARD: return <MerchantDashboard />;
      case AppView.ARISAN_DIGITAL: return <ArisanDigital />;
      case AppView.SMART_PROCUREMENT: return <SmartProcurement />;
      case AppView.BILL_PAYMENTS: return <BillPayments />;
      case AppView.MEMBER_QRIS: return <MemberQRIS />;
      case AppView.MEMBER_HEALTH_SHIELD: return <MemberHealthShield />;
      case AppView.PERSONAL_GOLD: return <PersonalGoldSavings />;
      case AppView.PENSION_FUND: return <PensionFund />;
      case AppView.DASKOP_CLAIM: return <DaskopClaim />;
      case AppView.SMART_EDUCATION: return <SmartEducation />;
      case AppView.AI_ADVISOR: return <AIAdvisor />;
      case AppView.MEMBERSHIP_PROFILE: return <Membership />;
      case AppView.GLOBAL_COMMAND_CENTER: return <GlobalCommandCenter />;
      case AppView.STRATEGIC_PROFIT_CALCULATOR: return <StrategicProfitCalculator />;
      case AppView.ECOSYSTEM_REVENUE: return <EcosystemRevenue />;
      case AppView.DEPLOYMENT_HUB: return <DeploymentHub />;
      case AppView.SYSTEM_HEALTH: return <SystemHealth />;
      case AppView.ACCOUNTING: return <AccountingReports />;
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
            <Header currentView={currentView} onBack={handleBack} role={currentRole} onLogout={handleLogout} />
            <div className="absolute top-full right-8 mt-2 z-50">
               <div className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border flex items-center gap-1.5 shadow-sm transition-all ${
                 dbStatus === 'SYNCED' ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 
                 dbStatus === 'CONNECTING' ? 'bg-indigo-50 border-indigo-100 text-indigo-600' : 'bg-amber-50 border-amber-100 text-amber-600'
               }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${dbStatus === 'SYNCED' ? 'bg-emerald-500' : dbStatus === 'CONNECTING' ? 'bg-indigo-500 animate-spin' : 'bg-amber-500 animate-pulse'}`}></span>
                  {dbStatus === 'SYNCED' ? 'Supabase Synced' : dbStatus === 'CONNECTING' ? 'Connecting DB...' : 'Offline Mode (Local)'}
               </div>
            </div>
          </div>
        )}
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto h-full">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
