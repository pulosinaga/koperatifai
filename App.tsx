
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
import AICollateral from './components/AICollateral.tsx';

// Ekonomi & Niaga
import MemberMarketplace from './components/MemberMarketplace.tsx';
import MerchantDashboard from './components/MerchantDashboard.tsx';
import MemberQRIS from './components/MemberQRIS.tsx';
import SmartProcurement from './components/SmartProcurement.tsx';
import BillPayments from './components/BillPayments.tsx';
import ArisanDigital from './components/ArisanDigital.tsx';
import CourierDashboard from './components/CourierDashboard.tsx';

// Proteksi & Masa Depan
import MemberHealthShield from './components/MemberHealthShield.tsx';
import PersonalGoldSavings from './components/PersonalGoldSavings.tsx';
import PensionFund from './components/PensionFund.tsx';
import DaskopClaim from './components/DaskopClaim.tsx';
import SmartEducation from './components/SmartEducation.tsx';
import AIAdvisor from './components/AIAdvisor.tsx';
import Membership from './components/Membership.tsx';
import SpiritualJourneys from './components/SpiritualJourneys.tsx';
import CooperativeHousing from './components/CooperativeHousing.tsx';

// Founder Control
import GlobalCommandCenter from './components/GlobalCommandCenter.tsx';
import StrategicProfitCalculator from './components/StrategicProfitCalculator.tsx';
import EcosystemRevenue from './components/EcosystemRevenue.tsx';
import SystemHealth from './components/SystemHealth.tsx';
import DeploymentHub from './components/DeploymentHub.tsx';
import DutaManagementCenter from './components/DutaManagementCenter.tsx';
import CrisisSimulator from './components/CrisisSimulator.tsx';

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
    if (confirm("Keluar dari KoperatifAI?")) {
      setIsLoggedIn(false);
      setCurrentRole(null);
      setCurrentView(AppView.DASHBOARD);
      setViewHistory([]);
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

    const viewMap: Record<string, React.ReactNode> = {
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
      <div className="page-transition h-full">
        {viewMap[currentView] || <Dashboard setView={handleSetView} role={currentRole!} />}
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
          <>
            <Header currentView={currentView} onBack={handleBack} role={currentRole} onLogout={handleLogout} />
            <div className="absolute top-20 right-8 z-30 pointer-events-none">
               <div className={`flex items-center gap-2 px-3 py-1 rounded-full border bg-white/80 backdrop-blur-md shadow-sm transition-all duration-700 ${
                 dbStatus === 'SYNCED' ? 'border-emerald-100 text-emerald-600' : 'border-amber-100 text-amber-600'
               }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${dbStatus === 'SYNCED' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></span>
                  <span className="text-[9px] font-black uppercase tracking-widest">
                    {dbStatus === 'SYNCED' ? 'Supabase Cloud' : 'Local Persistence'}
                  </span>
               </div>
            </div>
          </>
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
