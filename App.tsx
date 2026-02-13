import React, { useState } from 'react';
import { AppProvider, useAppContext } from './contexts/AppContext.tsx';
import { AppView, UserRole } from './types.ts';

// Layout Components
import Sidebar from './components/Sidebar.tsx';
import Header from './components/Header.tsx';
import LoginScreen from './components/LoginScreen.tsx';
import PublicLanding from './components/PublicLanding.tsx';
import Dashboard from './components/Dashboard.tsx';

// Feature Components
import DigitalPassbook from './components/DigitalPassbook.tsx';
import TransactionHistory from './components/TransactionHistory.tsx';
import SHUDistribution from './components/SHUDistribution.tsx';
import LoanSimulator from './components/LoanSimulator.tsx';
import VouchingSystem from './components/VouchingSystem.tsx';
import CashWithdrawal from './components/CashWithdrawal.tsx';
import MemberMarketplace from './components/MemberMarketplace.tsx';
import MerchantDashboard from './components/MerchantDashboard.tsx';
import BillPayments from './components/BillPayments.tsx';
import SmartEducation from './components/SmartEducation.tsx';
import AIAdvisor from './components/AIAdvisor.tsx';
import Membership from './components/Membership.tsx';
import SmartMobility from './components/SmartMobility.tsx';
import GlobalCommandCenter from './components/GlobalCommandCenter.tsx';
import DeploymentHub from './components/DeploymentHub.tsx';
import NotificationCenter from './components/NotificationCenter.tsx';
import FounderRoyaltyVault from './components/FounderRoyaltyVault.tsx';
import TaxComplianceEngine from './components/TaxComplianceEngine.tsx';
import ArisanDigital from './components/ArisanDigital.tsx';
import AssetAuction from './components/AssetAuction.tsx';
import WalletIntegration from './components/WalletIntegration.tsx';
import MemberInstallmentPayment from './components/MemberInstallmentPayment.tsx';
import HallOfEchoes from './components/HallOfEchoes.tsx';
import AwardingNight from './components/AwardingNight.tsx';
import NationalScaleStrategy from './components/NationalScaleStrategy.tsx';
import HierarchyVisualizer from './components/HierarchyVisualizer.tsx';

const BottomNav: React.FC = () => {
  const { currentView, navigate } = useAppContext();
  
  const navItems = [
    { id: AppView.DASHBOARD, label: 'Home', icon: '📊' },
    { id: AppView.DIGITAL_PASSBOOK, label: 'Buku', icon: '📖' },
    { id: AppView.WALLET_INTEGRATION, label: 'Toko', icon: '🛒' },
    { id: AppView.AI_ADVISOR, label: 'AI', icon: '🤖' },
    { id: AppView.MEMBERSHIP_PROFILE, label: 'Profil', icon: '👤' }
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 flex justify-around items-center py-3 pb-6 px-2 z-[100] shadow-[0_-10px_40px_rgba(0,0,0,0.08)]">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => navigate(item.id as AppView)}
          className={`flex flex-col items-center gap-1 transition-all flex-1 ${
            currentView === item.id ? 'text-indigo-600 scale-110' : 'text-slate-400'
          }`}
        >
          <span className="text-xl">{item.icon}</span>
          <span className="text-[8px] font-black uppercase tracking-widest">{item.label}</span>
          {currentView === item.id && <div className="w-1 h-1 bg-indigo-600 rounded-full mt-0.5"></div>}
        </button>
      ))}
    </nav>
  );
};

const AppContent: React.FC = () => {
  const { isLoggedIn, currentView } = useAppContext();
  const [showLogin, setShowLogin] = useState(false);

  if (!isLoggedIn) {
    if (showLogin) return <LoginScreen onBack={() => setShowLogin(false)} />;
    return <PublicLanding onStart={() => setShowLogin(true)} />;
  }

  const renderContent = () => {
    const views: Record<string, React.ReactNode> = {
      [AppView.DASHBOARD]: <Dashboard />,
      [AppView.TRANSACTIONS]: <TransactionHistory />,
      [AppView.CASH_WITHDRAWAL]: <CashWithdrawal />,
      [AppView.SHU_DISTRIBUTION]: <SHUDistribution />,
      [AppView.DIGITAL_PASSBOOK]: <DigitalPassbook />,
      [AppView.LOAN_SIMULATOR]: <LoanSimulator />,
      [AppView.VOUCHING_SYSTEM]: <VouchingSystem />,
      [AppView.MEMBER_MARKETPLACE]: <MemberMarketplace />,
      [AppView.MERCHANT_DASHBOARD]: <MerchantDashboard />,
      [AppView.BILL_PAYMENTS]: <BillPayments />,
      [AppView.SMART_EDUCATION]: <SmartEducation />,
      [AppView.AI_ADVISOR]: <AIAdvisor />,
      [AppView.MEMBERSHIP_PROFILE]: <Membership />,
      [AppView.GLOBAL_COMMAND_CENTER]: <GlobalCommandCenter />,
      [AppView.DEPLOYMENT_HUB]: <DeploymentHub />,
      [AppView.REVENUE_CENTER]: <FounderRoyaltyVault />,
      [AppView.REVENUE_CENTER_TAX]: <TaxComplianceEngine />,
      [AppView.STRATEGIC_PROFIT_CALCULATOR]: <NationalScaleStrategy />,
      [AppView.SYSTEM_HEALTH]: <HierarchyVisualizer />, // Menggunakan view ini untuk visualisasi hirarki
      [AppView.SMART_MOBILITY]: <SmartMobility />,
      [AppView.ARISAN_DIGITAL]: <ArisanDigital />,
      [AppView.ASSET_AUCTION]: <AssetAuction />,
      [AppView.WALLET_INTEGRATION]: <WalletIntegration />,
      [AppView.NOTIFICATION_CENTER]: <NotificationCenter />,
      [AppView.MEMBER_INSTALLMENT_PAYMENT]: <MemberInstallmentPayment />,
      [AppView.DUTA_ECHOES]: <HallOfEchoes />,
      [AppView.DUTA_AWARDING]: <AwardingNight />
    };

    return views[currentView] || <Dashboard />;
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 flex flex-col relative">
        <Header />
        {/* Main content area dengan padding bawah untuk bottom nav mobile */}
        <main className="flex-1 p-4 md:p-8 pb-28 lg:pb-8 overflow-x-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {renderContent()}
            </div>
          </div>
        </main>
        <BottomNav />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
      </div>
      <AppContent />
    </AppProvider>
  );
};

export default App;