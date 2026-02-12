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
import DutaManagementCenter from './components/DutaManagementCenter.tsx';
import CoopHealthCheck from './components/CoopHealthCheck.tsx';
import StaffDashboard from './components/StaffDashboard.tsx';
import TerritoryMap from './components/TerritoryMap.tsx';
import DutaRecruitment from './components/DutaRecruitment.tsx';
import TerritoryCommand from './components/TerritoryCommand.tsx';
import DutaSOP from './components/DutaSOP.tsx';
import MemberAttraction from './components/MemberAttraction.tsx';
import PromotionKit from './components/PromotionKit.tsx';
import OfficialAssignmentLetter from './components/OfficialAssignmentLetter.tsx';
import VillageSovereigntyHub from './components/VillageSovereigntyHub.tsx';
import VillageSocialBudget from './components/VillageSocialBudget.tsx';
import ServiceJourneyGuide from './components/ServiceJourneyGuide.tsx';
import MemberBenefitSimulator from './components/MemberBenefitSimulator.tsx';
import GovPasarRakyatBridge from './components/GovPasarRakyatBridge.tsx';
import GovTenantDashboard from './components/GovTenantDashboard.tsx';
import GovTenantManagement from './components/GovTenantManagement.tsx';
import GovProposalGenerator from './components/GovProposalGenerator.tsx';
import DutaMemberActivation from './components/DutaMemberActivation.tsx';
import MemberActivationWizard from './components/MemberActivationWizard.tsx';
import DutaEducationKit from './components/DutaEducationKit.tsx';
import MemberSovereigntyGuide from './components/MemberSovereigntyGuide.tsx';
import MemberEarningHub from './components/MemberEarningHub.tsx';
import MemberTrustVault from './components/MemberTrustVault.tsx';
import MemberInstallmentPayment from './components/MemberInstallmentPayment.tsx';
import DutaLeaderboard from './components/DutaLeaderboard.tsx';
import DutaBadges from './components/DutaBadges.tsx';
import AwardingNight from './components/AwardingNight.tsx';
import HallOfEchoes from './components/HallOfEchoes.tsx';
import EconomicResiliency from './components/EconomicResiliency.tsx';
import AppDistribution from './components/AppDistribution.tsx';
import SecurityProtocol from './components/SecurityProtocol.tsx';
import NotificationCenter from './components/NotificationCenter.tsx';
import FounderRoyaltyVault from './components/FounderRoyaltyVault.tsx';
import TaxComplianceEngine from './components/TaxComplianceEngine.tsx';

const BottomNav: React.FC = () => {
  const { currentView, navigate, goBack, user } = useAppContext();
  const role = user?.role || UserRole.MEMBER;
  const isDashboard = currentView === AppView.DASHBOARD;
  
  const navItems = [
    { id: AppView.DASHBOARD, label: 'Home', icon: '📊' },
    { id: AppView.DIGITAL_PASSBOOK, label: 'Buku', icon: '📖' },
  ];

  if (role === UserRole.LEADER) {
    navItems.push({ id: AppView.DUTA_EDUCATION_KIT, label: 'Edukasi', icon: '📢' });
  } else if (role === UserRole.GOVERNMENT) {
    navItems.push({ id: AppView.GOV_TENANT_DASHBOARD, label: 'Monitor', icon: '🇮🇩' });
  } else if (role === UserRole.FOUNDER) {
    navItems.push({ id: AppView.REVENUE_CENTER, label: 'Royalty', icon: '💎' });
  } else {
    navItems.push({ id: AppView.NOTIFICATION_CENTER, label: 'Amanah', icon: '🔔' });
  }

  navItems.push({ id: AppView.AI_ADVISOR, label: 'AI', icon: '🤖' });
  navItems.push({ id: AppView.MEMBERSHIP_PROFILE, label: 'Profil', icon: '👤' });

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
      
      {!isDashboard && (
        <button
          onClick={goBack}
          className="flex flex-col items-center gap-1 transition-all flex-1 text-rose-500 active:scale-90"
        >
          <span className="text-xl">↩️</span>
          <span className="text-[8px] font-black uppercase tracking-widest">Balik</span>
        </button>
      )}
    </nav>
  );
};

const AppContent: React.FC = () => {
  const { isLoggedIn, currentView, user } = useAppContext();
  const [showLogin, setShowLogin] = useState(false);

  if (!isLoggedIn) {
    if (showLogin) return <LoginScreen onBack={() => setShowLogin(false)} />;
    return <PublicLanding onStart={() => setShowLogin(true)} />;
  }

  const renderContent = () => {
    if (currentView === AppView.DASHBOARD && user?.role === UserRole.STAFF) {
      return <StaffDashboard />;
    }

    const views: Record<string, React.ReactNode> = {
      [AppView.DASHBOARD]: <Dashboard />,
      [AppView.TRANSACTIONS]: user?.role === UserRole.STAFF ? <StaffDashboard /> : <TransactionHistory />,
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
      [AppView.REVENUE_CENTER_TAX as any]: <TaxComplianceEngine />,
      [AppView.SYSTEM_HEALTH]: <CoopHealthCheck />,
      [AppView.SMART_MOBILITY]: <SmartMobility />,
      [AppView.DUTA_RECRUITMENT]: <DutaRecruitment />,
      [AppView.TERRITORY_MAP]: <TerritoryMap />,
      [AppView.TERRITORY_COMMAND]: <TerritoryCommand />,
      [AppView.DUTA_SOP]: <DutaSOP />,
      [AppView.MEMBER_ATTRACTION]: <MemberAttraction />,
      [AppView.PROMOTION_KIT]: <PromotionKit />,
      [AppView.OFFICIAL_ASSIGNMENT]: <OfficialAssignmentLetter />,
      [AppView.VILLAGE_SOVEREIGNTY_HUB]: <VillageSovereigntyHub />,
      [AppView.VILLAGE_SOCIAL_BUDGET]: <VillageSocialBudget />,
      [AppView.SERVICE_JOURNEY_GUIDE]: <ServiceJourneyGuide />,
      [AppView.MEMBER_BENEFIT_SIMULATOR]: <MemberBenefitSimulator />,
      [AppView.GOV_PASAR_RAKYAT_BRIDGE]: <GovPasarRakyatBridge />,
      [AppView.GOV_TENANT_DASHBOARD]: <GovTenantDashboard />,
      [AppView.GOV_TENANT_MANAGEMENT]: <GovTenantManagement />,
      [AppView.GOV_PROPOSAL_GENERATOR]: <GovProposalGenerator />,
      [AppView.DUTA_MEMBER_ACTIVATION]: <DutaMemberActivation />,
      [AppView.MEMBER_ACTIVATION_WIZARD]: <MemberActivationWizard />,
      [AppView.DUTA_EDUCATION_KIT]: <DutaEducationKit />,
      [AppView.MEMBER_SOVEREIGNTY_GUIDE]: <MemberSovereigntyGuide />,
      [AppView.MEMBER_EARNING_HUB]: <MemberEarningHub />,
      [AppView.MEMBER_TRUST_VAULT]: <MemberTrustVault />,
      [AppView.MEMBER_INSTALLMENT_PAYMENT]: <MemberInstallmentPayment />,
      [AppView.DUTA_LEADERBOARD]: <DutaLeaderboard />,
      [AppView.DUTA_BADGES]: <DutaBadges />,
      [AppView.DUTA_AWARDING]: <AwardingNight />,
      [AppView.DUTA_ECHOES]: <HallOfEchoes />,
      [AppView.ECONOMIC_RESILIENCY]: <EconomicResiliency />,
      [AppView.APP_DISTRIBUTION]: <AppDistribution />,
      [AppView.SECURITY_PROTOCOL]: <SecurityProtocol />,
      [AppView.NOTIFICATION_CENTER]: <NotificationCenter />
    };

    return views[currentView] || <Dashboard />;
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col lg:flex-row overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar pb-28 lg:pb-8">
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