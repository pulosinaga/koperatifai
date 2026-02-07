
import React, { useState } from 'react';
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
import MembershipCertificate from './components/MembershipCertificate.tsx';
import SystemHealth from './components/SystemHealth.tsx';
import AccountingReports from './components/AccountingReports.tsx';
import SHUDistribution from './components/SHUDistribution.tsx';
import ArisanDigital from './components/ArisanDigital.tsx';
import MemberMarketplace from './components/MemberMarketplace.tsx';
import MerchantDashboard from './components/MerchantDashboard.tsx';
import MemberQRIS from './components/MemberQRIS.tsx';
import SmartProcurement from './components/SmartProcurement.tsx';
import BillPayments from './components/BillPayments.tsx';
import VouchingSystem from './components/VouchingSystem.tsx';
import DigitalPassbook from './components/DigitalPassbook.tsx';
import LoanReadiness from './components/LoanReadiness.tsx';
import GlobalCommandCenter from './components/GlobalCommandCenter.tsx';
import StrategicProfitCalculator from './components/StrategicProfitCalculator.tsx';
import EcosystemRevenue from './components/EcosystemRevenue.tsx';
import DeploymentHub from './components/DeploymentHub.tsx';
import MemberHealthShield from './components/MemberHealthShield.tsx';
import PersonalGoldSavings from './components/PersonalGoldSavings.tsx';
import PensionFund from './components/PensionFund.tsx';
import DaskopClaim from './components/DaskopClaim.tsx';
import AICreditCommittee from './components/AICreditCommittee.tsx';
import SmartEducation from './components/SmartEducation.tsx';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentRole, setCurrentRole] = useState<UserRole | null>(null);
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [viewHistory, setViewHistory] = useState<AppView[]>([]);

  const handleLogin = (role: UserRole) => {
    setCurrentRole(role);
    setIsLoggedIn(true);
    setCurrentView(AppView.DASHBOARD);
    setViewHistory([]);
  };

  const handleLogout = () => {
    if (confirm("Apakah Anda yakin ingin keluar dari sistem aman KoperatifAI?")) {
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
    } else {
      setCurrentView(AppView.DASHBOARD);
    }
  };

  const renderContent = () => {
    if (!isLoggedIn) return <LoginScreen onLogin={handleLogin} />;

    switch (currentView) {
      case AppView.DASHBOARD: return <Dashboard setView={handleSetView} role={currentRole!} />;
      case AppView.TRANSACTIONS: return <TransactionHistory />;
      case AppView.SHU_DISTRIBUTION: return <SHUDistribution />;
      case AppView.DIGITAL_PASSBOOK: return <DigitalPassbook />;
      
      // Layanan Kredit
      case AppView.LOAN_SIMULATOR: return <LoanSimulator />;
      case AppView.VOUCHING_SYSTEM: return <VouchingSystem />;
      case AppView.LOAN_HISTORY: return <LoanHistory />;
      case AppView.LOAN_READINESS: return <LoanReadiness />;
      case AppView.AI_CREDIT_COMMITTEE: return <AICreditCommittee />;

      // Ekonomi Aktif
      case AppView.MEMBER_MARKETPLACE: return <MemberMarketplace />;
      case AppView.MERCHANT_DASHBOARD: return <MerchantDashboard />;
      case AppView.ARISAN_DIGITAL: return <ArisanDigital />;
      case AppView.SMART_PROCUREMENT: return <SmartProcurement />;
      case AppView.BILL_PAYMENTS: return <BillPayments />;
      case AppView.MEMBER_QRIS: return <MemberQRIS />;

      // Proteksi & Masa Depan
      case AppView.MEMBER_HEALTH_SHIELD: return <MemberHealthShield />;
      case AppView.PERSONAL_GOLD: return <PersonalGoldSavings />;
      case AppView.PENSION_FUND: return <PensionFund />;
      case AppView.DASKOP_CLAIM: return <DaskopClaim />;

      // Edukasi & Profil
      case AppView.SMART_EDUCATION: return <SmartEducation />;
      case AppView.AI_ADVISOR: return <AIAdvisor />;
      case AppView.MEMBERSHIP_PROFILE: return <Membership />;
      case AppView.MEMBERSHIP_CERTIFICATE: return <MembershipCertificate />;

      // Founder Views
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
          <Header 
            currentView={currentView} 
            onBack={handleBack} 
            role={currentRole} 
            onLogout={handleLogout} 
          />
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
