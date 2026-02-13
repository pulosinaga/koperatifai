
import React, { useState, useEffect } from 'react';
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
import GlobalCommandCenter from './components/GlobalCommandCenter.tsx';
import DeploymentHub from './components/DeploymentHub.tsx';
import NotificationCenter from './components/NotificationCenter.tsx';
import FounderRoyaltyVault from './components/FounderRoyaltyVault.tsx';
import HierarchyVisualizer from './components/HierarchyVisualizer.tsx';
import MonetizationIdeas from './components/MonetizationIdeas.tsx';
import NationalCommandCenter from './components/NationalCommandCenter.tsx';
import GovSovereigntyVault from './components/GovSovereigntyVault.tsx';
import DutaTaskCenter from './components/DutaTaskCenter.tsx';
import MemberTaskCenter from './components/MemberTaskCenter.tsx';
import DutaPayrollReport from './components/DutaPayrollReport.tsx';
import DutaFieldVerification from './components/DutaFieldVerification.tsx';
import MemberQRIS from './components/MemberQRIS.tsx';
import CoopHealthCheck from './components/CoopHealthCheck.tsx';

// RBAC Permissions Mapping
const VIEW_PERMISSIONS: Record<UserRole, AppView[]> = {
  [UserRole.FOUNDER]: Object.values(AppView),
  [UserRole.LEADER_PROVINCE]: [
    AppView.DASHBOARD, AppView.NATIONAL_COMMAND_CENTER, AppView.HIERARCHY_VISUALIZER, 
    AppView.TRANSACTIONS, AppView.NOTIFICATION_CENTER, AppView.MEMBERSHIP_PROFILE,
    AppView.DUTA_TASK_CENTER, AppView.DUTA_PAYROLL_REPORT, AppView.DUTA_ECHOES
  ],
  [UserRole.GOVERNMENT]: [
    AppView.DASHBOARD, AppView.GOV_SOVEREIGNTY_VAULT, AppView.HIERARCHY_VISUALIZER, AppView.SYSTEM_HEALTH
  ],
  [UserRole.BOARD]: [
    AppView.DASHBOARD, AppView.TRANSACTIONS, AppView.SHU_DISTRIBUTION, AppView.DIGITAL_PASSBOOK,
    AppView.LOAN_SIMULATOR, AppView.VOUCHING_SYSTEM, AppView.MEMBER_MARKETPLACE, AppView.BILL_PAYMENTS,
    AppView.AI_ADVISOR, AppView.MEMBERSHIP_PROFILE, AppView.NOTIFICATION_CENTER, AppView.HIERARCHY_VISUALIZER
  ],
  [UserRole.LEADER]: [
    AppView.DASHBOARD, AppView.TRANSACTIONS, AppView.DIGITAL_PASSBOOK, AppView.LOAN_SIMULATOR,
    AppView.VOUCHING_SYSTEM, AppView.MEMBER_MARKETPLACE, AppView.AI_ADVISOR, AppView.MEMBERSHIP_PROFILE,
    AppView.NOTIFICATION_CENTER, AppView.DUTA_TASK_CENTER, AppView.DUTA_PAYROLL_REPORT, AppView.HIERARCHY_VISUALIZER,
    AppView.CASH_WITHDRAWAL
  ],
  [UserRole.MEMBER]: [
    AppView.DASHBOARD, AppView.TRANSACTIONS, AppView.SHU_DISTRIBUTION, AppView.DIGITAL_PASSBOOK,
    AppView.LOAN_SIMULATOR, AppView.VOUCHING_SYSTEM, AppView.MEMBER_MARKETPLACE, AppView.BILL_PAYMENTS,
    AppView.AI_ADVISOR, AppView.MEMBERSHIP_PROFILE, AppView.MEMBER_TASK_CENTER, AppView.HIERARCHY_VISUALIZER,
    AppView.MEMBER_QRIS, AppView.CASH_WITHDRAWAL
  ],
  [UserRole.STAFF]: [AppView.DASHBOARD, AppView.TRANSACTIONS, AppView.DIGITAL_PASSBOOK, AppView.HIERARCHY_VISUALIZER],
  [UserRole.AUDITOR]: [
    AppView.DASHBOARD, AppView.TRANSACTIONS, AppView.ACCOUNTING, AppView.HIERARCHY_VISUALIZER, 
    AppView.SYSTEM_HEALTH, AppView.GLOBAL_COMMAND_CENTER
  ],
};

const BottomNav: React.FC<{ onMenuToggle: () => void }> = ({ onMenuToggle }) => {
  const { currentView, navigate } = useAppContext();
  
  const navItems = [
    { id: AppView.DASHBOARD, label: 'Home', icon: '📊' },
    { id: AppView.DUTA_TASK_CENTER, label: 'Tugas', icon: '📋' },
    { id: AppView.MEMBER_QRIS, label: 'Kamera', icon: '🤳' },
    { id: AppView.AI_ADVISOR, label: 'Chat AI', icon: '🤖' },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 flex justify-around items-center py-3 pb-6 px-2 z-[40] shadow-[0_-10px_40px_rgba(0,0,0,0.08)]">
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
        </button>
      ))}
      <button
        onClick={onMenuToggle}
        className="flex flex-col items-center gap-1 transition-all flex-1 text-slate-400"
      >
        <span className="text-xl">☰</span>
        <span className="text-[8px] font-black uppercase tracking-widest">Menu</span>
      </button>
    </nav>
  );
};

const AppContent: React.FC = () => {
  const { isLoggedIn, currentView, user } = useAppContext();
  const [showLogin, setShowLogin] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0,0);
  }, [currentView]);

  if (!isLoggedIn) {
    if (showLogin) return <LoginScreen onBack={() => setShowLogin(false)} />;
    return <PublicLanding onStart={() => setShowLogin(true)} />;
  }

  const userRole = user?.role || UserRole.MEMBER;
  const allowedViews = VIEW_PERMISSIONS[userRole] || [AppView.DASHBOARD];
  const isAuthorized = allowedViews.includes(currentView);

  const renderContent = () => {
    if (!isAuthorized) return <Dashboard />;

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
      [AppView.MEMBERSHIP_PROFILE]: userRole === UserRole.LEADER ? <DutaFieldVerification /> : <Membership />,
      [AppView.GLOBAL_COMMAND_CENTER]: userRole === UserRole.AUDITOR ? <CoopHealthCheck /> : <GlobalCommandCenter />,
      [AppView.DEPLOYMENT_HUB]: <DeploymentHub />,
      [AppView.REVENUE_CENTER]: <FounderRoyaltyVault />,
      [AppView.NOTIFICATION_CENTER]: <NotificationCenter />,
      [AppView.HIERARCHY_VISUALIZER]: <HierarchyVisualizer />,
      [AppView.MONETIZATION_IDEAS]: <MonetizationIdeas />,
      [AppView.NATIONAL_COMMAND_CENTER]: <NationalCommandCenter />,
      [AppView.GOV_SOVEREIGNTY_VAULT]: <GovSovereigntyVault />,
      [AppView.DUTA_TASK_CENTER]: userRole === UserRole.MEMBER ? <MemberTaskCenter /> : <DutaTaskCenter />,
      [AppView.MEMBER_TASK_CENTER]: <MemberTaskCenter />,
      [AppView.DUTA_PAYROLL_REPORT]: <DutaPayrollReport />,
      [AppView.MEMBER_QRIS]: <MemberQRIS />
    };

    return views[currentView] || <Dashboard />;
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col lg:flex-row">
      <div className={`
        ${isMobileMenuOpen ? 'fixed inset-0 z-[200] translate-x-0' : 'fixed inset-y-0 -translate-x-full lg:translate-x-0 lg:relative'} 
        lg:block transition-transform duration-300 ease-in-out
      `}>
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm lg:hidden" 
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
        <div className="relative h-full">
          <Sidebar />
        </div>
      </div>

      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-4 md:p-8 pb-32 lg:pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {renderContent()}
            </div>
          </div>
        </main>
        <BottomNav onMenuToggle={() => setIsMobileMenuOpen(true)} />
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
