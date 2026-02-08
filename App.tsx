
import React, { useState, useEffect } from 'react';
import { AppView, UserRole } from './types.ts';
import { supabase } from './services/supabaseClient.ts';

// Navigasi & Frame
import Sidebar from './components/Sidebar.tsx';
import Header from './components/Header.tsx';
import Dashboard from './components/Dashboard.tsx';
import LoginScreen from './components/LoginScreen.tsx';

// Finansial & Kredit
import TransactionHistory from './components/TransactionHistory.tsx';
import DigitalPassbook from './components/DigitalPassbook.tsx';
import SHUDistribution from './components/SHUDistribution.tsx';
import LoanSimulator from './components/LoanSimulator.tsx';
import VouchingSystem from './components/VouchingSystem.tsx';
import LoanHistory from './components/LoanHistory.tsx';
import LoanReadiness from './components/LoanReadiness.tsx';
import AICreditCommittee from './components/AICreditCommittee.tsx';

// Ekonomi & Niaga
import MemberMarketplace from './components/MemberMarketplace.tsx';
import MerchantDashboard from './components/MerchantDashboard.tsx';
import MemberQRIS from './components/MemberQRIS.tsx';
import SmartProcurement from './components/SmartProcurement.tsx';
import ArisanDigital from './components/ArisanDigital.tsx';
import BillPayments from './components/BillPayments.tsx';

// Proteksi & Masa Depan
import MemberHealthShield from './components/MemberHealthShield.tsx';
import PersonalGoldSavings from './components/PersonalGoldSavings.tsx';
import PensionFund from './components/PensionFund.tsx';
import DaskopClaim from './components/DaskopClaim.tsx';
import SmartEducation from './components/SmartEducation.tsx';
import AIAdvisor from './components/AIAdvisor.tsx';
import Membership from './components/Membership.tsx';

// Founder Control
import GlobalCommandCenter from './components/GlobalCommandCenter.tsx';
import StrategicProfitCalculator from './components/StrategicProfitCalculator.tsx';
import EcosystemRevenue from './components/EcosystemRevenue.tsx';
import SystemHealth from './components/SystemHealth.tsx';
import DeploymentHub from './components/DeploymentHub.tsx';
import DutaManagementCenter from './components/DutaManagementCenter.tsx';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentRole, setCurrentRole] = useState<UserRole | null>(null);
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [viewHistory, setViewHistory] = useState<AppView[]>([]);

  const handleLogin = (role: UserRole) => {
    setCurrentRole(role);
    setIsLoggedIn(true);
    setCurrentView(AppView.DASHBOARD);
  };

  const handleLogout = () => {
    if (confirm("Keluar dari KoperatifAI? Sesi Anda akan diakhiri demi keamanan.")) {
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

    const contentMap: Record<string, React.ReactNode> = {
      [AppView.DASHBOARD]: <Dashboard setView={handleSetView} role={currentRole!} />,
      [AppView.TRANSACTIONS]: <TransactionHistory />,
      [AppView.SHU_DISTRIBUTION]: <SHUDistribution />,
      [AppView.DIGITAL_PASSBOOK]: <DigitalPassbook />,
      [AppView.LOAN_SIMULATOR]: <LoanSimulator />,
      [AppView.VOUCHING_SYSTEM]: <VouchingSystem />,
      [AppView.LOAN_HISTORY]: <LoanHistory />,
      [AppView.LOAN_READINESS]: <LoanReadiness />,
      [AppView.AI_CREDIT_COMMITTEE]: <AICreditCommittee />,
      [AppView.MEMBER_MARKETPLACE]: <MemberMarketplace />,
      [AppView.MERCHANT_DASHBOARD]: <MerchantDashboard />,
      [AppView.BILL_PAYMENTS]: <BillPayments />,
      [AppView.MEMBER_QRIS]: <MemberQRIS />,
      [AppView.SMART_PROCUREMENT]: <SmartProcurement />,
      [AppView.ARISAN_DIGITAL]: <ArisanDigital />,
      [AppView.MEMBER_HEALTH_SHIELD]: <MemberHealthShield />,
      [AppView.PERSONAL_GOLD]: <PersonalGoldSavings />,
      [AppView.PENSION_FUND]: <PensionFund />,
      [AppView.DASKOP_CLAIM]: <DaskopClaim />,
      [AppView.SMART_EDUCATION]: <SmartEducation />,
      [AppView.AI_ADVISOR]: <AIAdvisor />,
      [AppView.MEMBERSHIP_PROFILE]: <Membership />,
      [AppView.GLOBAL_COMMAND_CENTER]: <GlobalCommandCenter />,
      [AppView.STRATEGIC_PROFIT_CALCULATOR]: <StrategicProfitCalculator />,
      [AppView.ECOSYSTEM_REVENUE]: <EcosystemRevenue />,
      [AppView.SYSTEM_HEALTH]: <SystemHealth />,
      [AppView.DEPLOYMENT_HUB]: <DeploymentHub />,
      [AppView.REVENUE_CENTER]: <DutaManagementCenter />
    };

    return (
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 h-full">
        {contentMap[currentView] || <Dashboard setView={handleSetView} role={currentRole!} />}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col lg:flex-row overflow-hidden select-none">
      {isLoggedIn && currentRole && (
        <Sidebar currentView={currentView} setView={handleSetView} role={currentRole} onLogout={handleLogout} />
      )}
      
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {isLoggedIn && currentRole && (
          <Header currentView={currentView} onBack={handleBack} role={currentRole} onLogout={handleLogout} />
        )}
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto h-full pb-10">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
